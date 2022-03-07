let tbody = document.getElementsByTagName('tbody')[0];
let length = 0, count = 20;
let allEntries = [];
let container = document.getElementsByClassName('container')[0];

container.addEventListener('scroll', () => {
    // console.log(container.scrollTop, container.clientHeight, container.scrollHeight);
    if(container.scrollTop + container.clientHeight >= container.scrollHeight)
        setTimeout(appendEntries, 1000);
});

async function getAllEntries() {
    let res = await fetch('https://jsonplaceholder.typicode.com/todos');
    allEntries = await res.json();
    appendEntries();
}

function getNextEntries(start, count) {
    let toAppend = allEntries.slice(start, start+count);
    let entriesStr = '';
    toAppend.forEach(entry => {
        entriesStr += `
            <tr>
                <td>${entry.id}</td>
                <td>${entry.title}</td>
                <td>${entry.completed}</td>
            </tr>`;
    });
    return entriesStr;
}

function appendEntries() {
    let entries = getNextEntries(length, count);
    tbody.insertAdjacentHTML('beforeend', entries);
    length += count;
}

function init() {
    getAllEntries();
}

init();