import React from 'react';
import './Footer.css'; 
import logo192 from '../assets/logo192.png';

interface FooterProps {
  companyName: string;
}

const Footer: React.FC<FooterProps> = ({ companyName }) => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-logo">
          <img className='logo-image'   src={logo192} alt="Company Logo" />
          <div className="logo-text">
            <p>Dilwana Store</p>
            <p>Ke dilwana  ke dilwna 
            hdfkjdfksjdkljkhflqjedjlf</p>
          </div>
        </div>
        <div className="form-container">
            <div className="from-header">
              <p>Join Our News Collection</p>
            </div>
            <div className='form'>
            <form className='the-from'>
               
              <div className='new'>
                <label htmlFor="email"></label>
                <input type="text" placeholder="Enter your email" id="email" name="email" />
              </div>
            
            </form> 
            </div>
            
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-info">
            <p>hghjgfsdhjfgdkhsghkd</p>
          <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
