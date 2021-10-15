import Navbar from './components/navbar/Navbar.js'
import Home from './components/home/Home.js'
import List from './components/list/List.js'
import Contact from './components/contact/Contact.js'
import Footer from './components/footer/Footer.js'
import Shop from './components/shop/shop.js'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Description from './components/description/Description.js'

import './App.css';

function App() {

  return (

    <Router> 
      <section className="navbar-section">
            <div className="navbar-wrapper">
              <Navbar />
            </div>
          </section>
      <Switch>
        <Route path="/description" component={Description} />
        <Route exact path="/shop" component={Shop} />
        <div className="App">
          <section id="home" className="home-section">
            <div className="home-wrapper">
              <Home />
            </div>
          </section>
          <section id="products" className="products-section">
            <div className="products-wrapper">
              <List />
            </div>
          </section>
          <section id="contact" className="contact-section">
            <div className="contact-wrapper">
              <Contact />
            </div>
          </section>
          <footer>
            <div className="footer-wrapper">
              <Footer />
            </div>
          </footer>
        </div>  
      </Switch>
    </Router>
  );
}

export default App;
