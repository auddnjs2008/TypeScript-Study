import add, { number, print } from "./10-3-module1.js";

console.log(add(1, 2)); // 에러가난다.
print();
// 우리가 html 파일에서
// 두개의 스크립트 파일을 모두 type ="module"
// 이라고 적어놓았기 때문에
// 두파일은 서로 접근할 수 없는 상태이다.
console.log(number);
