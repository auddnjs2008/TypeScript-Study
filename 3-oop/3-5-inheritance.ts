{
    type CoffeCup ={
        shots:number;
        hasMilk:boolean;
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
        // 상속을 할때는 부모의 생성자가 public 또는 protected여야 한다.
        // 자식클래스에서 부모클래스의 함수를 덮어쓸 수 있다. -> overWriting
        
        //자식 클래스에서  생성자를 만들려면 부모 클래스의 생성자도 넣어줘야 한다.
        // super()라고 쓰면 되는데   부모클래스에서 필요한 데이터를 super를 이용해 
        // 전달해줘야 한다. 
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

    const machine = new CoffeeMachine(23);
    const latteMachine = new CaffeLatteMachine(23,"SSS");
    const coffee = latteMachine.makeCoffee(1);
    console.log(coffee);
    console.log(latteMachine.serialNumber);


    }

   








