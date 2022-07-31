import React , { useRef ,useEffect }from 'react';
import './Myproject.css'
import { motion } from 'framer-motion';
import {useLocation} from 'react-router-dom';



function Myprojects() {
  const refs = useRef([])



  const location = useLocation();

  useEffect(()=> {
    if (location?.state?.key) {  
        if (location?.state?.key) {
          refs.current[location?.state?.key].scrollIntoView({block: "center"});
        }
        else{
        window.scrollTo({top:0,left:0, behavior: "smooth"});
        }
      }
}, [location,])

  return (

    <div class="myprojects-data">
            <motion.div class="project-container"   initial={{opacity:0 }}
            whileInView={{opacity:1 }}
            viewport={{once:true , amount:0.3}}
            transition={{duration:0.8 , delay: 0.3}} id="1" ref={(element) => {refs.current[1] = element}}   >
        <div class="project">
          <div class="project-content reverse-content">
            <div class="project-label reverse-label">Magento</div>
            <h4 class="project-title reverse-title">Mancini E- commerce website</h4>
            <div class="project-details">
              <p> <li>Customized pages based on the client requirement.</li>
                <li>Integrated the third party modules and customized them to
                  meet the theme requirement .</li>
                <li>verified the pages and components are Americans with
                  Disabilities Act Standards for Accessible Design(ADA) compliant.</li>
                <li> Worked with the real-time Frog API for sales order tracking and
                  history.</li></p>
              <ul class="reverse-item">
                <li>HTML</li>
                <li>LESS</li>
                <li>jQuery</li>
                <li>PHP</li>
              </ul>
            </div>
          </div>
          <div class="project-img reverse-img">
            <img src="/images/manciniproject.jpg" alt="" />
          </div>
        </div>
      </motion.div>
      <motion.div class="project-container"  initial={{opacity:0 }}
            whileInView={{opacity:1 }}
            viewport={{once:true , amount:0.3}}
            transition={{duration:0.8 , delay: 0.3}}  id="2" ref={(element) => {refs.current[2] = element}} >
        <div class="project">
          <div class="project-content reverse-content">
            <div class="project-label reverse-label">React</div>
            <h4 class="project-title reverse-title">Personal Portfolio</h4>
            <div class="project-details">
            <p> 
                <li>Implement on reactjs and firebase.</li>
                <li>verified the pages and components are Americans with
                  Disabilities Act Standards for Accessible Design(ADA) compliant.</li>
                <li> Worked with the real-time Frog API for sales order tracking and
                  history.</li></p>
              <ul class="reverse-item">
                <li>React</li>
                <li>Firebase</li>
                <li>Motion</li>
              </ul>
            </div>
          </div>
          <div class="project-img reverse-img">
            <img src="/images/8085.jpg" alt="" />
          </div>
        </div>
      </motion.div>


      <motion.div class="project-container"   initial={{opacity:0 }}
            whileInView={{opacity:1 }}
            viewport={{once:true , amount:0.3}}
            transition={{duration:0.8 , delay: 0.3}} id="3" ref={(element) => {refs.current[3] = element}} >
        <div class="project">
          <div class="project-content ">
            <div class="project-label">Adobe Experience Manager , Magento , VueJS</div>
            <h4 class="project-title">Australian Institute of Company Director(E-commerce
              Website)</h4>
            <div class="project-details">
              <p> <li>Developed and enhanced the features of the website as per the
                client's requirements.
              </li>
                <li>Implemented the asynchronous code using Javascript functions
                  like callbacks and promises.</li>
                <li>Integrated different plugins and customized them to meet the
                  requirement.</li>
                <li>Implement Google Analytics and GDPR in the Project</li></p>
              <ul>
                <li>HTML</li>
                <li>SCSS</li>
                <li>Javascript</li>
                <li>VueJS</li>
              </ul>
            </div>
          </div>
          <div class="project-img">
            <img src="/images/aicd.jpg" alt="" />
          </div>

        </div>
      </motion.div>
      <motion.div class="project-container"   initial={{opacity:0 }}
            whileInView={{opacity:1 }}
            viewport={{once:true , amount:0.3}}
            transition={{duration:0.8 , delay: 0.3}} id="4" ref={(element) => {refs.current[4] = element}} >
        <div class="project">
          <div class="project-content reverse-content">
            <div class="project-label reverse-label">IOT</div>
            <h4 class="project-title reverse-title">Real Time Air pollution monitoring System</h4>
            <div class="project-details">
              <p>Checked the quality of air in ppm with the help of component such
                as Arduino,Gas sensor,ESP module and GSM.Sending the data to the ThinkSpeak server by hitting the api with
                the parameter.</p>
              <ul class="reverse-item">
                <li>Ardunio</li>
                <li>Sensor</li>
                <li>ESP Module</li>
                <li>GSM</li>
                <li>ThingSpeak Server</li>
              </ul>
            </div>
          </div>
          <div class="project-img reverse-img">
            <img src="images/img-9.jpg" alt="" />
          </div>
        </div>
      </motion.div>
      <motion.div class="project-container"   initial={{opacity:0 }}
            whileInView={{opacity:1 }}
            viewport={{once:true , amount:0.3}}
            transition={{duration:0.8 , delay: 0.3}} id="5" ref={(element) => {refs.current[5] = element}} >
        <div class="project">
          <div class="project-content">
            <div class="project-label ">PYTHON</div>
            <h4 class="project-title ">Drivers Drowsinees Detection</h4>
            <div class="project-details">
              <p>Implemented using openCV library in python by image processing.Lib library to get 68 landmarks on faces and calculates the Euclidean distance of eyelid to detect drowsiness.Playsound libray to implement the buzzer to aware the Driver when feeling sleep.</p>
              <ul >
                <li>OpenCv</li>
                <li>Spicy</li>
                <li>Numpy</li>
                <li>Lib</li>
                <li>Playsound</li>
              </ul>
            </div>
          </div>
          <div class="project-img ">
            <img src="images/img-9.jpg" alt="" />
          </div>
        </div>
      </motion.div>
      <motion.div class="project-container"  initial={{opacity:0 }}
            whileInView={{opacity:1 }}
            viewport={{once:true , amount:0.3}}
            transition={{duration:0.8 , delay: 0.3}}  id="6" ref={(element) => {refs.current[6] = element}} >
        <div class="project">
          <div class="project-content reverse-content">
            <div class="project-label reverse-label">C++</div>
            <h4 class="project-title reverse-title">8085 Microprocessor stimulator</h4>
            <div class="project-details">
              <p>Covers implementation of subjects like OOPS using C++, microprocessors, data structures
                Emulator supports several arithmetic, increment/decrement and
                loading commands belonging to the 8-bit and 16-bit domain.
                All the calculations were in Hexadecimal.</p>
              <ul class="reverse-item">
                <li>C++</li>
                <li>8085 Microprocessor</li>
                <li>OOPS</li>
              </ul>
            </div>
          </div>
          <div class="project-img reverse-img">
            <img src="images/8085.jpg" alt="" />
          </div>
        </div>
      </motion.div>
    </div>
    
  
  )
}

export default Myprojects