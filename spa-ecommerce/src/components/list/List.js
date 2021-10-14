import React, { useState, useEffect } from 'react'
import './list.css'
import Description from '../description/Description.js'
import axios from 'axios';
// import { Link } from "react-router-dom"

export default function List() {

    const [products, setProducts] = useState(null);
    // const [view, setView] = useState(null);

    useEffect( ()=>{
        fetchProducts()
    }, [])

    const fetchProducts= () =>{
        axios.get("http://localhost:3000/products")
        .then((response) => {
            setProducts(response.data)
        })
    }

    const seeProduct = (product) =>{
        return <Description product={product} /> 
    }

    return (
        <div className="container">
                { products && products.map((product, key) =>
                <div className="product-card" key={key}>
                    <img src={product.image} alt="" />
                    <div className="product-info">
                        <p id="price"> {product.price} $ </p>
                        <h3> {product.name} </h3>
                        <p> {product.description} </p>
                        <button id="productBtn" onClick={()=> {seeProduct(product)}}>See Product</button>
                    </div>
                </div>
                )}
        </div>
    )
}
