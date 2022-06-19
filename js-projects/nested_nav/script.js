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
        type: 'item'
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

transformData(data);
console.log(data);