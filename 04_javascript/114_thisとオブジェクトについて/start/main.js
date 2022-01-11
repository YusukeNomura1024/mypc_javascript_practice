const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function() {
        console.log(this.first_name);
        const fn = function() {
            console.log(this);
        };
        window.setTimeout(fn);  
        //thisの示す値はどんどん階層を上がっていったときに直近となるオブジェクトである
        
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