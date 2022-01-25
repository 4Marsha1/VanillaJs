const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// drag funtions
function dragStart() {
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0)
}
function dragEnd() {
    this.className = 'fill'
}
// Drag event listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);


// drop functions
function dragOver(e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered'
}
function dragLeave() {
    this.className = 'empty'
}
function dragDrop() {
    this.className = 'empty';
    this.append(fill)
}

// drop event listeners
for (let empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}