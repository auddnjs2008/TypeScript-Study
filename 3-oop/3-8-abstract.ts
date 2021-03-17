{
  type CoffeCup = {
    shots: number;
    hasMilk: boolean;
    hasSugar?: boolean; // optional type 있을수도 있고 없을수도 있고
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeCup;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    // 이렇게 abstract(추상적)을 붙이면  CoffeMachine 자체로는
    // object를 만들 수가 없다.
    // abstract 클래스에서 재밌는 걸 할 수 있는데
    // 자식클래스마다 달라질 수 있는 행동이 있다면
    // 그행동의 함수 앞에 abstract를 붙인다.
    // 이때  자식 클래스에서 수정을 해줘야 하기 때문에
    // protected  abstract를 붙이고
    //ex) protected abstract extract(shots:number):CoffeCup;
    // 이런식으로 내용도 적어주면 안된다.

    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // static makeMachine(coffeeBeans: number): CoffeeMachine {
    //   return new CoffeeMachine(coffeeBeans);
    // }
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine..");
    }

    private grindBeans(shots: number) {
      console.log(`grindg beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up...");
    }

    protected abstract extract(shots: number): CoffeCup;
    //   console.log(`Pulling ${shots} shots...`);
    //   return {
    //     shots,
    //     hasMilk: false,
    //   };
    //}

    makeCoffee(shots: number): CoffeCup {
      this.grindBeans(shots); // 커피콩을 갈고
      this.preheat(); // 열을 데워준다음
      return this.extract(shots); // 추출한다.
    }
  }

  // 자식 클래스에서  makeCoffee를 오버라이딩 할때
  // 자식클래스에서  super를 빼먹고 부모클래스의 절차들 (가열, 커피갈고 이런함수)
  // 을 놓칠 수가 있다.
  //  이제 이런것들을 조금 안전하게  하고싶다면  abstract 클래스를 만들 수 있다.

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }

    private steamMilk() {
      console.log("Steaming some milk...");
    }

    protected extract(shots: number): CoffeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }

    private sugarAdd() {
      console.log("sugar 추가~");
    }

    // 이렇게 수퍼를 부르면서 함수를 하지 않아도 된다.
    // makeCoffee(shots: number): CoffeCup {
    //   const coffee = super.makeCoffee(shots);
    //   this.sugarAdd();
    //   return {
    //     ...coffee,
    //     hasSugar: true,
    //   };
    // }
    protected extract(shots: number): CoffeCup {
      this.sugarAdd();
      return {
        shots,
        hasMilk: false,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CaffeLatteMachine(16, "BBB"),
    new SweetCoffeeMaker(16, "SSS"),
    new CaffeLatteMachine(16, "BBB"),
    new SweetCoffeeMaker(16, "SSS"),
  ];

  machines.forEach((machine) => {
    console.log("---------------------------");
    machine.makeCoffee(1);
  });

  // abstract를 쓰면  상속하는 클래스에게 달라져야 하는 애들은
  // 꼭 구현해라고 말할 수 있다.

  // 인터페이스와  추상클래스의 차이

  // 인터페이스는 구현사항이 들어갈 수 없다 (속성과 행동의 타입만 정의해 놓은것)
  // 반대로 추상 클래스는 공통적으로 필요한 로직을 구현해 놓은것
}
