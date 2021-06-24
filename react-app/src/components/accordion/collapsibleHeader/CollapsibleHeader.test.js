import { render, fireEvent } from '@testing-library/react';
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

    it('should render Collapsible Header with title and be expanded', () => {
        const { queryByTestId, getByTestId }  = render(<CollapsibleHeader title="Header 1" expanded={true}/>);
        expect(getByTestId('title')).toBeDefined();
        expect(getByTestId('title')).toHaveTextContent('Header 1');

        expect(queryByTestId('expand-btn')).toBeNull();
        expect(getByTestId('collapse-btn')).toBeDefined();
    });

    it('should toggle expand and collapse on clicking them', async () => {
        const { queryByTestId, getByTestId }  = render(<CollapsibleHeader title="Header 1" expanded={true}/>);
        const expandBtn = queryByTestId('expand-btn');
        const collapseBtn = getByTestId('collapse-btn');

        await fireEvent.click(collapseBtn);

        expect(expandBtn).toBeDefined();
        expect(collapseBtn).toBeNull();

        await fireEvent.click(expandBtn);

        expect(expandBtn).toBeNull();
        expect(collapseBtn).toBeDefined();
    });
})