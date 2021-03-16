{
    //Array
    const fruits:string[]=["tomato","banana"];
    const scores:Array<number> =[1,2,3];
    //둘다 비슷한 아이이다. 

    function printArray(fruits:readonly string[]){

        // 안에서 fruits를 변경시킬 수 없다.
        //이렇게 readonly를 작성할 때는  
        //string[] 이 문법만 가능하다. 
    }


    // Tuple (배열이긴한데 서로다른 타입을 함꼐 가지는)
    //  튜플 사용을 권장하지 않는다.
    // Tupe -> interface, type alias, class 
    let student:[string,number];
    student =["name",123];
    student[0] // name  => 가독성떨어진다.
    student[1] // 숫자 123 
    const [name,age] = student;

    //튜플을 사용한 예가  리엑트의  useState 함수이다.
    
}