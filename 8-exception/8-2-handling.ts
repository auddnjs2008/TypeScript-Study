{
  class TimeoutError extends Error {}

  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
      throw new OfflineError("no network!");
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}
    //이렇게 외부에서 만들어진 인스턴스를 생성자에 인자로 주입 받아서 쓰는걸
    // Dependency(의존) injection(주입)

    login() {
      // try {
      //   this.client.tryConnect();
      // } catch (error) {
      //   console.log("catched error");
      // }     // 에러가 발생했을때 내가  정확하게 우하하게 처리할 수있는게 아니라면
      // catch하지 않는게 오히려 더 좋다.

      this.client.tryConnect(); //위에서 처럼 어정쩡하게 처리하는 것 보단
      //이것을 처리할 수 있는곳에서  try 하는게 좋다. -> app에서
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // 이 에러는 any 타입이다.
        // show dialong to user 여기서 좀더 의미있는 에러처리를 할 수 있다.
        //   if(error instanceof OfflineError){
        //       // error가 any가 아니면  instanceof라는 걸 사용해  클래스타입을
        //       // 구별할 수 있지만
        //       // catch를 사용하면 any타입이 되기때문에 사용불가능
        //   }
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run(); // 에러가 발생한다.  -> 어디서  핸들링을 하는게 좋을까?
}
