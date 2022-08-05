import React from "react";
import { useGetCountryApiQuery } from "./userApi";

export default function Country() {
  const { isLoading, data, error } = useGetCountryApiQuery();
  return (
    <div>
        <h1>All Country</h1>
      {isLoading && <h1>Loading .....</h1>}
      {error && <h1>fatching problem</h1>}

      {data?.map((d) => (
        <ul  key={Math.random()}>
          <li>{d.name.common}</li>
        </ul>
      ))}
    </div>
  );
}
