/* eslint-disable no-unused-vars */

import React from 'react';

import meter from '../../assets/meter.svg';
import Button from '../Elements/Button';
import { firstBox, secondBox } from './styles';

const SecondBox = () => {
  return (
    <div className={firstBox.container}>
        <div className={secondBox.boxContainer}>
            <h1 className={secondBox.header}>Plants&apos;s Health</h1>
            <div className={secondBox.innerCont}>
                <div className={secondBox.imgCont}>
                    <img src={meter} alt="meter" className='mb-4'/>
                    <p>Optimum</p>
                </div>
                <Button 
                    text='Review'
                    otherStyles={secondBox.btn}
                />
            </div>
        </div>

        <div className={secondBox.boxContainer}>
            <h1 className={secondBox.header}>Collectibles Earned</h1>
            <div className={`${secondBox.innerCont} bg-palette6`}>
                <div>
                    <img src='./images/soleLeaf.png' alt="leaf" className='mb-4'/>
                </div>
                <p className={`${secondBox.header} mb-0`}>Tree NFT</p>
            </div>
        </div>

        <div className={secondBox.boxContainer}>
            <h1 className={secondBox.header}> Rewards</h1>
            <div className={`${secondBox.innerCont}bg-[#AAED81]`}>
                <div className='p-8'>
                    <h1 className={`${secondBox.header2}`}>Total Carbon Offset</h1>
                </div>
                <p className={secondBox.header3}>2.2 T</p>
            </div>
        </div>
    </div>

  )
}

export default SecondBox