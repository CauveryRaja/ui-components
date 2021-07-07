import { render } from '@testing-library/react';
import NavigationMenu from './NavigationMenu';
import { flatMenus } from './mocks/NavigationMenu.data';

describe('NavigationMenu', () => {
    it('Should render Navigation Menu', () => {
        render(<NavigationMenu menuList={flatMenus}/>);
    });

    it('Should render all flat menus', () => {
        const { getByTestId } = render(<NavigationMenu menuList={flatMenus}/>);
        expect(getByTestId('item-0')).toBeDefined();
        expect(getByTestId('item-1')).toBeDefined();
    });
});