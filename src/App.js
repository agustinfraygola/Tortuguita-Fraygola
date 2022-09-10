import logo from './logo.svg';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer.js';
import { NavBar } from './components/NavBar.js'
import { useEffect, useState } from 'react';

const renderLogo = getElementById('logo');
const renderItemListContainer = getElementById('ItemListContainer');

root.render(renderLogo);
root.render(renderItemListContainer);

const root = ReactDOM.createRoot(
  document.getElementById('root')
);


function App(props) {

  const [counter, setCounter] = useState(0)
  const [products, setProducts] = useState([])

  const handleClick = () => {
    console.log('hiciste click');
    setCounter(counter + 1);
  }

  useEffect(() => {
    setTimeout( () => {
      console.log('Efecto al montaje'); 
    }, 5000)
  },[])

  useEffect( () => {
    const getProducts = new Promise( (resolve,reject) => {


      resolve(['Jamon y queso', 'Cuatro quesos', 'Carne', 'Queso y aceitunas'])
      reject('error')
    })

    getProducts
      .then( (data) => {
        console.log(data);
        setProducts{ data };
      })
      .catch(err => {console.log( err )})
      .finally( () => {console.log('exito'); })

  })

  console.log('hubo render');


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

        <div className="my-5" >
          <strong>Contador: {counter}</strong>
          
        </div >
        <button onClick={handleClick} className="btn my-5">Click</button>
        {products.map( p => <div className="bg-orange-300 my-2"><li>{p}</li></div>)}
      </header>
    </div>


  );
}
<><NavBar />


  <ItemListContainer /></>

export default App;

