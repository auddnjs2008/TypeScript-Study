{
  type ToDo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<ToDo>) {
    // 우리가 앞에서는 구현을 했지만
    // 많은 타입스크립트 개발자들이 미리 개발해놓은게 많다.
    //todo.title ='jaja'; // 오류가 난다.
  }
}
