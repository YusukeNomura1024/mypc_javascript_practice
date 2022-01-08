document.addEventListener('DOMContentLoaded', function () {
    const ta = new TextAnimation('.animate-title');
    const ta2 = new TextAnimation('.animate-title-2');
    const ta3 = new TextAnimation('.animate-title-3');
    setTimeout( () => {
        ta.animate();
        ta2.animate();
        ta3.animate();
    }, 1000);
});

//classはnewで初期化されて初めて呼び出されるので、
//インスタンス化がDOMContentLoaded内にあれば
//classの定義は外でやっても良い
class TextAnimation {
    //constructor関数でクラスを初期化する
    //constructor関数はnewでクラスが最初に作成されたときに
    //最初に呼ばれる関数である
    constructor(el){
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
        //thisを使うことでインスタンス自体を呼び出せる
        // alert(el); //クラスに渡された引数を呼び出す
        //constructor内でメソッドを呼び出すこともできる
    }
    _splitText() {//アンダースコアから始まるメソッドはプライベートメソッド
        //アンダースコアはあくまでも目印でしかないので、機能的にプライベート化はされない（暗黙的な記述）
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {//アンダースコアで始まらないメソッドはパブリックメソッド
        this.el.classList.toggle('inview');
    }
    // log() {//このようにメソッドも登録できる
    //     console.log(this.el);
    // }
}

//new演算子を用いてクラスを初期化する
//初期化する作業の子とをインスタンス化という
// const ta = new TextAnimation('.animate-title');
// const ta2 = new TextAnimation('.animate-title2');

//newで作成したクラスを変数に代入することができる
//代入することでオブジェクトが作成されて、
//elというプロパティに自動で渡した文字列が代入される

// alert(ta.el);//taのelプロパティを呼び出す

// ta.log();//taのlogメソッドを呼び出す

