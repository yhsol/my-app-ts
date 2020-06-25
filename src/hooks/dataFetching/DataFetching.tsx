import React, { useState } from "react";
import useDataFetching from "./useDataFetching";

export type DataT = { objectId: string; url: string; title: string };

export type HitsT = {
  hits: DataT[];
};

function DataFetching() {
  const [refresh, setRefresh] = useState(false);
  const [query, setQeury] = useState("redux");
  const { data, isLoading, isError, setUrl } = useDataFetching(
    "https://hn.algolia.com/api/v1/search?query=redux",
    {
      hits: [],
    }
  );
  const [search, setSearch] = useState(`/search?query=${query}`);

  const toggleRefresh = () => {
    setRefresh(!refresh);
  };

  const onSetQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQeury(e.target.value);
  };

  const onSetSearch = () => {
    setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`);
  };

  const onSetSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`);
  };

  return (
    <div>
      <button onClick={toggleRefresh}>refresh</button>
      <form action="" onSubmit={onSetSearchSubmit}>
        <input type="text" value={query} onChange={onSetQuery} />
      </form>
      <button type="button" onClick={onSetSearch}>
        Search
      </button>
      {isError && <div>is Error...</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        !isError && (
          <ul>
            {data &&
              data.hits.map((item: DataT) => (
                <li key={item.objectId}>
                  <a href={item.url}>{item.title}</a>
                </li>
              ))}
          </ul>
        )
      )}
    </div>
  );
}

export default DataFetching;
