import React from 'react';
import Logo from '../assets/image/logo transparent.png';
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <style jsx>
        {`
          @media only screen and (max-width: 1000px) {
            .spacer {
              display: none;
            }
          }
        `}
      </style>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid mx-5">
          <a className="navbar-brand" onClick={() => navigate('/home')} href="home">
            <img src={Logo} height={60} alt="company-logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="spacer mx-3 px-5"></div>
          <div className="collapse navbar-collapse pt-2 row" id="navbarSupportedContent">
            <div className="container col-12">
              <ul className="navbar-nav mx-auto mx-2 mb-lg-0 ">
                <li className="nav-item mx-2">
                  <button className="btn btn-light rounded w-100" onClick={() => navigate('/home')}>
                    Home
                  </button>
                </li>
                <li className="nav-item mx-2">
                  <button className="btn btn-light rounded w-100 px-2" onClick={() => navigate('/contactUs')}>
                    Contact Us
                  </button>
                </li>
                <li className="nav-item mx-2 dropdown">
                  <button className="btn btn-light rounded w-100 dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    Management System
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="iso9001" onClick={() => navigate('/iso9001')}>
                        ISO 9001
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="iso14001" onClick={() => navigate('/iso14001')}>
                        ISO 14001{' '}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="iso22000" onClick={() => navigate('/iso22000')}>
                        ISO 22000{' '}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="iso27001" onClick={() => navigate('/iso27001')}>
                        ISO 27001{' '}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="iso37001" onClick={() => navigate('/iso37001')}>
                        ISO 37001{' '}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="iso45001" onClick={() => navigate('/iso45001')}>
                        ISO 45001 / SMK3 PP 50{' '}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item mx-2">
                  <button className="btn btn-light rounded w-100" onClick={() => navigate('/training')}>
                    Training
                  </button>
                </li>
                <li className="nav-item mx-2">
                  <button className="btn btn-light rounded w-100" onClick={() => navigate('/sni')}>
                    SNI
                  </button>
                </li>
                <li className="nav-item ml-2">
                  <button className="btn btn-light rounded w-100" onClick={() => navigate('/cdakb')}>
                    CDAKB
                  </button>
                </li>
              </ul>
            </div>
            <div className="container col-12">
              <ul className="navbar-nav m-2 mb-lg-1 ">
                <li className="nav-item mx-2">
                  <button className="btn btn-light rounded w-100" onClick={() => navigate('/sedexSmeta')}>
                    SEDEX [SMETA]
                  </button>
                </li>
                <li className="nav-item mx-2">
                  <button className="btn btn-light rounded w-100" onClick={() => navigate('/gallery')}>
                    GALLERY
                  </button>
                </li>
                <li className="nav-item mx-2">
                  <button className="btn btn-light rounded w-100" onClick={() => navigate('/news')}>
                    NEWS UPDATE
                  </button>
                </li>
                <li className="nav-item mx-2">
                  <button className="btn btn-light rounded w-100" onClick={() => navigate('/fcca')}>
                    FCCA
                  </button>
                </li>
                <li className="nav-item mx-2">
                  <button className="btn btn-light rounded w-100" onClick={() => navigate('/artikel')}>
                    ARTIKEL
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
