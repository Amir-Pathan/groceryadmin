import logo from './logo.svg';
import './App.css';
import Appbar from './AppBar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import routes from './routes';

function App() {
  return (
      <>
         <Router>
           <Appbar/>
           <Routes>
             {
               routes.map((i,index)=>{

                return <Route path={i.path} element={i.component} key={index}/>

               })
             }
           </Routes>
         </Router>
      </>
  );
}

export default App;
