{
    //유니온은 발생할 수 있는 아이중 한가지만 택하는거라면
    // intersection은  그 모든것을 합한것 
    // and같은 개념이다. 

    type Student ={
        name:string;
        score:number;
    };

    type Worker ={
        emplyeeId:number;
        work:()=>void;
    };

    function internWork(person: Student & Worker){
        console.log(person.name,person.emplyeeId,person.work());
    }

    internWork({name:"M.W",score:23,emplyeeId:1123,work:()=>console.log("work")});
}