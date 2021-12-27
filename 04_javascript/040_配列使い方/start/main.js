const arry = [1,2,3,4,5,'moji', false]

arry.push('push item');
console.log(arry);

arry.unshift('unshift item');
console.log(arry);

const pop_val = arry.pop();
const pop_val2 = arry.pop();
console.log(pop_val);
console.log(pop_val2);
console.log(arry);

const shift_val = arry.shift();
console.log(shift_val);