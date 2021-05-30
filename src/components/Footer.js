import React from 'react';
import { NavLink } from 'react-router-dom';
import rosee from '../../public/images/rosée2.png';

function Footer() {
  return(
    <footer className='wrap_Footer'>
      <div className='footer'>
  			<div className='wrap_footer_rosee'><img src={rosee} className='footer_logo'/></div>
  				<a href='/https://docs.google.com/document/d/1d4pEXBZh_aXOMoJkhbtwu4klflWcsoBYGcFbIQUPdFg/edit' className='nav_footer' id='footer_offer'>Оферта</a>
  				<NavLink to='#' className='nav_footer' id='footer_confidentiality' activeClassName='active_footer'>Политика конфиденциальности</NavLink>
  				<NavLink to='#' className='nav_footer' id='footer_sentence' activeClassName='active_footer'>Пользовательское предложение</NavLink>
				<p className='nav_footer' id='footer_phone'>8 902 247 13 61</p>
				<p className='nav_footer' id='footer_email'>hi@rosee.ws</p>
				<p className='nav_footer' id='footer_information'><p className="information_1">ИП Поветьев Кирилл Владимирович</p> <p className="information_2">ИНН 562903440350</p> <p className="information_3">ОГРН 320565800048044</p></p>
      </div>
    </footer>
  )
}

export default Footer;
