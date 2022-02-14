interface Person1 {   // 데이터 구조
  name: string;
  age: number;
}    

function hello1(person: Person1): void {
  console.log(`안녕하세요! ${person.name}입니다.`);
}

const p1: Person1 = {
  name: 'searchkim', 
  age: 29
}

hello1(p1);