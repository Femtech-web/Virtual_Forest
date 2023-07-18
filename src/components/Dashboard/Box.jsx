/* eslint-disable no-unused-vars */

import React from 'react';

import { firstBox } from './styles';
import SecondBox from './SecondBox';
import FirstBox from './FirstBox';
import ThirdBox from './ThirdBox';

const Box = () => {
    const heads = ['My Forest', 'Badges', 'Friends'];

  return (
    <div className='flex flex-col ml-12 my-4'>
        <div>
            <ul className='flex'>
            {heads.map((head, index) => (
                <li key={index} className={`${index === 0 && `${firstBox.active}`} ${firstBox.navLinks}`}>
                {head}</li>
            ))}
            </ul>
        </div>
        <FirstBox />
        <SecondBox />
        <ThirdBox />
    </div>
  )
}

export default Box