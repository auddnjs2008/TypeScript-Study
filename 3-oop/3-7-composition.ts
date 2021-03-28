{
  type CoffeCup = {
    shots: number;
    hasMilk: boolean;
    hasSugar?: boolean; // optional type 있을수도 있고 없을수도 있고
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeCup;
  }

  // 상속의 문제점은 어떤 것이 있을까??????????????//
  // 상속의 깊이가  깊어지면 깊어질 수록
  // 서로간의 관계가 복잡해진다.
  // 예를들어  밑에서 우리는 우유커피머신과 설탕커피머신을  각각
  // 커피머신을 상속하는 자식 클래스로 만들었다.
  //그런데  우유도 넣고 설탕도 넣는 커피머신을 만들고 싶다.
  // 이럴땐 어떻게 ?
  // 우유와 커피를 동시에  상소갛는 애를 만들면되지 않을까?
  // 타입스크립트 에서는 한가지 이상의 부모 클래스를 상속 할 수 없다.
  // 그리고  점점 클래스가 깊어질수록  클래스 구조가 복잡해진다.

  // Favor Composiiton over inheritance (상속대신에 컴포지션을 더 선호하라)

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }
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

    private extract(shots: number): CoffeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeCup {
      this.grindBeans(shots); // 커피콩을 갈고
      this.preheat(); // 열을 데워준다음
      return this.extract(shots); // 추출한다.
    }
  }

  interface MilkFrother {
    makeMilk(Cup: CoffeCup): CoffeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeCup): CoffeCup;
  }

  // 싸구려 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk() {
      console.log("Steaming some milk...");
    }
    makeMilk(cup: CoffeCup): CoffeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 고급 우유 거품기
  class FancyMilkSteamer implements MilkFrother {
    private steamMilk() {
      console.log("Fancy Steaming some milk...");
    }
    makeMilk(cup: CoffeCup): CoffeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class ColdMilkSteamer implements MilkFrother {
    private steamMilk() {
      console.log("Cold Fancy Steaming some milk...");
    }
    makeMilk(cup: CoffeCup): CoffeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 설탕 제조기
  class AutomaticSugarMixer implements SugarProvider {
    private getSuger() {
      console.log("Getting some sugar from jar");
      return true;
    }
    addSugar(cup: CoffeCup): CoffeCup {
      const sugar = this.getSuger();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  // 제대로 된 설탕 제조기
  class SugarMixer implements SugarProvider {
    private getSuger() {
      console.log("Getting some sugar from rear JAR!!!!!");
      return true;
    }
    addSugar(cup: CoffeCup): CoffeCup {
      const sugar = this.getSuger();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(
      beans: number,
      public readonly serialNumber: string,
      private milkFother: MilkFrother
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeCup {
      const coffee = super.makeCoffee(shots);
      //super라는 키워드를 이용해 부모클래스의 것들을 사용할 수 있다.
      return this.milkFother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    // 커피컵에 설탕을 추가해주는 클래스
    constructor(
      beans: number,
      public readonly serialNumber: string,
      private sugar: SugarProvider
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      private beans: number,
      private milk: MilkFrother, // 클래스이름을 받아오는게 아니라 interface를 받아온다.
      private sugar: SugarProvider //
    ) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeCup {
      const coffee = super.makeCoffee(shots);
      return this.milk.makeMilk(this.sugar.addSugar(coffee));
    }
  }

  // 이렇게 상속을 사용하지 않고  필요한  기능만  클래스로 만들어
  // 컴포지션화 할 수 있다.
  //sweetCaffeLatteMachine,  sweetCoffeMaker, CaffeLatteMachine은
  // CheapMilkSteamer랑  AutomaticSugarMixer랑  밀접하게 커플링이 되어져있다.
  // 나중에 내가 다른 설탕제조기나  ,우유 거품기를 쓸때  이 모든 클래스가
  // 업데이트 되어져야 한다.

  //클래스와 클래스들간에 서로 잘알고지내는건 좋지 않다.

  //우유
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const ColdMilkMaker = new ColdMilkSteamer();
  //설탕
  const candySugar = new AutomaticSugarMixer();
  const sugar = new SugarMixer();

  const sweetCandyMachine = new SweetCoffeeMaker(12, "SSS", candySugar);
  const sweetMachine = new SweetCoffeeMaker(12, "SSS", sugar);

  const latteMachine = new CaffeLatteMachine(12, "SS", cheapMilkMaker);
  const coldlatteMachine = new CaffeLatteMachine(12, "SS", ColdMilkMaker);

  const sweetLatteMachine = new SweetCaffeLatteMachine(
    12,
    cheapMilkMaker,
    candySugar
  );

  // 즉 선언을 해보면 위와 같이 되는데  재사용성이 매우 떨어진다.
  //예를 들어 우유제조기가 바뀌어버리면  위에 머신들은 쓸수가 없다.

  // ***** 이렇게 클래스간의 의사소토이 있을경우에는 계약서를 통해서 대화를
  // ** 해야 한다.  계약서는 interface
  // interface로 소통을 할경우   위의  fancyMilkmaker, coldmilkmaker
  //만 지정해주고  코드를 재사용할 수 있다.
}
