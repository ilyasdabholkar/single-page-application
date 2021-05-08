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
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';

const store = configureStore();

class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
