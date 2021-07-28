import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import rosee from '../../public/images/LogoRosee.svg';
import rosee2 from '../../public/images/rosée2.png';

class Profile extends React.Component{

  constructor() {

    super()

    let user;
    if(__isBrowser__) {
      user = window.__INITIAL_USER__;
    }
    this.state = {
      user
    }
    this.cancel = React.createRef();
    this.cls1 = React.createRef();
    this.cls2 = React.createRef();
    this.cls3 = React.createRef();
    this.mobile = React.createRef();
  }

  closeCancel = () => {
    if(this.cancel.current.classList.contains('openSubs')) {
        this.cancel.current.classList.remove('openSubs')
        this.cancel.current.classList.add('closeSubs');
    }
  }
  openCancel = () => {
      this.cancel.current.classList.add('openSubs');
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

  userData = () => {
    if(this.state && this.state.user) {
      return (
        <div className='wrap_userData'>
         <div className='wrap_cancel'>
              <div className='cancel2' ref={this.cancel}>
                 <p className='sure_cancel'>Уверенны, что хотите отписаться?</p>
                 <a href='/profile/cancel' id='cancel_yes'><p>Да</p></a>
                 <p id='cancel_no' onClick={this.closeCancel}>Нет</p>
               </div>
           </div>
          <div className='userData'>
            <Route exact path={['/profile', '/profile/changeMail', '/profile/changePhone', '/profile/changeAddress', '/profile/changePass']}>
              <p className='user_name'>{this.state.user.username}</p>
            </Route>
            <Route exact path='/profile/changeName'>
               <form action='/profile/nameChange' method='POST' id='add1f'>
                  <textarea className='user_name add1' name='userName'>{this.state.user.username}</textarea>
                  <button type='submit' id='bt1'>Изменить</button>
               </form>
            </Route>

            <Route exact path={['/profile', '/profile/changeName', '/profile/changePhone', '/profile/changeAddress', '/profile/changePass']}>
              <p className='user_email' id='user'>{this.state.user.email}</p>
            </Route>
            <Route exact path='/profile/changeMail'>
                <form action='/profile/mailChange' method='POST' id='add2f'>
                    <textarea className='user_email add2'>{this.state.user.email}</textarea>
                    <button type='submit' id='btn2'>Изменить</button>
                </form>
            </Route>

            <Route exact path={['/profile', '/profile/changeName', '/profile/changePhone', '/profile/changeAddress', '/profile/changeMail']}>
              <p className='user_password' id='user'>Пароль: **************</p>
            </Route>
            <Route exact path='/profile/changePass'>
                <form action='/profile/passChange' method='POST' id='add5f'>
                    <textarea className='user_password add5' name='password'></textarea>
                    <button type='submit' id='btn5'>Изменить</button>
                </form>
            </Route>

            <Route exact path={['/profile', '/profile/changeMail', '/profile/changeName', '/profile/changeAddress', '/profile/changePass']}>
              <p className='user_phone' id='user'>{this.state.user.userphone}</p>
            </Route>

            <Route exact path='/profile/changePhone'>
                <form action='/profile/phoneChange' method='POST' id='add3f'>
                    <textarea className='user_phone add3' id='user' name='userPhone'>{this.state.user.userphone}</textarea>
                    <button type='submit' id='btn3'>Изменить</button>
                </form>
            </Route>

            <p className='user_payment' id='user'>{this.state.user.typeOfPayment}</p>
            <p className='user_card' id='user'>**** **** **** 5017</p>
            <p className='user_timestamp'>Следующая оплата: {this.state.user.timestamp}</p>

            <Route exact path={['/profile', '/profile/changeMail', '/profile/changeName', '/profile/changePhone', '/profile/changePass']}>
              <p className='user_address' id='user'>{this.state.user.useraddress}</p>
            </Route>

            <Route exact path='/profile/changeAddress'>
                <form action='/profile/addressChange' method='POST' id='add4f'>
                    <textarea className='user_address add4' id='user' name='userAddress'>{this.state.user.useraddress}</textarea>
                    <button type='submit' id='btn4'>Изменить</button>
                </form>
            </Route>

            <Route exact path={['/profile', '/profile/changeMail', '/profile/changePhone', '/profile/changeAddress', '/profile/changePass']}>
                <NavLink to='/profile/changeName' className='change_name' id='change'>Изменить имя</NavLink>
            </Route>
            <Route exact path='/profile/changeName'>
                <NavLink to='/profile' className='change_name' id='change'>Назад</NavLink>
            </Route>

            <Route exact path={['/profile', '/profile/changeName', '/profile/changePhone', '/profile/changeAddress', '/profile/changePass']}>
                <NavLink to='/profile/changeMail' className='change_email' id='change'>Изменить почту</NavLink>
            </Route>
            <Route exact path='/profile/changeMail'>
                <NavLink to='/profile' className='change_email' id='change'>Назад</NavLink>
            </Route>

            <Route exact path={['/profile', '/profile/changeName', '/profile/changeMail', '/profile/changePhone', '/profile/changeAddress']}>
                <NavLink to='/profile/changePass' className='change_password' id='change'>Изменить пароль</NavLink>
            </Route>
            <Route exact path='/profile/changePass'>
                <NavLink to='/profile' className='change_password' id='change'>Назад</NavLink>
            </Route>

            <Route exact path={['/profile', '/profile/changeName', '/profile/changeMail', '/profile/changeAddress', '/profile/changePass']}>
                <NavLink to='/profile/changePhone' className='change_phone' id='change'>Изменить телефон</NavLink>
            </Route>
            <Route exact path='/profile/changePhone'>
                <NavLink to='/profile' className='change_phone' id='change'>Назад</NavLink>
            </Route>

            <p className='change_period' id='change'>Изменить период</p>
            <p className='change_card' id='change'>Изменить карту оплаты</p>

            <Route exact path={['/profile', '/profile/changeName', '/profile/changeMail', '/profile/changePhone', '/profile/changePass']}>
                <NavLink to='/profile/changeAddress' className='change_address' id='change'>Изменить адрес</NavLink>
            </Route>
            <Route exact path='/profile/changeAddress'>
                <NavLink to='/profile' className='change_address' id='change'>Назад</NavLink>
            </Route>

            <p className='cancel_sub' onClick={this.openCancel}>Отменить подписку</p>
          </div>
          <div className='rating'>
            <h3 className='rating_title'>Оцените вероятность того, что <br/> порекомендуете нас друзьям:</h3>
          </div>
          <div className='rating2'>
            <form action="#" id='rating_form'>
	            <input type='radio' name='rating' id='rating1' className='rating_input'/>
	            <label htmlFor='rating1' className='label_rating'>
		            <div className='numbers'>1</div>
	            </label>
	            <input type='radio' name='rating' id='rating2' className='rating_input'/>
	            <label htmlFor='rating2' className='label_rating'>
		            <div className='numbers'>2</div>
	            </label>
	            <input type='radio' name='rating' id='rating3' className='rating_input'/>
	            <label htmlFor='rating3' className='label_rating'>
		            <div className='numbers'>3</div>
	            </label>
	            <input type='radio' name='rating' id='rating4' className='rating_input'/>
	            <label htmlFor='rating4' className='label_rating'>
		            <div className='numbers'>4</div>
	            </label>
	            <input type='radio' name='rating' id='rating5' className='rating_input'/>
	            <label htmlFor='rating5' className='label_rating'>
		            <div className='numbers'>5</div>
	            </label>
	            <input type='radio' name='rating' id='rating6' className='rating_input'/>
	            <label htmlFor='rating6' className='label_rating'>
		            <div className='numbers'>6</div>
	            </label>
	            <input type='radio' name='rating' id='rating7' className='rating_input'/>
	            <label htmlFor='rating7' className='label_rating'>
		            <div className='numbers'>7</div>
	            </label>
	            <input type='radio' name='rating' id='rating8' className='rating_input'/>
	            <label htmlFor='rating8' className='label_rating'>
		            <div className='numbers'>8</div>
	            </label>
	            <input type='radio' name='rating' id='rating9' className='rating_input'/>
	            <label htmlFor='rating9' className='label_rating'>
		            <div className='numbers'>9</div>
	            </label>
	            <input type='radio' name='rating' id='rating10' className='rating_input'/>
	            <label htmlFor='rating10' className='label_rating'>
		            <div className='numbers'>10</div>
	            </label>
	          </form>
          </div>
          <div className='questions2'>
            <div className='first_section'>
              <p className='have_a_quest'>Если появился вопрос</p>
              <p className='have_a_quest2'>Напишите его в форме или <span className='call_us'>позвоните нам</span> <br/> напрямую, менеджеры разберутся в ситуации <br/> и постараются решить вашу задачу</p>
            </div>
            <div className='second_section'>
              <form action="#">
                <input type="text" name="name" className="questions_name" placeholder="Ваше имя"/>
                <input type="email" name="email" className="questions_mail" placeholder="Телефон или электронная почта"/>
                <textarea type="text" name="questions" className="questions_input" placeholder="Ваш вопрос"></textarea>
                <button type='submit' className="questions_button">Отправить</button>
              </form>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <div className='wrapMain_header wrap_ProfHead'>
          <div className='wrap_header specialHead'>
            <p className='wrap_rosee wrap_roseeProf'><img src={rosee} className='header_logo header_logoProf'/></p>
            <div className='cls clsProf' onClick={this.rot}>
                <span className='partOfCls' id='cls1' ref={this.cls1}></span>
                <span className='partOfCls' id='cls2' ref={this.cls2}></span>
                <span className='partOfCls' id='cls3' ref={this.cls3}></span>
            </div>
            <p></p>
            <NavLink to='#' className='nav_header adv' id='advantages' activeClassName='active_header'>Преимущества</NavLink>
            <NavLink to='#' className='nav_header whatIns' id='inside' activeClassName='active_header'>Что внутри</NavLink>
            <NavLink to='#' className='nav_header del' id='delivery' activeClassName='active_header'>Доставка</NavLink>
            <NavLink to='#' className='nav_header ord' id='header_buy' activeClassName='active_header'>Заказать</NavLink>
            <p><a href='/profile/logout' className='nav_header ex' id='header_login'>Выйти</a></p>
            {this.userData()}
           </div>
         </div>
         <div className='mobile_menu' ref={this.mobile}>
             <p className='mobile_each'>Преимущества</p>
               <p className='mobile_each'>Что внутри</p>
                 <p className='mobile_each'>Доставка</p>
               <p className='mobile_each' id='mob_order'>Заказать</p>
             <a href='/profile/logout' className='mobile_each' id='mob_exit'>Выйти</a>
         </div>
        <p className='wrap_prof_footer'>
            <footer className='wrap_Footer'>
              <div className='footer specProfFoot'>
                <div className='wrap_footer_rosee'><img src={rosee2} className='footer_logo'/></div>
                  <a href='https://docs.google.com/document/d/1d4pEXBZh_aXOMoJkhbtwu4klflWcsoBYGcFbIQUPdFg/edit' className='nav_footer' id='footer_offer'>Оферта</a>
                  <a href='https://docs.google.com/document/d/1IcFeUEIdDZ6cU6kjTjYtYONfeamZvNOqsNXBeH7hl2k/edit' className='nav_footer' id='footer_confidentiality'>Политика конфиденциальности</a>
                  <a href='https://docs.google.com/document/d/1EiJUgz1JSZKRvfzWYJpWcdhlXHZHRAF6xbwm0qXSqLs/edit' className='nav_footer' id='footer_sentence'>Пользовательское соглашение</a>
                <p className='nav_footer' id='footer_phone'>8 902 247 13 61</p>
                <p className='nav_footer' id='footer_email'>hi@rosee.ws</p>
                <p className='nav_footer' id='footer_information'><p className="information_1">ИП Поветьев Кирилл Владимирович</p> <p className="information_2">ИНН 562903440350</p> <p className="information_3">ОГРН 320565800048044</p></p>
              </div>
            </footer>
        </p>
      </div>
    )
  }
}

export default Profile;
