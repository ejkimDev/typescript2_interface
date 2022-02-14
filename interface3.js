"use strict";
function hello3(person) {
    console.log(`안녕하세요! ${person.name}입니다.`);
}
const p31 = {
    name: 'Searchkim',
    age: 29
};
const p32 = {
    name: 'Anna',
    systers: ['Kim', 'Lee']
};
const p33 = {
    name: 'Mark',
    father: p31,
    mather: p32
};
hello3(p31);
hello3(p32);
hello3(p33);
