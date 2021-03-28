const x = {};
const y = {};

console.log(x, y);
console.log(x.__proto__ === y.__proto__);
// 이거는 같다고 나오는데
// 왜냐면 x와 y는 동일한 object의 프로토를
// 상속하고 있기 때문이다.

const array = [];
console.log(array); // Array라는 프로토를 가지고 있다.
console.log(array.length);
console.log(array.pop());

// 근데  자세히 살펴보면
// Array라는 프로토안에는 Object라는 프로토도
// 가지고 있다.
// 여기서 알수 있는 건
//  array라는 변수는 Array를 상속하고
// Array는 Object를 상속한다.
//자바스크립트에 있는 모든 Object들은
// Object라는 프로토를 가지고 있게 된다.

//console.clear();

function CoffeeMachine(beans) {
  this.beans = beans;
  // 만들어지는 instance 마다 포함이 되기
  // 때문에  Instance member level 이라 부른다.ㅣ

  //   this.makeCoffee = (shots) => {
  //     console.log("making..");
  //   };
}

// Prototype 멤버 레벨로 만들어보았다.
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log("making..");
};

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);
// 이것들은 기본적으로 Object를 상속하고 있다.

function LatteMachine(milk) {
  this.milk = milk;
}

// 커피머신을 상속시켜 라떼머신을 만들려면

LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee();

// 프로토타입이란 무엇이다??
// 자바스크립트에서 상속을 하기위해 쓰이는 아이이다.
// 코드를 재사용하기 위해서 만들어진 아이이다.
