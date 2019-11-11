// reduce 원번 배열과 크기와 형태가 다른 새로운 배열을 생성할 수 있다!! 그리고 반드시 배열을 반환할 필요도 없다

const chickens = [
    {
        brand: '또래오래',
        menu: '맵부심 후라이드',
        isNoBone: true,
        reate: 4,
    },
    {
        brand: '또래오래',
        menu: '맵부심 양념',
        isNoBone: true,
        reate: 4,
    },
    {
        brand: '또래오래',
        menu: '갈릭반 핫양념반',
        isNoBone: false,
        rate: 5,
    },
    {
        brand: '교촌치킨',
        menu: '레드콤보',
        isNoBone: true,
        rate: 4,
    },    
    {
        brand: '네네치킨',
        menu: '신호등치킨',
        isNoBone: true,
        rate: 1,
    },
]

const menus = chickens.reduce((menus, chicken) => {
    if (menus.includes(chicken['menu'])) {
        return menus;
    }
    return [...menus, chicken['menu']];
    // reduce는 값을 반환하지 않으면 undefined가 된다!! 값이 사라진다.
}, [])

// reduce 메서드는 맨 뒷부분을 보면 결과값을 쉽게 예측할 수 있다. 요건 배열을 리턴하겠지~


// 지금까지 한 것은 데이터의 일부를 반환해 크기를 변경했고 동시에 형태도 변경해 반환했다. 
// 더 중요한 것은 배열 내부에 있는 정보를 기반으로 크기를 변경했다!
// 이는 filter나 find에서는 처리할 수 없는 것!
console.log(menus);

// 이제는 배열을 만들어보자

const filters = menus.reduce((filters, item) => {
    filters.brand.add(item['brand']);
    filters.menu.add(item['menu']);
    filters.rate.add(item['isBone']);
    return filters;
}, {
    brand: new Set(),
    menu: new Set(),
    rate: new Set(),
});
// 왜 안되지

console.log(filters);


const developers = [
    {
        name: '개발자1',
        language: '자바 타요',
    },
    {
        name: '개발자2',
        language: '자바 타요',
    },
    {
        name: '개발자2',
        language: '오라클 타요',
    },
    {
        name: '개발자3',
        language: '리액트',
    },
    {
        name: '개발자4',
        language: '타입스크립트',
    },
];

const aggregated = developers.reduce((specialist, developer) => {
    const count = specialist[developer.language] || 0;
    return {
        ...specialist,
        [developer.language]: count + 1,
    }
}, {});

console.log(aggregated);