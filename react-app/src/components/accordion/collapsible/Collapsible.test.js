import { render } from '@testing-library/react';
import Collapsible from './Collapsible';

describe('<Collapsible />', () => {
    it('should render Collapsible', () => {
        render(<Collapsible />);
    });

    it('should render header and content when expanded', () => {
        const { getByTestId } = render(<Collapsible id='collapsible-1' title='Header 1' content='Content 1' expanded={true}/>);

        expect(getByTestId('title')).toBeDefined();
        expect(getByTestId('title')).toHaveTextContent('Header 1');

        expect(getByTestId('content')).toBeDefined();
        expect(getByTestId('content')).toHaveTextContent('Content 1');
    });

    it('should not render content when collapsed', () => {
        const { getByTestId, queryByTestId } = render(<Collapsible id='collapsible-1' title='Header 1' content='Content 1' expanded={false}/>);

        expect(getByTestId('title')).toBeDefined();
        expect(getByTestId('title')).toHaveTextContent('Header 1');

        expect(queryByTestId('content')).toBeNull();
    })

    // How to get props from the component
});