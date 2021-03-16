// 전역적으로 커피콩을 가지고있는 변수
// 커피를 만들수있는 함수
// makecoffe (shot)  => shot이 많을 수록 진한커피를 만든다., 커피를 리턴한다. 

{
    type CoffeCup ={
        shots:number;
        hasMilk:boolean;
    }

    const BEANS_GRAMM_PER_SHOT:number= 7; // 그람

    let coffeeBeans:number = 0;
    function makeCoffee(shots:number):CoffeCup{
       if(coffeeBeans < shots * BEANS_GRAMM_PER_SHOT){
           throw new Error("Not enough coffee beans!");
       } 
       coffeeBeans -=shots * BEANS_GRAMM_PER_SHOT;
       return {
           shots,
           hasMilk:false,
       };

    }
    coffeeBeans +=3 *BEANS_GRAMM_PER_SHOT;
    const coffee = makeCoffee(2);
    console.log(coffee);
}


