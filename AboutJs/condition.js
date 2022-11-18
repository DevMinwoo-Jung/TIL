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

// 변수의 유효범위 생각!!
// var를 쓸때는 그냥 싸제껴도 됐지만 let과 const는 생각을 하고 짜야한다

if (0) {
    var permission2 = ['야근수당', '있음'];
} else {
    var permission2 = ['야근수당', '없음'];
}
console.log(permission2) // 야근수당 없음 -> block 밖에서도 접근 가능

console.log('-----------');

if (1) {
    const permission = ['야근수당', '있음'];
} else {
    const permisstion = ['야근수당', '없음'];
}
// console.log(permission) // error
// 참조 오류 permission이 정의되지 않았습니다.
// let과 const는 block 범위이기 때문에 함수 block 밖에서는 접근이 안된다.
// 이걸 해결하는 방법은 var로 변수를 선언하거나 let으로 변수 선언후 함수 내에서 재할당을 해야한다.

let permission;
let title = '과장';
function checkTitle(title) {
    if (title === '과장') {
        permission = ['야근수당', '있음'];
    } else {
        permission = ['야근수당', '없음'];
    }
}
console.log(checkTitle(title));
// return 안해주니 undefined지! 바보야!

function checkTitle2(title) {
    if (title === '과장') {
        return permission = ['야근수당', '있음'];
    } else {
        return permission = ['야근수당', '없음'];
    }
}

console.log(checkTitle2(title));

const permissions = title === '과장' ? ['근로시간', '수당'] : ['근로시간'];

// 훨씬 깔끔!. 하지만 밑에꺼는 ㄴㄴ
const permisisons2 = title === '부장' || title === '과장'? title === '과장' ? ['근로시간', '초과근무승인', '수당']: ['근로시간', '초과근무승인'] : '메롱';

// 제대로 읽기도 힘들고 단순하지도 않고... 차라리 이럴 떄는 간단한 함수가 낫다.

function getTimePermissions({ title }) {
    if (title === '과장') {
        return '6000만원';
    }
    if (title === '부장') {
        return '1억';
    }
    return '3천만원';
}

const salrary = getTimePermissions('사원'); // 3천만원

// 단락평가??

// not good
function getIconPath(icon) {
    const path = icon.path ? icon.path : 'upload/default.png';
    return `https://assets.foo.com/${path}`;
}
// 아이콘 경로가 참 (정의되어 있고 빈 값이 아닐 경우) 해당 경로, 아니면 기본값
// 근데 이 함수는 icon.path를 두번이나 확인한다.
// 들어가기전에 || 으로 작성하는 or 연산자는 선택 가능한 값 중 하나라도 true면 true를반환한다. 즉 어떤 값이든 true를 반환하면 다른것 확인 안해도 된다.

const name = '민우' || '이름이 없슈';
console.log(name);
const name2 = '' || '이름이 없지';
console.log(name2);

// 아 앞이 true면 앞에 값을 반환!



