{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    // Partial<ToDo>  => ToDo타입의 애들만 받을 수있다.
    return { ...todo, ...fieldsToUpdate }; // 이렇게 하면 덮어씌울수있다.
  }

  const todo: ToDo = {
    title: "learn TypeScript",
    description: "study hard",
    label: "study",
    priority: "high",
  };

  const updated = updateTodo(todo, { priority: "low" });
  console.log(updated);
}
