/* eslint-disable no-unused-vars */

import React from 'react'
import { aboutStyles } from './styles'

const About = () => {
  return (
    <div className='mx-[10%] pb-[4%]' id='About'>
      <h1 className={aboutStyles.header}>About Us</h1>
      <div className='flex'>
        <div className={aboutStyles.sectionCont}>
          <h1 className={aboutStyles.sectionHeader}>Virtual Forest</h1>
          <p className={aboutStyles.sectionText}>
            Virtual forest is a web-based game 
            that enables users to plant trees in 
            the real world, while sitting on couch 
            or work-desk!
          </p>
        </div>
        <div className='w-1/2'>
          <img src="./images/virtual_forest.png" alt="logo" />
        </div>
      </div>

      <div className='flex'>
        <div className={aboutStyles.sectionCont2}>
          <div className={aboutStyles.flexEnd}>
            <span className={aboutStyles.imgSpan}>
              <img src="./images/nft3.jpg" alt="tree" className={aboutStyles.img}/>
            </span>
          </div>
        </div>
        <div className={aboutStyles.sectionCont3}>
          <h1 className={aboutStyles.sectionHeader}>Planters Organizations</h1>
          <p className={`${aboutStyles.sectionText} max-w-[80%]`}>
            Zuraverse is a novel Play-Earn-Conserve model 
            of narrative based Web3 gaming. We are very 
            passionate about nature conservation and thus 
            Virtual Forest would help immensely to establish 
            the PEC model .
          </p>
        </div>
      </div>

      <div className='flex'>
        <div className={aboutStyles.sectionCont}>
          <h1 className={aboutStyles.sectionHeader}>Zuraverse</h1>
          <p className={aboutStyles.sectionText}>
            Zuraverse is a novel Play-Earn-Conserve model 
            of Web3 gaming. All our games and experiences 
            are being made interoperable and thus Virtual 
            Forest would be an integral part of the ecosystem 
            to establish PEC model. 
          </p>
        </div>
        <div className={aboutStyles.doubleImg}>
          <span className={`${aboutStyles.nft} right-0 top-0`}>
            <img src="./images/nft1.jpg" alt="emblem" className={aboutStyles.img}/>
          </span>
          <span className={`${aboutStyles.nft} left-0 bottom-0`}>
            <img src="./images/nft2.jpg" alt="emblem" className={`${aboutStyles.img} h-full`}/>
          </span>
        </div>
      </div>
    </div>
  )
}

export default About