import React, { FC } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Link} from 'react-router-dom';



//todo bootstrap navbar
//todo change a tags to links
//todo maybe have a theme changer option

const Navbar: FC = () => {

  return (
      <nav className="navbar navbar-expand-lg bg-danger sticky-top">
          <div className="container-fluid">
              <Link className="navbar-brand" to="/">Pokédex</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      {/* <li className="nav-item">
                          <Link className='nav-link' to={"/gen-2"}>Gen 2</Link>
                      </li> */}
                      <li className="nav-item"><Link className='nav-link' to="/gen-1">Gen I</Link></li>
                      <li className="nav-item"><Link className='nav-link' to="/gen-2">Gen 2</Link></li>
                      <li className="nav-item"><Link className='nav-link' to="/gen-3">Gen 3</Link></li>
                      <li className="nav-item"><Link className='nav-link' to="/gen-4">Gen 4</Link></li>
                      <li className="nav-item"><Link className='nav-link' to="/gen-5">Gen 5</Link></li>
                      <li className="nav-item"><Link className='nav-link' to="/gen-6">Gen 6</Link></li>
                      <li className="nav-item"><Link className='nav-link' to="/gen-7">Gen 7</Link></li>
                      <li className="nav-item"><Link className='nav-link' to="/gen-8">Gen 8</Link></li>
                      <li className="nav-item"><Link className='nav-link' to="/gen-9">Gen 9</Link></li>
                      <li className="nav-item"><Link className='nav-link' to="/special">Special</Link></li>
{/*                       
                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Generations
                          </a>
                          <ul className="dropdown-menu">
                              <li><Link className="dropdown-item" to="/gen-1">Gen I</Link></li>
                              <li><Link className="dropdown-item" to="/gen-2">Gen 2</Link></li>
                              <li><Link className="dropdown-item" to="/gen-3">Gen 3</Link></li>
                              <li><Link className="dropdown-item" to="/gen-4">Gen 4</Link></li>
                              <li><Link className="dropdown-item" to="/gen-5">Gen 5</Link></li>
                              <li><Link className="dropdown-item" to="/gen-6">Gen 6</Link></li>
                              <li><Link className="dropdown-item" to="/gen-7">Gen 7</Link></li>
                              <li><Link className="dropdown-item" to="/gen-8">Gen 8</Link></li>
                              <li><Link className="dropdown-item" to="/gen-9">Gen 9</Link></li>
                              <li><Link className="dropdown-item" to="/special">Special</Link></li>
                          </ul>
                      </li> */}
 
                  </ul>
              </div>
          </div>
      </nav>
  )
}

export default Navbar