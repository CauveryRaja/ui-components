export const flatMenus = [
    {
        id: 'item-0',
        label: 'Item 0',
        type: 'item'
    },
    {
        id: 'item-1',
        label: 'Item 1',
        type: 'item'
    }
];

export const nestedMenus = [
    {
        id: 'item-0',
        label: 'Item 0',
        type: 'item'
    },
    {
        id: 'menu-0',
        label: 'Menu 0',
        type: 'list',
        children: [
            {
                id: 'menu-0.item-0',
                label: 'Item 0',
                type: 'item'
            }
        ]
    },
    {
        id: 'item-1',
        label: 'Item 1',
        type: 'item'
    }
];

export const nestedMenusWithCategory = [
    {
        id: 'category-0',
        label: 'Category 0',
        type: 'category'
    },
    {
        id: 'item-0',
        label: 'Item 0',
        type: 'item'
    },
    {
        id: 'menu-0',
        label: 'Menu 0',
        type: 'list',
        children: [
            {
                id: 'menu-0.item-0',
                label: 'Item 0',
                type: 'item'
            }
        ]
    },
    {
        id: 'category-1',
        label: 'Category 1',
        type: 'category'
    },
    {
        id: 'item-1',
        label: 'Item 1',
        type: 'item'
    }
];