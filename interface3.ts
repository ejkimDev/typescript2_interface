interface Person3 {  
  name: string;   // 필수 옵션
  age?: number;   // 선택 옵션(? 사용)
  [index: string]: any;   // Person3['index']의 의미와 같고, 어떤 이름의 프로퍼티가 와도 됨(systers, father, mather)
}   

function hello3(person: Person3): void {
  console.log(`안녕하세요! ${person.name}입니다.`);
}

const p31: Person3 = {
  name: 'Searchkim',
  age: 29
};

const p32: Person3 = {
  name: 'Anna',
  systers: ['Kim', 'Lee']
};

const p33: Person3 = {
  name: 'Mark',
  father: p31,
  mather: p32
};

hello3(p31);
hello3(p32);
hello3(p33);
