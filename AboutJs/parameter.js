    {
    // 매개변수의 기본 값
    function convertWeight(weight, ounces, roundTo) {
        const oz = ounces ? ounces / 16 : 0;
        const total = weight + oz;
        const conversion = total / 2.2;
        const round = roundTo === undefined ? 2 : roundTo;
        return roundToDecimalPlace(conversion, round)
    }
    // 단순히 무게를 변환해주는 함수인데 겁나 복잡해지고 있다..
    // 그리고 이런 상황은 요구사항이기 때문에 피할 수 없는 거시다
    function fixedConvertWeight(weight, ounces = 0, roundTo = 2) {
        const total = weight + (ounces / 16);
        const conversion = total / 2.2;
        return roundToDecimalPlace(conversion, roundTo)
    }

    // 해체 할당으로 객체 속성에 접근하라
    // 위의 매개변수 기본값은 근본적으로 순서를 지켜야만 한다는 문제점이 있다.
    // 즉 매개변수의 입력을 건너 뛸 수 없다는 것
    const chicken = {
        menu: '순살 고추 바사삭',
        brand: '굽네치킨',
        isBone: false,
        location: '서울 어딘가',
        address: ['something', 'somewhere'],
        rate: 4.5,
    };

    function displayChicken(chicken) {
        const menu = chicken.menu;
        const brand = chicken.brand;
        const isBone = chicken.isBone;
        const location = chicken.location;
        const copy = { ...chicken };

        delete copy.menu;
        delete copy.brand;
        delete copy.location;
        delete copy.rate;

        const additional = Object.keys(copy).map(key => `${key}: ${copy[key]}`);

        return (`
            <p alt=${menu}> 메뉴 />
            <div>${brand}</div>
        `);
    }
// 해체 할당을 하기 전에는 코드가 겁나 더럽다

const chickenV2 = {
    menu: '갈릭 반 핫 양념 반',
};

const { menu } = chickenV2;

menu // 갈릭 반 핫 양념 반

// 객체에 키가 존재하지 않으면 undefiend가 되지만 해체 할당을 하면서 동시에 기본값을 설정할 수도 있다.
const chickendV3 = {};
const { menu2 = '쇼킹핫', brand } = chickendV3;

const landscpare = {
    photographer: '조나단',
    equipment: '캐논',
    format: '디지럴',
};

const {
    photographer,
    ...additional
} = landscpare;

console.log(additional); // 캐논, 디지털
// photographer를 제외한 나머지가 키-값이 새로운 객체에 담긴다. 사진 객체를 복사한 후 photographer를 삭제한 것과 같다.

// 변수 이름을 다른 이름으로 할당하기

const srcToUrl = {
    src: '/something-nm.png',
};

const { src: url } = srcToUrl;

// src === undefiend
// url /something-nm.png

// 배열도 해체 할당을 할 수 있지만 키가 없기 떄문에 이름을 마음대로 할 수 있는 대신에 순서대로 해야한다.

const landscpare2 = {
    location: ['여기', '저기'],
};

const { location } = landscpare2;
const [here, there] = location;

console.log(here, there);

}