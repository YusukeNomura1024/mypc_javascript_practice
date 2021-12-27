const person = {
  //プロパティを定義
  name: ['Code', 'Mafia'],
  age: 25,
  gender: 'male',
  interests: {
    sports: 'soccer',
    music: 'piano'
  },
  //メソッドを定義
  getFullName: function(){
    //thisは宣言されたobjectを指す
    console.log(this.name[0] + this.name[1]);
  }
};

//ドット記法で値を表示する
console.log(person.name[1]);
console.log(person.age);
console.log(person.gender);
console.log(person.interests.sports);
//ドット記法でメソッドを引き出す
person.getFullName();

//値の更新
person.age = 12;
console.log(person.age);

person.name.push('hoge');
console.log(person.name);

person.name[3] = 'hogehoge';
console.log(person.name[3]);

person.interests.color = 'red';
console.log(person.interests);


//ブラケット記法
const person2 = {
  name: ['Code', 'Ark'],
  age: 35,
  gender: 'male',
  interests: {
    sports: 'tabletennis',
    music: 'guiter'
  }
};

person2['age'] = 15;
console.log(person2['age']);

person2['like_food'] = 'cake';
console.log(person2['like_food']);

person2['interests']['sports'] = 'tennis';
console.log(person2['interests']);

//ブラケット記法はキー情報が動的に変化する場合に便利

const ageKey = 'age'
person[ageKey] = 12 //ドット記法の場合は変数を使えない
console.log(person.age);


const str = 'hello';
console.log(str.length);
//strはStringオブジェクトになるので、もともとlengthプロパティが設定されている
console.log(str.toUpperCase());
//toUpperCaseもStringオブジェクトに格納されているメソッド