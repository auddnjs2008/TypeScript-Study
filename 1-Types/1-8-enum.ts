{
    // 여러가지 관련된 상수값들을 모아서 정의해주는걸
    // 도와주는 타입 \

    // javascript에는 존재하지 않는다.
    const MAX_NUM=6;
    const MAX_STUDENTS_PER_CLASS=10;
    const MONDAY=0;
    const TUESDAY=1;
    const WEDNESDAY=2;
    const DAYS_ENUM =Object.freeze({"MONDAY":0,"TUESDAY":1,"WEDNESDAY":2});
    const dayOfToday = DAYS_ENUM.MONDAY;


    //TypeScript 
    enum Days{ // enum에서는 앞에글자만 대문자
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    console.log(Days.Friday); // 4가 출력
    // 이렇게 할당을 해주지 않으면
    // 위에서부터 차례로 0 1 2 3.. 이런식으로
    // 할당을 해준다.  
    // 1부터 시작하고 싶다. => Monday=1,
    // 하면  차례로 증가한다.
    // 스트링 할당을 하고싶다하면 
    // Monday="monday", Tuesday="tuesday"...
    // 이런식으로 다 쳐주면 된다. 
    const day = Days.Saturday;



    // 그런데 타입스크립트에서  enum은 
    // 가능한 쓰지 않는게 좋다. 

    let day2:Days = Days.Friday;
    day2 = Days.Thursday;
    day2 = 10; 
    // enum으로 타입이 지정된 변수에 다른
    // 어떤 숫자도 할당가능하다는게 문제다.


    // 그래서 타입스크립트에서는  enem을 사용하지 않고
    // 유니온을 사용해서 할 수있다.

    type Days2 = "Mon" | "Tues" | "Wed" | "Thur" | "Fri" | "Sat" | "Sun";

    let dayOfweek:Days2 ="Fri";
    //dayOfweek=1;  // 이렇게 하면 오류가난다.
}