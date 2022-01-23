export default {
    search: function (text, limitP, sortby) {
        return fetch(`http://www.reddit.com/search.json?q=${text}&sort=${sortby}&limit=${limitP}`)
            .then(res => res.json())
            .then(data => data.data.children.map(data => data.data))
            .catch(err => console.log(err))
    }
}