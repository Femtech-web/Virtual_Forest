/* eslint-disable no-unused-vars */

import React from 'react';

import { topBar } from '../../dummy';
import { firstBox } from './styles';

const FirstBox = () => {
  return (
    <div className={firstBox.container}> 
        {topBar.map((box, index) => (
            <div key={index} className={firstBox.firstCont}
                style={{ backgroundColor: `${box.bgColor}`}}>
                <div>
                    <h1 className='text-lg'>{box.Header}</h1>
                    <span className={firstBox.firstHeader}>{box.subHeader}</span>
                {index === 2 && <p className={firstBox.firstText}>{box.text}</p>}
                </div>
                <div className={firstBox.firstImgCont}>
                    <span className={firstBox.imgSpan}>
                    <img src="./images/leaf.png" alt="leaf" /></span>
                </div>
            </div>
        ))}
    </div>
  )
}

export default FirstBox