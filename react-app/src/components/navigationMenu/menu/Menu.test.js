import { render } from '@testing-library/react';
import Menu from './Menu';
import { flatMenus, nestedMenus } from '../mocks/NavigationMenu.data';

describe('Menu', () => {
    it('Should render Menu', () => {
        render(<Menu id='menu-0' label='Menu 0' list={[]}/>);
    });

    it('Should render Menu with flat items', () => {
        const { getByTestId } = render(<Menu id='menu-0' label='Menu 0' list={flatMenus}/>);

        expect(getByTestId('item-0')).toBeDefined();
        expect(getByTestId('item-1')).toBeDefined();
    });

    it('Should render Menu with nested menus', () => {
        const { getByTestId } = render(<Menu id='menu' label='Menu' list={nestedMenus}/>);

        expect(getByTestId('item-0')).toBeDefined();
        expect(getByTestId('item-1')).toBeDefined();
        expect(getByTestId('menu-0')).toBeDefined();
        expect(getByTestId('menu-0.item-0')).toBeDefined();
    });
});