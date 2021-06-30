import { render } from '@testing-library/react';
import Accordion from './Accordion';

const accordionData = [{
    title: 'Header 0',
    content: 'Content 0, lorem anakn amalal alklklklklkl',
    expanded: true
},
{
    title: 'Header 1',
    content: 'Content 1, lorem anakn amalal alklklklklkl',
    expanded: false
},
{
    title: 'Header 2',
    content: 'Content 2, lorem anakn amalal alklklklklkl',
    expanded: true
}];

describe('<Accordion />', () => {
    it('Should render Accordion component', () => {
        render(<Accordion/>);
    });

    it('Should render 3 Collapsible in Accordion', () => {
        const component = render(<Accordion collapsibleList={accordionData} />);

        // How to get element by component name
        expect(component.getByTestId('collapsible-0')).toBeDefined();
        expect(component.getByTestId('collapsible-1')).toBeDefined();
        expect(component.getByTestId('collapsible-2')).toBeDefined();

        // expect(component.children.length).toBeDefined();
    });
});