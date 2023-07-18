/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';

import closeBtn from '../../assets/closeBtn.svg';
import line1 from '../../assets/line1.svg';
import line2 from '../../assets/line2.svg';
import increase from '../../assets/increase.svg';
import decrease from '../../assets/decrease.svg';
import { manureStyles } from './styles';

const ManurePopup = ({ setOpenBar }) => {
    const [amount, setAmount ] = useState(1);

    const increaseAmount = () => {
        setAmount(amount + 1)
    }

    const decreaseAmount = () => {
        if(amount > 1){
        setAmount(amount - 1)
        }
    }

  return (
    <div className={manureStyles.container}>
        <div className={manureStyles.subContainer}>
            <div className={manureStyles.topCont}>
                <span className={manureStyles.btnSpan} onClick={() => setOpenBar(false)}>
                    <img src={closeBtn} alt="close button" />
                    <img src={line1} alt="line" width='15px' className={manureStyles.btn}/>
                    <img src={line2} alt="line" width='15px' className={manureStyles.btn}/>
                </span>
            </div>

            <div className={manureStyles.bottomCont}>
                <div className={manureStyles.innerCont}>
                    <h1 className={manureStyles.header}>Manure</h1>
                    <div className={manureStyles.imgCont}>
                        <img src="./images/fertilizer.png" alt="" width='80px' />
                    </div>
                    <p className={manureStyles.text}>Speeds up the Growth by 1 day!</p>

                    <div className={manureStyles.payCont}>
                        <p className={manureStyles.text}>No. of Manure Bags</p>
                        <div className={manureStyles.payInnerCont}>
                            <span className={manureStyles.amountSpan}>{amount}</span>
                            <div className={manureStyles.amountBtnCont}>
                                <img src={increase} alt="increase button" 
                                className={manureStyles.amountBtn} onClick={increaseAmount}/>
                                <img src={decrease} alt="decrease button" 
                                className={manureStyles.amountBtn} onClick={decreaseAmount}/>
                            </div>
                        </div>
                    </div>

                    <div className={manureStyles.payCont}>
                        <p className={manureStyles.text}>Total Amount: $0</p>
                        <button className={manureStyles.payBtn}>pay</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ManurePopup