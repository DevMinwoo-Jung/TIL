// "use strict";
// 그냥 this
console.log(this); // window


// 함수 내 this
const constVar = 10;
var varVar = 11;
function thisFunc() {
  console.log(this); // window
  console.log(this.varVar); // 11 // strict mode면 undefined
  console.log(this.constVar); // undefined
}

thisFunc(); // window


const Person = {
  call: '야호',
  objFunc: function() {
    console.log(this.call); // 함수 내부
    console.log(this.varVar); // 그래서 전역변수 varVar는 안됨
  },
  callVar, // key value 같으면 생략 가능
}

Person.objFunc();
Person.callVar(); // 야호

function callVar() {
  console.log(this.call); // undefined
}

const Foo = {
  callVar,
}

Foo.callVar(); // undefined

// 메서드 내 this는 자신을 호출한 객체로 간다.
// 그래서 Person.callVar는 야호고 Foo.Callvar는 undefined이다.

callVar();

var button = document.querySelector('#buttonId')
button.addEventListener('click', function () {
  console.log(this); //#button
});

// 이벤트 리스너는 이벤트를 받는 html 요소

class Chicken {
  constructor(brand) {
    this.brand = brand;
    console.log(this.brand);
  }
}

// 생성자 내부에서는 생성하는 객체
const ttorae = new Chicken('또래오래');
const bbq = new Chicken('비비큐');

function callApllyBind() {
  console.log(this);
}

callApllyBind(); // window

const obj = {
  name: 'minwoo',
};

const obj2 = {
  name: '여기에',
};

callApllyBind.call(obj); // minwoo
callApllyBind.call(obj2); // 여기서
callApllyBind.apply(obj); // 여기서
callApllyBind.apply(obj2); // 여기서
// call or apply를 한 객체로 간다.