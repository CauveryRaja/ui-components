var $ = require( "jquery" );
// jest.mock('./TabView');

document.body.innerHTML = `
    <section class="tab-view">
        <nav>
            <a class="tab-btn" data-target="content-1">Tab 1</a>
            <a class="tab-btn" data-target="content-2">Tab 2</a>
            <a class="tab-btn" data-target="content-3">Tab 3</a>
        </nav>
        <div class="content-wrapper">
            <p class="content" id="content-1">Lorem 1 ipsum dolor sit amet consectetur adipisicing elit.Tempora, neque.</p>
            <p class="content" id="content-2">Lorem 2 ipsum dolor sit amet consectetur adipisicing elit.Tempora, neque.</p>
            <p class="content" id="content-3">Lorem 3 ipsum dolor sit amet consectetur adipisicing elit.Tempora, neque.</p>
        </div>
    </section>
`;


test('should render TabView', () => {
    let tabViewComponent = document.getElementsByClassName('tab-view')[0];
    expect(tabViewComponent).toBeDefined();
});

test('should render 3 tab buttons and 3 contents', () => {
    let tabButtons, tabContents;
    tabButtons = document.getElementsByClassName('tab-btn');
    tabContents = document.getElementsByClassName('content');
    expect(tabButtons.length).toEqual(3);
    expect(tabContents.length).toEqual(3);
});

test('should trigger click listener when clicked on tab button', () => {
    let tabBtn = document.getElementsByClassName('tab-btn')[0];
    require('./TabView');
    const EventHandlers = require('./EventHandlers')
    jest.mock('./EventHandlers');
    // let clickHandlerMock = jest.spyOn(clickHandlerModule, 'clickHandler');
    // clickHandler.mockImplementation(() => console.log('Clicked... Test...'))
    $(tabBtn).trigger('click');

    expect(EventHandlers.clickHandler).toBeCalled();
});