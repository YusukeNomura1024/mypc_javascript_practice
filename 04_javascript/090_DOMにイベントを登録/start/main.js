const btn = document.querySelector('#btn');
// const hello = () => alert('hello');
//もしくは
function hello() {
  alert('hello');
}
//無名関数を入れるよりも、別で関数を定義して入れるほうがベター
btn.addEventListener('click', hello);
//なぜなら、クリックイベント以外にも同じ処理を行いたい場合に
//関数を使いまわすことができるから

btn.addEventListener('mouseenter', hello);

//また、イベントリスナーを解除するときにも役立つ
//無名関数を直接入れていた場合は、解除するために、
//もう一度同じ関数を入れないといけないが、
//変数であれば簡単に入れることができる
btn.removeEventListener('click', hello);
btn.removeEventListener('mouseenter', hello);

function changeColor() {
  //イベントを追加した要素自体に処理をしたい場合はthisを使う
  this.style.color = 'red';
  console.log(this);
}

function changeBgColor() {
  this.style.backgroundColor = 'green';
}

//addEventListenerで登録された関数内では、
//登録されたDOMの要素がthisとして渡される
btn.addEventListener('click', changeColor);
//同じDOMに複数の関数を登録することができる
btn.addEventListener('click', changeBgColor);



//一般的にはaddEventListenerを使うがそれ以外にも手段はある
const h1 = document.querySelector('h1');
function changeColorWhite(){
  h1.style.color = 'red';
}
function changeBgColorBlack(){
  h1.style.backgroundColor = 'black';
}
//イベントハンドラーを使って登録する
btn.onclick = changeColorWhite; //←上書きされてしまい消える
btn.onclick = changeBgColorBlack;
//onclickの場合だと複数の関数を登録できないため、
//後から登録したものが上書きされてしまう。

//イベントハンドラーをhtmlに記述する方法もあるが非推奨である
