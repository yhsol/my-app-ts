import React, { useState, useEffect } from "react";
import axios from "axios";

type DataT = { objectId: string; url: string; title: string };

type HitsT = {
  hits: DataT[];
};

function DataFetching() {
  const [data, setData] = useState<HitsT | null>({ hits: [] });
  const [refresh, setRefresh] = useState(false);

  const toggleRefresh = () => {
    setRefresh(!refresh);
  };

  const getData = async () => {
    const result = await axios(
      "https://hn.algolia.com/api/v1/search?query=redux"
    );

    setData(result.data);
  };

  useEffect(() => {
    getData();
  }, [refresh]);

  console.log("data: ", data);
  return (
    <div>
      <button onClick={toggleRefresh}>refresh</button>
      <ul>
        {data &&
          data.hits.map((item: DataT) => (
            <li key={item.objectId}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default DataFetching;
