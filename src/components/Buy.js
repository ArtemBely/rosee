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
    this.pres = React.createRef();
  }

  componentDidMount() {
    if(window.location.pathname == '/') {
      this.once.current.classList.add('activeOnce');
    }
    if(this.pres.current.classList.contains('forMyself')) {
      this.forme.current.classList.remove('forMyself');
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
      <div className='buyBlock' id='blockBuy'>
       <div className='wrap_skinImages' id='buyImg'>
        <img src={tree} id='tree' />
        <img src={face} id='face' />
       </div>
       <p className='qty'><p className='sixtheen' id='sixtheenId'>16???????????? ??????????????</p>
       <NavLink to='/' className='presents' activeClassName='forMyself' ref={this.forme} onClick={() => {
         this.forme.current.classList.contains('forMyself') ? null : this.forme.current.classList.add('forMyself')
       }}>?????? ???????? </NavLink>
        ?????? <NavLink exact to='/present' className='presents specDashed' activeClassName='forMyself' ref={this.pres} onClick={() => {
          this.forme.current.classList.contains('forMyself') ? this.forme.current.classList.remove('forMyself') : null
        }}> ?? ?????????????? </NavLink></p>
       <div className='chooseSecond'>
          <p className='typeOfSkin'>???????????????? ????????????????</p>
          <p className='combi chooseType' ref={this.combi} onClick={this.combiChange}>??????????????????????????????</p>
          <p className='fatty' ref={this.fat} onClick={this.fatChange}>????????????</p>
          <p className='dry' ref={this.dry} onClick={this.dryChange}>??????????</p>
       </div>
       <div className='payment1'>
          <p className='payment2'>????????????</p>
          <NavLink to='/once' className='once' activeClassName='activeOnce' ref={this.once}>??????????????????????</NavLink>
          <NavLink to='/half' className='sixMonth' activeClassName='activeSixMonth' onClick={() => {
            this.once.current.classList.contains('activeOnce') ? this.once.current.classList.remove('activeOnce') : null
          }}>???????????? ??????????????</NavLink>
          <NavLink to='/year' className='everyYear' activeClassName='activeEveryYear' onClick={() => {
            this.once.current.classList.contains('activeOnce') ? this.once.current.classList.remove('activeOnce') : null
          }}>????????????????</NavLink>
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
                } className='buy_link'>????????????????
              </NavLink>
            </p>
            <p className='newPrice'><b className='priceNew'>2490.-</b><p className='month1'>??????????????</p></p>
            <div className='oldPrice' id='old1'>3990</div>
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
                } className='buy_link'>????????????????
              </NavLink>
            </p>
            <p className='newPrice'><b className='priceNew'>13200.-</b><p className='month1'>?? ?????? ????????</p></p>
            <div className='oldPrice'>14940</div>
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
              } className='buy_link'>????????????????
              </NavLink>
            </p>
            <p className='newPrice'><b className='priceNew'>25200.-</b><p className='month1'>?? ??????</p></p>
            <div className='oldPrice'>29880</div>
          </Route>
       </div>
      </div>
    </div>
  )
 }
}

export default Buy;
