export default function add(a, b) {
  return a + b;
}

export const number = 10;
export function print() {
  console.log("yaho");
}

// 모듈에서 default로  내보내면
// 다른 쓰는 곳에서  이름을 아무렇게 해도 된다.
// import 이름 from "./10-3-module2.js";
// 한파일 안에서는 default는 하나
// 이런식으로

// default를 안쓴놈은
// 불러오는 곳에서
// import {print} from ~~
// 괄호를 쓰고 동일한 이름을 써줘야 한다.

// 이름을 바꾸고 싶으면
//import {print as printMessage} from ~
// as를 써주면 된다.
