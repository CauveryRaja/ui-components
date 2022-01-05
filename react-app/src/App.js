import './App.css';
// import VerticalNav from './components/verticalNav/VerticalNav';
// import Accordion from './components/accordion/Accordion';
// import { navData, accordionData } from './sampleData';
import Stepper from './components/2_Stepper/Stepper';

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
      <Stepper>
        {screens}
      </Stepper>
    </div>
  );
}

export default App;
