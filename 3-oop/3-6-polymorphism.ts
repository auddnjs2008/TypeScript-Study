{
    type CoffeCup ={
        shots:number;
        hasMilk:boolean;
        hasSugar?:boolean; // optional type 있을수도 있고 없을수도 있고
    }


    interface CoffeeMaker {
        makeCoffee(shots:number):CoffeCup;
    } 

   

    class CoffeeMachine implements CoffeeMaker{

        private static BEANS_GRAMM_PER_SHOT:number= 7; 
        private coffeeBeans:number = 0; 

        constructor(coffeeBeans:number){  
            this.coffeeBeans = coffeeBeans;

        }

        static makeMachine(coffeeBeans:number):CoffeeMachine{
            return new CoffeeMachine(coffeeBeans);
        }  
        fillCoffeeBeans(beans:number){
            if(beans < 0){
                throw new Error("value for beans should be greater than 0");
            }
            this.coffeeBeans +=beans;
        }

        clean(){
            console.log("cleaning the machine..");
        }

        private grindBeans(shots:number){
            console.log(`grindg beans for ${shots}`);
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT){
                throw new Error("Not enough coffee beans!");
            } 
            this.coffeeBeans -=shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat():void{
            console.log("heating up...");
        }

        private extract(shots:number):CoffeCup{
            console.log(`Pulling ${shots} shots...`);
            return {
                shots,
                hasMilk:false,
            };
        }


        makeCoffee(shots:number):CoffeCup{

            this.grindBeans(shots);  // 커피콩을 갈고
            this.preheat(); // 열을 데워준다음
            return this.extract(shots); // 추출한다.
 
        }

    }

    class CaffeLatteMachine extends CoffeeMachine{
     
        constructor(beans:number ,public readonly serialNumber:string){
            super(beans)
        }
        
        
        private steamMilk(){
            console.log("Steaming some milk...");
        }
        
        makeCoffee(shots:number):CoffeCup{
            const coffee = super.makeCoffee(shots);
            //super라는 키워드를 이용해 부모클래스의 것들을 사용할 수 있다.
            this.steamMilk();
            return{
                shots,
                hasMilk:true
            }
        }

        
    }

    class SweetCoffeeMaker extends CoffeeMachine{// 커피컵에 설탕을 추가해주는 클래스 
        constructor(beans:number,public readonly serialNumber:string){
            super(beans);
        }
        
        private sugarAdd(){
            console.log("sugar 추가~");
        }
        makeCoffee(shots:number):CoffeCup{
            const coffee = super.makeCoffee(shots);
            this.sugarAdd();
            return {
                ...coffee,
                hasSugar:true,
            }
        }
        

    }

    // CoffeeMachine의 인터페이스는 CoffeeMaker이다. 
    // CaffeLatteMAchine은 CoffeMahcine이다.  CaffeLAtteMachine도  CoffeeMaker이다.
    // SweetCoffeeMaker는 CoffeMachine이다.  SweetCoffeMAker도  CoffeeMaker이다.

    const machines:CoffeeMaker[] = [ // 이렇게 머신의 타입으로  인터페이스 를 붙여주면  각 클래스
        // 도  interface의 규약을 지켜야 한다. 
        new CoffeeMachine(16),
        new CaffeLatteMachine(16,"BBB"),
        new SweetCoffeeMaker(16,"SSS"),
        new CoffeeMachine(16),
        new CaffeLatteMachine(16,"BBB"),
        new SweetCoffeeMaker(16,"SSS"),
    ];

    // 다형성의 최고의 장점 => 동일한 부모 클래스를 상속했을때 
    // 밑에처럼 어떤 클래스인지 구분하지 않고   공통된 api(함수)를 호출할 수 있다.
    machines.forEach(machine => {
        console.log("---------------------------");
        machine.makeCoffee(1);
        
    
    })


    // 이처럼 다향성이란 하나의 인터페이스나  또는 부모클래스를 상속한 
    //자식클래스들이  인터페이스와 부모클래스의 있는 함수들을 
    // 다른방식으로  다양하게 구성함으로써  다양성을  만들어볼수있다. 

    




    }

   








