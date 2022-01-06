document.addEventListener('DOMContentLoaded', function(){
  const el = document.querySelector('.animate-title');
  const str = el.innerHTML.trim().split("");
  //trim()は文字列の空白などを削除できる
  let concatStr = ''; //concatStrを初期化する
  //concatStrは繰り返し代入をするので、letを使用する

  // for(let c of str){//文字列にも繰り返し文が使える
  //   //for of なのでstr文字列の一文字ずつがcに代入される
  //   c = c.replace(/\s+/, '&nbsp;');
  //   concatStr += `<span class="char">${c}</span>`;
  //  // 同じ変数に文字列をつなげて再代入する場合は、＋＝で省略
  // }

  
  el.innerHTML = str.reduce(( acc, curr) => {
    curr = curr.replace(/\s+/, '&nbsp;');
    return `${acc}<span class="char">${curr}</span>`;
  }, "");
})
//innerHTMLに代入するのはパフォーマンスが悪くなるので、
//一回の代入で済ませるようにする

//reduceはもともとある関数で、使い方が限定されているため
//他の人が見ても何をしているのかがわかりやすい