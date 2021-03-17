{
  type CoffeCup = {
    shots: number;
    hasMilk: boolean;
    hasSugar?: boolean; // optional type 있을수도 있고 없을수도 있고
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
      this.coffeeBeans = coffeeBeans;
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
      const coffee = this.extract(shots); // 추출한다.
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  // 이 커피메이커는  생성자에서 전달받은  MilkFrother와  SugarProvider에서
  // 기능이 결정될 수 있다.

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

  // 차가운 우유 거품기
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

  // 우유를 만들지 않는다.
  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeCup): CoffeCup {
      return cup;
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

  // 슈거를 만들지 않는다.
  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeCup): CoffeCup {
      return cup;
    }
  }

  const cheamMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldmilkMaker = new ColdMilkSteamer();
  const noMilkMaker = new NoMilk();

  const candySugar = new AutomaticSugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  // 이렇게 인터페이스를 활용하면  3-7-1 파일처럼  새로운 커피머신
  // 클래스를 지정해주지 않아도 interface를 사용해 기존 커피머신과  컴포지션 가지고
  // 여러가지를 만들어 낼 수 있다.

  const sweetCandyMachine = new CoffeeMachine(12, noMilkMaker, candySugar);
  const sweetMachine = new CoffeeMachine(12, noMilkMaker, sugar);

  const latteMachine = new CoffeeMachine(12, cheamMilkMaker, noSugar);
  const coldlatteMachine = new CoffeeMachine(12, cheamMilkMaker, noSugar);
  const sweetCaffeLatteMachine = new CoffeeMachine(12, fancyMilkMaker, sugar);

  // 한가지 유의하는점은  :   오버엔지니어링을 하지 말자
  //  작은 코드도 이렇게 만들려고 하면 복잡해진다.  이 중 간지점을 잘 지키자.
}
