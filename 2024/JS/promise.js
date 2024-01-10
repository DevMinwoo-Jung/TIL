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