import { notFound } from "next/navigation";

export const dynamicParams = true;

const fetchTodos = async (todoId) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 10 } }
  );
  const todo = await response.json();

  if (!todo?.id) return notFound();

  return todo;
};

const TodoPage = async ({ params: { todoId } }) => {
  const todoItem = await fetchTodos(todoId);
  //   console.log(todoItem);

  return (
    <>
      <div className="flex justify-center mt-10 ">
        <div className="w-[480px] h-[200px] bg-amber-400 rounded-md p-5 relative shadow-2xl">
          <p className="">
            {todoItem?.id}# <span className="ml-2 ">{todoItem?.title}</span>
          </p>
          <p className="">Completed:- {todoItem?.completed ? "Yes" : "No"}</p>
          <div className="absolute bottom-5 right-5 w-[440px]">
            <p className=" text-right border-t border-black">
              By user {todoItem?.userId}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoPage;

export async function generateStaticParams() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  const trimmedTodos = data?.splice(0, 10);

  return trimmedTodos?.map((todo) => ({
    todoId: todo?.id?.toString(),
  }));
}
