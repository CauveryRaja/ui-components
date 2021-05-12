import { queryByText, render, screen } from '@testing-library/react';
import VerticalNav from './VerticalNav';

const flatList = [{
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

describe('', () => {
    it('Should render VerticalNav component in DOM', () => {
        render(<VerticalNav/>);
    });

    it('Should render flat menus in Vertical Nav', () => {
        let { getByTestId } = render(<VerticalNav menuList={flatList}/>);
        expect(getByTestId('menu-1')).toBeDefined();
        expect(getByTestId('menu-2')).toBeDefined();
    });
});