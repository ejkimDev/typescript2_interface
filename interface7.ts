interface HelloPerson {
  (name: string, age?: number): void;   // 함수
}

const helloPerson: HelloPerson = function (name: string) {    // 인수는 인터페이스와 맞춰져야한다. age?:number 가능, age:number 불가능
  console.log(`안녕하세요! ${name}입니다.`);
}   // helloPerson는 뒤에 있는 구현체보단 인터페이스 HelloPerson과의 관계만 중요하게 생각한다.
    // ↓helloPerson('Searchkim', 29); 가능

helloPerson('Searchkim', 29);