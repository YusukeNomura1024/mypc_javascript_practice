document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#btn');
    const ta = new TextAnimation('.animate-title');
    const ta2 = new TextAnimation('.animate-title-2');
    ta.animate();
    ta2.animate();
    btn.addEventListener('click', ta.animate.bind(ta));
});

//このタイミングで呼び出されたthisはwindowオブジェクトを呼び出す
// console.log(this);
//windowオブジェクトはグローバルオブジェクトと呼ばれる

class TextAnimation {
    constructor(el) {
        //この時点で呼ばれたthisはnew演算子で呼ばれた変数を呼び出す
        console.log(this);
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        //ここでthisを呼び出すとanimate()が呼び出されているtaを呼び出す
        console.log(this);
        //windowオブジェクトは省略されることが多い
        //setTimeout関数はグローバルオブジェクとの関数である
        window.setTimeout(function(){
            //bindを使わない方法としてはこの時点でthisを変数に渡す
            //const _that = this;

            //この中で呼び出されたthisはwindowオブジェクトを呼び出す
            //thisのロジックとしては
            //直近で囲まれたオブジェクトを参照するというルールがある
            //windowというオブジェクトに対してsetTimeoutが呼び出されているので
            //つまりこの中の処理はwindowオブジェクトに対して行われていることになるので、
            //thisはwindowを呼び出す
            console.log(this);
            //addEventListenerでこの関数を呼び出した場合
            //animate()は本来taオブジェクトを呼び出すはずが、
            //ここではaddEventListenerを付けたオブジェクトであるbtnがthisになる
            //このままでは、taに対してtoggleが行えないので、addEveの中でbindを使う
            this.el.classList.toggle('inview');
        }.bind(this));
        //bindを使うことで、setTimeout関数の中で使うthisをanimate()が参照するthisに置き換えている
        //これによってsetTimeout関数の中の処理で使われるthisはtaオブジェクトが呼ばれる

    }
}
//まとめると直近で呼び出された関数のオブジェクトの中で実行される
//関数の中のthisは、その関数を呼び出している関数のオブジェクトになる

//でその関数の中にfunctionをさらに使って、その中でthisを使った場合は、
//直近で使ったオブジェクトはリセットされる？？


const aa = {
    loglog: function(){
        console.log(this);
    }
};

aa.loglog();
btn.addEventListener('click', aa.loglog);
btn.addEventListener('click', function() {
    aa.loglog();
});
