{
    type CoffeCup ={
        shots:number;
        hasMilk:boolean;
    }


    // 우리가 자바스크립트에서  Math를 쓸 때   new Math()를 하지 않았다.
    // 왜냐하면  Math안에 들어있는 함수들은 다 static => class레벨에 있는
    // 아이들이기 때문이다. 

    class CoffeeMaker{
        static BEANS_GRAMM_PER_SHOT:number= 7; //  class level
        //class level이란 것은  클래스와 연결되기 때문에  
        // object마다 생성되지 않는다. 
        // class 자체에 있는거기 때문에  this를 쓰지 않고 클래스. 으로 쓴다.
        //static은 멤버변수 뿐만아니라 함수에도 적용이 된다. 
        
        coffeeBeans:number = 0; // instance (object) level 

        constructor(coffeeBeans:number){  // instructor를 만들때 항상 호출되는 함수 
            this.coffeeBeans = coffeeBeans;

        }

        static makeMachine(coffeeBeans:number):CoffeeMaker{
            return new CoffeeMaker(coffeeBeans);
        } // 이러한 함수는   이 클래스 내부의 어떠한 속성값도 필요하지 않기 때문에
        //  static을 붙여주면  외부에서도  클래스를 만들지 않고  
        // CoffeMaker.makeMachine(3) 이렇게 Object를 만들수 있다. 
        // 클래스도 하나의 타입이다. 

        makeCoffee(shots:number):CoffeCup{
           if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT){
               throw new Error("Not enough coffee beans!");
           } 
           this.coffeeBeans -=shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
           return {
               shots,
               hasMilk:false,
           };
    
        }

    }

  
    const maker = new CoffeeMaker(32);
    console.log(maker);
    const maker3 = CoffeeMaker.makeMachine(3);


    // 여기서 문제점은  
    // maker.coffeeBeans = -31; 이렇게 하면 설정이 가능하다. 
    //외부에서 유효하지 않은 상태로 만들 수 있다. 
}


