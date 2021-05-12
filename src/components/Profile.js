import React from 'react';
import {NavLink} from 'react-router-dom';
import rosee from '../../public/images/rosée.png';
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
  }

  userData = () => {
    if(this.state && this.state.user) {
      return (
        <div className='wrap_userData'>
          <div className='userData'>
            <p className='user_name'>{this.state.user.username}</p>
            <p className='user_email' id='user'>{this.state.user.email}</p>
            <p className='user_password' id='user'>Пароль: **************</p>
            <p className='user_phone' id='user'>{this.state.user.userphone}</p>
            <p className='user_payment' id='user'>{this.state.user.typeOfPayment}</p>
            <p className='user_card' id='user'>**** **** **** 5017</p>
            <p className='user_timestamp'>Следующая оплата: {this.state.user.timestamp}</p>
            <p className='user_address' id='user'>{this.state.user.useraddress}</p>

            <p className='change_name' id='change'>Изменить имя</p>
            <p className='change_email' id='change'>Изменить почту</p>
            <p className='change_password' id='change'>Изменить пароль</p>
            <p className='change_phone' id='change'>Изменить телефон</p>
            <p className='change_period' id='change'>Изменить период</p>
            <p className='change_card' id='change'>Изменить карту оплаты</p>
            <p className='change_address' id='change'>Изменить адрес</p>
            <p className='cancel_sub'>Отменить подписку</p>
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
                <button type='submit' className="questions_button">Оформить</button>
              </form>
            </div>
          </div>
          <footer className='wrap_Footer'>
            <div className='footer'>
  			    <div className='wrap_footer_rosee'><img src={rosee2} className='footer_logo'/></div>
  				  <NavLink to='#' className='nav_footer' id='footer_offer' activeClassName='active_footer'>Оферта</NavLink>
  				  <NavLink to='#' className='nav_footer' id='footer_confidentiality' activeClassName='active_footer'>Политика конфиденциальности</NavLink>
  				  <NavLink to='#' className='nav_footer' id='footer_sentence' activeClassName='active_footer'>Пользовательское предложение</NavLink>
				    <p className='nav_footer' id='footer_phone'>8 902 247 13 61</p>
				    <p className='nav_footer' id='footer_email'>hi@rosee.ws</p>
				    <p className='nav_footer' id='footer_information'>ИП Поветьев Кирилл Владимирович <br/>ИНН 562903440350 <br/>ОГРН 320565800048044</p>
          </div>
          </footer>
          </div>
      )
    }
  }

  render() {
    return (
      <div>
        <div className='wrapMain_header'>
          <div className='wrap_header'>
            <p className='wrap_rosee'><img src={rosee} className='header_logo'/></p>
            <p></p>
            <NavLink to='#' className='nav_header' id='advantages' activeClassName='active_header'>Преимущества</NavLink>
            <NavLink to='#' className='nav_header' id='inside' activeClassName='active_header'>Что внутри</NavLink>
            <NavLink to='#' className='nav_header' id='delivery' activeClassName='active_header'>Доставка</NavLink>
            <NavLink to='#' className='nav_header' id='header_buy' activeClassName='active_header'>Заказать</NavLink>
            <p><a href='/profile/logout' className='nav_header' id='header_login'>Выйти</a></p>
            {this.userData()}
          </div>
        </div>
      </div>
      
    )
  }
}

export default Profile;
