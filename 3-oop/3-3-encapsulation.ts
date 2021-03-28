{
    type CoffeCup ={
        shots:number;
        hasMilk:boolean;
    }


    //public
    //private -> 외부에서 절대 접근할 수 없다 
    //protected ->  상속을 할 때  외부에선 접근할 수 없지만 자식클래스에서만
    // 접근이 가능하다. 
    // 따로 작성하지 않으면 모든 건 다 public으로 되어있다. 

    class CoffeeMaker{
        private static BEANS_GRAMM_PER_SHOT:number= 7; 
        private coffeeBeans:number = 0; 

        private constructor(coffeeBeans:number){  
            this.coffeeBeans = coffeeBeans;

        }

        static makeMachine(coffeeBeans:number):CoffeeMaker{
            return new CoffeeMaker(coffeeBeans);
        }  // 이런식으로  새로운 클래스를 만들어주는 함수 가 있으면
        // 생성자를 private로 해서  이함수를 쓰게 권장하는게 좋다.

        fillCoffeeBeans(beans:number){
            if(beans < 0){
                throw new Error("value for beans should be greater than 0");
            }
            this.coffeeBeans +=beans;
        }

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

    
    //const maker = new CoffeeMaker(32);  생성자를 private 하게 만들어 줬기 때문에
    // 에러가 난다. 
    const maker = CoffeeMaker.makeMachine(32);
    maker.fillCoffeeBeans(10);


    class User{
   
        get fullName():string{
            return `${this.firstName} ${this.lastName}`;
        }
        private internalAge = 4;
        get age():number{
            return this.internalAge;
        }

        set age(num:number){
            if(num <0){
                throw new Error("age is not minus");
            }
            this.internalAge = num;
        }
        constructor(private firstName:string,private lastName:string){
        } // 이렇게  private로 인자를 해주면 바로 맴버변수로 설정이 된다.
        // this.firstName, this.lastName으로 설정이 된다. public도 가능 
    }

    const user =new User("Steve","Jobs");
    console.log(user.fullName); // getter 함수  
    user.age = 6; // setter가 호출이 되면서  this.internalAge를 6으로 업데이트 해준다.
   // setter getter은 어떠한 계산을 해야할 때 조금더 유용하게 쓸 수 있다. 
}


