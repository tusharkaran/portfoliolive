import React from 'react'
import './Skillpage.css'
import { motion } from 'framer-motion'

function Skillpage() {
	return (
		<div class="main-Skillpage-division">
			<div class="headblock_title">Skills and Experience</div>
			<motion.div class="row-subpage" initial={{opacity:0 }}
            whileInView={{opacity:1 }}
            viewport={{once:true , amount:0.3}}
            transition={{duration:0.8 , delay: 0.3}}  >
				<div class="column-subpage">
					<div class="flex-item dev-wrapper">
						<div class="flex-item dev-wrapper">
							<h2 class="skills-heading"> <span class="sprite dev"></span> <span>Development</span> </h2> <ul>  <li class="dev-item">C++</li> <li class="dev-item">JavaScript</li> <li class="dev-item">React</li> <li class="dev-item">VUEJS</li><li class="dev-item">Handlebar</li>  <li class="dev-item">jQuery</li>   </ul> </div>
					</div>
				</div>
				
				  <div class="column first-division data-skill">
				  <span class="skills-heading">TOOLS AND SOFTWARE</span>
           			<ul class="skills-list"><li>Gulp</li><li>Google Analytics</li><li>Postman</li><li>Jira</li><li>Confluence</li><li>Adobe Expericence Manager</li></ul>
    			</div>
			</motion.div>
			<motion.div class="grid-container" initial={{opacity:0 }}
            whileInView={{opacity:1 }}
            viewport={{once:true , amount:0.3}}
            transition={{duration:0.8 , delay: 0.3}}  >
				<div class="item1">
					<span class="experience-heading">Professional Experience</span>
					<span class="experience-heading-title">Tata Consultancy Services</span>
					<span class="experience-heading-text">Working as frontend Developer</span>
				</div>
				<div class="item2">
					<span class="experience-heading">Acadamic Experience</span>
					<span class="experience-heading-title">Graphic Era University</span>
					<span class="experience-heading-text">Graduated in 2020 with B.TECH. in Computer Science</span>
				</div>
			</motion.div>
		</div>


	)
}

export default Skillpage