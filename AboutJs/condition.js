// tip 배열과 객체는 비어있어도 참이다. (객체는 주소로 true false를 비교하기 때문!)
// false, null, 0 NaN, '', ""는 false
// 여기서 복습!

console.log(['a', 'b'].indexOf('a'));
// false다 0이기 때문! 그래서 includes를 쓰는게 낫다
console.log(['a', 'b'].includes('a'))

console.log(undefined === true); // false

// 삼항 연산자로 빠르게 데이터 확인
// dont
let active = true;
let display = '';
if (active) {
    display = 'bold';
} else {
    display = 'normal';
}
console.log(display);

// do
let display2 = active ? 'bold' : 'normal';
console.log(display2);

