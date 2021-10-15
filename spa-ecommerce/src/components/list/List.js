import React, { useState, useEffect } from 'react'
import './list.css'
import axios from 'axios';
// import Description from '../description/Description.js'
import { Link} from 'react-router-dom';

export default function List(props) {

    const [services, setServices] = useState(null)
    const fetchServices= ()=> {
        axios.get("http://localhost:3000/services")
        .then((response)=>{
            setServices(response.data)
        })
    }
    
    useEffect(()=>{
        fetchServices();
    }, [])


    const seeDescription = (product) => {
        localStorage.setItem("product", JSON.stringify(product) )
      }

    return (
        <div className="container">
                { services && services.map((service, key) =>
                <div className="product-card" key={key}>
                    <img src={service.image} alt="" />
                    <div className="product-info">
                        <p id="price"> {service.price} $ </p>
                        <h3> {service.name} </h3>
                        <p> {service.description} </p>
                        <Link to="/description" id="productBtn" onClick={()=>{seeDescription(service)}} >Checkout Offre</Link>  
 
                    </div>
                </div>
                )}
                <div className="testemonials">
                    <div className="testemonials-wrapper">
                    <h1>Checkout what our customers say about our service!</h1>
                    <img src="https://res.cloudinary.com/jessssss/image/upload/v1634248618/testimonials-new-bg_u5dpyw.jpg" alt="" className="test"></img>
                    <div className="test-info">
                    <ul>
                        <div>
                            <img src="https://res.cloudinary.com/jessssss/image/upload/v1634249097/t3_qam6bz.jpg" alt="" ></img>
                            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/jessssss/image/upload/v1634249118/t9_mojgt5.jpg" alt="" ></img>
                            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/jessssss/image/upload/v1634249122/t5_e2otex.jpg" alt="" ></img>
                            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </ul>
                    </div>
                    </div>
                </div>
        </div>
    )
}
