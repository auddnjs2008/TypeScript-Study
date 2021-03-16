{

    // Type Assertions을 쓰는건 썩 좋은 건 아니다. 

    function jsStrFunc(): any{
        return 'hello';
    } // 자바스크립트 함수는 리턴되는 타입을 전혀 알수없다. 
    // 내부적으로 문자열을 리턴하는 함수가 있다고 가정해보자

    const result = jsStrFunc();
    // result.length를 쓰고 싶지만  지금 result는 any 타입
    // 이므로  .length를 쓸수 없다

    // 이때 스트링이 ㅣ확실하다면  assertion을 쓸 수 있다.

    (result as string).length; 
    (<string>result).length; 
    // 이런식으로  length 를 쓸 수 있다.
    // 그런데 만일 result 값이 2로 나오면 
    // 우리가 코드칠 때에는 위에서 오류가 안나지만
    // 실행을 해보면  undefined가 나온다. 

    const wrong:any =5;
    console.log((wrong as Array<number>).push(1));
    // 이렇게 하면 죽어버린다. 


    function findNumbers():number[] | undefined{
        return undefined;
    }

    const numbers = findNumbers();
    //numbers.push(2); 이런식으로 하면 undefined일 수도 있고
    // 배열일 수도 있기때문에 경고한다. 

    numbers!.push(2);  // 이렇게 느낌표를 쓰면 
    // 절대 장담한다는 뜻 배열이라는  무조건 널이 아니야
    // 또는 const numbers= findNumbers()!; 이런식으로 해도 된다. => 숫자배열만 받을거야


    const button = document.querySelector("class");
    if(button){
        button.nodeValue;
    }
    // button이 널일수도 있고 노드가 있을 수도 있다. 
    // 그래서 우리는  보통 위에처럼  if문을 써서 한다.

    //하지만 정말 장담하건데 노드가 있다고 하면  
    // document.querySelector("class")!; 이런식으로 써준다.

    // 하지만  대부분 쓰지말자!!!!
}