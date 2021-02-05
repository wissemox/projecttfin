import logo from './logo.svg';
import Login from './Compent/login'
import {BrowserRouter,link,Route } from "react-router-dom"
import Navbar from './Compent/navbar/navbar01'
import Background from './Compent/background/background'
import Registe from './Compent/registe'
import './App.css';

function App() {
  return (
    <div className="App">
    
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
        <BrowserRouter>
        <Route  path="/" render={()=><Navbar/>}></Route>
        <Route  path="/" render={()=><Background/>}></Route>
        <Route exact path="/login" render={()=><Login />}></Route>
        <Route exact path="/register" render={()=> <Registe/>}></Route>
        </BrowserRouter>
    </div>
    );
}

export default App;
