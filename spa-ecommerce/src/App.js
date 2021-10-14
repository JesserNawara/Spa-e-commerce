import Navbar from './components/navbar/Navbar.js'
import Home from './components/home/Home.js'
import List from './components/list/List.js'
import Contact from './components/contact/Contact.js'
import Footer from './components/footer/Footer.js'
import './App.css';

function App() {

  
  return (
    <div className="App">
      <section className="navbar-section">
        <div className="navbar-wrapper">
        <Navbar />
        </div>
      </section>
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
  );
}

export default App;
