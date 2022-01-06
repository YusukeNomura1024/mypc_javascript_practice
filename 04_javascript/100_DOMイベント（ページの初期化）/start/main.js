//ここに変数定義をしてしまうとエラーになることがある
// const dcl = document.querySelector('.dcl');
// const load = document.querySelector('.load');

document.addEventListener("DOMContentLoaded", function () {
    const dcl = document.querySelector('.dcl');
    //この中に記述することで変数がエラーにならない
    dcl.classList.add('done');
});
//DOMContentLoadedはdocumentだけでなく、windowにも登録できる


window.addEventListener("load", function () {
    const load = document.querySelector('.load');
    load.classList.add('done');
});
//loadはwindowにしか登録できない

//scriptタグでhtmlの最後で呼び出されている場合は、loadなどを
//使わなくても、htmlが表示されてから最後にjsが実行されるため
//以下のようにしてもエラーにならない
// const h1 = document.querySelector('h1');
// h1.style.color = 'red';

//なるべくユーザーを待たせない設計を
//loadはすべて表示されてから発火するため、待たせてしまう
//なので、画像の読み込みを待つ必要がないものはDOMContentLoadedを使う
