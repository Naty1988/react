import NavBar from './componentes/NavBar/NavBar';
import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';

function App() {

const onAdd = (quantity) => {
  console.log(quantity)
}

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer saludo="Bienvenido!"/>
      <ItemCount initial={0} stock={5} onAdd={onAdd}/>
    </div>
  );
}

export default App;
