import React from 'react'
import Myprojects from '../Myprojects'
import { motion } from 'framer-motion'

function Projects() {
  return (
    <>
    <motion.div class="Myproject_sub_page"   intial={{width:0}}
   animate={{width:"100%"}}
   exit={{x:window.innerWidth , transition:{duration:0.5}}}>
      <Myprojects/>
   </motion.div>
   
    </>
  )
}

export default Projects