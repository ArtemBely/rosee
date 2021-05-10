import React from 'react';
import mask1 from '../../public/images/masks1.png';
import mask2 from '../../public/images/0180 43.png';
import mask3 from '../../public/images/0180 38.png';
import mask4 from '../../public/images/0180 57.png';
import mask5 from '../../public/images/0180 58.png';
import mask6 from '../../public/images/0180 59.png';
import mask7 from '../../public/images/0180 44.png';
import mask8 from '../../public/images/0180 52.png';
import mask9 from '../../public/images/0180 46.png';
import mask10 from '../../public/images/0180 47.png';
import mask11 from '../../public/images/0180 50.png';
import mask12 from '../../public/images/0180 51.png';
import mask13 from '../../public/images/0180 48.png';
import mask14 from '../../public/images/0180 49.png';
import mask15 from '../../public/images/0180 55.png';
import mask16 from '../../public/images/0180 56.png';

function Envelope() {
  return(
    <div className='wrapMain_Envelope'>
      <div className='envelope'>
		<h3 className='envelope_title'>Какие маски в конверте</h3>
		<p className='envelope_subtitle'>В одном конверте — четыре случайные маски.<br/> Мы подбираем их так, чтобы они подходили <br/> под ваш тип кожи лица. Не работаем с контрабандой,<br/> привозим маски только через поставщиков-партнёров.</p>
		
		<div className='wrapEN_mask1'>
			<img src={mask1} className='envelope_mask1'/>
		</div>
		<div className='wrapEN_mask2'>
			<img src={mask2} className='envelope_mask2'/>
		</div>
		<div className='wrapEN_mask3'>
			<img src={mask3} className='envelope_mask3'/>
		</div>
		
		<div className='wrapEN_mask4_6'>
			<div className='wrapEN_mask4'>
				<img src={mask4} className='envelope_mask4'/>
			</div>
			<div className='wrapEN_mask5'>
				<img src={mask5} className='envelope_mask5'/>
			</div>
			<div className='wrapEN_mask6'>
				<img src={mask6} className='envelope_mask6'/>
			</div>
		</div>
		<div className='wrapEN_mask7'>
			<img src={mask7} className='envelope_mask7'/>
		</div>
		<div className='wrapEN_mask8'>
			<img src={mask8} className='envelope_mask8'/>
		</div>
		
		<div className='wrapEN_mask9_12'>
			<div className='wrapEN_mask9'>
				<img src={mask9} className='envelope_mask9'/>
			</div>
			<div className='wrapEN_mask10'>
				<img src={mask10} className='envelope_mask10'/>
			</div>
			<div className='wrapEN_mask11'>
				<img src={mask11} className='envelope_mask11'/>
			</div>
			<div className='wrapEN_mask12'>
				<img src={mask12} className='envelope_mask12'/>
			</div>
		</div>
		<div className='wrapEN_mask13'>
			<img src={mask13} className='envelope_mask13'/>
		</div>
		<div className='wrapEN_mask14'>
			<img src={mask14} className='envelope_mask14'/>
		</div>
		
		<div className='wrapEN_mask15_16'>
			<div className='wrapEN_mask15'>
				<img src={mask15} className='envelope_mask15'/>
			</div>
			<div className='wrapEN_mask16'>
				<img src={mask16} className='envelope_mask16'/>
			</div>
		</div>
		
	  </div>
    </div>
  )
}

export default Envelope;