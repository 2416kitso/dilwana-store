import React from 'react';
import './Footer.css'; 
import logo192 from '../assets/logo192.png';

interface FooterProps {
  companyName: string;
}

const Footer: React.FC<FooterProps> = ({ companyName }) => {
  return (
    <footer className="footer">
       <div className="footer-logo">
          <img className='logo-image'   src={logo192} alt="Company Logo" />
          <div className="logo-text">
            <p>Dilwana Store</p>
            <p>Ke dilwana  ke dilwna 
            hdfkjdfksjdkljkhflqjedjlf</p>
          </div>
        </div>
        <div className="footer-form">
            <p>Join Our News Collection</p>
            <div className='form'>
            <form>

            <div className='new'>
            <label htmlFor="email"></label>
            <input type="text" placeholder="Enter your email" id="email" name="email" />
            </div>
          
            </form> 
            </div>
            
        </div>
        <div className="footer-info">
            <p>hghjgfsdhjfgdkhsghkd</p>
          <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
        </div>

    </footer>
  );
};

export default Footer;
