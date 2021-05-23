import './App.css';
import VerticalNav from './components/verticalNav/VerticalNav';

function App() {
  let menus = [{
    id: 'menu-1',
    type: 'list',
    name: {
        displayName: 'About',
        actualName: 'about'
    },
    children: [{
        id: 'menu-1-child-1',
        type: 'item',
        name: {
            displayName: 'Careers',
            actualName: 'careers'
        }
    }]
  }, {
      id: 'menu-2',
      type: 'item',
      name: {
          displayName: 'Contact',
          actualName: 'contact'
      }
  }];
  return (
    <div className="App">
      <VerticalNav menuList={menus}/>
    </div>
  );
}

export default App;
