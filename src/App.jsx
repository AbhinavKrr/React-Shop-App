import './App.css'
import Products from './components/Products'
import CartProvider from './contexts/CartProvider'
import Header from './components/Header'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (

    <CartProvider>
      <ToastContainer position="bottom-left" newestOnTop={true} autoClose={600} hideProgressBar/>
      <Header/>
      <Products/>
    </CartProvider>
  )
}

export default App
