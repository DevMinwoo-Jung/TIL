// 컬렉션 멤버를 직접 순회하는 for of
// START:firms
const firms = new Map()
  .set(10, 'Ivie Group')
  .set(23, 'Soundscaping Source')
  .set(31, 'Big 6');
// END:firms

function isValid(registration) {
    const message = Object.keys(registration).reduce((valid, field) => {
      if (!registration[field]) {
        return `${field}가 입력되지 않았습니다 떙큐`;
      }
      return valid;
    }, '');
    return message || '감사합니다 땡큐';
  }

  for (const firm of firms) {
    const [id, name] = firm;
    if (!isAvailable(id)) {
        return `${name}은 사용할 수 없습니다.`;
    }
  }
  // return '모든 회사를 사용할 수 있습니다..?'

  // firm const 선언, 블록 유효 범위를 가지므로 선언문 밖에서는 존재하지 않는다.
  // 따라서 코드의 다른 부분에 영향을 끼칠까 염려하지 않아도 된다.
  // 배열 매서드처럼 개별 항목을 직접 다룰 수도 있다.

  // for in - 객체의 속성 순회
  const newFirms = {
    10: 'Ivie Group',
    23: 'Soundscaping Source',
    31: 'Big 6',
  }

// for of 문과 다르게 값을 받는 것이 아니므로 매번 키를 사용해서 전체 걸렉션을 참조해야 한다.
// 가급적 변수는 const로 선언해 반복문의 내부에서 사용한다.

for (const id in newFirms) {
    if (!isAvailable(parseInt(id, 10))) {
        return `${firms[id]}는 사용할수 없습니다`;
    }
}
// return 모든 회사를 사용할 수 없습니다.

// *** 객체를 순회하며 객체를 조작하지 말자!