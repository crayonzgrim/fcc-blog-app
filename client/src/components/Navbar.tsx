import { Link } from 'react-router-dom';
import LogoImg from '../assets/logo.png';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={LogoImg} alt="logo" />
        </div>
        <div className="links">
          <Link to={'/?cat=art'} className="link">
            <h6>ART</h6>
          </Link>
          <Link to={'/?cat=science'} className="link">
            <h6>SCIENCE</h6>
          </Link>
          <Link to={'/?cat=technology'} className="link">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link to={'/?cat=cinema'} className="link">
            <h6>CINEMA</h6>
          </Link>
          <Link to={'/?cat=design'} className="link">
            <h6>DESIGN</h6>
          </Link>
          <Link to={'/?cat=food'} className="link">
            <h6>FOOD</h6>
          </Link>
          <span>John</span>
          <span>Logout</span>
          <span className="write">
            <Link to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
