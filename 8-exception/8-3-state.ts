{
  class TimeoutError extends Error {}

  class OfflineError extends Error {}

  type NetworkErrorState = {
    result: "fail";
    reason: "offline" | "down" | "timeout";
  }; // 이런식으로  state를 사용하는게 좋다.

  type SuccessState = {
    result: "success";
  };

  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient {
    tryConnect(): ResultState {}
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {}
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run(); // 에러가 발생한다.  -> 어디서  핸들링을 하는게 좋을까?
}
