var itemList = document.querySelector('.items');
var form = document.getElementById('form');

// Submit Event 
const addItem = (e) => {
    e.preventDefault();

    var textInput = document.getElementById('text-input').value;
    var newItem = document.createElement('li');
    newItem.className = 'item';
    newItem.appendChild(document.createTextNode(textInput));

    var newBtn = document.createElement('button');
    newBtn.className = 'delete-btn';
    newBtn.appendChild(document.createTextNode('X'));
    newItem.appendChild(newBtn);

    itemList.appendChild(newItem);
}
form.addEventListener('submit', addItem);


// Delete Item
const deleteItem = e => {
    e.preventDefault();
    if (e.target.classList.contains('delete-btn')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
itemList.addEventListener('click', deleteItem);


// Filter Items
var searchInput = document.querySelector('.search');
const filterItems = (e) => {
    e.preventDefault();
    var text = e.target.value.toLowerCase();
    var items = document.getElementsByTagName('li');
    Array.from(items).forEach((item) => {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'flex';
        }
        else {
            item.style.display = 'none';
        }
    })
}
searchInput.addEventListener('keyup', filterItems);
