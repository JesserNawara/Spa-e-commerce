import React from 'react'
import './footer.css'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <div>
          <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
              <h4>Special</h4>
              <ul className="list-unstyled">
            <li> Special Offers </li> <br />
            <li> Happy hour! </li> <br />
            <li> Staff apply </li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Stuff</h4>
            <ul className="list-unstyled">
              <li>About us</li> <br/>
              <li>Meet Staff</li> <br />
              <li>testemonials</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Social Media</h4>
            <ul className="list-icons">
              <li><h3> <FaFacebookF /> </h3></li>
              <li> <h3><FaInstagram/></h3> </li>
              <li> <h3><FaTwitter/></h3> </li>
            </ul>
          </div>
        </div>
        <div className="newsletter">
        <input type="text" placeholder="Email.." ></input>
        <button>Submit</button>
        <h5 id="contact-txt">Join out Newsletter for more EXCLUSIVE OFFERS !</h5>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Ecommerce | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
        </div>
    )
}
