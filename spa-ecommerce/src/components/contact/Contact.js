import React from 'react'
import './contact.css'

export default function Contact() {
    return (
        <div id="contact">
            <div className="contact-form" >
                <input type="text" className="email" placeholder="E-mail"></input> <br/>
                <input type="text" className="name" placeholder="Name"></input> <br/>
                <textarea rows="3" cols="30" type="text" className="text" placeholder="Let us know how you feeling "></textarea>
                <button className="btn" >Submit</button> 
            </div>
        </div>
    )
}
