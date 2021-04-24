import React from 'react';
import { NavLink } from 'react-router-dom';
import tree from '../../public/images/Rectangle 285.svg';
import face from '../../public/images/Rectangle 252.png';

class Buy extends React.Component{

  constructor() {

    super()
  }

render() {
  return(
    <div className='wrap_Buy'>
      <div className='buyBlock'>
       <div className='wrap_skinImages'>
        <img src={tree} id='tree' />
        <img src={face} id='face' />
       </div>
       <p className='qty'><p className='sixtheen'>16 масок в месяц</p><NavLink exact to='/' className='presents' activeClassName='forMyself'>для себя </NavLink>
        или <NavLink exact to='/present' className='presents' activeClassName='forMyself'> в подарок </NavLink></p>
       <div className='chooseSecond'>
          <p className='typeOfSkin'>Выберите тип кожи</p>
          <p className='combi'>Комбинированная</p>
          <p className='fatty'>Жирная</p>
          <p className='dry'>Сухая</p>
       </div>
       <div className='payment1'>
          <p className='payment2'>Оплата</p>
          <p className='once'>Раз в месяц</p>
          <p className='sixMonth'>Каждые полгода</p>
          <p className='everyYear'>Ежегодно</p>
       </div>
       <div className='wrap_pay'>
          <p className='makePayment'><NavLink to='/order' className='buy_link'>Оформить</NavLink></p>
          <p className='newPrice'><b className='priceNew'>1990.-</b><p className='month1'>в месяц</p></p>
          <div className='oldPrice'>3990</div>
       </div>
      </div>
    </div>
  )
 }
}

export default Buy;
