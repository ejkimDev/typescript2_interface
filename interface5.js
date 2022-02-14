"use strict";
// IPerson1 인터페이스를 바탕으로 Person 클래스 생성
class Person {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log(`안녕하세요! ${this.name}입니다.`);
    }
}
// class도 타입처럼 사용할 수 있다.
const person = new Person('Mark');
person.hello();
