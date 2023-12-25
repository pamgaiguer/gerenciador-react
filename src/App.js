import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const nome = "Cleidao";

  return (
    <div className="App">
      <h1>Testando css</h1>
      <SayMyName nome="Matheus"/>
      <SayMyName nome="Pamella"/>
      <SayMyName nome={nome}/>
      <Pessoa 
        nome="Rodrigo" 
        idade="28" 
        profissao="programador" 
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
