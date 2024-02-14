// 따옴표를 다르게 해서 작성 
let sub = "프로그램 입문자를 위한 '자바 스크립트'";
console.log(sub);

// 이스케이프 문자(\)를 사용해서 작성
let msg = 'He\'s the best!';
console.log(msg);

let  double = "나는 생각했다. \'잠온다!\' 그리고 말했다. \"그래도 해야지...\"";
console.log(double);

let name = '김다빈';
let birthYear = 2001;
document.write(`<h1>${2024 - birthYear}살 ${name}님 안녕하세요!</h1>`);

console.log(name=='김다빈');
console.log(birthYear > 2024 );