import logo from './logo.svg';
import './App.css';

function botao({texto}) {
  return (
    <button>Click aqui!</button>
  );
}

// Produtos
const products = [
  {title: 'Tomate', id: 1},
  {title: 'Morango', id: 2},
  {title: 'Alface', id: 3}
]

//function listaDeCompras() {
//  const items = products.map(p =>);
//}

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

        <botao texto={'Olá Mundo'}/>
      </header>
    </div>
  );
}

export default App;
