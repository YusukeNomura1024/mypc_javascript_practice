if(1 === '1') {
  console.log('this is true');
} else if(true){
  console.log('this is in else if block');
} else {
  console.log('this is false');
}

console.log("");

if(1 === '1') { //３つの＝はデータの方まで一致している必要がある
  console.log('this is true');
} else if(1 == '1') {
  //2つの＝はデータ型までは比較しない。
  //互いに一致する型に戻してから、比較する
  console.log('this is in else if block');
}

console.log("");

if(1 == true) { 
  console.log('this is true');
} else {
  console.log('this is false');
}

if(0 == false) { 
  console.log('this is true');
} else {
  console.log('this is false');
}

if(0 === false) { 
  console.log('this is true');
} else {
  console.log('this is false');
}



const num = Number(true);
const num2 = Number(false);
console.log(num, num2);

//正しくない場合に実行
if(0 !== '0') { //型の比較をする
  console.log('this is true');
}

if(0 != '0') { //値の比較をする
  console.log('this is true');
} else {
  console.log('this is false');
}


if(0 == '0' && 0 === '0' ) { //値の比較をする
  console.log('this is true');
} else {
  console.log('this is false');
}

if(0 == '0' || 0 === '0' ) { //値の比較をする
  console.log('this is true');
} else {
  console.log('this is false');
}

if(num) { //変数だけの場合は値が設定済みであればtrue
  console.log('this is true');
} else {
  console.log('this is false');
}

const num3 = undefined;
if(num3) { 
  console.log('this is true');
} else {
  console.log('this is false');
}

if(!num3) { //ノット演算子
  console.log('this is true');
} else {
  console.log('this is false');
}





