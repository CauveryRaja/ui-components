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
        displayName: '',
        actualName: ''
    },
    children: [{
        id: 'menu-1-child-1',
        type: 'item',
        name: {
            displayName: '',
            actualName: ''
        }
    }]
}, {
    id: 'menu-2',
    type: 'list',
    name: {
        displayName: '',
        actualName: ''
    }
}];

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
        let { getByTestId } = render(<VerticalNav menuList={flatMenus}/>);
        expect(getByTestId('menu-1')).toBeDefined();
        expect(getByTestId('menu-2')).toBeDefined();
        expect(getByTestId('menu-1-child-1')).toBeDefined();
    })
});