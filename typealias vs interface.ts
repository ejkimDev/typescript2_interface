// [function]
// type alias
type EatType = (food: string) =>  void;

// interface
interface IEat {
  (food: string): void;
}

// [array]
// type alias
type PersonList = string[];
// interface
interface IPersonList {
  [index: number]: string;
}

// [union type]
interface Bird{
  fly(): void;
  layEggs(): void;
}
interface Fish{
  swim(): void;
  layEggs(): void;
}

type PetType = Bird | Fish;

// interface IPet extends PetType {};    // Error
// Class Pet implements PetType {};      // Error

// [Deciaration Merging - interface] 
// 같은 이름의 인터페이스를 선언해도 나중에 사용할때는 하나로 합쳐진다.
// (type alias는 불가능)
interface MergingInterface {
  a: string;
}
interface MergingInterface {
  b: string;
}

let mi: MergingInterface;