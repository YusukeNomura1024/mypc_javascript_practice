//変数に関数を入れる場合は、実行文よりも先に記述する
// const hello = function(name = 'Tom') {
//   console.log("hello " + name);
// }

//アロー関数に置き換える
//１行だけの場合は波ブロックも消せる
// const hello = (name = 'Tom') => console.log("hello " + name);
//デフォルト値もない場合は、括弧も省略できる
// const hello = name => console.log("hello " + name);
//引数が２つ以上ある場合は、カッコが必要になる
const hello = (name, age) => console.log("hello " + name + age);
//波括弧を省略して１行の場合はその１行がreturnの戻り値となる


hello('Code Mafia');
hello('Code Mafia2');
hello();
hello('Code Mafia', 26)

//関数の場合は実行文の後に入れても、先に読み込まれる
// function hello(name = 'Tom') {
//   console.log("hello " + name);
// }


//実用的な使い方は　for文で使用
const arry = [1, 2, 3, 4, 5, 6];

// arry.forEach(function(value) {
//   console.log(value);
// })

//function を削除して、引数が一つのため、括弧も消す
//処理も１行のため、波括弧も削除できる
arry.forEach(value => console.log(value));

