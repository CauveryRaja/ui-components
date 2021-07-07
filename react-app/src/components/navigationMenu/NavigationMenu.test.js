import { render } from '@testing-library/react';
import NavigationMenu from './NavigationMenu';
import { flatMenus, nestedMenus } from './mocks/NavigationMenu.data';

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
    })
});