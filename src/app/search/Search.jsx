"use client";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchTerm("");
    router.push(`search/${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="l"
        value={searchTerm}
        placeholder="Search todo..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="p-2 bg-blue-600 text-white rounded-lg ml-5">
        Search
      </button>
    </form>
  );
};

export default Search;
