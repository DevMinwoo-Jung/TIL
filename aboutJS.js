// 1. const로 할 수 있는 것을 제한해라
// Const로 선언을 한다면 블록 문맥 내에서 재할당이 불가능!
// 그렇다고 해서 값이 불면은 아니다. Object는 그 안의 값은 변할 수 있기 때문 ex) 배열
const exampleArray = [];
exampleArray.push('Hello Again!');
console.log(exampleArray);
// It's ok
exampleArray = `don't do it`;
console.log(exampleArray);
// nope

// ['Hello Again!']
// aboutJS.js:8 Uncaught TypeError: Assignment to constant variable.
//     at aboutJS.js:8:14