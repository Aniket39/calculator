import * as React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Todo = () => {
  const [todoList, setTodoList] = React.useState([]);

  const updateTodoState = (todoText) => {
    setTodoList([
      ...todoList,
      {
        id: Date.now(),
        todo: todoText,
        status: 1 
      },
    ]);
  };
  const markAsDone = (id) => {
    const temp = todoList.map(el => {
        if(el.id === id){
            return {...el, status: 2}
        }else{
            return el;
        }
    })
    setTodoList(temp);
  }
  return (
    <>
      <div className="main-todo">
        <AddTodo update={updateTodoState} />
        <TodoList todoList={todoList} markAsDone={markAsDone} />
      </div>
    </>
  );
};

export default Todo;
