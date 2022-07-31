import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { motion } from 'framer-motion';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
        <Link  
           to='/' className='navbar-logo' onClick={closeMobileMenu} >
           TK
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <motion.li className='nav-item'
              initial={{opacity:0 , translateX:-30,translateY:-30}}
              whileInView={{opacity:1 , translateX:0,translateY:0}}
              transition={{duration:0.5 , delay:0.2}} 
            >
            <Link to='/' className='nav-links effect-shine'  onClick={closeMobileMenu}>            
                <div class="split-text-wrapper">
                  <div class="upper-text">
                    <span>HOME</span>
                  </div>
                  <div class="lower-text">
                    <span>HOME</span>
                  </div>
                </div>
              </Link>
            </motion.li>
            <motion.li className='nav-item'   initial={{opacity:0 , translateX:-30,translateY:-30}}
            whileInView={{opacity:1 , translateX:0,translateY:0}}
            viewport={{once:false , amount:0.5}}
            transition={{duration:0.5 , delay: 0.3}}>
            
            <Link
          
            
                to='/skillset'
                className='nav-links effect-shine'
                data-name="SKILLSET"
                onClick={closeMobileMenu}
              >
                  <div class="split-text-wrapper">
                  <div class="upper-text">
                    <span>SKILLSET</span>
                  </div>
                  <div class="lower-text">
                    <span>SKILLSET</span>
                  </div>
                </div>
              
              </Link>
            
            </motion.li>
         

            <motion.li  className='nav-item'   initial={{opacity:0 , translateX:-30,translateY:-30}}
            whileInView={{opacity:1 , translateX:0,translateY:0}}
            viewport={{once:false , amount:0.5}}
            transition={{duration:0.5 , delay: 0.4}}>
         
            <Link      
                to='/projects'
                className='nav-links effect-shine'
                data-name="PROJECTS"
                onClick={closeMobileMenu}
              >
                  <div class="split-text-wrapper">
                  <div class="upper-text">
                    <span>PROJECTS</span>
                  </div>
                  <div class="lower-text">
                    <span>PROJECTS</span>
                  </div>
                </div>
               
               
              </Link>
            
            </motion.li>
            <motion.li  className='nav-item'  initial={{opacity:0 , translateX:-30,translateY:-30}}
            whileInView={{opacity:1 , translateX:0,translateY:0}}
            viewport={{once:false , amount:0.5}}
            transition={{duration:0.5 , delay: 0.4}}>
            <a   
              class="button-rotating Resume " 
              onClick={closeMobileMenu} href="/files/resume.pdf" download>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          RESUME
      
            </a>
            
            </motion.li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>RESUME</Button>} */}
      
        </div>
      </nav>
    </>
  );
}

export default Navbar;