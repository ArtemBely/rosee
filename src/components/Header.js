import React from 'react';
import { NavLink } from 'react-router-dom';
import rosee from '../../public/images/rosée.png';

function Header() {
  return(
    <div className='wrap_header'>
		<p className='wrap_rosee'><img src={rosee} className='header_logo'/></p>
		<p></p>
		<NavLink to='#' className='nav_header' id='advantages' activeClassName='active_header'>Преимущества</NavLink>
		<NavLink to='#' className='nav_header' id='inside' activeClassName='active_header'>Что внутри</NavLink>
		<NavLink to='#' className='nav_header' id='delivery' activeClassName='active_header'>Доставка</NavLink>
		<NavLink to='#' className='nav_header' id='header_buy' activeClassName='active_header'>Купить</NavLink>
		<NavLink to='#' className='nav_header' id='header_login' activeClassName='active_header'>Войти</NavLink>
    </div>
  )
}

export default Header;
