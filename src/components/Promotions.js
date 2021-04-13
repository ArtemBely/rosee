import React from 'react';
import { NavLink } from 'react-router-dom';
import promotions1 from '../../public/images/Rectangle 147.png';
import promotions2 from '../../public/images/Rectangle 148.png';
import promotions3 from '../../public/images/Rectangle 149.png';
import promotions4 from '../../public/images/Rectangle 150.png';
import promotions5 from '../../public/images/Rectangle 151.png';
import promotions6 from '../../public/images/Rectangle 152.png';

function Promotions() {
  return(
    <div className='wrap_Promotions'>
      <div className='promotions'>
		<h2 className='promotions_title'>Акции</h2>
		<div className='wrap_promotions1'><img src={promotions1} className='masks_promotions'/></div>
		<div className='wrap_promotions2'><img src={promotions2} className='masks_promotions'/></div>
		<div className='wrap_promotions3'><img src={promotions3} className='masks_promotions'/></div>
		<div className='wrap_promotions4'><img src={promotions4} className='masks_promotions'/></div>
		<div className='wrap_promotions5'><img src={promotions5} className='masks_promotions'/></div>
		<div className='wrap_promotions6'><img src={promotions6} className='masks_promotions'/></div>
	  </div>
    </div>
  )
}

export default Promotions;