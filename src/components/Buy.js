import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import tree from '../../public/images/Rectangle 285.svg';
import face from '../../public/images/Rectangle 252.png';

class Buy extends React.Component{

  constructor() {

    super()

    this.state = {
      typeSkin: 'combi'
    }

    this.combi = React.createRef();
    this.fat = React.createRef();
    this.dry = React.createRef();
    this.once = React.createRef();
    this.forme = React.createRef();
  }

  componentDidMount() {
    if(window.location.pathname == '/') {
      this.once.current.classList.add('activeOnce');
    }
  }

combiChange = () => {
  if(this.fat.current.classList.contains('chooseType') || this.dry.current.classList.contains('chooseType')) {
    this.fat.current.classList.remove('chooseType');
    this.dry.current.classList.remove('chooseType');
    this.combi.current.classList.add('chooseType');
  }
  this.setState({ typeSkin: 'combi' });
}
fatChange = () => {
  if(this.combi.current.classList.contains('chooseType') || this.dry.current.classList.contains('chooseType')) {
    this.combi.current.classList.remove('chooseType');
    this.dry.current.classList.remove('chooseType');
    this.fat.current.classList.add('chooseType');
  }
  this.setState({ typeSkin: 'fat' });
}
dryChange = () => {
  if(this.fat.current.classList.contains('chooseType') || this.combi.current.classList.contains('chooseType')) {
    this.fat.current.classList.remove('chooseType');
    this.combi.current.classList.remove('chooseType');
    this.dry.current.classList.add('chooseType');
  }
  this.setState({ typeSkin: 'dry' });
}

render() {
  return(
    <div className='wrap_Buy'>
      <div className='buyBlock'>
       <div className='wrap_skinImages'>
        <img src={tree} id='tree' />
        <img src={face} id='face' />
       </div>
       <p className='qty'><p className='sixtheen'>16 масок в месяц</p>
       <NavLink to='/' className='presents' activeClassName='forMyself' ref={this.forme} onClick={() => {
         this.forme.current.classList.contains('forMyself') ? null : this.forme.current.classList.add('forMyself')
       }}>для себя </NavLink>
        или <NavLink exact to='/present' className='presents' activeClassName='forMyself' onClick={() => {
          this.forme.current.classList.contains('forMyself') ? this.forme.current.classList.remove('forMyself') : null
        }}> в подарок </NavLink></p>
       <div className='chooseSecond'>
          <p className='typeOfSkin'>Выберите тип кожи</p>
          <p className='combi chooseType' ref={this.combi} onClick={this.combiChange}>Комбинированная</p>
          <p className='fatty' ref={this.fat} onClick={this.fatChange}>Жирная</p>
          <p className='dry' ref={this.dry} onClick={this.dryChange}>Сухая</p>
       </div>
       <div className='payment1'>
          <p className='payment2'>Оплата</p>
          <NavLink to='/once' className='once' activeClassName='activeOnce' ref={this.once}>Раз в месяц</NavLink>
          <NavLink to='/half' className='sixMonth' activeClassName='activeSixMonth' onClick={() => {
            this.once.current.classList.contains('activeOnce') ? this.once.current.classList.remove('activeOnce') : null
          }}>Каждые полгода</NavLink>
          <NavLink to='/year' className='everyYear' activeClassName='activeEveryYear' onClick={() => {
            this.once.current.classList.contains('activeOnce') ? this.once.current.classList.remove('activeOnce') : null
          }}>Ежегодно</NavLink>
       </div>
       <div className='wrap_pay'>
          <Route exact path={['/', '/once', '/present', '/enter']}>
            <p className='makePayment'>
              <NavLink to={
                  this.state.typeSkin && this.state.typeSkin == 'combi' ?
                  '/order/everyMonthCombi' :
                  this.state.typeSkin && this.state.typeSkin == 'fat' ?
                  '/order/everyMonthFat' :
                  this.state.typeSkin && this.state.typeSkin == 'dry' ?
                  '/order/everyMonthDry' : '/order/everyMonth'
                } className='buy_link'>Оформить
              </NavLink>
            </p>
            <p className='newPrice'><b className='priceNew'>2490.-</b><p className='month1'>в месяц</p></p>
            <div className='oldPrice' style={{opacity: 0}}>3990</div>
          </Route>
          <Route exact path='/half'>
            <p className='makePayment'>
              <NavLink to={
                  this.state.typeSkin && this.state.typeSkin == 'combi' ?
                  '/order/halfYearCombi' :
                  this.state.typeSkin && this.state.typeSkin == 'fat' ?
                  '/order/halfYearFat' :
                  this.state.typeSkin && this.state.typeSkin == 'dry' ?
                  '/order/halfYearDry' : '/order/halfYear'
                } className='buy_link'>Оформить
              </NavLink>
            </p>
            <p className='newPrice'><b className='priceNew'>13200.-</b><p className='month1'>в месяц</p></p>
            <div className='oldPrice'>15000</div>
          </Route>
          <Route exact path='/year'>
            <p className='makePayment'>
              <NavLink to={
                  this.state.typeSkin && this.state.typeSkin == 'combi' ?
                  '/order/everyYearCombi' :
                  this.state.typeSkin && this.state.typeSkin == 'fat' ?
                  '/order/everyYearFat' :
                  this.state.typeSkin && this.state.typeSkin == 'dry' ?
                  '/order/everyYearDry' : '/order/everyYear'
              } className='buy_link'>Оформить
              </NavLink>
            </p>
            <p className='newPrice'><b className='priceNew'>25200.-</b><p className='month1'>в месяц</p></p>
            <div className='oldPrice'>30000</div>
          </Route>
       </div>
      </div>
    </div>
  )
 }
}

export default Buy;
