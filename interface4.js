"use strict";
// 함수 선언 방식 1. function 키워드 이용
const p41 = {
    name: 'searchkim',
    age: 29,
    hello: function () {
        console.log(`안녕하세요! ${this.name}입니다.`);
    }
};
// 함수 선언 방식 2.
const p42 = {
    name: 'searchkim',
    age: 29,
    hello() {
        console.log(`안녕하세요! ${this.name}입니다.`);
    }
};
// 함수 선언 방식 3. 화살표 함수
// 화살표 함수에서는 this 사용 불가능
const p43 = {
    name: 'searchkim',
    age: 29,
    hello: () => {
        console.log(`안녕하세요! 입니다.`);
    }
};
p41.hello();
p42.hello();
