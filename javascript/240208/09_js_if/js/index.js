// let korScore = Number(prompt('국어 점수를 입력해주세요.'));
// let engScore = Number(prompt('영어 점수를 입력해주세요.'));
// let mathScore = Number(prompt('수학 점수를 입력해주세요.'));
// let avgScore = (korScore + engScore + mathScore) / 3;
// console.log(`국어 점수는 ${korScore}점, 영어 점수는 ${engScore}점, 수학 점수는 ${mathScore}점으로 평균은 ${avgScore}점 입니다.`); 

// if (avgScore > 100) {
//     document.write(`<h1>잘못된 수치입니다.</h1>`);
// } else; if (avgScore >= 90) {
//     document.write(`<h1>수</h1>`);
// } else if (avgScore >= 80) {
//     document.write(`<h1>우</h1>`);
// } else if (avgScore >= 70) {
//     document.write(`<h1>미</h1>`);
// } else if (avgScore >= 60) {
//     document.write(`<h1>양</h1>`);
// } else {
//     document.write(`<h1>가</h1>`);
// }


// let result;
// let msg = `당신의 점수는 ${avgScore}점으로, 등급은 ${result}입니다!`;

// if (avgScore > 100) {
//     result = '잘못된 수치';
// } else; if (avgScore >= 90) {
//     result = '수';
// } else if (avgScore >= 80) {
//     result = '우';
// } else if (avgScore >= 70) {
//     result = '미';
// } else if (avgScore >= 60) {
//     result = '양';
// } else {
//     result = '가';
// }

console.log(document.write(msg));

let readHbnb = true;
let readKjpj = false;

if (readHbnb == true && readKjpj == true) {
    document.write('참 잘했어요');
}