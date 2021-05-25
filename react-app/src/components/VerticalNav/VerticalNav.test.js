import { render } from '@testing-library/react';
import VerticalNav from './VerticalNav';
import { flatMenus, nestedMenus, nestedMenusWithCategory } from './constants';

describe('<VerticalNav />', () => {
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
        expect(getByTestId('menu-1')).toBeDefined();
        expect(getByTestId('menu-1').children[0]).toBeDefined();
        expect(getByTestId('menu-2')).toBeDefined();
        expect(getByTestId('menu-2').children[0]).toBeUndefined();

        expect(getByTestId('menu-1')).toHaveTextContent('About');
        expect(getByTestId('menu-1').children[0]).toHaveTextContent('Careers');
        expect(getByTestId('menu-2')).toHaveTextContent('Contact');
    });

    // it('Should render nested menus along with Categories', () => {
    //     let { getByTestId } = render(<VerticalNav menuList={nestedMenusWithCategory}/>);
    //     expect(getByTestId('category-1')).toBeDefined();
    //     expect(getByTestId('category-2')).toBeDefined();
    // });
});