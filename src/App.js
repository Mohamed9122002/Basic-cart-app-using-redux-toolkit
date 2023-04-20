
import './App.css';
import AppNavbar from './Com/appNavbar';
import {Route, Routes} from 'react-router-dom'
import Products from './Com/Product';
import Card from './Com/cart';
function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='cart' element={<Card/>} />
      </Routes>
    </div>
  );
}

export default App;
