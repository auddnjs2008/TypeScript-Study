{
    type CoffeCup ={
        shots:number;
        hasMilk:boolean;
    }


    interface CoffeeMaker {
        makeCoffee(shots:number):CoffeCup;
    }  /// 계약서 같은 아이이다. 인터페이스는 외부에서 사용하는 아이이기 때문에
    // 간단하게 이름을 지어주고 구현하는 클래스에서 조금 더 다른 이름을 
    //가져가자 

    interface CommercialCoffeeMaker {
        makeCoffee(shots:number):CoffeCup;
        fillCoffeeBeans(beans:number):void;
        clean():void;
    }



    class CoffeeMachine implements CoffeeMaker,CommercialCoffeeMaker{
        //커피머신이란 클래스는  CoffeeMaker라는 인터페이스를 구현하는 아이입니다.
        // 인터페이스에서 규약된 모든 함수를 구현해야 한다. 
        private static BEANS_GRAMM_PER_SHOT:number= 7; 
        private coffeeBeans:number = 0; 

        private constructor(coffeeBeans:number){  
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
            //만약 위의 함수들을  은닉하지 않으면  밖에서 뭘 순서대로
            // 써야 할지 모른다.  => private로 은닉을 해주자. 
            //즉 정말 필요한 함수만 외부로 노출한다. 
        }

    }

    const maker:CoffeeMachine = CoffeeMachine.makeMachine(32);
    maker.fillCoffeeBeans(100);
    maker.makeCoffee(3);

    // const maker2:CoffeeMaker = CoffeeMachine.makeMachine(32);
    // //커피머신이라는 것은  커피 메이커의 인터페이스를 구현한 아이이기 때문에 
    // // 커피머신은 커피메이커와 동일하다 
    // // 하지만 커피메이커 안에는   makeCoffee 밖에 없기 때문에 
    // // fillCoffeBeans라는 함수는 이 인터페이스 안에 존재하지 않는다 => 에러
    // // 이 인터페이스를 이용해  규약을 할 수가 있다. 
    
    // maker2.fillCoffeeBeans(10);
    // maker2.makeCoffee(3);

    //인터페이스로 타입을 정의해서 받게되면 인터페이스 에서 사용한아이들만
    // 정의될 수가 있다. 

    const maker2:CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
    maker2.fillCoffeeBeans(100);
    maker2.makeCoffee(2);
    maker2.clean();

    
    class AmateurUser{
        constructor(private machine:CoffeeMaker){}
            makeCoffee(){
                const coffee = this.machine.makeCoffee(3);
                console.log(coffee);
            }
        
    }

    class ProBarista{
        constructor(private machine:CommercialCoffeeMaker){}
            makeCoffee() {
                const coffee = this.machine.makeCoffee(1);
                console.log(coffee);
                this.machine.fillCoffeeBeans(100);
                this.machine.clean();
            }
        
    }

    const maker3:CoffeeMachine = CoffeeMachine.makeMachine(32);
    //이 오브젝트는 두가지의 인터페이스를 구현하기 때문에 
    //아마추어와 프로는 다른 인터페이스를 받아온다.  (클래스보다 규약된 인터페이스)
    // 해당 인터페이스에 있는 함수들만 접근이 가능하다. 
    const amateur = new AmateurUser(maker3);
    const pro = new ProBarista(maker3);

    amateur.makeCoffee();
    pro.makeCoffee();





}


