alert("強欲な壺を発動！！このマジックカードは手札を１枚引くことができる")
alert("さらにコインの表が出る限り追加でもう一枚カードを引くことができる")

let drow_card = 0
let count = -1



do {
  if(count == -1){
    alert("手札を一枚ドロー");
  } else{
    alert("さらに手札をもう１枚ドロー");
  }
  drow_card = drow_card + 1;
  count = count + 1;
  var random = Math.floor(Math.random() * 2);
}while(random == 1);

alert("表が" + count + "回出たぜ" + "俺はカードを" + drow_card + "枚引いたぜ");
if(count >= 2){
  alert("なかなかついているな");
} else{
  alert("くっ！運に見放されたか・・・");
}

let i;
let num = 0;

for(i = 1; i < 11; i++){
  num = num + i;
}
alert('1から10まで足し算した結果は' + num + 'です');