import React from 'react'

import Skillpage from '../Skillpage'
import { motion } from 'framer-motion'


function Skillset() {
    return (
        <>
        <motion.div class="skill_sub_page"   intial={{width:0}}
   animate={{width:"100%"}}
   exit={{x:window.innerWidth , transition:{duration:0.5}}}>
       <Skillpage/>
       </motion.div>
        </>
       )
}

export default Skillset