function hello(callback) {
  console.log('hello ' + callback());
}

function getName() {
  return 'Code Mafia';
}




//引数に代入して時点では関数を実行しないので、()はつけない
//コールバック関数は関数内で実行される必要がある
hello(getName);
//カッコを付けてしまった場合はコールバック関数が実行されて、
//戻り値が引数に入ってしまうので、
//コールバック関数を引数に入れたことにならない

//無名関数を変数に格納した場合を想定して使用する
//
// const getFirstName = function () {
//   return 'Code';
// }
// hello(getFirstName);


//さらにわかりやすくすると
//直接、無名関数を引数に代入する
// hello( function() {
//   return 'Code';
// });
//無名関数を引数にすることで、関数内のローカル変数に代入されるので、
//名前がある関数として関数内で使用される

//アロー関数を使って書き換える
// hello( () => 'Code');//returnは１行の場合は削除できる、
//波括弧を削除した場合は、returnを削除しないとエラーになる

// コールバック関数に引数も渡したい場合
function hello(callback, lastname) {
  console.log('hello ' + callback(lastname)); 
  //コールバック関数の引数として使用する値も
  //関数の第２引数として取得する
}


//無名関数は本来引数を渡せないが、
//今回のようにコールバック関数としてであれば引数を渡すことができる
hello( function (name) {
  return 'Code' + name;
}, 'Mafia');

const getFirstName = function (name) {
  return 'Code' + name;
}

hello(getFirstName, 'Tanaka')

function doSomething(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}

function multiply(a,b) {
  return a * b;
}

function plus(a, b) {
  return a + b;
}

//コールバック関数をうまく使うことで、
//同じ関数でも複雑な挙動ができる
doSomething(2, 2, multiply);

doSomething(5, 5, plus);

function productReview(p_name, price, callback) {
  const review = callback(p_name, price);
  console.log(review);
}

function firstPrice(p_name, price) {
  return price + "円：" + p_name;
}

function firstName(p_name, price) {
  return p_name + "：" + price + "円";
}

productReview('パウンドケーキ', 4590, firstPrice);
productReview('パウンドケーキ', 4590, firstName);