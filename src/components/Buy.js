import React from 'react';
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
       <p className='qty'><p className='sixtheen'>16 масок в месяц</p><b className='forMyself'>для себя </b>
        или <b className='presents'> в подарок </b></p>
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
          <p className='makePayment'>Оформить</p>
          <p className='newPrice'><b className='priceNew'>1990.-</b> <p className='month1'>в месяц</p></p>
          <div className='oldPrice'>3990</div>
       </div>
      </div>
    </div>
  )
 }
}

export default Buy;
