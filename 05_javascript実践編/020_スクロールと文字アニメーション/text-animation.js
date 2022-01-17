class TextAnimation {
  constructor(el) {//渡されるelが文字列ではなくDOMの場合もあるので、
    //その場合DOMでさらにqueryselectorを実施するとDOM自体が文字列として検索されてしまうのでおかしくなる。
    //だからelがDOMの場合はdocument.queryselector(el)を実行せずに
    //el instanceof HTMLElementで条件分岐を付けてそのままDOMであるelを代入する
      this.DOM = {};
      this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
        //渡ってきたelがDOMではない場合はqueryselectorを使ってDOMを代入する
      this.chars = this.DOM.el.innerHTML.trim().split("");
      this.DOM.el.innerHTML = this._splitText();
  }
  _splitText() {
      return this.chars.reduce((acc, curr) => {
          curr = curr.replace(/\s+/, '&nbsp;');
          return `${acc}<span class="char">${curr}</span>`;
      }, "");
  }
  animate() {
      this.DOM.el.classList.toggle('inview');
  }
}
class TweenTextAnimation extends TextAnimation {
  constructor(el) {
      super(el);
      this.DOM.chars = this.DOM.el.querySelectorAll('.char');
  }
  
  animate() {
      this.DOM.el.classList.add('inview');
      this.DOM.chars.forEach((c, i) => {
          TweenMax.to(c, .6, {
              ease: Back.easeOut,
              delay: i * .05,
              startAt: { y: '-50%', opacity: 0},
              y: '0%',
              opacity: 1
          });
      });
  }
}
