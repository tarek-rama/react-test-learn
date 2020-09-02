import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import Default from './components/Default';
import Modal from './components/Modal';

class App extends Component {
  render(){
    return(
      <Router>
        <Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route path="/details" component={Details} />
              <Route path="/cart" component={Cart} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={Default} />
            </Switch>
            <Modal />
        </Fragment>
      </Router>
    )
  }
}

export default App;
