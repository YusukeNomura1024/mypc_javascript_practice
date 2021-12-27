const arry = [1,2,3,4,5];

for(let i = 0; i < arry.length; i++) {
  console.log(arry[i]);
}

console.log("");

//for in 文
const arry2 = [1,2,3,4,5,6];

for(let i in arry2) {
  console.log(i, arry2[i]);
}
//添え字が渡ってきます

console.log("");

//for of 文
const arry3 = [1,2,3,4,5,6];

for(let v of arry3) {
  console.log(v);
}
//値が渡ってきます
//i,j,kは添え字の変数に使われやすいので、
//for of のときはvalueを表すvを変数にする


const todos = [
  {
    id: 1,
    title: 'Go to school',
    completed: true
  },
  {
    id: 2,
    title: 'Go museum',
    completed: true
  },
  {
    id: 3,
    title: 'Go shopping',
    completed: false
  }

]

for (let i in todos) {
  let todo = todos[i];
  if(todo.completed === true) {
    console.log(i, todo.title);
  }
}

for (let todo of todos) { //変数をvではなくわかりやすい名前にする
  if(todo.completed === true) {
    console.log(todo.title);
  }
}