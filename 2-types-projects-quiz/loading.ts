{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;


  function printLoginState(data:ResourceLoadState){  
    switch(data.state){
      case "loading":
        console.log("Loading...");
        break;
      case "success":
        console.log(data.response.body);
        break;
      case "fail":
        console.log(data.reason);
        break;
      default:
        throw new Error("unknown State");

    }
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
