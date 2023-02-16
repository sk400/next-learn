import React from "react";

const search = async (searchTerm) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.NEXT_PUBLIC_SERP_API_KEY}`
  );

  const data = await res.json();

  return data?.organic_results;
};

const page = async ({ params: { searchTerm } }) => {
  const searchResults = await search(searchTerm);
  //   console.log(searchResults);

  return (
    <div>
      <p className="trext-gray text-sm">You searched for:</p>
      <ol className="space-y-5 p-5">
        {searchResults?.map((item) => (
          <li key={item?.position} className="list-decimal">
            <p className="font-bold">{item?.title}</p>
            <p className="">{item?.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default page;
