import React from "react";
import { useGetTodoApiQuery } from "./todoAPi";

export default function Todo() {
  const { data, error, isLoading, isFetching } = useGetTodoApiQuery();

  return (
    <div>
    
      <h1>Hello Todo</h1>
      {error && <h1>Error </h1>}
      {isLoading && <h2>Loading...</h2>}
      {isFetching && <h1>Fetching</h1>}

      {data?.map((d) => (
        <ul  key={d.id}>
          <li>{d.title}</li>
        </ul>
      ))}
    </div>
  );
}
