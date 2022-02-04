class ScrollObserver {
  constructor(els, cb, options) {
    this.els = document.querySelectorAll(els);
    const defaultOptions = {
      root: null, //rootを設定することで、親要素や先祖要素が交差すると起動する
      rootMargin: "0px",
      threshold: 0,
      once: true
    }
    this.cb = cb;
    this.options = Object.assign(defaultOptions, options);
    //assignは第一引数に渡したハッシュに対して、第二引数のハッシュと重なるキーがあれば
    //第二引数の値を上書きすることができる
    this.once = this.options.once;
    this._init();
    //あえて_init処理を分けて記載する理由
    //constructor内に定義する内容はすべてthisのプロパティに値を設定するものに制限するほうが良い
  }
  _init() {
    const callback = function(entries, observer){
      entries.forEach( entry => {
        if(entry.isIntersecting) {
            this.cb(entry.target, true);
            if(this.once) {
              observer.unobserve(entry.target);
            }
        } else {
          this.cb(entry.target, false);
        }
      });
    };
    this.io = new IntersectionObserver(callback.bind(this), this.options);
    //intersectionObserverはwindowクラスのものになるので
    //第一引数のコールバック関数でthisが使われている場合は
    //thisはwindowになってしまうので、バインドを使う必要がある
    this.io.POLL_INTERVAL = 100;
    this.els.forEach( el => this.io.observe(el));
  }

  destory() {
    this.io.disconnect();
  }
}
