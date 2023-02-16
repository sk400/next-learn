import Todos from "./Todolist";

export default function RootLayout({ children }) {
  return (
    <main className="flex">
      <div className="l">
        <Todos />
      </div>
      <div className="flex-1">{children}</div>
    </main>
  );
}
