
var age = prompt('what is the age');
if((age>=18)&&(age<=35)){
    status='target demo';
}
else{
    status='not my audience';
}
console.log(status);
let text;

switch(4){
    case 0:
        text='Weekend';   
        break; 
    case 5:
        text='Weekend';
        break;
    case 6:
        text='weekend';
        break;
    default:
        text='weekDay';
 }
 console.log(text);