import { render } from '@testing-library/react';
import { flatMenus, nestedMenus } from '../constants';
import Menu from './Menu';

describe('<Menu />', () => {
 test('Should display Nested menu', () => {
    let nestedMenu = nestedMenus[0];
    let { getByTestId } = render(<Menu id={nestedMenu.id} key={nestedMenu.id}
                            label={nestedMenu.name.displayName} value={nestedMenu.name.actualName}
                            items={nestedMenu?.children}/>);

    expect(getByTestId('menu-1')).toBeDefined();
    expect(getByTestId('menu-1-child-1')).toBeDefined();
    expect(getByTestId('menu-1-child-1-child-1')).toBeDefined();
 });
});