/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';

import { faqStyles } from './styles';
import { faq } from '../../dummy';

const Bar = ({ question, answer }) => {
  const [openBar, setOpenBar ] = useState(false);

  return(
    <div className={faqStyles.barCont(openBar)} id='FAQ'>
      <div className={faqStyles.question}>
        <h2 className='w-[60%]'>{question}</h2>
        {openBar 
        ? <button className={faqStyles.btn1}
        onClick={() => setOpenBar(false)}>-</button> 
        : <button className={faqStyles.btn2}
        onClick={() => setOpenBar(true)}>+</button>}
      </div>
      {openBar 
      && <p className={faqStyles.answer(openBar)}>
        {answer}
      </p>}
    </div>
  )
}

const FAQ = () => {

  return (
    <div className={faqStyles.container}>
      <div>
        <h1 className={faqStyles.header}>Frequently Asked Questions</h1>
        <div className='Grid-container'>
          {faq.map((data, index) => (
            <Bar key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ