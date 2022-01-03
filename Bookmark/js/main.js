// Form Validation
const validation = (name, url) => {
    if (!url || !name) {
        alert('Please fill in the form!');
        return false;
    }

    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (!url.match(regex)) {
        alert('Please use a valid URL!');
        return false;
    }
    return true;
}

// Add Bookmark to List
const addBookmark = (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let url = document.getElementById('url').value;

    if (!validation(name, url)) {
        return false;
    }

    let bookmark = {
        siteName: name,
        siteUrl: url
    }
    if (localStorage.getItem('bookmarks') === null) {
        let bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    document.querySelector('.myForm').reset();
    fetchBookmarks();
}

// Delete Bookmark from list
const deleteBookmark = (URL) => {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    for (var i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].siteUrl == URL) {
            bookmarks.splice(i, 1);
        }
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    fetchBookmarks();
}

// Fetch Bookmarks from localStorage
const fetchBookmarks = () => {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    let output = document.getElementById('output');
    output.innerHTML = '';
    for (var i = 0; i < bookmarks.length; i++) {
        let name = bookmarks[i].siteName;
        let url = bookmarks[i].siteUrl;
        output.innerHTML += '<div class="Card">' +
            '<span class="name">' + name + '</span>' +
            '<a class="visit" href="' + url + '" target="_blank">Visit</a>' +
            '<button onclick="deleteBookmark(\'' + url + '\')" class="delete">Delete</button>' +
            '</div>';
    }
}

// Event Listener
document.querySelector('.myForm').addEventListener('submit', addBookmark);