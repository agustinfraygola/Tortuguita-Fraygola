import logo from './logo.svg';
import './App.css';
import {ItemListContainer} from './components/ItemListContainer.js';
import {NavBar} from './components/NavBar.js'

const renderLogo = getElementById('logo');
const renderItemListContainer = getElementById('ItemListContainer');

root.render(renderLogo);
root.render(renderItemListContainer);

const root = ReactDOM.createRoot(
  document.getElementById('root')
);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>   
    </div>
   
  );
}
<><NavBar /><ItemListContainer /></>

export default App;

