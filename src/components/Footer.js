import React from 'react';
import { NavLink } from 'react-router-dom';
import rosee from '../../public/images/rosée2.png';

function Footer() {
  return(
    <div className='wrap_Footer'>
      <div className='footer'>
  		<div className='wrap_footer_rosee'><img src={rosee} className='footer_logo'/></div>
  		<p></p>
  		<NavLink to='#' className='nav_footer' id='footer_advantages' activeClassName='active_footer'>Преимущества</NavLink>
  		<NavLink to='#' className='nav_footer' id='footer_inside' activeClassName='active_footer'>Что внутри</NavLink>
  		<NavLink to='#' className='nav_footer' id='footer_delivery' activeClassName='active_footer'>Доставка</NavLink>
  		<NavLink to='#' className='nav_footer' id='footer_buy' activeClassName='active_footer'>Купить</NavLink>
  		<NavLink to='#' className='nav_footer' id='footer_login' activeClassName='active_footer'>Войти</NavLink>
      </div>
    </div>
  )
}

export default Footer;