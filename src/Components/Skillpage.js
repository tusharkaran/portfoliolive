import React from 'react'
import './Skillpage.css'

function Skillpage() {
	return (
		<div class="main-Skillpage-division">
			<div class="headblock_title">Skills and Experience</div>
			<div class="row-subpage">
				<div class="column-subpage">
					<div class="flex-item dev-wrapper">
						<div class="flex-item dev-wrapper">
							<h2 class="skills-heading"> <span class="sprite dev"></span> <span>Development</span> </h2> <ul>  <li class="dev-item">C++</li> <li class="dev-item">JavaScript</li> <li class="dev-item">React</li> <li class="dev-item">VUEJS</li><li class="dev-item">Handlebar</li>  <li class="dev-item">jQuery</li>   </ul> </div>
					</div>
				</div>
				<div class="column-subpage">

					<ul class="tool_software">
						<span class="skills-heading">TOOLS AND SOFTWARE</span>
						<li>Adobe Expericence Manager</li>
						<li>Adobe Magento Commerece</li>
						<li>Gulp</li>
						<li>Google Analytics</li>
						<li>Firebase</li>
						<li>Postman</li>
						<li>Jira</li>
						<li>Confluence</li>
					</ul>
				</div>
			</div>
			<div class="grid-container">
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
			</div>
		</div>


	)
}

export default Skillpage