// 배열로 의미 없는 값을 나열하기 보다는 key & value를 쓸 수 있는 obejct collection을 사용하다

// dont
const badColors = ['#d10202', '#19d836', '#0e33d8'];

// do
const goodColors = {
    red: '#d10202',
    green: '#19d836',
    blue: '#0e33d8'
};

/* *******  객체는 정적인 정보에 적합하다. 계속해서 갱신, 반복, 대체, 정렬을 해야 한다면 Map을 사용하는 것이 낫다 **********
            설정 파일에 적합하다.
            객체는 정보의 경로를 알고 있을 때 사용한다. 
*/

// Object.assign()으로 조작 없이 객체를 생성해라

const defaultsObj = {
    writer: '',
    title: '',
    year: '',
    rating: null,
};

const book = {
    author: 'minwoo',
    title: '행복한 풀스택 개발자로 사는법'
};

function addBookDefaults(book, defaults) {
    const fields = Object.keys(defaults);
    const updated = {};
    for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        updated[field] = book[field] || defaults[field];
    }

    return updated;
}

// 이게 장황하다고....
console.log(addBookDefaults('', defaultsObj));
console.log(addBookDefaults(book, defaultsObj));

// Object.assign(defaultsObj, book);
// {writer: '', title: '행복한 풀스택 개발자로 사는법', year: '', rating: null}rating: nulltitle: "행복한 풀스택 개발자로 사는법"writer: ""year: ""[[Prototype]]: Object

console.log(defaultsObj);
// {writer: '', title: '행복한 풀스택 개발자로 사는법', year: '', rating: null, author: 'minwoo'}author: "minwoo"rating: nulltitle: "행복한 풀스택 개발자로 사는법"writer: ""year: ""[[Prototype]]: Object
// 원본 Object가 조작되었다!

// 이렇게 빈 객체를 할당하면 원본을 조작하지 않는다.
Object.assign({}, defaultsObj, book);

// 근데 이렇게하면 중첩된 Object는 복사할 수 없다.
const defaultPerson = {
    name: {
        first: "",
        last: "",
    },
    gender: "",
};
defaultPerson.name.first = '맛있는';

const person = Object.assign({}, defaultPerson);

console.log(person); // name.first = '맛있는';
console.log(defaultPerson); // name.first = '맛있는';

// 이렇게하면 name에 할당된 독립적인 객체에 대한 참조만 복사된다. 중첩된 객체는 해당 객체를 담고 있는 객체와 독립적으로 존재.
// 중첩된 객체를 담고 있는 객체가 가지고 있는 것은 중첩된 객체에 대한 참조다.
// 이렇게하면 깊은 복사가 되는 것이 아니라 단지 참조 위치를 복사한 것에 불과하고 원본 또는 복사한 객체 중 어디서라도 중첩된 객체의 값을 변경하면 원복객체와 복사한 객체 모두 변경된다.

// 중첩된 객체에도 Object.assign을 하면 된다.
const defaultChicken = {
    name: {
        brand: "",
        menu: "",
    },
};

const chicken = Object.assign(
    {},
    defaultChicken,
    {
        name: Object.assign({}, defaultChicken.name),
    },
);

chicken.name.brand = '또래오래';
console.log(defaultChicken); // name.brand = '';
console.log(chicken); // name.brand = '또래오래'

// 원본 객체를 조작하지 않았다!


// 객체 펼침 연산자로 정보를 갱신하라 ***** react에서 많이 보던 것!!

const menu = {
    title: '제육볶음',
    taste: '마시쩡'
};

const newMenu = {
    ...menu, title: '치킨',
}

console.log(newMenu); // {title: '치킨', taste: '마시쩡'}taste: "마시쩡"title: "치킨"[[Prototype]]: Object
console.log(menu); // {title: '제육볶음', taste: '마시쩡'}taste: "마시쩡"title: "제육볶음"[[Prototype]]: Object
// 리액트에서 많이 본거자너~

// 배열 펼침 연산자와 다른 점은 같은 키에 다른 값을 넣으면 무조건 마지막에 넣은 값을 가져온다는 것 -> ?


const singer = {
    song: '',
    album: '',
    year: '',
    rank: '',
};

const castleBalla = {
    song: '니가없는나와바리',
    year: '2008',
};

const updatedSinger = {...singer, ...castleBalla};

console.log(updatedSinger);
console.log(singer);

// {song: '니가없는나와바리', album: '', year: '2008', rank: ''} updatedSinger
// objectCollections.js:132 {song: '', album: '', year: '', rank: ''}

// 중첩된건 어떨게 쓸까 ??
// 이렇게!

const singer2 = {
    song: '',
    album: {
        name: '',
        title: '',
    },
    year: '',
    rank: '',
};

const bestAlbum = {
    name: '넌 감동이었어',
    title: '모르겠음;',
};

const updatedSinger2 = {
    ...singer2,
    album: {...bestAlbum}
};

console.log(updatedSinger2);

// redux에서 많이 보던 것
// album{
//     name:"넌 감동이었어"
//     title:"모르겠음;"
// } 
// rank:""
// song:""
// year:""