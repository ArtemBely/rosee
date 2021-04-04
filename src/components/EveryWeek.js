import React from 'react';
import { NavLink } from 'react-router-dom';

function EveryWeek() {
  return(
    <div className='everyWeek'>
       <div className='empty_square'></div>
       <div className='first_square'>
          <p className='every_p'>Еженедельная доставка косметических масок, отобранных вручную</p>
          <p className='every_p2'>Каждую неделю отправляем маски для ухода за кожей лица.
           Маски подбираем вручную, упаковываем в приятную упаковку из плотной бумаги. Отправка по всей России.</p>
          <NavLink to='/order' className='order_bottom'>Заказать</NavLink>
          <NavLink to='/buy' className='buy_present'>Купить в подарок</NavLink>
       </div>
       <div className='empty_square2'></div>
    </div>
  )
}

export default EveryWeek;
