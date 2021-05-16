import { render } from '@testing-library/react';
import VerticalNav from './VerticalNav';

const flatMenus = [{
    id: 'menu-1',
    type: 'list',
    name: {
        displayName: 'Home',
        actualName: 'home'
    }
}, {
    id: 'menu-2',
    type: 'list',
    name: {
        displayName: 'About',
        actualName: 'about'
    }
}];

const nestedMenus = [{
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
    type: 'list',
    name: {
        displayName: 'Contact',
        actualName: 'contact'
    }
}];

const nestedMenusWithCategory = [
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
        type: 'list',
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
        type: 'list',
        name: {
            displayName: 'Contact',
            actualName: 'contact'
        }
    }]
}
] 



describe('', () => {
    it('Should render VerticalNav component in DOM', () => {
        render(<VerticalNav menuList={flatMenus}/>);
    });

    it('Should render flat menus in Vertical Nav', () => {
        let { getByTestId } = render(<VerticalNav menuList={flatMenus}/>);
        expect(getByTestId('menu-1')).toBeDefined();
        expect(getByTestId('menu-2')).toBeDefined();
    });

    it('Should render nested menus in Vertical Nav', () => {
        let { getByTestId } = render(<VerticalNav menuList={nestedMenus}/>);
        let parentMenu, childMenu;
        parentMenu = getByTestId('menu-1');
        expect(parentMenu).toBeDefined();
        expect(getByTestId('menu-2')).toBeDefined();
        childMenu = parentMenu.getElementsByTagName('li')[0];
        expect(childMenu).toBeDefined();

        expect(parentMenu.textContent).toMatch('About');
        expect(childMenu.textContent).toMatch('Careers');
        expect(getByTestId('menu-2').textContent).toMatch('Contact');
    });

    it('Should render nested menus along with Categories', () => {
        let { getByTestId } = render(<VerticalNav menuList={nestedMenusWithCategory}/>);

        expect(getByTestId('category-1')).toBeDefined();
        expect(getByTestId('category-2')).toBeDefined();
    });
});