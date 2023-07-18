/* eslint-disable no-unused-vars */

import React from 'react';
import { Link } from 'react-router-dom';

import board from '../../assets/coverImage.svg';
import Box from './Box';
import { iconPath } from '../../dummy';
import { iconStyles } from './styles';
import User from './user';

const Profile = () => {

  return (
    <div className='inter'>
        <div className={iconStyles.imgCont}>
            <img src={board} alt="cover image" />
        </div>
        <div className='flex px-[2%]'>
            <div>
                {iconPath.map((icon, index) => (
                    index === 2 
                    ? <span key={index} className={iconStyles.iconSpan}>
                        <img src={icon} alt="post icon" className={iconStyles.icon}/>
                     </span>
                    : <Link key={index} to={index === 0 && '/'}>
                        <img src={icon} alt={icon.split('/')[2]} 
                        className={`${iconStyles.icon} mt-6`} />
                    </Link>
                ))}
            </div>
           <User />
           <Box />
        </div>
    </div>
  )
}

export default Profile