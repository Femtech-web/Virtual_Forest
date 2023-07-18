/* eslint-disable no-unused-vars */

import React from 'react';

import { mapStyles } from './styles';
import boardSvg from '../../assets/board.svg'
import  location from '../../assets/location.svg'
import clock from '../../assets/clock.svg'
import circle from '../../assets/circle.svg'

const Map = () => {
  return (
    <div className='relative'>
      <img src="/images/map.jpg" alt="map" />
      <div className={mapStyles.btnCont}>
       <div className={mapStyles.mapBtn('bg-palette4 text-palette2 rounded-tl-xl rounded-bl-xl')}>User Map</div>
       <div className={mapStyles.mapBtn(' bg-[#D9D9D9] text-[#939393] rounded-tr-xl rounded-br-xl')}>World Map</div>
      </div>

      {/* kazakhstan */}
      <div><img src="./images/seed.png" alt="seed" className='absolute top-[29%] right-[53%]' width={20}/></div>
      <div><img src="./images/tree.png" alt="tree" className='absolute top-[34%] right-[51%]' width={20}/></div>

      {/* china */}
      <div><img src="./images/seed.png" alt="seed" className='absolute top-[48%] right-[35%]' width={20}/></div>
      <div><img src="./images/seed.png" alt="seed" className='absolute top-[48%] right-[40%]' width={20}/></div>
      <div><img src="./images/tree.png" alt="tree" className='absolute top-[45%] right-[39%]' width={20}/></div>

      {/* Afghanistan */}
      <div><img src="./images/seed.png" alt="seed" className='absolute top-[49%] right-[49%]' width={20}/></div>
      <div><img src="./images/seed.png" alt="seed" className='absolute top-[51.9%] right-[53%]' width={20}/></div>

      {/* india */}
      <div><img src="./images/seed.png" alt="seed" className='absolute top-[59%] right-[51%]' width={20}/></div>

      {/* russia */}
      <div><img src="./images/seed.png" alt="seed" className='absolute top-[23%] right-[40%]' width={20}/></div>
      <div><img src="./images/dead_plant.png" alt="sprout" className='absolute top-[27%] right-[35%]' width={20}/></div>
      <div><img src="./images/seed.png" alt="seed" className='absolute top-[23%] right-[31%]' width={20}/></div>

      {/* asia */}
      <div><img src="./images/tree.png" alt="tree" className='absolute top-[33%] right-[42%]' width={20}/></div>
      <div><img src="./images/tree.png" alt="tree" className='absolute top-[41%] right-[35%]' width={20}/></div>
      <div><img src="./images/sprout.png" alt="tree" className='absolute top-[37%] right-[37%]' width={20}/></div>
      <div><img src="./images/seed.png" alt="seed" className='absolute top-[33%] right-[33%]' width={20}/></div>

      {/* desc board */}
      <div><img src={boardSvg} alt="desc board" className='absolute top-[12.5%] right-[44%]' /></div>
      <div className={mapStyles.board}>
        <div className={mapStyles.icon}><img src="./images/seed.png" alt="seed"  width={10}/> <p className={mapStyles.text}>stage: seed</p></div>
        <div className={mapStyles.icon}><img src={clock} alt="time to grow"  width={10}/> <p className={mapStyles.text}>Tree in: 12 days</p></div>
        <div className={mapStyles.icon}><img src={circle} alt="time to die"  width={10}/> <p className={mapStyles.text}>Dies in 00:03:22</p></div>
        <div className={mapStyles.icon}><img src={location} alt="location"  width={10}/> <p className={mapStyles.text}>Map: coords</p></div>
        <div className={mapStyles.iconCont}>
          <span className={`${mapStyles.span} icon-bg`}>
            <img src="./images/water.png" alt="water drop" width={10}/>
          </span>
          <span className={`${mapStyles.span} icon-bg ml-3`}>
            <img src="./images/fertilizer.png" alt="fertilizer"  width={10}/>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Map