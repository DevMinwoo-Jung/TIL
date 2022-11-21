// foreach - 
const names = ['월터', '화이트'];
const capitalized = names.forEach(name => name.toLocaleUpperCase());
console.log(capitalized); // undefiend

// foreach 자체는 아무것도 return해 주지 않는다.

// foreach는 함수의 유효 범위를 벗어나는 작업이 필요한 경우 사용하는 것이 좋다. 
// 즉, 반드시 부수 효과가 필요한 경우에 사용한다.
// 그리고 체이닝 과정에서 다른 배열 메서드와 결합할 수 있기 때문이다.
// 체이닝 ? 값을 다시 할당하지 않고 반환된 객체(혹은 원래 객체)에 메서드를 즉시 호출하는 것을 말한다.


const customers = [
    {
        name: 'foo',
        active: true,
        email: 'sad@sad.io',
    },
    {
        name: 'bar',
        active: true,
        email: 'sddad@sad.io',
    },
    {
        name: 'foos',
        active: false,
        email: 'sad@goggle.com',
    }
];

customers.filter(customer => customer.active)
        .map(customer => customer.email || `${customer.name}@sad.io`)
        .forEach(customer => console.log(customer))
      //  .map(something => somthing) 안된다!! 

// map, filter 등의 배열을 return 하는 함수와 foreach의 차이점은
// 전자는 빈 배열이라도 반환하기 때문에 메서드 체이닝을 계속 할 수 있지만
// 후자는 아무것도 반환하지 않으므로 forEach 다음에는 메서드 체이닝이 불가능