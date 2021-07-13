import { render } from '@testing-library/react';
import NavigationMenu from './NavigationMenu';
import { flatMenus, nestedMenus, nestedMenusMultiple } from './mocks/NavigationMenu.data';

describe('NavigationMenu', () => {
    it('Should render Navigation Menu', () => {
        render(<NavigationMenu menuList={flatMenus}/>);
    });

    it('Should render all flat menus', () => {
        const { getByTestId } = render(<NavigationMenu menuList={flatMenus}/>);
        expect(getByTestId('item-0')).toBeDefined();
        expect(getByTestId('item-1')).toBeDefined();
    });

    it('Should render all nested menus', () => {
        const { getByTestId } = render(<NavigationMenu menuList={nestedMenus}/>);
        expect(getByTestId('item-0')).toBeDefined();
        expect(getByTestId('item-1')).toBeDefined();
        expect(getByTestId('menu-0')).toBeDefined();
        expect(getByTestId('menu-0.item-0')).toBeDefined();
    });

    it('Should expand only active menu item', () => {
        const { getByTestId } = render(<NavigationMenu menuList={nestedMenusMultiple} activeItem='menu-0.item-0'/>);
        expect(getByTestId('item-0')).toBeDefined();
        expect(getByTestId('menu-0')).toBeDefined();
        expect(getByTestId('menu-0.item-0')).toBeDefined();
        expect(getByTestId('menu-1')).toBeDefined();
        expect(getByTestId('menu-1.item-1')).toBeNull();
    });
});