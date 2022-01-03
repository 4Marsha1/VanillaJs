class TypeWritter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const currInd = this.wordIndex % this.words.length;
        const fulltxt = this.words[currInd];

        if (this.isDeleting) {
            this.txt = fulltxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fulltxt.substring(0, this.txt.length + 1);
        }
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

        let typeSpeed = 300;
        if (this.isDeleting) {
            typeSpeed /= 2;

        }
        if (!this.isDeleting && this.txt === fulltxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;

        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed)
    }
}

const init = () => {
    const txtElement = document.getElementById('text');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    new TypeWritter(txtElement, words, wait);
}

document.addEventListener('DOMContentLoaded', init);

