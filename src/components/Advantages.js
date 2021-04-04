import React from 'react';
import { NavLink } from 'react-router-dom';
import shop from '../../public/images/image 6.png';
import minus from '../../public/images/Union1.svg';
import mask1 from '../../public/images/0180 62.png';
import mask2 from '../../public/images/Group 35.png';
import plus from '../../public/images/Union2.svg';

function Advantages() {
  return(
    <div className='advantages'>
		<div className='advantages_shop'>
			<img src={shop} className='shop'/>
			<h4 className='shop_title'>Покупать в магазинах косметики</h4>
			<p className='shop_minus1'><img src={minus} className='minus'/></p>
			<p className='shop_minus2'><img src={minus} className='minus'/></p>
			<p className='shop_minus3'><img src={minus} className='minus'/></p>
			<p className='shop_minus4'><img src={minus} className='minus'/></p>
			<p className='shop_minus5'><img src={minus} className='minus'/></p>
			<p className='shop_minus6'><img src={minus} className='minus'/></p>
			
			<p className='minus_text' id='text1'>Надо искать</p>
			<p className='minus_text' id='text2'>Надо выбирать</p>
			<p className='minus_text' id='text3'>Небольшой выбор</p>
			<p className='minus_text' id='text4'>Нужно ехать до магазина</p>
			<p className='minus_text' id='text5'>Нерегулярный уход за кожей</p>
			<p className='minus_text' id='text6'>Одни и те же маски</p>
			
		</div>
		<div className='our_advantages'>
			<div className='advantages_masks'>
				<p><img src={mask1} className='mask1'/></p>
				<p><img src={mask2} className='mask2'/></p>
			</div>
			<h4 className='advantages_title'>Маски по подписке</h4>
			<p className='mask_plus1'><img src={plus} className='plus'/></p>
			<p className='mask_plus2'><img src={plus} className='plus'/></p>
			<p className='mask_plus3'><img src={plus} className='plus'/></p>
			<p className='mask_plus4'><img src={plus} className='plus'/></p>
			<p className='mask_plus5'><img src={plus} className='plus'/></p>
			<p className='mask_plus6'><img src={plus} className='plus'/></p>
			<p className='mask_plus7'><img src={plus} className='plus'/></p>
			<p className='mask_plus8'><img src={plus} className='plus'/></p>
			<p className='mask_plus9'><img src={plus} className='plus'/></p>
			
			<p className='minus_text' id='text7'>Регулярный уход за кожей лица</p>
			<p className='minus_text' id='text8'>Выгоднее, чем маски в магазине</p>
			<p className='minus_text' id='text9'>Пробуете маски разных брендов</p>
			<p className='minus_text' id='text10'>Большой набор видов масок</p>
			<p className='minus_text' id='text11'>Не нужно никуда ехать</p>
			<p className='minus_text' id='text12'>Отправляем по почте каждую неделю</p>
			<p className='minus_text' id='text13'>Шестнадцать масок в месяц</p>
			<p className='minus_text' id='text14'>Доставка в почтовый ящик</p>
			<p className='minus_text' id='text15'>Есть промокод на скидку: mask1</p>
			
			<NavLink to='#' className='advantages_btn' activeClassName='active_header'>Заказать с промокодом</NavLink>
		</div>
    </div>
  )
}

export default Advantages;