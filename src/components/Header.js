import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import rosee from '../../public/images/rosée.png';
import cross from '../../public/images/Union.svg';

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
                 <NavLink to='/' className="wrap_cross"><img src={cross} className="cross"/></NavLink>
                 <form action='/enter' className='enterForm' method='POST'>
                    <p className="enter_text">Вход</p>
                    <input type='text' name='email' placeholder='Введите email' className="input_mail" required/>
                    <input type='text' name='password' placeholder='Пароль' className="input_password" required/>
                    <button type='submit' className="enter_button">Войти</button>
                    <p className="enter_text2">Чтобы продолжить, введите <br/> email и пароль</p>
                    {this.errReg()}
                 </form>
               </div>
           </Route>

      </div>
    )
  }
}

export default Header;
