{
    // 새로운 타입을 내가 정의할 수 있다. 

    type Text =string;

    const name : Text ='ellie';

    const address :Text="korea";

    type Num= number;
    type Student ={
        name:string,
        age:number;
    }

    const student :Student ={
        name:"M.W",
        age:12
    }

    // String Literal types

    type Name ="name"; // 이렇게 작성해 놓으면  오직 이자료형은 'name'만 할당가능
    let MWName :Name;  
    MWName ="name";

    type JSON ="json";
    const json:JSON ="json";

    type Boal  = true;
    const isCat: Boal =true;

}