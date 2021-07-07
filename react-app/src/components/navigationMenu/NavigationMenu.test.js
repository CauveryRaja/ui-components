import { render } from '@testing-library/react';
import NavigationMenu from './NavigationMenu';
import menus from './mocks/NavigationMenu.data';

describe('NavigationMenu', () => {
    it('Should render Navigation Menu', () => {
        render(<NavigationMenu menuList={menus}/>);
    });
});