import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import rosee from '../../public/images/LogoRosee.svg';
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
    this.cls1 = React.createRef();
    this.cls2 = React.createRef();
    this.cls3 = React.createRef();
    this.mobile = React.createRef();
  }

  errReg = () => {
    if(this.state && this.state.errors) {
      return (
        <p className='errReg'>{this.state.errors[0]}</p>
      )
    }
  }
  rot = () => {
    if(!this.cls1.current.classList.contains('trans1')) {
      this.cls1.current.classList.add('trans1');
      this.cls3.current.classList.add('trans2');
      this.cls2.current.classList.add('disappear');
    }
    else {
      this.cls1.current.classList.remove('trans1');
      this.cls3.current.classList.remove('trans2');
      this.cls2.current.classList.remove('disappear');
    }
    this.mobile.current.classList.toggle('mobileAppear');
  }

  render() {
    return(
      <div className='wrapMain_header'>

        <div className='mobile_menu' ref={this.mobile}>
        <Link activeClass="active"
            className='mobile_each'
            id='advantages'
            to="mobile_Adv"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={700}
            isDynamic={true}
            onSetActive={this.handleSetActive}
            onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}>
            Преимущества</Link>

            <Link activeClass="active"
                className='mobile_each'
                to="maskIn"
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={700}
                isDynamic={true}
                onSetActive={this.handleSetActive}
                onSetInactive={this.handleSetInactive}
                ignoreCancelEvents={false}>
                Что внутри</Link>

                <Link activeClass="active"
                   className='mobile_each'
                   to="delId"
                   spy={true}
                   smooth={true}
                   hashSpy={true}
                   duration={700}
                   isDynamic={true}
                   onSetActive={this.handleSetActive}
                   onSetInactive={this.handleSetInactive}
                   ignoreCancelEvents={false}>
                   Доставка</Link>
                   <Link activeClass="active"
                      className='mobile_each'
                      id='mob_order'
                      to="sixtheenId"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      duration={700}
                      isDynamic={true}
                      onSetActive={this.handleSetActive}
                      onSetInactive={this.handleSetInactive}
                      ignoreCancelEvents={false}>
                      Заказать</Link>
                      <Link activeClass="active"
                         className='mobile_each'
                         id='mob_enter'
                         to="buyImg"
                         spy={true}
                         smooth={true}
                         hashSpy={true}
                         duration={700}
                         isDynamic={true}
                         onSetActive={this.handleSetActive}
                         onSetInactive={this.handleSetInactive}
                         ignoreCancelEvents={false}>
                         Войти</Link>

           </div>

        <div className='wrap_header'>
        <p className='wrap_rosee'><img src={rosee} className='header_logo'/></p>
        <div className='cls' onClick={this.rot}>
            <span className='partOfCls' id='cls1' ref={this.cls1}></span>
            <span className='partOfCls' id='cls2' ref={this.cls2}></span>
            <span className='partOfCls' id='cls3' ref={this.cls3}></span>
        </div>
        <p></p>
        <Link activeClass="active"
            className='nav_header'
            id='advantages'
            to="advant"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={700}
            isDynamic={true}
            onSetActive={this.handleSetActive}
            onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}>
            Преимущества</Link>
        <Link activeClass="active"
            className='nav_header'
            id='inside'
            to="maskIn"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={700}
            isDynamic={true}
            onSetActive={this.handleSetActive}
            onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}>
            Что внутри</Link>
         <Link activeClass="active"
            className='nav_header'
            id='delivery'
            to="delId"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={700}
            isDynamic={true}
            onSetActive={this.handleSetActive}
            onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}>
            Доставка</Link>
         <Link activeClass="active"
            className='nav_header'
            id='header_buy'
            to="buyImg"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={700}
            isDynamic={true}
            onSetActive={this.handleSetActive}
            onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}>
            Заказать</Link>

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
                    <p className="enter_text3">Нет аккаунта? <br/>
                    <Link activeClass="active"
                        className='enter_text4'
                        to="blockBuy"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        duration={700}
                        isDynamic={true}
                        onSetActive={this.handleSetActive}
                        onSetInactive={this.handleSetInactive}
                        ignoreCancelEvents={false}>
                        Зарегистрироваться</Link>
                     </p>
                    {this.errReg()}
                 </form>
               </div>
           </Route>

      </div>
    )
  }
}

export default Header;
