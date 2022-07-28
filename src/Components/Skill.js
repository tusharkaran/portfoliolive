import React ,{  useEffect } from 'react'
import TagCloud from 'TagCloud'
import './Skill.css'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
// import 'bootstrap/dist/css/bootstrap.min.css'

function Skill() {
    useEffect(() => {
       
    
   
     const myTags = [
        'JavaScript', 'CSS', 'HTML',
        'C', 'C++', 'React',
        'VueJs', 'LESS', 'SCSS',
       'React', 'OpenCV',
        'jQuery','AEM' , 'Magento' , 'PHP' 
    ];
    
   
    TagCloud('.content', myTags,{
    
      // radius in px
      radius: 200,
    
      // animation speed
      // slow, normal, fast
      maxSpeed: 'normal',
      initSpeed: 'normal',
    
      // 0 = top
      // 90 = left
      // 135 = right-bottom
      direction: 135,
      
      // interact with cursor move on mouse out
      keep: true
      
    });
   
    });

  return (
 <div>
    <div class="columns main-division">

       <h2 className='skill-heading'>My Skills</h2>
    <div class="column first-division">
    <span className='text-skill'> <p>For over a decade I had many opportunities to work in a vast spectrum of web technologies what let me gather a significant amount of various experience.</p><p>
  Working for companies and individuals around the globe I met and learnt from amazing and ambitious people.</p><p>Here are a few technologies I’ve been working with recently:</p></span>
  <ul class="skills-list"><li>JavaScript (ES6+)</li><li>Vuejs</li><li>React</li><li>Magento</li><li>Adobe Experience Manager</li></ul>
    </div>

    <div class="column sphere-skill">
      <span className="content"></span>
   </div>  
 </div>
   <div class= "view_page_btn"><Link to ="/skillset" className="button-rotating">
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   View Skillset
   </Link></div>
   </div>

  )
}

export default Skill