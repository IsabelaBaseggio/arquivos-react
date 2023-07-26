import './App.css';
import HellowWorld from './components/HelloWorls'; // importantdo o componente HelloWorld
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  const nome = "Maria";

  return (
    <div className="App">
      <HellowWorld></HellowWorld> {/* Usando o componente HelloWorld */}
      <SayMyName nome="Isabela"></SayMyName> {/* atributos criados no componente SayMyName e que serão atributos do objeto props */}
      <SayMyName nome="Rafael"></SayMyName> {/* Reutilizando o componente SayMyName, sem recriá-lo novamente, só o chamando */}
      <SayMyName nome={nome}></SayMyName>
      <Pessoa nome="Isabela" idade="23" profissao="Estudante" foto="https://via.placeholder.com/150"></Pessoa>
      <Frase></Frase>
      <List></List>
    </div>
  );
}

export default App;
