/*import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {BrowserRouter} from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import {Home} from './components/HomeComponent';
import {About} from './components/AboutComponent';
import {Contact} from './components/ContactComponent';
import {PROMOTIONS} from './shared/promotions';
import {LEADERS} from './shared/leaders';
import {COMMENTS} from './shared/comments';*/
import './App.css';
import { Component } from 'react';
/*import { DISHES } from './shared/dishes';
import DishDetail from './components/DishDetail';
import Menu from './components/MenuComponent';*/
import Main from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {


  render(){
    return(
      <BrowserRouter>
         <Main />
      </BrowserRouter>
     
    )
  }
}

export default App;
