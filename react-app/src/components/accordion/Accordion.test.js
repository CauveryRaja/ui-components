import { render } from '@testing-library/react';
import Accordion from './Accordion';

const accordionData = [{
    id: 'collapsible-1',
    title: 'Header 1',
    content: 'Content 1, lorem anakn amalal alklklklklkl'
},
{
    id: 'collapsible-2',
    title: 'Header 2',
    content: 'Content 2, lorem anakn amalal alklklklklkl'
},
{
    id: 'collapsible-3',
    title: 'Header 3',
    content: 'Content 3, lorem anakn amalal alklklklklkl'
}];

describe('<Accordion />', () => {
    it('Should render Accordion component', () => {
        render(<Accordion/>);
    });

    it('Should render 3 Collapsible in Accordion', () => {
        const component = render(<Accordion collapsibleList={accordionData} />);

        // How to get element by component name
        expect(component.getByTestId('collapsible-1')).toBeDefined();
        expect(component.getByTestId('collapsible-2')).toBeDefined();
        expect(component.getByTestId('collapsible-3')).toBeDefined();

        // expect(component.children.length).toBeDefined();
    });
});