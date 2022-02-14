interface IPerson1{
  name: string;   
  age?: number; 
  hello(): void;
}

// IPerson1 인터페이스를 바탕으로 Person 클래스 생성
class Person implements IPerson1 {
  name: string;   // 필수 옵션이기 떄문에 초기값 지정해야함(constructor 이용)
  age?: number | undefined;

  constructor(name: string){
    this.name = name;
  }

  hello(): void {
    console.log(`안녕하세요! ${this.name}입니다.`);
  }
  
}

// class도 타입처럼 사용할 수 있다.
const person: IPerson1 = new Person('Searchkim');
person.hello();