/* eslint-disable no-unused-vars */

import React, { useState } from 'react';

import Button from '../Elements/Button';
import { AdData, stages, tools } from '../../dummy';
import { AdStyles } from './styles';
import { ManurePopup } from '../Elements'


const Ad = () => {
  const [ openBar, setOpenBar ] = useState(false);

  return (
    <div className={AdStyles.container}>
      <div className={AdStyles.firstCont}>
        {AdData.map((data, index) => (
          <div key={index} className={AdStyles.ingredients}>
            <p className='font-semibold'>{data.title}
              <span className={AdStyles.span}>({data.subInfo})</span>
            </p>
            <div className={AdStyles.iconCont}>
              <span className={AdStyles.iconSpan}
                style={{background: `${data.color}`}}>
                <img src={data.imgPath} alt="seed bag" width={40} />
              </span>
              <p className={`${index === 1 && 'font-normal'} ${AdStyles.total}`}>{data.total}</p>
            </div>
          </div>
        ))}

        <div className={AdStyles.btnCont}>
          <div className={AdStyles.btn} >
            <Button 
              text='Buy now'
              bgColor='#00A642'
              otherStyles={AdStyles.btn_1_styles}
              handleClick={() => setOpenBar(true)}
            />
            <Button 
              text='Watch Ad'
              bgColor='#3D4917'
              otherStyles={`${AdStyles.btn_1_styles} ml-2`}
            />
          </div>
          <p className='text-sm'>Proceeds go to Planters Organization</p>
        </div>

        <div className={AdStyles.extraSeeds}>
          <img src="./images/seeds.png" alt="seeds" />
          <div className={AdStyles.extraSeedText}>
            <p className='font-semibold'>Get Extra and Rare Seeds</p>
            <p>Proceeds go to Planters Organization</p>
          </div>
          <Button 
              text='Buy now'
              bgColor='#3D4917'
              otherStyles={`${AdStyles.btn_1_styles} ml-2`}
            />
        </div>
      </div>

      <div className='w-full flex'>
        <img src="./images/card.png" alt="" className={AdStyles.banner}/>
        <div className={AdStyles.subscribe}>
          <p className='text-center'>Ads Support the Planters Organization. Subscribe to remove.</p>
          <Button 
            text='Subscribe'
            bgColor='#00A642'
            otherStyles={AdStyles.subscribeBtn}
          />
        </div>
      </div>

      <div className='flex'>
        <div  className={AdStyles.stagesCont}>
          <div>
            <h1 className={AdStyles.stageHeading}>Stages</h1>
            {stages.map((data, index) => (
              <div className={AdStyles.stage} key={index}>
                <img src={data.imgPath} alt={data.name.split('')[0]} width={20}/> 
                <p className='ml-3'>{data.name}</p>
              </div>
            ))}
          </div>
          <div>
            <h1 className={AdStyles.stageHeading}>Tools</h1>
              {tools.map((data, index) => (
              <div className={AdStyles.tools} key={index}>
                <img src={data.imgPath} alt={data.name.split('')[0]} width={20}/> 
                <p className='ml-3'>{data.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={AdStyles.nft}>
          <div>
            <h1 className='font-bold mb-2'>Upcoming Collectible</h1>
            <img src="./images/big_tree.jpg" alt="big tree" className='w-full h-[17.9375rem]'/>
          </div>
          <div className={AdStyles.nftText}>
            <h1 className={AdStyles.nftHeading}>Tree NFT</h1>
            <p className='text-sm'>
              The virtual twin of a real world sapling planted 
              by your efforts and contributions. This sapling would 
              be geotagged and its updates would be stored on hashgraph, 
              a distributed ledger to ensure transparency and authenticity,
              and will keep it monitorable and tamper-proof. 
            </p>
            <p className='my-4 text-lg'>12 days to go!</p>
            <Button 
              text='Mint now'
              bgColor='#9B9999'
              otherStyles={AdStyles.nftBtn}
            />
          </div>
        </div>
      </div>

     {openBar && <ManurePopup  setOpenBar={setOpenBar} />}
    </div>
  )
}

export default Ad