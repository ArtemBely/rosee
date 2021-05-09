import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import rosee from '../../public/images/rosée.png';

class Header extends React.Component{
  constructor() {

    super()

    let errors;
    if(__isBrowser__) {
      errors = window.__INITIAL_MESSAGES__;
    }

    this.state = {
      errors
    }
  }

  errReg = () => {
    if(this.state && this.state.errors) {
      return (
        <p className='errReg'>{this.state.errors[0]}</p>
      )
    }
  }

  render() {
    return(
      <div className='wrapMain_header'>
        <div className='wrap_header'>
        <p className='wrap_rosee'><img src={rosee} className='header_logo'/></p>
        <p></p>
        <NavLink to='#' className='nav_header' id='advantages' activeClassName='active_header'>Преимущества</NavLink>
        <NavLink to='#' className='nav_header' id='inside' activeClassName='active_header'>Что внутри</NavLink>
        <NavLink to='#' className='nav_header' id='delivery' activeClassName='active_header'>Доставка</NavLink>
        <NavLink to='#' className='nav_header' id='header_buy' activeClassName='active_header'>Купить</NavLink>
        <NavLink to='/enter' className='nav_header' id='header_login' activeClassName='active_header'>Войти</NavLink>
        </div>

           <Route exact path='/enter'>
               <div className='wrap_enter'>
                 <form action='/enter' className='enterForm' method='POST'>
                    <input type='text' name='email' placeholder='Введите email' required/>
                    <input type='text' name='password' placeholder='Пароль' required/>
                    <button type='submit'>Войти</button>
                    {this.errReg()}
                 </form>
               </div>
           </Route>

      </div>
    )
  }
}

export default Header;
