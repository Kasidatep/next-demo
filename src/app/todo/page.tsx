"use client";

import { useEffect, useState } from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodo = async () => {
    const response = await fetch(`/api/todo`);
    const todo = await response.json();
    setTodos(todo);
    console.log(todo);
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Todo List</h1>
        {todos.map((todo) => (
          <div key={todo.id} className="mb-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <p className="text-lg">{todo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
