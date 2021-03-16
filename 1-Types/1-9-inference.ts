{
    // Type 추론이란??

    let text = "hello";
    //text = 1; // 오류가 난다. 
    // 타입스크립트에서 hello를 할당해줄때  
    // 얘는 string 이구나라고 자동유추를 해준다. 

    function print(message = "hello"){
        console.log(message);
    }
    print("asd");
    //print(1); // 이렇게 함수인자에 타입을 명시하지
    //않으면  any라는 타입이 할당이된다.
    // any를 쓰는건 나쁘다 ~~
    //default parameter로 문자열을 주면 
    // print(1)은 에러가 난다. (자동유추 string이라고)


    function add(x:number,y:number){
        return x+y;  // return된건 숫자라고 자동 추론한다.
    }

    const result = add(1,2); // add는 숫자를 리턴하기때문에 
    // result는 자동으로 숫자타입으로 지정된다. 



    //이런 타입추론 정말 좋은걸까?  
    // 나는 아니다라고 생각!!
    // 웬만하면 작성하는 습관을 들이자 .
    

}