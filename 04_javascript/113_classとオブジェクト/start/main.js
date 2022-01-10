const obj = {
  first_name: 'Taro',
  last_name: 'Tanaka',
  printFullname: function(){
    console.log('hello');
  }
}


class MyObj {
  constructor(){
    this.first_name = 'Taro';
    this.last_name = 'Tanaka';
  }

  printFullname(){
    console.log('hello');
  }
}

const obj2 = new MyObj();
//new演算子で作成されたobj2はobjのようなオブジェクトが
//作成されるのと同じものである

obj.printFullname();
console.log(obj2.first_name);
obj2.printFullname();

//オブジェクトのプロパティに設定されているメソッドは
//実際には__proto__に格納されているので、
obj2.__proto__.printFullname();
//このように書くこともできる
//__proto__を省略しても動作するようにブラウザ独自の仕様となっている
