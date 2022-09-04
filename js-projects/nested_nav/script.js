let navElm = document.getElementsByTagName('nav')[0];

let data, activeItem = 'linkedin';

data = [
    {
        id: 'home',
        label: 'Home',
        type: 'item'
    },
    {
        id: 'about',
        label: 'About',
        type: 'menu',
        children: [
            {
                id: 'company',
                label: 'Company',
                type: 'item'
            }
        ]
    },
    {
        id: 'contact',
        label: 'Contact',
        type: 'menu',
        children: [
            {
                id: 'mobile',
                label: 'Mobile',
                type: 'item'
            },
            {
                id: 'social',
                label: 'Social',
                type: 'menu',
                children: [{
                    id: 'linkedin',
                    label: 'Linkedin',
                    type: 'item'
                }]
            }
        ]
    },
];

function transformData(items) {
    setActiveItem(items, activeItem);
}

function setActiveItem(items, activeItem) {
    let found = false;
    for(let i=0; i<items.length; i++) {
        if(items[i].id === activeItem) {
            items[i]['active'] = true;
            found = true;
            break;
        }
        else if(items[i].children) {
            found = setActiveItem(items[i].children, activeItem);
            if(found)
                items[i]['active'] = true;
        }
    }
    return found;
}

function getElements(items) {
    let markup = '';
    items.forEach(item => {
        switch(item.type) {
            case 'menu':
                markup += `<button ${item.active ? 'class="active"' : ''} onclick="rerender('${item.id}')">${item.label}</button>
                        <menu ${item.active ? 'class="active"' : ''}>${getElements(item.children)}</menu>`;
                break;
            case 'item':
            default:
                markup += `<a href="#"${item.active ? ' class="active"' : ''} onclick="rerender(${item.id})'">${item.label}</a>`;
        }
    })
    return markup;
}

function rerender(id) {
    console.log('hello, clicked... ', id);
    setActiveItem(data, id);
    let markup = getElements(data);
    navElm.innerHTML = '';
    navElm.insertAdjacentHTML('beforeend', markup);
    console.log(markup, navElm);
}

transformData(data);
let markup = getElements(data);
navElm.insertAdjacentHTML('beforeend', markup);
console.log(data);
console.log(markup);

// const nav = new NestedNav(document.getElementById('target'), data);
// nav.setActiveItem('about');


