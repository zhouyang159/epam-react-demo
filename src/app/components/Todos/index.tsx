"use client"

import {useState} from "react";
import "./style.css";
import InputComponent from "@/app/components/InputComponent";


type Index = {
  id: string
  content: string
  finish: boolean
}


export default function Todos() {

  const [todos, setTodos] = useState(() => {

    return [
      {
        id: "111",
        content: "下班去买菜",
        finish: false,
      },
      {
        id: "222",
        content: "to do some exercise after work",
        finish: false,
      }
    ] as [Index]
  });

  const deleteTodo = (deleteId: string) => {
    setTodos(() => {
      return todos.filter((todo) => {
        return todo.id != deleteId
      })
    })
  }

  const addTodo = (content: string) => {

    const newTodos = [
      ...todos,
      {
        id: (new Date()).getTime() + "",
        content,
        finish: false,
      }
    ]

    setTodos(newTodos)
  }


  return (
    <div className="w-3/4">
      <h1 className="text-[26px] font-bold mb-6">Epam-todo-demo</h1>

      <InputComponent
        addTodo={addTodo}
      ></InputComponent>


      <div className="todos-container">
        {
          todos.map((todo: Index, index: number) => {

            return <div
              className="todo-item"
              key={todo.id}
            >
              <div>
                <span className="font-bold mr-2">{index + 1}</span>
                {todo.content}
              </div>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="font-bold"
              >X
              </button>
            </div>
          })
        }
      </div>
    </div>
  );
}
