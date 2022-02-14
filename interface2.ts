interface Person2 {  
  name: string;   // 필수 옵션
  age?: number;   // 선택 옵션(? 사용)
}   

function hello2(person: Person2): void {
  console.log(`안녕하세요! ${person.name}입니다.`);
}

hello2({name: 'Searkim', age: 29});
hello2({name: 'Anna'});