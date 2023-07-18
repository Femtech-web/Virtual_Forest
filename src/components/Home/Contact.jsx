/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';

import { contacts, inputs } from '../../dummy';
import { contactStyles } from './styles';
import Button from '../Elements/Button';
import dropdown from '../../assets/dropdown.svg';


const Contact = () => {

  return (
    <div className={contactStyles.container} id='Contact'>
      <div className='flex'>
        <div className={`${contactStyles.sectionCont} pt-[7%]`}>
          <h1 className={contactStyles.header}>Let’s Talk</h1>
          <p className='w-[70%] text-sm'>
            Have an interesting idea for conservation, 
            sustainability or gaming? Let’s get in touch
            and build a better future. 
          </p>
          
          {contacts.map((contact, index) => (
            <div key={index} className='mt-10'>
              <h2 className={contactStyles.smallHeader}>{contact.header}</h2>
              {contact.children.map((child, index) => (
                <p key={index} className='mb-3'>{child}</p>
              ))}
            </div>
          ))}
        </div>

        <div className={`${contactStyles.sectionCont} pl-6`}>
          {inputs.map((input, index) => (
          (index !== 2 )
          ? (<div key={index} className='mt-4'>
              <label className={contactStyles.label}>{input.name}</label>
              <input type={input.type} className={contactStyles.input}/>
            </div>)
          : <div key={index} className='mt-4'>
            <label className={contactStyles.label}>{input.name}</label>
            <div className='relative'>
              <input type={input.type}
              placeholder={input.placeholder} className={contactStyles.input}/>
              <span className={contactStyles.dropIcon}>
                <img src={dropdown} alt="dropdown icon" />
              </span>
            </div>
          </div>
          ))}
          <div className='mt-4'>
            <label className={contactStyles.label}>message</label>
            <textarea className={contactStyles.textArea}></textarea>
          </div>
          <Button 
            text='Submit'
            submit={true}
            color='white'
            bgColor='black'
            otherStyles={contactStyles.btn}
          />
        </div>
      </div>
    </div>
  )
}

export default Contact