import React from "react";
import { useGetContactApiQuery } from "./contactApi";
import Todo from "./Todo";

import Country from "./Country";
const App = () => {
  const { data, error, isLoading, isFetching } = useGetContactApiQuery();

  return (
    <div className="container">
      <div className="row">
        <div  className="col-sm-12 col-md-4 col-lg-4 bg-info">
          <Todo />
        </div>
        <div  className="col-sm-12 col-md-4 col-lg-4 bg-secondary">
          <Country />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 bg-danger">
          <h1>Hello world</h1>
          {error && <h1>Error </h1>}
          {isLoading && <h2>Loading...</h2>}
          {isFetching && <h1>Fetching</h1>}

          {data?.map((d) => (
            <ul key={d.id}>
              <li>{d.title}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
