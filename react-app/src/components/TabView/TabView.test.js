import { render } from '@testing-library/react';
import TabView from './TabView';

it('should render TabView component', () => {
    render(<TabView/>);
});

it('should have atleast 1 tab and content', () => {
    const { getByTestId } = render(<TabView/>);
    
});