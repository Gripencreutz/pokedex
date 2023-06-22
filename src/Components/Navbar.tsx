import React, { FC, useEffect, useState } from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import '../styles/navbar.scss'
import {Link} from 'react-router-dom';



const Navbar: FC = () => {
    // navbar - expand - lg
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.currentTarget.classList.toggle("open")
        
        if(isOpen === true){
            setIsOpen(false)
        } else {

            setIsOpen(true)
        }
    }

    const handleItemClick = () => {
        
        const icon = document.querySelector('.hamburgerIcon');
        icon?.classList.toggle("open")
        setIsOpen(false);
    };

    const navItems = () => {
        const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
        let items = []
        for (let i = 0; i < 9; i++) {
           
            items.push(<li onClick={handleItemClick} className="item"><Link to={`/gen-${romanNumerals[i]}`}>Gen {romanNumerals[i]}</Link></li>)
        }
        return items
    }

  return (
    <nav className='navbar'>
          <Link onClick={() => handleClick} className='logo' to="/">ScorchDex</Link>
          <div className='hamburgerIcon' onClick={handleClick}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
          </div>
          {/* <button onClick={handleClick}>X</button> */}
          <div className='hiddenContainer' style={ isOpen === true ? { maxHeight: "120px"} : {}}>
              <ul className='items_wrapper'>
                  {navItems()}
                  <li onClick={handleItemClick} className="nav-item"><Link className='nav-link' to="/special">Special</Link></li>
              </ul>
        </div>
       
    </nav>
    //   <nav className="navbar bg-danger sticky-top">
    //       <div className="container-fluid">
    //           <Link className="navbar-brand" to="/">ScorchDex</Link>
    //           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //               <span className="navbar-toggler-icon"></span>
    //           </button>
    //           <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //                   {navItems()}
    //                   <li className="nav-item"><Link className='nav-link' to="/special">Special</Link></li>
    //                 {/*                       
    //                   <li className="nav-item dropdown">
    //                       <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //                           Generations
    //                       </a>
    //                       <ul className="dropdown-menu">
    //                           <li><Link className="dropdown-item" to="/gen-1">Gen I</Link></li>
    //                           <li><Link className="dropdown-item" to="/gen-2">Gen 2</Link></li>
    //                           <li><Link className="dropdown-item" to="/gen-3">Gen 3</Link></li>
    //                           <li><Link className="dropdown-item" to="/gen-4">Gen 4</Link></li>
    //                           <li><Link className="dropdown-item" to="/gen-5">Gen 5</Link></li>
    //                           <li><Link className="dropdown-item" to="/gen-6">Gen 6</Link></li>
    //                           <li><Link className="dropdown-item" to="/gen-7">Gen 7</Link></li>
    //                           <li><Link className="dropdown-item" to="/gen-8">Gen 8</Link></li>
    //                           <li><Link className="dropdown-item" to="/gen-9">Gen 9</Link></li>
    //                           <li><Link className="dropdown-item" to="/special">Special</Link></li>
    //                       </ul>
    //                   </li> */}
    //               </ul>
    //           </div>
    //       </div>
    //   </nav>
  )
}

export default Navbar