class Car {
  engine = 0;
  move() {
    const engine = this.engine + 1;
    console.log("engine 에러");
    console.log(engine);
  }
}

const car = new Car();
car.move();

// 많은 파일을   실시간 컴파일 설정
// 1 tsc --init

// 그런데 우리는 이렇게 자바스크립트 파일이랑
// 타입스크립트 파일을 섞어서 놓지 않는다.

//tsconfig 파일에서  outDir 기능주석을 지워주고
// "./build"로 해주면
// build파일에 자바스크립트 파일을 만들어준다.

// 우리가 src파일을 만들고  그안에 ts 파일을
// 만들고 tsc를 쳐주면   build 파일안에
// src가 있고  그 안에 js 파일들이 있을것
// 같지만  ts파일들만 있다.
// => 타입스크립트 파일이 잇는 곳을 최상위로 한다.

// 보통 src 파일 내부에서  또 폴더를 나누어서
// 보관을 한다.

// 그런데  다른 개발자가 src 바깥에서 ts를 만들게되면
// build 내부에 파일구조가 깨져서  html도 수정을 해줘야 한다.
// 이럴댄

// tsconfig.json => rootDir 옵션을 활성화시켜서
//rootDir :"./src" 로 해주면  src 안에서만
// 파이을 생성할 수 있다.
