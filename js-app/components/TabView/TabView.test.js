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

test('should display TabView', () => {
    let tabViewComponent = document.getElementsByClassName('tab-view')[0];
    expect(tabViewComponent).toBeDefined();
});