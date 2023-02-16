import Search from "./Search";

export default function RootLayout({ children }) {
  return (
    <main className="flex divide-x-2 p-5 space-x-5">
      <div className="l">
        <h1 className="font-bold text-md">Search</h1>
      </div>
      <div className="flex-1 pl-5">
        <Search />
        {children}
      </div>
    </main>
  );
}
