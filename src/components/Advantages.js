import React from 'react';
import { NavLink } from 'react-router-dom';
import shop from '../../public/images/image 6.png';
import minus from '../../public/images/Union1.svg';
import mask1 from '../../public/images/0180 62.png';
import mask2 from '../../public/images/Group 35.png';
import plus from '../../public/images/Union2.svg';
import mask3 from '../../public/images/Rectangle 178.svg';
import mask4 from '../../public/images/Rectangle 243.svg';
import mask5 from '../../public/images/Rectangle 247.svg';
import mask6 from '../../public/images/Rectangle 251.svg';
import mask7 from '../../public/images/Rectangle 234.svg';
import mask8 from '../../public/images/Rectangle 244.svg';
import mask9 from '../../public/images/Rectangle 248.svg';
import mask10 from '../../public/images/Rectangle 252.svg';
import mask11 from '../../public/images/Rectangle 238.svg';
import mask12 from '../../public/images/Rectangle 245.svg';
import mask13 from '../../public/images/Rectangle 249.svg';
import mask14 from '../../public/images/Rectangle 253.svg';
import mask15 from '../../public/images/Rectangle 242.svg';
import mask16 from '../../public/images/Rectangle 246.svg';
import mask17 from '../../public/images/Rectangle 250.svg';
import mask18 from '../../public/images/Rectangle 254.svg';
import advantages from '../../public/images/Group 97 (1).svg';

function Advantages() {
  return(
   <div className='wrap_advantages'>
		 <div className="advantages_phone">
			 <div className="shop_advantages_phone">
			 	<img src={advantages} className='advantages_phone_img'/> 
			 </div>
			 <NavLink to='#' className='advantages_phone_btn'>Оформить подписку</NavLink>
		 </div>
		 <div className="our_advantages_phone">
			 <div className="advantages_phone_mask">
			 	 <img src={mask1} className='advantages_phone_mask1'/> 
				 <img src={mask5} className='advantages_phone_mask2'/> 
				 <img src={mask9} className='advantages_phone_mask3'/> 
				 <img src={mask6} className='advantages_phone_mask4'/> 
				 <img src={mask8} className='advantages_phone_mask5'/> 
			 </div>
			 <p className="OA_phone_title">Получать маски по подписке проще и выгоднее</p>
			 <p className="OA_phone_subtitle1">Доставка в почтовый ящик</p>
			 <p className="OA_phone_text1">За новыми масками не нужно никуда ехать — отправляем комплекты масок по почте, заберёте их в почтовом ящике.</p>
			 <p className="OA_phone_subtitle2">Регулярный уход за кожей лица</p>
			 <p className="OA_phone_text2">Мы отправляем комплект масок один раз в неделю. Это позволит вам сделать уход за кожей лица доступным в любое время.</p>
			 <p className="OA_phone_subtitle3">Доступнее, чем в магазине</p>
			 <p className="OA_phone_text3">В месяц за 2490 рублей вы получите 16 масок. Это дешевле, чем покупать маски в магазине поштучно.</p>
			 <p className="OA_phone_subtitle4">Маски разных брендов</p>
			 <p className="OA_phone_text4">Маски в комплекте случайные. Вы познакомитесь с новыми производителями и вкусами.</p>
			 <p className="OA_phone_subtitle5">Большое разнообразие масок</p>
			 <p className="OA_phone_text5">Расширяем ассортимент, чтобы вы получали непохожие маски.</p>
			 <img src={mask15} className='advantages_phone_mask6'/> 
			 <img src={mask10} className='advantages_phone_mask7'/> 
			 <img src={mask16} className='advantages_phone_mask8'/> 
			 <img src={mask13} className='advantages_phone_mask9'/>
			 <img src={mask17} className='advantages_phone_mask10'/>
		 </div>
      <div className='advantages' id='advant'>
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
          <img src={mask3} className='mask_img'/><img src={mask4} className='mask_img'/><img src={mask5} className='mask_img'/><img src={mask6} className='mask_img'/>
          <img src={mask7} className='mask_img' id='mask5'/><img src={mask8} className='mask_img'/><img src={mask9} className='mask_img'/><img src={mask10} className='mask_img'/>
          <img src={mask11} className='mask_img' id='mask9'/><img src={mask12} className='mask_img'/><img src={mask13} className='mask_img'/><img src={mask14} className='mask_img'/>
          <img src={mask15} className='mask_img' id='mask13'/><img src={mask16} className='mask_img'/><img src={mask17} className='mask_img'/><img src={mask18} className='mask_img'/>
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
   </div>
  )
}

export default Advantages;
