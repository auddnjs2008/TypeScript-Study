// 다른언어에서 this란  Class 자체를
// 가리키는데
// 자바스크립트에서 this란 class를 호출한 사람을 가리킨다.
// 마치 지니의 램프가  누가 문질렀느냐 에 따라
// 주인이 바뀌듯이

console.log(this);
// 이렇게 아무것도 안하고 this를 쓰면
//브라우저환경에서는 window가 global 객체이므로
//window를 부른다.

function simpleFunc() {
  console.log(this);
}
simpleFunc(); // 애는 Window.simpleFunc(); 와 동일

console.clear();
class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
}
const counter = new Counter();
counter.increase();
// 카운터에서 increase를 호출했으므로
// this는 카운터가 된다. counter
const caller = counter.increase;
// counter의 increase 포인터를 Caller 라는
// 변수로 할당했기 때문에  this의 정보를
//잃어버리게 된다.
caller(); // undefined라 나온다.

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // this가 밥으로 나온다.
// 런이란 함수를 밥이 불렀기 때문에

//object와  this를 꽁꽁 묶어주려면
// 바인드를 이용해야 한다.

// const caller = counter.increase;
//를 하면  this가 undefined로 출력되었다.

// const caller = counter.increase.bind(counter);
// 위에처럼 하면  클래스가 Counter로 나오는걸
// 확인할 수 있다.

// 이렇게 일일히 바인드를 해주지 않아도
// increase = function () {
//     console.log(this);
//   };
// 함수를 이렇게 선언하는 대신
// increase = ()=>console.log(this);
// 로 하면 바인딩이 된다.
