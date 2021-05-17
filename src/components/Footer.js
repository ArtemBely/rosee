import React from 'react';
import { NavLink } from 'react-router-dom';
import rosee from '../../public/images/rosée2.png';

function Footer() {
  return(
    <footer className='wrap_Footer'>
      <div className='footer'>
  			<div className='wrap_footer_rosee'><img src={rosee} className='footer_logo'/></div>
  				<NavLink to='#' className='nav_footer' id='footer_offer' activeClassName='active_footer'>Оферта</NavLink>
  				<NavLink to='#' className='nav_footer' id='footer_confidentiality' activeClassName='active_footer'>Политика конфиденциальности</NavLink>
  				<NavLink to='#' className='nav_footer' id='footer_sentence' activeClassName='active_footer'>Пользовательское предложение</NavLink>
				<p className='nav_footer' id='footer_phone'>8 902 247 13 61</p>
				<p className='nav_footer' id='footer_email'>hi@rosee.ws</p>
				<p className='nav_footer' id='footer_information'>ИП Поветьев Кирилл Владимирович <br/>ИНН 562903440350 <br/>ОГРН 320565800048044</p>
      </div>
    </footer>
  )
}

export default Footer;