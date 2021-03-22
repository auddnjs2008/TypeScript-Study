// Error - 우리가 예상할 수 있는 오류
// Exception - 우리가 예상할 수 없는 오류

// 자바스크립트 : Error라는 클래스가 있다.

//const array = new Array(100000000000000000);
// 이렇게 큰범위로 배열을 만들면 에러가 난다.

//Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist!") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents";
}

function closeFile(fileName: string) {
  //
}

//에러가 발생할 수있는 그부분에서만

function run() {
  const fileName = "not exist!";

  try {
    //정말 에러가 발쌩하는 그 부분만 감싸주는게 좋다.
    console.log(readFile(fileName));
  } catch (error) {
    console.log("catched!!");
    return;
  }
  // 이렇게 되면 에러가 발생했을때
  // 밑에 파일이 닫히지 않으므로
  // 항상 try와 연관된게 있으면
  //finally로 에러처리를 해주는게 좋다.
  closeFile(fileName);
  console.log("closed!");
}

run();
