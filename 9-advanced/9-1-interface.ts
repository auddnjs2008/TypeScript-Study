//type alias 와  interface의 차이

type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// 두개다 object 형태로 만들 수 있다.
const obj1: PositionType = {
  x: 1,
  y: 1,
};

const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1,
};

// 클래스에서 구현이 가능하다.

class Pos1 implements PositionType {
  x: number;
  y: number;
}

class Pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number;
}

//Extends 확장이 가능하다.

interface ZPositionInterface extends PositionInterface {
  z: number;
}
type ZPositionType = PositionType & { z: number };

// 만일 interface를 똑같은 이름으로 두개 선언하면
// 그 interface를 사용하는 객체는 두 조건을 모두 만족시켜야 에러가나지않는다.
// 타입은 이렇게 하지는 못한다.
interface PositionInterface {
  z: number;
}

//type만 가능한것 -  computed properties를 사용가능

type Person = {
  name: string;
  age: number;
};
type Name = Person["name"]; // string 타입이 된다.

type NumberType = number;
type Direction = "left" | "right"; // 이러한 유니온타입은 인터페이스로 구현 불가능

// interface는  object 간의 규약이라고 할 수 있다.
// 계약서와 동일
// 어떤 특정한 규격을 정의하는 것이라면  type을 쓰는건 좋지 않다.

//타입은 어떠한 데이터를 담을 수 있을지 모습을 결정하는 것
//데이터를 담을목적이면 타입이 더 좋다.
