import { render, fireEvent } from '@testing-library/react';
import CollapsibleHeader from './CollapsibleHeader';

const mockToggleCollapse = jest.fn();

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
        const { queryByTestId, getByTestId }  = render(<CollapsibleHeader title="Header 1" expanded={true} 
            toggleCollapse={mockToggleCollapse}/>);
        const expandBtn = queryByTestId('expand-btn');
        const collapseBtn = getByTestId('collapse-btn');

        await fireEvent.click(collapseBtn);

        expect(mockToggleCollapse).toHaveBeenCalledTimes(1);
        expect(expandBtn).toBeDefined();
        expect(collapseBtn).toBeNull();

        await fireEvent.click(expandBtn);

        expect(mockToggleCollapse).toHaveBeenCalledTimes(2);
        expect(expandBtn).toBeNull();
        expect(collapseBtn).toBeDefined();
    });
})