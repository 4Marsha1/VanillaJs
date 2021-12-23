const input = document.getElementById('search');
const html = document.querySelector('.items');
let States;

const searchStates = async (searchText) => {
    const res = await fetch('./constants/cityState.json');
    const states = await res.json();

    // get matches
    let matches = states.filter(state => {
        const regex = RegExp(`^${searchText}`, 'gi');
        return state.name.match(regex) || state.abbr.match(regex);
    })

    if (searchText.length === 0) {
        matches = []
        html.innerHTML = ''
    }

    Output(matches);
}

const Output = matches => {
    if (matches.length > 0) {
        const list = matches.map(state => {
            return (
                `<div class="card"><span class="state">${state.name}</span><span class="abbr">(${state.abbr})</span><span class="capital">${state.capital}</span></div>`
            )
        }).join(' ');

        html.innerHTML = list;
    }
}

input.addEventListener('input', () => searchStates(input.value));
