import React from 'react'
import Timeline from '../Timeline'
import { motion } from 'framer-motion'


function Education() {

  return (
    <>
    <motion.div class="education-backgroud" 
      intial={{width:0}}
      animate={{width:"100%"}}
      exit={{x:window.innerWidth , transition:{duration:0.5}}}>
    <Timeline />
    </motion.div>
    </>
  )
}

export default Education