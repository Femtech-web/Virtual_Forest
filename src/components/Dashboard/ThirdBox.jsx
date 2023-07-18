/* eslint-disable no-unused-vars */

import React from 'react';

import Button from '../Elements/Button';
import { firstBox, secondBox, thirdBox } from './styles';

const ThirdBox = () => {
  return (
    <div className={firstBox.container}>
        <div className={`${secondBox.innerCont} bg-[#E6DA4D] mr-12`}>
            <div className={thirdBox.topCont}>
                <h1 className={`${secondBox.header2} mb-0`}>Total Contribution</h1>
                <p>Towards Planters</p>
            </div>

            <div className={thirdBox.bottomCont}>
                <p className={secondBox.header3}>$169</p>
                <Button 
                    text='Breakdown'
                    otherStyles={secondBox.btn}
                />
            </div>
        </div>

        <div className={`${secondBox.innerCont} bg-[#A7F3D0] mr-12`}>
            <img src='./images/leaf.png' alt="leaf" className='mb-4 w-[5.3125rem]'/>
            <div className={thirdBox.bottomCont}>
                <p className={secondBox.header3}>Garden NFT</p>
                <Button 
                    text='Mint Now'
                    otherStyles={secondBox.btn}
                />
            </div>
        </div>

        <div className={thirdBox.innerCont}>
            <p className={thirdBox.header}>ReFi Rewards From Next Level</p>
        </div>
    </div>
  )
}

export default ThirdBox