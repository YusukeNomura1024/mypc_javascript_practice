const child = document.querySelector('.child');
const cb = function(entries, observer){
  //IntersectionObseverによって実行される関数には引数が渡される
  //第一引数が実行するInbersectionObserverに登録されている内容の配列データ
  //第二引数には監視情報が入る（どの登録内容の監視が反応したのか)

  entries.forEach( entry => {
    if(entry.isIntersecting) {
      console.log('領域に侵入しました');
      entry.target.classList.add('inview');
      //observeによって監視対象にしたDOMをunobserveに入れることで
      //監視対象から外すことができる
      // observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('inview');
      console.log('領域から退出しました');
    }
  });
  // alert('intersecting');
};
const options = {
  root: null, //rootを設定することで、親要素や先祖要素が交差すると起動する
  rootMargin: "-300px 0px", //デフォルト値は0ピクセル
  //ビューポートの位置をずらすことができるトップを-100pxとするとトップが通常よりも100ピクセル縮む
 //つまりは交差するポイントをずらすことができる
 //rootMarginには0だとしても0pxというようにしないとエラーになる
  threshold: [0, 0.5, 1]//上、真ん中、下でそれぞれ呼ばれることになる
  //対象DOMの最初に領域に入る部分を0として終わりを１とする
  //下から上がってくる場合は上が０で下が1となる
  //設定した値によって、DOMのどの部分が領域に入ったら起動するかを設定できる
  //1と設定した場合は、全てが入り切って起動する
}
const io = new IntersectionObserver(cb, options);
//第二引数にオプションを渡すことができる
io.observe(child);