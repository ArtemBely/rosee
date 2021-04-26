import React from 'react';
import { NavLink } from 'react-router-dom';

class Order extends React.Component{

  constructor() {

    super()
  }

render() {
  return(
    <div className='wrap_Order'>
      <div className='order'>
        <h2 className='order_title'>Заказ</h2>
        <h4 className='order_name order_text'>Имя</h4>
        <h4 className='order_telephone order_text'>Телефон</h4>
        <h4 className='order_mail order_text'>Почта</h4>
        <h4 className='order_services order_text'>Услуги</h4>
        <h4 className='order_receive order_text'>Способ получения</h4>
        <h4 className='order_date order_text'>Дата и время</h4>
        <h4 className='order_address order_text'>Адрес</h4>
        <h4 className='order_comments order_text'>Комментарии</h4>
        <h4 className='order_payment order_text'>Оплата</h4>

        <input type='text' name='username' placeholder='Петровский-Разумовский Константин' className='name_input'/>
        <input type='tel' name='userphone' className='telephone_input'/>
        <input type='text' name='usermail' className='mail_input'/>

        <div className='radio'>
          <input type='radio' name='letter' className='radio_input' id='radio1'/>
          <label for='radio1' className='radio_label'>Получать письма с акциями</label>
        </div>
        <NavLink to='#' id='order_yandex'>Заполнить из Яндекса</NavLink>

        <div className='checkbox'>
          <input type='checkbox' name='services' className='checkbox_input' id='checkbox1'/>
          <label for='checkbox1' className='checkbox_label'>Второй год гарантии <span className='label_price'> 700 р</span></label>
        </div>
        <div className='checkbox2'>
          <input type='checkbox' name='services' className='checkbox_input2' id='checkbox2'/>
          <label for='checkbox2' className='checkbox_label2'>Подарочная упаковка <span className='label_price'> 500 р</span></label>
        </div>
        
        <input type='date' name='date' className='date_input'/>
        <select name='time' className='time_select'>
          <option value='time1'> 10:00 - 12:00</option>
          <option value='time2'>12:00 - 14:00</option>
          <option value='time3'>14:00 - 16:00</option>
          <option value='time4'>16:00 - 18:00</option>
          <option value='time1'>18:00 - 20:00</option>
        </select>
        <textarea name='useraddress' className='address_input'></textarea>
        <textarea name='comments' className='comments'></textarea>

        <div className='radio_pay'>
          <input type='radio' name='pay' className='pay_input' id='pay1'/>
          <label for='pay1' className='pay_label'>По карте онлайн</label>
        </div>
        <div className='radio_pay2'>
          <input type='radio' name='pay' className='pay_input' id='pay2'/>
          <label for='pay2' className='pay_label'>Наличными курьеру</label>
        </div>
        <div className='radio_pay3'>
          <input type='radio' name='pay' className='pay_input' id='pay3'/>
          <label for='pay3' className='pay_label'>По счёту для юрлица</label>
        </div>

        <NavLink to='#' id='order_arrange'>Оформить</NavLink>
        <p className='arrange_text'>
          Укажите <NavLink to='#' className='arrange_text2'>телефон</NavLink> для подтверждения <br/>заказа 
          и <NavLink  to='#' className='arrange_text2'>адрес доставки</NavLink>
        </p>

        <button type='button' className='btn_delivery'>Доставка</button>
        <button type='button' className='btn_pickup'>Самовывоз</button>
        

      </div>
    </div>
  )
 }
}

export default Order;
