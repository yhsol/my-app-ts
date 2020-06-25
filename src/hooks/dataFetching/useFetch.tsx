import React, { useState } from "react";
import axios from "axios";

type DataT = { objectId: string; url: string; title: string };

type HitsT = {
  hits: DataT[];
};

function useFetch() {
  const [data, setData] = useState<HitsT | null>({ hits: [] });

  return (
    <ul>
      {data &&
        data.hits.map((item: DataT) => (
          <li key={item.objectId}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
    </ul>
  );
}

export default useFetch;
