interface Person8{
  name: string;   
  age?: number;
  readonly gender: string; 
}

const p81: Person8 = {
  name : "Searchkim",
  gender : "Female"
}

// p81.gender = "male";      // readonly이기 때문에 Error