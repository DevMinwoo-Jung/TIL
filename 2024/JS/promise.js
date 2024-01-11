function delay(ms) {
    // 여기에 코드 작성
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(ms)
        }, ms)
    })
  }
  
//  delay(3000).then(() => alert('3초후 실행'));

// delay(3000).then((result) => console.log(result));


function argumentsTest(...args){
    console.log(...args)
    console.log(args)
    console.log(args[0])

};

argumentsTest('1','2')
argumentsTest('1')

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("asdasdasd");
    }, 300);
    // 여기서 통신요청을 한 다음에 그 결과값을 resolve에 담은다음에 체이닝 하면 되나??
  });
  
  myPromise
  .then((value) => `${value} 1`)
  .then((value) => `${value} 2`)
  .then((value) => `${value} 3`)
  .then((value) => `${value} 4`)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });

let message = "Hello!";
let phrase = message;


console.log(message === phrase);


let user = { name: "John" };

let admin = user; // 참조값을 복사함

user.name = '바꿈';

console.log(user,admin);


function exampleObj() {
    this.name = 'minwoo'
}

const exampleObjTest = new exampleObj();

exampleObj.prototype.sayMyName = function(){
    console.log(this) // exampleObj 
    console.log(this.name)
}

exampleObjTest.sayMyName();