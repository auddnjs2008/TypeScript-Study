{
  // Javascript 
  // Primitive 타입 : number, string, boolean,bigint,symbol,null,undefined
  // Object: function, array...

 
  // number
  const num:number = 1;

  // string

  const str:string = "hello";

  // boolean

  const boal:boolean = true;

  //undefined - 값이 있는지 없는지 결정되지 않은 상태
    let name: undefined; // 이렇게 쓰지 않는다. 
    let age:number | undefined // optional type일 때 이런식으로 해준다.
    age=undefined;
    age = 1;

    function find() : number | undefined{
        return undefined;
    }  // 숫자나  undefined를 리턴한다. 

  //null - 조금더 명확히 텅텅 비어져있다 나타냄
  let person: null;   // 이런식으로 안쓴다.
  let person2:string | null;

 //보통은   type | undefined 이걸 많이 쓴다. 
 // 데이터타입이 있거나 아직 결정되지 않았거나


 //unknown - 알 수 없는  => 가능하면 쓰지말자
 let notSure : unknown; //어떤 종류의 데이터가 담길지 알 수 없는 
 notSure ='h';
 notSure=1;   // 어떤 데이터도 담을 수 있다.   


  // any  => 가능하면 쓰지 말자 

  let anything: any =0;
  anything="hello";


  // void -리턴하는것이 없다. 
  function print():void{
      console.log("hello");
  }
  // 이런식으로 아무값도 리턴하지 않으면 
  // return; 이게 생략되어 있다. 
  // 마우스로 올려보면 void로 선언되어 있다.
  // 

  let unusable: void = undefined; // 똥코드

  // never - 리턴하지 않는다.
  function throwError(message:string):never{
      //message -< server(log)
      throw new Error(); // 에러를 발생시킬때
      while(true){ // 무한루프일때 
 
      }
  }
  let neverEnding:never; // 똥코드

  // object -> 원시타입을 제외한 모든 object타입 할당
  let obj:object; // 어떠한 오브젝트든 가능  => 가능한 쓰지말자 
  function acceptSomeObject(obj :object){

  }
  acceptSomeObject({name:"K"});
  acceptSomeObject({animal:"dog"});

}

