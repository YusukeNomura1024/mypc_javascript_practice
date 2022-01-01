const arry = [1,2,3,4,5];

//この場合はループ処理を配列の内容を繰り返し表示するだけの関数を
//表示以外の繰り返し処理をさせることもできる。
function forEach(ary, callback) {
  for(let i = 0; i < ary.length; i++) {
    callback(ary[i]);
  }
}


function log(val) {
  console.log(val);
};


function double(val) {
  val = val * 2;
  log(val); //表示させるだけの関数を定義しているので使用する
}

function plusOneAndDouble(val) {
  val = val + 1;
  double(val);
}



forEach(arry, log);

forEach(arry, double);

forEach(arry, plusOneAndDouble);
