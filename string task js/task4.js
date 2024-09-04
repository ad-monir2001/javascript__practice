let str = 'fox';

let findx = str.includes('x');
if(findx) {
   let replacedWord = str.replace('x','y')
   console.log(replacedWord);
}else {
    console.log(str);
}