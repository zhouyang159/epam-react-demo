"use client"

import {useState} from "react";

type InputComponentProps = {
  addTodo: Function
}

export default function InputComponent({addTodo}: InputComponentProps) {
  const [inputStr, setInputStr] = useState("")

  const add = () => {
    if (inputStr == "") {
      return
    }

    addTodo(inputStr)
    setInputStr("")
  }


  return <div>
    <input
      className="border"
      value={inputStr}
      onChange={(e) => {
        setInputStr(e.target.value)
      }}
      onKeyUp={(event) => {
        console.log("=>(index.tsx:17) event", event);
        if (event.keyCode == "13") {
          add()
        }
      }}
    />

    <span
      className="inline-flex items-center rounded-md
      bg-blue-50 px-2 py-1 text-xs font-medium
      text-blue-700 ring-1 ring-inset ring-blue-700/10
      cursor-pointer
      ml-2
      "
      onClick={(e) => {
        add()
      }}
    >
        add
    </span>
  </div>
}