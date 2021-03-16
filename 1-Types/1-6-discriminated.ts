{
    type SuccessState = {
        result:'success';
        response:{
            body:string;
        }
    };
    type FailState ={
        result:'fail';
        reason:string;
    }

    type LoginState = SuccessState | FailState
    function isLogin(id:string,password:string):LoginState{
        
        return {
            result:"success",
            response:{
                body:"success"
            }
        }
    }


    function printLoginState(state:LoginState):void{
       if(state.result === "success"){
           console.log(state.response.body);
       }else{
           console.log(state.reason);
       }

    }
    // 이렇게  state 안에 result와 같은 discriminated unicon 코드를 쓰면
    // 더 직관적으로 작성할 수 있다. 

}