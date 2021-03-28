{
    //javascript 똥코드
    // function jsAdd(num1,num2){
    //     return num1+num2;
    // }

    // //TypeScript 

    // function add(num1:number,num2:number):number{
    //     return num1+num2;
    // }


    // // javascript 똥코드
    // function jsFetchNum(id){
    //     //code...

    //     return new Promise((resolve,reject)=>{
    //         resolve(100);
    //     })
    // }

    // //Typescript

    // function FetchNum(id:string):Promise<number>{
    //     //code...

    //     return new Promise((resolve,reject)=>{
    //         resolve(100);
    //     });
    // }


    // Javascript  => TypeScript 
    // Optional parameter
    function printName(firstName:string,lastName?:string){ // 또는 lastName :string | undefined
                                                          // 이렇게 할경우 printName("Ellie",undefined) 항상 써줘야한다.                     
        console.log(firstName);
        console.log(lastName);
    }
    printName('Steve','Jobs');
    // 항상 이름과 성을 전달하는 함수가 아니라
    //어떤 때는 하나마 전달하고 싶다
    //  lastName ?:string => 전달받을수도 있고 전달 받지 않을 수도 있다.

    printName("M.W");
    printName('Anna',undefined);

    // Default parameter 
    function printMessage(message:string="default message"){
        console.log(message);
    }

    printMessage();  // default message가 출력

    //Rest parameter
    function addNumber(...numbers:number[]):number{
       return numbers.reduce((a,b)=>a+b); 
    }


    console.log(addNumber(1,2));
    console.log(addNumber(1,2,3,4));
    console.log(addNumber(1,2,3,4,5,6));

}