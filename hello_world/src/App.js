import logo from './logo.svg';
import './App.css';

// Botão
function Botao({textoBotao}) {
  return (
    <button className='link'>
      {textoBotao}
    </button>
  );
}

// Formulário
function Formulario() {
  return (
    <div className='principal'>
      <div className='login'>
        <h3>Login:</h3>
        <input type='texto'></input>
        <h3>Senha:</h3>
        <input type='password'></input>
        <Botao textoBotao={'Login'}></Botao>
      </div>
      <p className='texto'>&copy;2024 - Lucas Biasoli Goulart</p>
    </div>
  );
}

function App() {
  let logado = true;
  if (!logado) {
    return (<Formulario/>)
  }else {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
  
          <h1 className='titulo'>Olá Mundo</h1>
          <p className='texto'>Esse é meu primeiro site com ReactJS</p>
  
          <div className='botoes'>
            <Botao textoBotao={'Click aqui'}></Botao>
            <Botao textoBotao={'Saber mais'}></Botao>
          </div>
  
          <p className='texto'>&copy;2024 - Lucas Biasoli Goulart</p>
        </header>
      </div>
    )
  }
}

export default App;
