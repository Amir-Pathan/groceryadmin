import logo from './logo.svg';
import './App.css';
import Appbar from './AppBar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import routes from './routes';
import { useEffect } from 'react';
import axios from 'axios';
import { addCategory,Categories } from './redux';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductCard from './lib/cart/productCart';

function App() {

  return (
      <>
         <Router>
           <Provider store={store}>
           <Appbar/>
           <Routes>
             {
               routes.map((i,index)=>{

                return <Route path={i.path} element={i.component} key={index}/>

               })
             }
           </Routes>
           </Provider>
         </Router>
      </>
  );
}

export default App;
