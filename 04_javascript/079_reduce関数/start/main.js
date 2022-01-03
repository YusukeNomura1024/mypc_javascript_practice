const str = 'animation';
const strArry = str.split('');

function tag(accu, curr) {
    return `${accu}<${curr}>`;
}


function reduce(arry, callback, defaultValue) {
    let accu = defaultValue;
    for(let i = 0; i < arry.length; i++) {
        let curr = arry[i];
        accu = callback(accu, curr);//accuに値が蓄積されるという機能もまだない
        //コールバックの戻り値をaccuに再代入することで、蓄積の機能を持たせることができる
    }
    return accu;
}
const result = reduce(strArry, tag, "");
console.log(result);