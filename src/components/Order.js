import React from 'react';
import { Route, NavLink } from 'react-router-dom';

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
      repeat
    }
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

render() {
  return(
    <div>
    {this.errF()}
    {this.succ()}
    {this.rep()}
    <Route path={['/order/everyMonth', '/order/everyMonthCombi', '/order/everyMonthFat', '/order/everyMonthDry']}>
     <form action='/order/everyMonth' method='POST'>
         <div className='wrap_Order'>
           <div className='order'>
             <h2 className='order_title'>Заказ</h2>
             <h4 className='order_name order_text'>Имя и фамилия</h4>
             <h4 className='order_telephone order_text'>Телефон</h4>
             <h4 className='order_mail order_text'>Почта</h4>
             <h4 className='order_address order_text'>Адрес получателя</h4>
             <h4 className='order_comments order_text'>Комментарии</h4>

             <input type='text' name='username' className='name_input' required/>
             <input type='tel' name='userphone' className='telephone_input' required/>
             <input type='text' name='email' className='mail_input' required/>
             <input type='hidden' name='timestamp' />

             <div className='radio'>
               <input type='radio' name='letter' className='radio_input' id='radio1'/>
               <label htmlFor='radio1' className='radio_label'>Получать письма с акциями</label>
             </div>

             <textarea name='useraddress' className='address_input' required></textarea>
             <textarea name='comments' className='comments'></textarea>

             <div className='wrap_password_field'>
               <p className='passwordname'>Пароль</p>
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
                 <a href='https://pay.fondy.eu/s/A5qqFUTrtDV0J'>
                   <button type='submit' id='order_arrange'>Оформить</button>
                 </a>
               </Route>
               <Route path={['/order/halfYear', '/order/halfYearCombi', '/order/halfYearFat', '/order/halfYearDry']}>
                 <a href='https://pay.fondy.eu/s/OnCUN8IoAFd'>
                   <button type='submit' id='order_arrange'>Оформить</button>
                 </a>
               </Route>
               <Route path={['/order/everyYear', '/order/everyYearCombi', '/order/everyYearFat', '/order/everyYearDry']}>
                 <a href='https://pay.fondy.eu/s/BQo3bkVg'>
                   <button type='submit' id='order_arrange'>Оформить</button>
                 </a>
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
            <div className='order'>
              <h2 className='order_title'>Заказ</h2>
              <h4 className='order_name order_text'>Имя и фамилия</h4>
              <h4 className='order_telephone order_text'>Телефон</h4>
              <h4 className='order_mail order_text'>Почта</h4>
              <h4 className='order_address order_text'>Адрес получателя</h4>
              <h4 className='order_comments order_text'>Комментарии</h4>

              <input type='text' name='username' className='name_input' required/>
              <input type='tel' name='userphone' className='telephone_input' required/>
              <input type='text' name='email' className='mail_input' required/>

              <div className='radio'>
                <input type='radio' name='letter' className='radio_input' id='radio1'/>
                <label htmlFor='radio1' className='radio_label'>Получать письма с акциями</label>
              </div>

              <textarea name='useraddress' className='address_input' required></textarea>
              <textarea name='comments' className='comments'></textarea>

              <div className='wrap_password_field'>
                <p className='passwordname'>Пароль</p>
                <input type='text' name='password' className='password_field' required/>
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
                  <a href='https://pay.fondy.eu/s/A5qqFUTrtDV0J'>
                    <button type='submit' id='order_arrange'>Оформить</button>
                  </a>
                </Route>
                <Route path={['/order/halfYear', '/order/halfYearCombi', '/order/halfYearFat', '/order/halfYearDry']}>
                  <a href='https://pay.fondy.eu/s/OnCUN8IoAFd'>
                    <button type='submit' id='order_arrange'>Оформить</button>
                  </a>
                </Route>
                <Route path={['/order/everyYear', '/order/everyYearCombi', '/order/everyYearFat', '/order/everyYearDry']}>
                  <a href='https://pay.fondy.eu/s/BQo3bkVg'>
                    <button type='submit' id='order_arrange'>Оформить</button>
                  </a>
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
             <div className='order'>
               <h2 className='order_title'>Заказ</h2>
               <h4 className='order_name order_text'>Имя и фамилия</h4>
               <h4 className='order_telephone order_text'>Телефон</h4>
               <h4 className='order_mail order_text'>Почта</h4>
               <h4 className='order_address order_text'>Адрес получателя</h4>
               <h4 className='order_comments order_text'>Комментарии</h4>

               <input type='text' name='username' className='name_input' required/>
               <input type='tel' name='userphone' className='telephone_input' required/>
               <input type='text' name='email' className='mail_input' required/>

               <div className='radio'>
                 <input type='radio' name='letter' className='radio_input' id='radio1'/>
                 <label htmlFor='radio1' className='radio_label'>Получать письма с акциями</label>
               </div>

               <textarea name='useraddress' className='address_input' required></textarea>
               <textarea name='comments' className='comments'></textarea>

               <div className='wrap_password_field'>
                 <p className='passwordname'>Пароль</p>
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
                   <a href='https://pay.fondy.eu/s/A5qqFUTrtDV0J'>
                     <button type='submit' id='order_arrange'>Оформить</button>
                   </a>
                 </Route>
                 <Route path={['/order/halfYear', '/order/halfYearCombi', '/order/halfYearFat', '/order/halfYearDry']}>
                   <a href='https://pay.fondy.eu/s/OnCUN8IoAFd'>
                     <button type='submit' id='order_arrange'>Оформить</button>
                   </a>
                 </Route>
                 <Route path={['/order/everyYear', '/order/everyYearCombi', '/order/everyYearFat', '/order/everyYearDry']}>
                   <a href='https://pay.fondy.eu/s/BQo3bkVg'>
                     <button type='submit' id='order_arrange'>Оформить</button>
                   </a>
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
    </div>
  )
 }
}

export default Order;
