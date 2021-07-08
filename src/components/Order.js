import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import rosee from '../../public/images/LogoRosee.svg';
import rosee2 from '../../public/images/rosée2.png';
import { findIp } from './fetchData';
import axios from 'axios';

class Order extends React.Component{

  constructor(props) {

    super(props);

    let error;
    let typeOfSkin;
    let success;
    let repeat;
    if(__isBrowser__) {
      error = window.__INITIAL_DATA__;
      typeOfSkin = window.__INITIAL_TYPE__;
      success = window.__INITIAL_STATE__;
      repeat = window.__INITIAL_ERRORS__;
    }
    this.state = {
      error,
      typeOfSkin,
      success,
      repeat,
      ipAddress: 'example'
    }
    this.cls1 = React.createRef();
    this.cls2 = React.createRef();
    this.cls3 = React.createRef();
    this.mobile = React.createRef();
  }

  async componentDidMount() {
       window.scrollTo(0, 0)
       await axios.get('https://api.ipify.org/?format=json')
      .then(res => {
        let data = res.data;
        let currentIp = data.ip;
        this.setState({ ipAddress: currentIp });
        setTimeout(() => {
          console.log(this.state.ipAddress);
        }, 300)
        //console.log(currentIp);
        return currentIp;
      })
      .catch(err => console.log(err))
  }

errF = () => {
  if(this.state && this.state.error) {
    return(
      <p className='validErr'>
        {this.state.error.map(err =>
          <p>{err}</p>
        )}
      </p>
    )
  }
}

succ = () => {
  if(this.state && this.state.success) {
    return(
      <p className='validSucc'>
        {this.state.success}
      </p>
    )
  }
}

rep = () => {
  if(this.state && this.state.repeat) {
    return(
      <p className='mailErr'>
        {this.state.repeat}
      </p>
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
    <div className='wrap_order22'>
    {this.errF()}
    {this.succ()}
    {this.rep()}
    <Route path={['/order/everyMonth', '/order/everyMonthCombi', '/order/everyMonthFat', '/order/everyMonthDry']}>
     <form action='/order/everyMonth' method='POST'>
         <div className='wrap_Order'>
             <div className='mobile_menu' ref={this.mobile}>
                 <NavLink
                     className='mobile_each'
                     id='advantages'
                     to="/">
                     Преимущества</NavLink>

                 <NavLink
                     className='mobile_each'
                     to="/">
                     Что внутри</NavLink>

                 <NavLink
                     className='mobile_each'
                     to="/">
                     Доставка</NavLink>

                 <NavLink
                     className='mobile_each'
                     id='mob_order'
                     to="/">
                     Заказать</NavLink>

                 <NavLink
                     className='mobile_each'
                     id='mob_enter'
                     to="/#buyImg">
                     Войти</NavLink>
              </div>

              <div className='wrap2_header'>
                  <div className='wrap_header headForOrder'>
                    <NavLink to ='/' className='wrap_rosee mobile_rosee_order'><img src={rosee} className='header_logo'/></NavLink>
                    <div className='cls clsOrder' onClick={this.rot}>
                        <span className='partOfCls' id='cls1' ref={this.cls1}></span>
                        <span className='partOfCls' id='cls2' ref={this.cls2}></span>
                        <span className='partOfCls' id='cls3' ref={this.cls3}></span>
                    </div>
                    <p></p>
                    <NavLink to='/#advant' className='nav_header_order' id='advantages' activeClassName='active_header'>Преимущества</NavLink>
                    <NavLink to='/#maskIn' className='nav_header_order inside_spec' id='inside' activeClassName='active_header'>Что внутри</NavLink>
                    <NavLink to='/#buyImg' className='nav_header_order delivery_spec' id='delivery' activeClassName='active_header'>Доставка</NavLink>
                    <NavLink to='/#buyImg' className='nav_header_order order_spec' id='header_buy' activeClassName='active_header'>Заказать</NavLink>
                    <NavLink to='/enter' className='nav_header_order enter_spec' id='header_login'>Войти</NavLink>
                    <div className='mobile_menu' style={{display: 'none'}}>
                    </div>
                  </div>
              </div>

           <div className='order'>
             <h2 className='order_title'>Заказ</h2>
             <h4 className='order_name order_text'>Имя и фамилия</h4>
             <h4 className='order_telephone order_text'>Телефон</h4>
             <h4 className='order_mail order_text'>Почта</h4>
             <h4 className='order_address order_text'>Адрес получателя</h4>
             <h4 className='order_comments order_text'>Комментарии</h4>
             <p className='order_title2'>Маски для ухода за кожей лица по подписке</p>
             <p className='order_addition' id='addition1'>Если посылка потеряется, мы всегда <br/> сможем её найти по вашим данным</p>
             <p className='order_addition' id='addition2'>Нужен для входа <br/> в аккаунт</p>
             <p className='order_addition' id='addition3'>Придумайте пароль <br/> для входа в аккаунт</p>
             <p className='order_addition' id='addition4'>Будем присылать <br/> уведомления об оплате</p>
             <p className='order_addition' id='addition5'>Введите адрес полностью,<br/> он нужен для отправки посылки</p>
             <p className='order_addition' id='addition6'>Если у вы хотите нам <br/> что-то сообщить</p>
             <p className='order_text2'>Заполните все поля, <br/>чтобы продолжить</p>
             <p className='order_text3'>Нажимая кнопку «Оформить», вы соглашаетесь с Политикой <br/> конфиденциальности и даёте согласие на обработку данных</p>



             <input type='text' name='username' className='name_input' required/>
             <input type='tel' name='userphone' className='telephone_input' required/>
             <input type='text' name='email' className='mail_input' required/>
             <input type='hidden' name='timestamp' />
             <input type='hidden' name='adminComment' />

             <input type='hidden' name='ipAddress' value={this.state.ipAddress} />

             <div className='radio'>
               <input type='checkbox' name='letter' className='radio_input' id='radio1'/>
               <label htmlFor='radio1' className='radio_label'>Получать письма с акциями</label>
             </div>

             <textarea name='useraddress' className='address_input' placeholder='Не забудьте указать индекс' required></textarea>
             <textarea name='comments' className='comments'></textarea>

             <div className='wrap_password_field'>
               <p className='passwordname order_text'>Пароль</p>
               <input type='text' name='password' className='password_field' required/>
             </div>
               <Route path={['/order/everyMonth', '/order/everyMonthCombi',
                 '/order/halfYearCombi', '/order/everyYearCombi']}>
                 <input type='hidden' name='typeOfSkin' value={this.state && this.state.typeOfSkin ? this.state.typeOfSkin : 'Комбинированная'} />
               </Route>
               <Route path={['/order/everyMonthFat', '/order/halfYearFat', '/order/everyYearFat']}>
                 <input type='hidden' name='typeOfSkin' value={this.state && this.state.typeOfSkin ? this.state.typeOfSkin : 'Жирная'} />
               </Route>
               <Route path={['/order/everyMonthDry', '/order/halfYearDry', '/order/everyYearDry']}>
                 <input type='hidden' name='typeOfSkin' value={this.state && this.state.typeOfSkin ? this.state.typeOfSkin : 'Сухая'} />
               </Route>

               <Route path={['/order/everyMonth', '/order/everyMonthCombi', '/order/everyMonthFat', '/order/everyMonthDry']}>
                 <p className='wrap_or'><a href='https://pay.fondy.eu/s/wxz7RJSJ1xX' className='navLinks'>
                   <button type='submit' id='order_arrange'>Оформить</button>
                 </a></p>
               </Route>
               <Route path={['/order/halfYear', '/order/halfYearCombi', '/order/halfYearFat', '/order/halfYearDry']}>
                 <p className='wrap_or'><a href='https://pay.fondy.eu/s/spEFdAgLYkf' className='navLinks'>
                   <button type='submit' id='order_arrange'>Оформить</button>
                 </a></p>
               </Route>
               <Route path={['/order/everyYear', '/order/everyYearCombi', '/order/everyYearFat', '/order/everyYearDry']}>
                 <p className='wrap_or'><a href='https://pay.fondy.eu/s/1AU5ulqIzCO' className='navLinks'>
                   <button type='submit' id='order_arrange'>Оформить</button>
                 </a></p>
               </Route>

               <Route path={['/order/everyMonth', '/order/everyMonthCombi', '/order/everyMonthDry', '/order/everyMonthFat']}>
                   <input type='hidden' name='typeOfPayment' value='Ежемесячная подписка' />
               </Route>
               <Route path={['/order/halfYear', '/order/halfYearCombi', '/order/halfYearDry', '/order/halfYearFat']}>
                   <input type='hidden' name='typeOfPayment' value='Полугодовая подписка' />
               </Route>
               <Route path={['/order/everyYear', '/order/everyYearCombi', '/order/everyYearDry', '/order/everyYearFat']}>
                   <input type='hidden' name='typeOfPayment' value='Годовая подписка' />
               </Route>
           </div>
         </div>

     </form>
     </Route>

     <Route path={['/order/halfYear', '/order/halfYearCombi', '/order/halfYearFat', '/order/halfYearDry']}>
      <form action='/order/halfYear' method='POST'>
          <div className='wrap_Order'>
                <div className='mobile_menu' ref={this.mobile}>
                    <NavLink
                        className='mobile_each'
                        id='advantages'
                        to="/">
                        Преимущества</NavLink>

                    <NavLink
                        className='mobile_each'
                        to="/">
                        Что внутри</NavLink>

                    <NavLink
                        className='mobile_each'
                        to="/">
                        Доставка</NavLink>

                    <NavLink
                        className='mobile_each'
                        id='mob_order'
                        to="/">
                        Заказать</NavLink>

                    <NavLink
                        className='mobile_each'
                        id='mob_enter'
                        to="/enter">
                        Войти</NavLink>
                 </div>

            <div className='wrap2_header'>
              <div className='wrap_header headForOrder'>
                    <NavLink to='/' className='wrap_rosee mobile_rosee_order'><img src={rosee} className='header_logo'/></NavLink>
                    <div className='cls clsOrder' onClick={this.rot}>
                       <span className='partOfCls' id='cls1' ref={this.cls1}></span>
                       <span className='partOfCls' id='cls2' ref={this.cls2}></span>
                       <span className='partOfCls' id='cls3' ref={this.cls3}></span>
                    </div>
                    <p></p>
                    <NavLink to='/' className='nav_header' id='advantages' activeClassName='active_header'>Преимущества</NavLink>
                    <NavLink to='/' className='nav_header' id='inside' activeClassName='active_header'>Что внутри</NavLink>
                    <NavLink to='/' className='nav_header' id='delivery' activeClassName='active_header'>Доставка</NavLink>
                    <NavLink to='/' className='nav_header' id='header_buy' activeClassName='active_header'>Заказать</NavLink>
                    <NavLink to='/enter' className='nav_header' id='header_login'>Войти</NavLink>
              </div>
            </div>

            <div className='order'>
              <h2 className='order_title'>Заказ</h2>
              <h4 className='order_name order_text'>Имя и фамилия</h4>
              <h4 className='order_telephone order_text'>Телефон</h4>
              <h4 className='order_mail order_text'>Почта</h4>
              <h4 className='order_address order_text'>Адрес получателя</h4>
              <h4 className='order_comments order_text'>Комментарии</h4>
              <p className='order_title2'>Маски для ухода за кожей лица по подписке</p>
              <p className='order_addition' id='addition1'>Если посылка потеряется, мы всегда <br/> сможем её найти по вашим данным</p>
              <p className='order_addition' id='addition2'>Нужен для входа <br/> в аккаунт</p>
             <p className='order_addition' id='addition3'>Придумайте пароль <br/> для входа в аккаунт</p>
             <p className='order_addition' id='addition4'>Будем присылать <br/> уведомления об оплате</p>
             <p className='order_addition' id='addition5'>Введите адрес полностью,<br/> он нужен для отправки посылки</p>
             <p className='order_addition' id='addition6'>Если у вы хотите нам <br/> что-то сообщить</p>
             <p className='order_text2'>Заполните все поля, <br/>чтобы продолжить</p>
             <p className='order_text3'>Нажимая кнопку «Оформить», вы соглашаетесь с Политикой <br/> конфиденциальности и даёте согласие на обработку данных</p>


              <input type='text' name='username' className='name_input' required/>
              <input type='tel' name='userphone' className='telephone_input' required/>
              <input type='text' name='email' className='mail_input' required/>

              <input type='hidden' name='ipAddress' value={this.state.ipAddress} />

              <div className='radio'>
                <input type='checkbox' name='letter' className='radio_input' id='radio1'/>
                <label htmlFor='radio1' className='radio_label'>Получать письма с акциями</label>
              </div>

              <textarea name='useraddress' className='address_input' placeholder='Не забудьте указать индекс' required></textarea>
              <textarea name='comments' className='comments'></textarea>

              <div className='wrap_password_field'>
                <p className='passwordname order_text'>Пароль</p>
                <input type='password' name='password' className='password_field' required/>
              </div>
                <Route path={['/order/halfYear', '/order/everyMonthCombi',
                  '/order/halfYearCombi', '/order/everyYearCombi']}>
                  <input type='hidden' name='typeOfSkin' value={this.state && this.state.typeOfSkin ? this.state.typeOfSkin : 'Комбинированная'} />
                </Route>
                <Route path={['/order/everyMonthFat', '/order/halfYearFat', '/order/everyYearFat']}>
                  <input type='hidden' name='typeOfSkin' value={this.state && this.state.typeOfSkin ? this.state.typeOfSkin : 'Жирная'} />
                </Route>
                <Route path={['/order/everyMonthDry', '/order/halfYearDry', '/order/everyYearDry']}>
                  <input type='hidden' name='typeOfSkin' value={this.state && this.state.typeOfSkin ? this.state.typeOfSkin : 'Сухая'} />
                </Route>

                <Route path={['/order/everyMonth', '/order/everyMonthCombi', '/order/everyMonthFat', '/order/everyMonthDry']}>
                  <p className='wrap_or'><a href='https://pay.fondy.eu/s/A5qqFUTrtDV0J' className='navLinks'>
                    <button type='submit' id='order_arrange'>Оформить</button>
                  </a></p>
                </Route>
                <Route path={['/order/halfYear', '/order/halfYearCombi', '/order/halfYearFat', '/order/halfYearDry']}>
                  <p className='wrap_or'><a href='https://pay.fondy.eu/s/OnCUN8IoAFd' className='navLinks'>
                    <button type='submit' id='order_arrange'>Оформить</button>
                  </a></p>
                </Route>
                <Route path={['/order/everyYear', '/order/everyYearCombi', '/order/everyYearFat', '/order/everyYearDry']}>
                  <p className='wrap_or'><a href='https://pay.fondy.eu/s/BQo3bkVg' className='navLinks'>
                    <button type='submit' id='order_arrange'>Оформить</button>
                  </a></p>
                </Route>

                <Route path={['/order/everyMonth', '/order/everyMonthCombi', '/order/everyMonthDry', '/order/everyMonthFat']}>
                    <input type='hidden' name='typeOfPayment' value='Ежемесячная подписка' />
                </Route>
                <Route path={['/order/halfYear', '/order/halfYearCombi', '/order/halfYearDry', '/order/halfYearFat']}>
                    <input type='hidden' name='typeOfPayment' value='Полугодовая подписка' />
                </Route>
                <Route path={['/order/everyYear', '/order/everyYearCombi', '/order/everyYearDry', '/order/everyYearFat']}>
                    <input type='hidden' name='typeOfPayment' value='Годовая подписка' />
                </Route>
            </div>

          </div>

      </form>
      </Route>

      <Route path={['/order/everyYear', '/order/everyYearCombi', '/order/everyYearFat', '/order/everyYearDry']}>
       <form action='/order/everyYear' method='POST'>
           <div className='wrap_Order'>
                     <div className='mobile_menu' ref={this.mobile}>
                         <NavLink
                             className='mobile_each'
                             id='advantages'
                             to="/">
                             Преимущества</NavLink>

                         <NavLink
                             className='mobile_each'
                             to="/">
                             Что внутри</NavLink>

                         <NavLink
                             className='mobile_each'
                             to="/">
                             Доставка</NavLink>

                         <NavLink
                             className='mobile_each'
                             id='mob_order'
                             to="/">
                             Заказать</NavLink>

                         <NavLink
                             className='mobile_each'
                             id='mob_enter'
                             to="/#buyImg">
                             Войти</NavLink>
                      </div>

            <div className='wrap2_header'>
                <div className='wrap_header headForOrder'>
                      <NavLink to='/' className='wrap_rosee mobile_rosee_order'><img src={rosee} className='header_logo'/></NavLink>
                      <div className='cls clsOrder' onClick={this.rot}>
                          <span className='partOfCls' id='cls1' ref={this.cls1}></span>
                          <span className='partOfCls' id='cls2' ref={this.cls2}></span>
                          <span className='partOfCls' id='cls3' ref={this.cls3}></span>
                      </div>
                      <p></p>
                      <NavLink to='/' className='nav_header' id='advantages' activeClassName='active_header'>Преимущества</NavLink>
                      <NavLink to='/' className='nav_header' id='inside' activeClassName='active_header'>Что внутри</NavLink>
                      <NavLink to='/' className='nav_header' id='delivery' activeClassName='active_header'>Доставка</NavLink>
                      <NavLink to='/' className='nav_header' id='header_buy' activeClassName='active_header'>Заказать</NavLink>
                      <NavLink to='/enter' className='nav_header' id='header_login'>Войти</NavLink>
                    </div>
              </div>

             <div className='order'>
               <h2 className='order_title'>Заказ</h2>
               <h4 className='order_name order_text'>Имя и фамилия</h4>
               <h4 className='order_telephone order_text'>Телефон</h4>
               <h4 className='order_mail order_text'>Почта</h4>
               <h4 className='order_address order_text'>Адрес получателя</h4>
               <h4 className='order_comments order_text'>Комментарии</h4>
               <p className='order_title2'>Маски для ухода за кожей лица по подписке</p>
               <p className='order_addition' id='addition1'>Если посылка потеряется, мы всегда <br/> сможем её найти по вашим данным</p>
               <p className='order_addition' id='addition2'>Нужен для входа <br/> в аккаунт</p>
             <p className='order_addition' id='addition3'>Придумайте пароль <br/> для входа в аккаунт</p>
             <p className='order_addition' id='addition4'>Будем присылать <br/> уведомления об оплате</p>
             <p className='order_addition' id='addition5'>Введите адрес полностью,<br/> он нужен для отправки посылки</p>
             <p className='order_addition' id='addition6'>Если у вы хотите нам <br/> что-то сообщить</p>
             <p className='order_text2'>Заполните все поля, <br/>чтобы продолжить</p>
             <p className='order_text3'>Нажимая кнопку «Оформить», вы соглашаетесь с Политикой <br/> конфиденциальности и даёте согласие на обработку данных</p>

               <input type='text' name='username' className='name_input' required/>
               <input type='tel' name='userphone' className='telephone_input' required/>
               <input type='text' name='email' className='mail_input' required/>

               <input type='hidden' name='ipAddress' value={this.state.ipAddress} />

               <div className='radio'>
                 <input type='checkbox' name='letter' className='radio_input' id='radio1'/>
                 <label htmlFor='radio1' className='radio_label'>Получать письма с акциями</label>
               </div>

               <textarea name='useraddress' className='address_input' placeholder='Не забудьте указать индекс' required></textarea>
               <textarea name='comments' className='comments'></textarea>

               <div className='wrap_password_field'>
                 <p className='passwordname order_text'>Пароль</p>
                 <input type='text' name='password' className='password_field' required/>
               </div>
                 <Route path={['/order/everyYear', '/order/everyMonthCombi',
                   '/order/halfYearCombi', '/order/everyYearCombi']}>
                   <input type='hidden' name='typeOfSkin' value={this.state && this.state.typeOfSkin ? this.state.typeOfSkin : 'Комбинированная'} />
                 </Route>
                 <Route path={['/order/everyMonthFat', '/order/halfYearFat', '/order/everyYearFat']}>
                   <input type='hidden' name='typeOfSkin' value={this.state && this.state.typeOfSkin ? this.state.typeOfSkin : 'Жирная'} />
                 </Route>
                 <Route path={['/order/everyMonthDry', '/order/halfYearDry', '/order/everyYearDry']}>
                   <input type='hidden' name='typeOfSkin' value={this.state && this.state.typeOfSkin ? this.state.typeOfSkin : 'Сухая'} />
                 </Route>

                 <Route path={['/order/everyMonth', '/order/everyMonthCombi', '/order/everyMonthFat', '/order/everyMonthDry']}>
                   <p className='wrap_or'><a href='https://pay.fondy.eu/s/A5qqFUTrtDV0J' className='navLinks'>
                     <button type='submit' id='order_arrange'>Оформить</button>
                   </a></p>
                 </Route>
                 <Route path={['/order/halfYear', '/order/halfYearCombi', '/order/halfYearFat', '/order/halfYearDry']}>
                   <p className='wrap_or'><a href='https://pay.fondy.eu/s/OnCUN8IoAFd' className='navLinks'>
                     <button type='submit' id='order_arrange'>Оформить</button>
                   </a></p>
                 </Route>
                 <Route path={['/order/everyYear', '/order/everyYearCombi', '/order/everyYearFat', '/order/everyYearDry']}>
                   <p className='wrap_or'><a href='https://pay.fondy.eu/s/BQo3bkVg' className='navLinks'>
                     <button type='submit' id='order_arrange'>Оформить</button>
                   </a></p>
                 </Route>

                 <Route path={['/order/everyMonth', '/order/everyMonthCombi', '/order/everyMonthDry', '/order/everyMonthFat']}>
                     <input type='hidden' name='typeOfPayment' value='Ежемесячная подписка' />
                 </Route>
                 <Route path={['/order/halfYear', '/order/halfYearCombi', '/order/halfYearDry', '/order/halfYearFat']}>
                     <input type='hidden' name='typeOfPayment' value='Полугодовая подписка' />
                 </Route>
                 <Route path={['/order/everyYear', '/order/everyYearCombi', '/order/everyYearDry', '/order/everyYearFat']}>
                     <input type='hidden' name='typeOfPayment' value='Годовая подписка' />
                 </Route>
             </div>
           </div>

       </form>
       </Route>
       <p className='wrap_order_foot'>
           <footer className='wrap_Footer'>
             <div className='footer orderFoot'>
               <div className='wrap_footer_rosee'><img src={rosee2} className='footer_logo'/></div>
                 <a href='https://docs.google.com/document/d/1d4pEXBZh_aXOMoJkhbtwu4klflWcsoBYGcFbIQUPdFg/edit' className='nav_footer' id='footer_offer'>Оферта</a>
                 <a href='https://docs.google.com/document/d/1IcFeUEIdDZ6cU6kjTjYtYONfeamZvNOqsNXBeH7hl2k/edit' className='nav_footer' id='footer_confidentiality'>Политика конфиденциальности</a>
                 <a href='https://docs.google.com/document/d/1EiJUgz1JSZKRvfzWYJpWcdhlXHZHRAF6xbwm0qXSqLs/edit' className='nav_footer' id='footer_sentence'>Пользовательское предложение</a>
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

export default Order;
