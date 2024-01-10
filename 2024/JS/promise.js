function delay(ms) {
    // 여기에 코드 작성
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve()
        }, ms)
    })
  }
  
  delay(3000).then(() => alert('3초후 실행'));