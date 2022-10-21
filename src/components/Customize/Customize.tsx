import React from 'react'
import {motion} from "framer-motion"

import { barchart } from '../../assets'

import "./Customize.scss"

const Customize = () => {
  return (
    <motion.div className="app__cust__container"  whileInView={{y: [100, 50, 0], opacity:[0, 1]}}
    transition={{duration: 1}}>
        <div className="app__cust__img__container">
        <img src={barchart} alt="barchart"/>
      </div>
      <div className="app__cust__txt__container">
        <h4>Fully customizable to address your needs <br/> & Widget Alerts</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.</p>
      </div>
    
    </motion.div>
  )
}

export default Customize