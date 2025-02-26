"use client";

import { useEffect, useState } from "react";
import { Todo } from "@/interface/todo";

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [newTag, setNewTag] = useState<string>("");
  const [selectedTodo, setSelectedTodo] = useState<string | null>(null);

  const fetchTodos = async () => {
    const response = await fetch(`/api/todo`);
    const data = await response.json();
    setTodos(data.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAddTodo = async () => {
    const response = await fetch("/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newTodo }),
    });
    if (response.ok) {
      const createdTodo = await response.json();
      setTodos([...todos, createdTodo]);
      setNewTodo("");
    }
  };

  const handleAddTag = async () => {
    if (selectedTodo !== null) {
      const response = await fetch("/api/todo/add-tag", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: selectedTodo, tag: newTag }),
      });
      if (response.ok) {
        const updatedTodo = await response.json();
        setTodos(
          todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
        );
        setNewTag("");
        setSelectedTodo(null);
      }
    }
  };

  return (
    <div className="max-h-screen bg-gray-100 p-6 flex overflow-hidden">
      <div className="w-full mx-auto bg-white rounded-lg shadow-md p-6 m-2">
        <h1 className="text-3xl font-bold mb-6 text-center ">Todo List</h1>
        <div className="w-full overflow-y-scroll max-h-screen">

        {todos.map((todo) => (
          <div
            key={todo.id}
            className="mb-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <p className="text-lg">{todo.title}</p>
            {/* <button
              onClick={() => setSelectedTodo(todo.id)}
              className="w-full p-2 bg-yellow-500 text-white rounded-lg mt-2"
            >
              Select for Tagging
            </button> */}
          </div>
        ))}
      </div>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Todo List</h1>
        <div className="mb-4">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add new todo"
            className="w-full p-2 border rounded-lg mb-2"
          />
          <button
            onClick={handleAddTodo}
            className="w-full p-2 bg-blue-500 text-white rounded-lg"
          >
            Add Todo
          </button>
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            placeholder="Add tag to selected todo"
            className="w-full p-2 border rounded-lg mb-2"
          />
          <button
            onClick={handleAddTag}
            className="w-full p-2 bg-green-500 text-white rounded-lg"
          >
            Add Tag
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
