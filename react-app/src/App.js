import './App.css';
// import VerticalNav from './components/verticalNav/VerticalNav';
// import Accordion from './components/accordion/Accordion';
// import { navData, accordionData } from './sampleData';
// import Stepper from './components/2_Stepper/Stepper';
// import RotatingNav from './components/3_Rotating_Nav/RotatingNav';
import HiddenSearch from './components/4_hidden_search/HiddenSearch';

function App() {

  const screens = [
    <div>Hello, this is screen 1</div>,
    <div>Hello, this is screen 2</div>,
    <div>Hello, this is screen 3</div>,
    <div>Hello, this is screen 4</div>
  ]
  
  return (
    <div className="App">
      {/* <VerticalNav menuList={navData}/>
      <Accordion collapsibleList={accordionData}></Accordion> */}

      {/* 2_Stepper */}
      {/* <Stepper>
        <div>Hello, this is screen 1</div>
        <div>Hello, this is screen 2</div>
        <div>Hello, this is screen 3</div>
        <div>Hello, this is screen 4</div>
      </Stepper> */}

      {/* 3_Rotating Nav */}
      {/* <RotatingNav>
        <main>
          <header>
            <h1>Journey</h1>
          </header>
          <div class="content">
            <img src="images/waves.jpeg" />
            <p class="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ea similique
              id? Harum repudiandae, architecto ipsum sed voluptas explicabo soluta unde
              placeat inventore possimus sit excepturi tempora nulla est quam?
            </p>
          </div>
        </main>
      </RotatingNav> */}

      {/* Hidden Search */}
      <HiddenSearch />
    </div>
  );
}

export default App;
