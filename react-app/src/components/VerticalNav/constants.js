export const flatMenus = [{
    id: 'menu-1',
    type: 'item',
    name: {
        displayName: 'Home',
        actualName: 'home'
    }
}, {
    id: 'menu-2',
    type: 'item',
    name: {
        displayName: 'About',
        actualName: 'about'
    }
}];

export const nestedMenus = [{
    id: 'menu-1',
    type: 'list',
    name: {
        displayName: 'About',
        actualName: 'about'
    },
    children: [{
        id: 'menu-1-child-1',
        type: 'list',
        name: {
            displayName: 'Careers',
            actualName: 'careers'
        },
        children: [{
            id: 'menu-1-child-1-child-1',
            type: 'item',
            name: {
                displayName: 'View Openings',
                actualName: 'openings'
            }
        }]
    }]
}, {
    id: 'menu-2',
    type: 'item',
    name: {
        displayName: 'Contact',
        actualName: 'contact'
    }
}];

export const nestedMenusWithCategory = [
{
    id: 'category-1',
    type: 'category',
    name: {
        displayName: 'Category 1',
        actualName: 'category1'
    },
    children: [{
        id: 'menu-1',
        type: 'list',
        name: {
            displayName: 'About',
            actualName: 'about'
        },
        children: [{
            id: 'menu-1-child-1',
            type: 'item',
            name: {
                displayName: 'Careers',
                actualName: 'careers'
            }
        }]
    }, {
        id: 'menu-2',
        type: 'item',
        name: {
            displayName: 'Contact',
            actualName: 'contact'
        }
    }]
},
{
    id: 'category-2',
    type: 'category',
    name: {
        displayName: 'Category 2',
        actualName: 'category2'
    },
    children: [{
        id: 'menu-1',
        type: 'list',
        name: {
            displayName: 'About',
            actualName: 'about'
        },
        children: [{
            id: 'menu-1-child-1',
            type: 'item',
            name: {
                displayName: 'Careers',
                actualName: 'careers'
            }
        }]
    }, {
        id: 'menu-2',
        type: 'item',
        name: {
            displayName: 'Contact',
            actualName: 'contact'
        }
    }]
}]; 
