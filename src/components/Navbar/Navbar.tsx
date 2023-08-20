import './Navbar.scss';
import Container from '../Container/Container';

import logo from '../../images/logo.svg';

import {useState} from 'react';

const Navbar: React.FC = () => {

  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="navbar">
      <Container>
        <div className="navbar__content">
          <img src={logo} alt="logo" className="navbar__logo" />
          <button className={`navbar__hamburger ${open ? 'navbar__hamburger-open' : ''}`} onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={`navbar__menu ${open ? 'navbar__menu-open' : ''}`}>
            <div>
              <div className="navbar__links">
                <div className="navbar__links-pages">
                  <a href="/" className="navbar__links-item">Features</a>
                  <a href="/" className="navbar__links-item">Pricing</a>
                  <a href="/" className="navbar__links-item">Resources</a>
                </div>
                <div className="navbar__links-controls">
                  <a href="/" className="navbar__links-item">Login</a>
                  <button className="btn btn-rounded navbar__btn">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;