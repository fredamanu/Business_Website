import React from 'react'
import {motion} from "framer-motion"

import { calendar } from '../../assets'
import "./Dashboard.scss"

const DashBoard = () => {
  return (
    <motion.div className="app__dash__container"  whileInView={{y: [100, 50, 0], opacity:[0, 1]}}
    transition={{duration: 1}}>
    <div className="app__dash__txt__container">
      <h4>Pre-built Dashboard Templates</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.</p>
    </div>
    <div className="app__dash__img__container">
      <img src={calendar} alt="chart"/>
    </div>
  </motion.div>
  )
}

export default DashBoard