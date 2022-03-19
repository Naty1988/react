import NavBar from './componentes/NavBar/NavBar';
import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer saludo="Bienvenido!"/>
    </div>
  );
}

export default App;
