import { render } from '@testing-library/react';
import CollapsibleHeader from './CollapsibleHeader';

describe('<CollapsibleHeader />', () => {
    it('should render Collapsible Header component', () => {
        render(<CollapsibleHeader />);
    });

    it('should render Collapsible Header with title', () => {
        const { getByTestId }  = render(<CollapsibleHeader title="Header 1"/>);
        expect(getByTestId('title')).toBeDefined();
        expect(getByTestId('title')).toHaveTextContent('Header 1');
    });
})