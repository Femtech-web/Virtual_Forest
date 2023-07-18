/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { navLinks } from '../../dummy';
import { navbarStyles } from './styles';
import { shorten} from '../../utilities/shortenAddress'
import userIcon from '../../assets/userTwo.svg'
import Button from '../Elements/Button'

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const wallet = localStorage.getItem('wallet');
  const [currentAccount, setCurrentAccount ] = useState(wallet);
  const { ethereum } = window;

  const connectWallet = async () => {
    try {
      if(!ethereum) return alert('please install metamask');

      const accounts = await ethereum.request({method: 'eth_accounts'});
      console.log(accounts);
      
      if(accounts.length){
        setCurrentAccount(accounts[0]);
        await JSON.stringify(localStorage.setItem('wallet', accounts[0]));
        
        navigate('/dashboard');
      } else {
        navigate('/')
        console.log('No ethereum accounts found')
      }
    } catch (error) {

      console.log(error);
      throw new Error('No Ethereum object.')
    }
  };

  return (
    <div className={navbarStyles.container}>
     <Link to='/'>
        <div>
          <img src='./logo.svg' alt="logo" />
        </div>
       </Link>
      <div className='flex'>
        <ul className={navbarStyles.ul}>
          {navLinks.map((link, index) => (
            <li key={index} className={navbarStyles.li}>
              <a href={location.pathname === '/' ? `#${link}` : null}>{link}</a> 
            </li>
          ))}
        </ul>
        <div className={navbarStyles.btnCont}>
          <Button 
            text={wallet ? shorten(wallet) : 'Connect Wallet'} 
            otherStyles={navbarStyles.btn}
            handleClick={connectWallet} 
          />
          <Link to='/dashboard'>
            <span className={navbarStyles.userImg}>
              <img src={wallet ? './images/profile.png' : userIcon} alt="user image" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar