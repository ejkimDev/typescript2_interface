interface IPerson2{
  name: string;   
  age?: number; 
}

// 상속을 이용해서 인터페이스 표현
interface iKorean extends IPerson2 {
  city: string;
}

const k: iKorean = {
  name: 'searchkim', 
  age: 29,
  city: '인천'
}