var form = document.getElementById('formsearch');
var itemList = document.querySelectorAll('.item');

const search = (e) => {
    e.preventDefault();
    itemList.forEach(item => {
        if (item.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    });
}

form.addEventListener('keyup', (e) => {
    search(e);
});