import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavBar from './componentes/NavBar/NavBar';
import ItemCount from './componentes/ItemCount/ItemCount';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const onAdd = (quantity) => {
    console.log(quantity)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer saludo="Bienvenido!" />} />
          <Route path='/category/:categoryId' element={<ItemListContainer saludo="Bienvenido!" />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          {/* <ItemCount initial={0} stock={5} onAdd={onAdd} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
