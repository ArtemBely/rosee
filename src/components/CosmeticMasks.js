import React from 'react';
import { NavLink } from 'react-router-dom';
import rosee from '../../public/images/rosée.png';

function CosmeticMasks() {
  return(
    <div className='cosmeticMasks'>
		<p className='masks_title'>Еженедельная доставка <br/> косметических масок,<br/> отобранных вручную</p>
		<p className='masks_subtitle'>Каждую неделю отправляем маски <br/> для ухода за кожей лица. Маски подбираем <br/> вручную, упаковываем в плотную бумагу. <br/>Отправка по всей России.</p>
		<NavLink to='#' id='masks_order'>Заказать</NavLink>
        <NavLink to='#' id='masks_buy'>Купить в подарок</NavLink>
    </div>
  )
}

export default CosmeticMasks;