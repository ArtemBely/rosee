import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import mask from '../../public/images/Mask Group 1.svg';
import rosee from '../../public/images/LogoRosee.svg';
import $ from 'jquery';

class CosmeticMasks extends React.Component{

constructor() {

  super()

  this.animation = React.createRef();
  this.every = React.createRef();
  this.everyWeek = React.createRef();
  this.order = React.createRef();
  this.buy = React.createRef();
  this.indicate = React.createRef();
}

componentDidMount() {
  if(window.screen.width > 770) {
  setTimeout(() => {
    var theWindow = $(window);

        var winHeight = theWindow.height();

        var animDuration = winHeight / 2;

        var animData = {

        container: document.getElementById('lottie-1'),

        renderer: 'svg',

        loop: false,

        autoplay: false,

        path: 'https://gist.githubusercontent.com/PovetevKirill/f50185fc60c9710ad5248ed212650320/raw/57f77c47951a9ca5aa234b184608789c92dbaeca/anim.json'

        };

        var anim = bodymovin.loadAnimation(animData);

        $( window ).scroll(function() {

        animatebodymovin(animDuration, anim);

        });

        function animatebodymovin(duration, animObject) {

        var scrollPosition = theWindow.scrollTop();

        var maxFrames = animObject.totalFrames;

        var frame = (maxFrames / 100) * (scrollPosition / (duration / 100));

        animObject.goToAndStop(frame, true);

        }

        anim.addEventListener("enterFrame", function (animation, animObject) {

        if (animation.currentTime > (anim.totalFrames - 1)) {

        animObject.pause();

        //anim.pause();

        }

        });

  }, 100);
  window.addEventListener('scroll', () => {
    console.log(this.indicate.current.getBoundingClientRect().top);
    if(this.animation.current.getBoundingClientRect().top > 300) {
      this.animation.current.classList.remove('animationMove2');
    }
    if(this.indicate.current.getBoundingClientRect().top > 90) {
      this.animation.current.classList.remove('animationMove2');
    }
    if(this.animation.current.getBoundingClientRect().top < '-500') {
      this.animation.current.classList.add('animationMove2');
    }
    if(this.indicate.current.getBoundingClientRect().top < '-1110') {
      this.animation.current.classList.add('animationMove2');
    }
  });
 }
}

  render() {
    return(
      <div className='wrap_cosmeticMasks'>
        <div className='cosmeticMasks'>
        <p className='wrap_allEvery'>
        <p className='masks_title' ref={this.every}>???????????????????????? ???????????????? <br/> ?????????????????????????? ??????????,<br/> ???????????????????? ??????????????</p>
        <p className='masks_subtitle' ref={this.everyWeek}>???????????? ???????????? ???????????????????? ?????????? <br/> ?????????????????? ???????????????? ????????. ?????????? ?????????????????? <br/> ??????????????, ?????????????????????? ?????????????????? ????????????. <br/>???????????????? ?????????????? ????????????.</p>
        <div className='mask_phone'>
			    <img src={mask} className='phone_mask'/>
		    </div>

        <Link activeClass="active"
           id='masks_sub_phone'
           to="sixtheenId"
           spy={true}
           smooth={true}
           hashSpy={true}
           duration={700}
           isDynamic={true}
           onSetActive={this.handleSetActive}
           onSetInactive={this.handleSetInactive}
           ignoreCancelEvents={false}>
           ???????????????? ????????????????</Link>

        <Link activeClass="active"
           id='masks_order'
           to="buyImg"
           spy={true}
           smooth={true}
           hashSpy={true}
           duration={700}
           isDynamic={true}
           onSetActive={this.handleSetActive}
           onSetInactive={this.handleSetInactive}
           ignoreCancelEvents={false}
           ref={this.order}>
           ????????????????</Link>

        <Link activeClass="active"
           id='masks_buy'
           to="buyImg"
           spy={true}
           smooth={true}
           hashSpy={true}
           duration={700}
           isDynamic={true}
           onSetActive={this.handleSetActive}
           onSetInactive={this.handleSetInactive}
           ignoreCancelEvents={false}
           ref={this.buy}>
           ???????????? ??????????????????</Link>

        </p>
            <div className='wrap_lottie'><div id='lottie-1' ref={this.animation}></div>
            </div>
        </div>
        <p ref={this.indicate}></p>
      </div>
    )
  }
}

export default CosmeticMasks;
