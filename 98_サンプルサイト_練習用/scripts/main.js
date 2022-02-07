document.addEventListener('DOMContentLoaded', function() {
  const main = new Main();
});

class Main {
  constructor() {
    this.header = document.querySelector('.header');
    this._observers = [];
    this._init();
  }

  set observers(val) {
    this._observers.push(val);
  }

  get observers() {
    return this._observers;
  }

  _init() {
    new MobileMenu();
    this.hero = new HeroSlider(".swiper-container");
    Pace.on('done', this._paceDone.bind(this));
  }

  _paceDone() {
    this._scrollInit();
  }

  _inviewAnimation(el, inview) {
    if(inview) {
      el.classList.add('inview');
    }else {
      el.classList.remove('inview');
    }
  }


  _navAnimation(el, inview) {
    if(inview) {
      this.header.classList.remove('triggered');
    }else {
      this.header.classList.add('triggered');
    }
  }

  _textAnimation(el, isIntersecting) {
    if(isIntersecting) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
    }
  }

  _toggleSlideAnimation(el, inview) {
    if(inview) {
      this.hero.start();
    }else {
      this.hero.stop();
    }
  }

  _destroyObservers() {
    this.observers.forEach(ob => {
      ob.destroy();
    });
  }

  destroy() {
    this._destroyObservers();
  }

  _scrollInit() {
    //セッターメソッドに設定した関数に値を代入すると、セッターメソッドが実行される
    this.observers = new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), {once: false});
    this.observers = new ScrollObserver('.cover-slide', this._inviewAnimation);
    //代入がされていない状態で呼び出されるとゲッターメソッドとして呼びさす
    // console.log(this.observers);
    this.observers = new ScrollObserver('.tween-animate-title', this._textAnimation);
    this.observers = new ScrollObserver('.swiper-container', this._toggleSlideAnimation.bind(this), {once: false});
  }
}