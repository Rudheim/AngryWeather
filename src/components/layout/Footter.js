import React from 'react';
import Contacts from '../footer/Contacts';
import ContactForm from '../footer/ContactForm';

const Footer = () => {
  return ( 
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <Contacts />
          <ContactForm />
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
        © 2014 Copyright Text
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;