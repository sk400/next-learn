import Link from "next/link";
import React from "react";

const fetchTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  return data;
};

const Todos = async () => {
  const todos = await fetchTodos();
  //   console.log(todos);

  return (
    <>
      {todos?.map((todo) => (
        <div key={todo?.id}>
          <Link href={`todos/${todo?.id}`}>Todo: {todo?.id}</Link>
        </div>
      ))}
    </>
  );
};

export default Todos;
