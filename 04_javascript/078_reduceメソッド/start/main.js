const arry = [1,2,3,4,5];

arry.reduce(function(accu, curr){
  console.log(accu, curr);
  return accu * curr;
});
// accuには前回の処理の戻り値が蓄積される
//currには現在の値を取得する
//初期値が設定されていない場合は、配列の１つ目がaccuに入ってしまう
//初期値を設定することで配列すべてをcurrに入れて繰り返し処理ができる

arry.reduce(function(accu, curr){
  console.log(accu, curr);
  // return accu * curr;
}, 10);

//reduce(callback, 初期値)という設定がされている。
//第二引数以降が、第一引数のコールバック関数の引き数として使われる

const str = 'animation';
const strArry = str.split('');

console.log(strArry);

const result = strArry.reduce((accu, curr) => {
  return `${accu}<${curr}>`;//テンプレートリテラルを使った記述
},'')

console.log(result);
//あくまでも最後のループの戻り値を変数に入れている。