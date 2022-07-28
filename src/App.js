import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Animaterouter from './Aminaterouter'
// import firebase from './Firebase';
// import { collection, getDocs } from "firebase/firestore"; 

import Footer from './Components/Footer';





function App() {


  // getDocs(collection(firebase, "developers")).then(function(querySnapshot) {
  //   // logic
  //   querySnapshot.forEach((doc) => {
  //     console.log(`${doc.id} => ${doc.data()}`);
  //   });
  //   console.log("abc",querySnapshot);
  // });
  return (
    <Router>
      <Navbar />
      <div orientation="right" class="side__StyledSideElement-sc-1duznzb-0 jSIwrL"><div class="email__StyledLinkWrapper-sc-2epoq-0 jJFfEJ fade-enter-done"><a href="mailto:tusharkaran99@gmail.com">tusharkaran99@gmail.com</a></div></div>
      <div orientation="left" class="side__StyledSideElement-sc-1duznzb-0 hOvuuP">
        <ul class="social__StyledSocialList-anu6nt-0 dVLQAC fade-enter-done">
         
          <li><a href="https://www.instagram.com/tusharkaran99/" aria-label="Instagram" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-instagram"><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a></li>
          <li><a href="https://www.linkedin.com/in/developer-tushar-karan/" aria-label="Linkedin" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-linkedin"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a></li>
        </ul>
      </div>
       <Animaterouter/>
      <Footer />
    </Router>
  );
}

export default App;