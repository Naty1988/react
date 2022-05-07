import './App.css';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './context/CartContext'
import { NotificationProvider } from './notification/notification'

function App() {

  return (
    <div className="App">
      <NotificationProvider>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer saludo="Bienvenido!" />} />
              <Route path='/category/:categoryId' element={<ItemListContainer saludo="Bienvenido!" />} />
              <Route path='/item/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />            
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
        </NotificationProvider>
    </div>
  );
}

export default App;
