const arry = [1,2,3,4,5];

arry.forEach(function(val) {
  console.log(val);
})
//forEachメソッドには第一引数には配列の値が渡ってくる
//それ以外にも第二引数には配列の値の添え字が渡ってくる
//第三引数には配列がそのままわたってくる

arry.forEach(function(v, i, ary) {
  console.log(v, i, ary);
});

//for文よりもforEachに慣れるほうがいい


for(let i = 0; i < arry.length; i++) {
  const v = arry[i];
  console.log(v);
}

//forEachの方がデフォルトで引数を定義してあるので、
//for文のように毎回変数を定義しなくてよくてすっきりする
//また、forEachの引数のコールバック関数はアロー表記もできる

arry.forEach( v => console.log(v));

//記述が多くなるほど、記述ミスが多くなるので、少ないほどいい
