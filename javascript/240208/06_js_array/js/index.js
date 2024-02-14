let textTen = '10';
let numTen = 5;
let textFive = '5';
let numFive = 5;

// 숫자 연산보다 문자 연결 연산이 우선 적용된다~!
console.log(textTen + textFive);        // 105
console.log(textTen + numFive);         // 105

// 형 변환
console.log(typeof(Number(textFive)));

// 배열
let season = ['봄', '여름', '가을', '겨울'];
console.log('season의 자료형 : ' +  typeof(season));
console.log(season);
console.log('saeson의 배열 길이 : ' + season.length);
console.log('배열의 0번째 요소 ' + season[0]);
console.log('배열의 1번째 요소 ' + season[1]);
console.log('배열의 2번째 요소 ' + season[2]);
console.log('배열의 3번째 요소 ' + season[3]);
