import './App.css';
import VerticalNav from './components/verticalNav/VerticalNav';
import Accordion from './components/accordion/Accordion';
import { navData, accordionData } from './sampleData';

function App() {
  
  return (
    <div className="App">
      <VerticalNav menuList={navData}/>
      <Accordion collapsibleList={accordionData}></Accordion>
    </div>
  );
}

export default App;
