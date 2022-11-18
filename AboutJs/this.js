// "use strict";
// 그냥 this
console.log(this); // window


// 함수 내 this
const constVar = 10;
var varVar = 11;
function thisFunc() {
  console.log(this); // window
  console.log(this.varVar); // 11 // strict mode면 undefined
  console.log(this.constVar); // undefined const는 전역변수가 아니니까
}

thisFunc(); // window

function callVar() {
  console.log(this.call);
}

const Person = {
  call: '야호',
  objFunc: function() {
    console.log(this.call); // 함수 내부
    console.log(this.varVar); // 그래서 전역변수 varVar는 안됨
  },
  callVar
}

console.log('-------callVar')
callVar();  // undefined

console.log('-----objFunc');
Person.objFunc();
Person.callVar(); // 야호



const Foo = {
  callVar,
}

console.log('------Foo.callVar')
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
  constructor(brand, name, age) {
    this.brand = brand;
    this.name = name;
    this.age = age;
    console.log(this.brand);
  }
  consoledotLog = () => {
    console.log(this);
  }
}

// 생성자 내부에서는 생성하는 객체의 this
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
callApllyBind.call(obj2); // 여기에
callApllyBind.apply(obj); // minwoo
callApllyBind.apply(obj2); // 여기에
// call or apply를 한 객체로 간다.

let arrowFun = () => {
  this.name = 'minwoo';
  this.age = 30;
  console.log(this.name, this.age);
  this.innerFunc = () => {
    this.name = '민우';
    this.age = '31';
    console.log(this.name, this.age);
  }
  console.log(innerFunc())
} // 자신을 호출한 함수의 가장 가까운 this를 가르킨다.
// 그래서 innerFunc안에는 민우, 31이고 그 밖은 minwoo, 30인겨

arrowFun();

const dinner = new Chicken('또래오래', '양념치킨', 33434);
const dinner2 = new Chicken('후참잘', '후라이드 치킨', 334324);
dinner.consoledotLog(); // 생성자 내부의 this
dinner2.consoledotLog();