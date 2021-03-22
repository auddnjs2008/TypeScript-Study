Array;
// 타입스크립트 open api
//https://github.com/microsoft/TypeScript/blob/master/lib/lib.es5.d.ts

type Student = {
  passed: boolean;
};

const student: Student[] = [
  { passed: true },
  { passed: true },
  { passed: false },
];
const result = student.every((student) => student.passed);
// false

class Animal {}
class Cat extends Animal {
  isCat: boolean = true;
}
class Dog extends Animal {
  isDog: boolean = false;
}
const animals: Animal[] = [new Cat(), new Cat(), new Dog()];
// animals가 전부 cat 만 가지고 있는지 또는  안에 dog 만 가지고 있는지 확인
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isCat !== undefined;
}

console.log(animals.every<Cat>(isCat));
