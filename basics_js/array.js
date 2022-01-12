let fruits =['banana','apple','orange','pineapples'];
console.log(fruits);
console.log(fruits[2]);
fruits[0]='pear';
console.log('toString',fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop(),fruits);
console.log(fruits.push('blackberries'),fruits);
fruits.shift();
console.log(fruits);
fruits.unshift('banana');
console.log(fruits);
let veg=['brochli','tomato','ladyfinger'];
let allgr =fruits.concat(veg);
console.log(allgr); 
console.log(allgr.slice(2,5));
allgr.reverse();
let somenum= [1,2,3,4,5];

let emptyArray= new Array();
for(let num=0;num<=10;num++){
    emptyArray.push(num);
}
console.log(emptyArray);