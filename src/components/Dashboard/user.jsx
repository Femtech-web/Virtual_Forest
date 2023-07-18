/* eslint-disable no-unused-vars */

import React from 'react';

import { userStyles } from './styles';
import { stats } from '../../dummy';
import Button from '../Elements/Button';
import location from '../../assets/location.svg'

const User = () => {
  return (
    <div className={userStyles.container}>
        <div className={userStyles.innerCont}>
            <div className={userStyles.imgCont}>
                <div className={userStyles.imgInnerCont}>
                    <img src="./images/profile.png" 
                    alt="profile picture" className='object-cover'/>
                </div>
            </div>
            <div className='mt-3'>
                <h1 className={userStyles.name}>Melissa peters</h1>
                <p className={userStyles.title}>Interior designer</p>
                <div className={userStyles.locationCont}>
                    <img src={location} alt="location icon" className='w-[1rem]'/>
                    <p>Lagos, Nigeria</p>
                </div>
            </div>
        </div>
        <div className={userStyles.stats}>
            {stats.map((stat, index) => (
                <div key={index} className={userStyles.statCont}>
                    <h1 className={userStyles.statText}>{stat.text}</h1>
                    <p className={userStyles.statSubtext}>{stat.subText}</p>
                </div>
            ))}
        </div>
        <div className={userStyles.btnCont}>
            <Button 
                text='Edit Profile'
                otherStyles={userStyles.btn}
            />
        </div>
    </div>

  )
}

export default User