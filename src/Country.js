import React, { useState } from "react";
import { useGetCountryByNameQuery } from "./userApi";

export default function Country() {
  const [name, setname] = useState("bangladesh");
 // const { isLoading, data, error } = useGetCountryApiQuery();
  const {data,isLoading } = useGetCountryByNameQuery(name);
  console.log(data);
  const namechange = () => {
    console.log(name);
  };
  return (
    <div>
      <h1>All Country</h1>
      <input
        type="text"
        value={name}
        name="clountry"
        onChange={(e) => setname(e.target.value)}
      />
      <button type="submit" onClick={namechange}>search</button>
      {isLoading && <h1>Loading .....</h1>}
      {/* {error && <h1>fatching problem</h1>} */}

      {data?.map((d) => (
        <ul key={Math.random()}>
          <li>{d.name.common}</li>
          <img src={d.flags.png} alt="not found" />
        </ul>
      ))}
    </div>
  );
}
