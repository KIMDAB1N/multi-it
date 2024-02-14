let myNum = Number(prompt('수를 입력해주세요.'));

if (!myNum) {
    document.write('<h1>오류</h1>');
} else if (myNum%5==0 || myNum%7==0) {
    document.write('<h1>통과</h1>');
} else {
    document.write('<h1>통과실패</h1>');
}