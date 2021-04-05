import React from 'react';
import { NavLink } from 'react-router-dom';
import rosee from '../../public/images/rosée.png';
import $ from 'jquery';

class CosmeticMasks extends React.Component{

constructor() {

  super()

  this.animation = React.createRef();
  this.every = React.createRef();
}

componentDidMount() {
  setTimeout(() => {
    var theWindow = $(window);

    var winHeight = theWindow.height();

    var animDuration = winHeight / 2;

    var animData = {

    container: document.getElementById('lottie-1'),

    renderer: 'svg',

    loop: false,

    autoplay: false,

    path: 'https://gist.githubusercontent.com/PovetevKirill/c78f8ac9b74bc468307dd7d046ba1df7/raw/a975f3c9d288aeaaf5c72d29a49675b4aaad6542/rosee_site_animation_whitebg.json'

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
    //console.log('1');
    //anim.pause();

    }

  });
  }, 100);
  window.addEventListener('scroll', () => {
    console.log(this.animation.current.getBoundingClientRect().top);
    if(this.animation.current.getBoundingClientRect().top > 300) {
      /*window.addEventListener('scroll', () => {
        setTimeout(() => {

        }, 1505);
      });*/
      this.animation.current.classList.remove('animationMove2');
      this.animation.current.classList.add('move1');
    }
    if(window.innerHeight - this.animation.current.getBoundingClientRect().top < 200) {
      this.animation.current.classList.remove('animationMove2');
      this.animation.current.classList.remove('move1');
    }
    if(this.animation.current.getBoundingClientRect().top < '-500') {
      this.animation.current.classList.add('move1');
    }
    if(this.every.current.getBoundingClientRect().top < '-650') {
      this.animation.current.classList.remove('move1');
      this.animation.current.classList.add('animationMove2');
    }
  /*  else {
      this.animation.current.classList.remove('animationMove');
    }*/
  });
}

  render() {
    return(
      <div className='cosmeticMasks'>
      <p className='masks_title' ref={this.every}>Еженедельная доставка <br/> косметических масок,<br/> отобранных вручную</p>
      <p className='masks_subtitle'>Каждую неделю отправляем маски <br/> для ухода за кожей лица. Маски подбираем <br/> вручную, упаковываем в плотную бумагу. <br/>Отправка по всей России.</p>
      <NavLink to='#' id='masks_order'>Заказать</NavLink>
          <NavLink to='#' id='masks_buy'>Купить в подарок</NavLink>
          <div id='lottie-1' ref={this.animation}>
          </div>
      </div>
    )
  }
}

export default CosmeticMasks;
