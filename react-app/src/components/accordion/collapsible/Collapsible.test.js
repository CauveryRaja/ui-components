import { render } from '@testing-library/react';
import Collapsible from './Collapsible';

describe('<Collapsible />', () => {
    it('should render Collapsible', () => {
        render(<Collapsible />);
    });

    it('should props be rendered', () => {
        const { getByTestId } = render(<Collapsible id='collapsible-1' title='Header 1' content='Content 1' />);

        expect(getByTestId('title')).toBeDefined();
        expect(getByTestId('title')).toHaveTextContent('Header 1');

        expect(getByTestId('content')).toBeDefined();
        expect(getByTestId('content')).toHaveTextContent('Content 1');
    })

    // How to get props from the component
});