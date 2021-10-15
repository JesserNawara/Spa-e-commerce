import React from 'react';
import './description.css';
import Swal from "sweetalert2";
import {Link} from "react-router-dom";

export default function Description() {

    const product = JSON.parse(localStorage.getItem("product"))

    const clearStorage =()=>{
        localStorage.removeItem('product');
    }

    const addTocart = ()=>{
        Swal.fire({title:"Added !", icon: "success"})
    }

    return (
        <div id="main">
            <section className="desc-section">
                <div className="desc-wrapper">
                    <img id="img" src={product.image} alt="" />
                    <div className="desc-info">
                        <h4 className="desctag" id="priceDesc"> {product.price} $ </h4>
                        <h1 className="desctag"> {product.name} </h1>
                        <h4 className="desctag"> {product.description} </h4>
                        <div className="btns">
                        <button id="addBtn" onClick={() =>{addTocart()}}>ADD TO CART</button>
                        <Link to="/" id="backBtn" onClick={() =>{clearStorage()}} >BACK</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
