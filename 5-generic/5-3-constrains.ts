interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log("full time!!");
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log("part time!!");
  }
  workPartTime() {}
}

//세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 똥이다.
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
} // 매우 유용해 보이는 함수이지만  그냥 employee만 리턴되기 때문에
// 세부 클래스 사항은 잊어버린다.  그래서  pay로 리턴받은 객체는
// pay() 함수만 사용할 수 있다.

function payGood<T extends Employee>(employee: T): T {
  //제네릭이긴 제네릭인데  이 타입은  employee를 확장한 애들만 가능해
  // 이런식으로 constrain을 줄 수 있다.

  employee.pay();
  return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();

const ellieAfterPay = payBad(ellie);
const bobAfterPay = payBad(bob);
///   위에처럼  쓸수가 없고   pay 함수밖에 못쓴다.

// 이럴때  우리는 제네릭을 이용할 수 가 있다.

const obj = {
  name: "ellie",
  age: 20,
};

const obj2 = {
  animal: "dog",
};

// keyof 어떤타입  =>  오브젝트의 키의 타입들

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, "name"));
console.log(getValue(obj, "age"));
console.log(getValue(obj2, "animal"));
