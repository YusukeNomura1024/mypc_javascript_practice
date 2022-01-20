//前回までの記述ではIntersectionObserverクラスに、直書きしたコールバック関数や
//対象要素を渡していたが、これらをまとめて一つのクラスとして動作できるクラスを作成することで、
//IntersectionObserverクラスに細かいアニメーション処理を格納するのではなくて
//スクロールだけで、引数で渡した要素を監視して、渡したコールバック関数を実行してくれるクラスを作ることで利便性が高まる

class ScrollObserver {
  //constructorはインスタンス化の際に渡した引数を呼び出せる
  //第一引数だけとか、第二引数とか設定ができる
  //今回は対象DOM（もしくはDOM名）、コールバック関数、オプション
  constructor(els, cb, options) {

      // this.els = document.querySelectorAll('.animate-title');
      //このままだとanimate-titleのクラスにしか使えないので、
      //どのクラスにも対応できるように、ScrollObserverクラスに渡された引数に応じて、対象を設定できるようにする
      //elsに渡された内容でqueryselectroallを使う
      this.els = document.querySelectorAll(els);
      const defaultOptions = {
          root: null,
          rootMargin: "0px",
          threshold: 0,
          once: true
      };
      this.cb = cb;
      this.options = Object.assign(defaultOptions, options);
      this.once = this.options.once;
      this._init();
  }
  _init() {
      const callback = function (entries, observer) {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  //以下の２行はscrollObserverクラスの中に入れると、応用が利かなくなるので入れない
                  // const ta = new TextAnimation(entry.target);
                  // ta.animate();
                  //上記２行以外は、渡されたオブジェクトがスクロールして領域に入ったら
                  //処理を実行するという機能だから、応用が利くので、そのままscrollObserverクラスに入れる

                  //ここで渡すcbはintersectionObserverクラスによって呼び出されたコールバック関数内で
                  //起動するものを想定しているので、引数には当然感知する対象を引数に渡す必要がある
                  //それに加えて、ifによる条件分岐だけでなく、trueが渡るようにすることで、確実な動作とするために
                  //第２引数にはボーレアン型を渡す
                  //これによってコールバック関数内でも条件分岐ができる
                  this.cb(entry.target, true);
                  if(this.once) {
                      observer.unobserve(entry.target);
                  };
              } else {
                  this.cb(entry.target, false);
              }
          });
      };
      //scrollObserverがインスタンス化された時点で、監視クラスもインスタンス化する必要があるんので
      //constructorで起動する_init()の中に格納する
      //_initで定義するコールバック関数はあくまでも、スクロールしたときに領域に入ったら
      //領域にひったらA、領域から出たらBという処理を分岐させるだけのコールバック関数である
      //constructorに渡すコールバック関数はこの場合は、領域に入ったときに実行する関数であるので、
      //_init内で使うコールバック関数とは異なる
      this.io = new IntersectionObserver(callback.bind(this), this.options);

      this.io.POLL_INTERVAL = 100;
      this.els.forEach(el => this.io.observe(el));
  }

  destroy() {
      this.io.disconnect();
  }
}