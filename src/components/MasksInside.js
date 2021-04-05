import React from 'react';
import mask1 from '../../public/images/mask1.png';
import mask2 from '../../public/images/mask2.png';
import mask3 from '../../public/images/Rectangle 230.png';
import mask4 from '../../public/images/Rectangle 229.png';
import mask5 from '../../public/images/Rectangle 220.png';
import mask6 from '../../public/images/Rectangle 228.png';
import arrow1 from '../../public/images/Arrow 4.svg';
import arrow2 from '../../public/images/Arrow 3.svg';

function MasksInside() {
  return(
    <div className='MasksInside'>
	<p></p>
		<h3 className='inside_title'>Что внутри</h3>
		<h4 className='inside_subtitle'>Такой конверт мы отправляем каждую <br/> неделю. Заказ приходит в почтовый ящик.</h4>
		<p className='inside_text1'>Внутри конверта четыре случайных маски <br/> для ухода за кожей лица. Перед отправкой маски <br/> проверяются на соответствие вашему типу кожи.</p>
		
		<p className='wrap_mask1'><img src={mask1} className='inside_mask1'/></p>
		<p className='wrap_mask2'><img src={mask2} className='inside_mask2'/></p>
		
		<p className='wrap_arrow1'><img src={arrow1} className='inside_arrow1'/></p>
		
		<p className='inside_text2'>Это курьерский пакет — <br/>защита посылки от влаги и пыли.<br/>На нём будет написан адрес доставки.</p>
		
		<p className='wrap_arrow2'><img src={arrow2} className='inside_arrow2'/></p>
		<p className='wrap_mask3'><img src={mask3} className='inside_mask3'/></p>
		<p className='wrap_mask4'><img src={mask4} className='inside_mask4'/></p>
		<p className='wrap_mask5'><img src={mask5} className='inside_mask5'/></p>
		<p className='wrap_mask6'><img src={mask6} className='inside_mask6'/></p>
		
		<p className='inside_text3'>Маски в конверте случайные</p>
    </div>
  )
}

export default MasksInside;