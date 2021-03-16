{



    // Union Types: OR (매우 많이쓰임)
    // 모든것중 하나만 담을려고 할때 쓴다.
    type Direction = 'left' | 'right' | 'down' |'up';
    function move(direction:Direction){
        console.log(direction);
    }

    type TileSize = 8 | 16 | 32;
    const title: TileSize = 16;

    // function : login -> success, fail
    type SuccessState = {
        response:{
            body:string;
        }
    };
    type FailState ={
        reason:string;
    }

    type LoginState = SuccessState | FailState
    function isLogin(id:string,password:string):LoginState{
        
        return {
            response:{
                body:"success"
            }
        }
    }

    // printLoginState(state:LoginState)
    // success -> 성공, body
    //fail -> 실패,이유

    function printLoginState(state:LoginState):void{
       if('response' in state){
           console.log(state.response.body);
       }else{
           console.log(state.reason);
       }

    }
  // 위 처럼 해도 되지만 더 좋은 방법이 있다. 
    // -> 6번째 파일에서 참고 


}