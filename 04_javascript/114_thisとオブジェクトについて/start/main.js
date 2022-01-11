const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function() {
        console.log(this.first_name);
        const fn = function() {
            console.log(this);
        };
        window.setTimeout(fn);  
        //このsetTimeout関数はここで実行されるのではなく、
        //別で定義されているwindowオブジェクトの中で実行されるので、
        //setTimeout関数を使って呼び出した場合に、呼び出した関数内でthisがあれば
        //そのthisはwindowを呼び出す
        //thisの示す値はどんどん階層を上がっていったときに直近となるオブジェクトである
        //window.setTimeout(function() {
        //     console.log(this);
        // })
    }
}

//windowをオブジェクトとして考えると
//以下のように定義されていることになり
//setTimeout関数やその他のプロパティでthisを使うということは
//windowオブジェクトを呼び出したことだとわかる
const window = {
    setTimeout: function(fn) {
        fn();
    }
}

class MyObj {
    constructor() {
        //新規作成したクラスオブジェクトにプロパティを
        //持たせたいときは、thisを使わなければならない
        this.first_name = 'Mafia';
        this.last_name = 'Code';
    }

    printFullName() {
        console.log(this.first_name);
        const fn = function() {
            console.log(this);
        };
        window.setTimeout(fn)   
    }
}

const obj2 = new MyObj();


obj.printFullName();
obj2.printFullName();