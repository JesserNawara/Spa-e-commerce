import React, { useState, useEffect } from 'react'
import Footer from '../footer/Footer.js'
import Contact from '../contact/Contact.js'
import './shop.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Shop() {

  const [products, setProducts] = useState()

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = () => {
    axios.get("http://localhost:3000/products")
      .then(response => {
        setProducts(response.data)
      })
  }

  const seeDescription = (product) => {
    localStorage.setItem("product", JSON.stringify(product) )
  }

  return (
    <div id="shop">
      <section id="products" className="products" >
          {products && products.map((product, key) =>
            <div className="products-card" key={key}>
              <img src={product.image} alt="" />
              <div className="products-info">
                <h3> {product.name} </h3>
                <p> {product.description} </p>
                <Link to="/description" onClick={seeDescription(product)} id="productBtn" >See Product</Link>
              </div>
            </div>
          )}
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
  )
}
