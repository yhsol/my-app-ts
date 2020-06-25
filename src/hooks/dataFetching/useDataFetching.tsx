import React, { useState, useEffect } from "react";
import axios from "axios";

// 다양하게 변할 data 의 type 을 어떻게 설정할지 고민이 필요할 듯.

export type ReturnDataT = {
  data: any | null;
  isLoading: boolean;
  isError: boolean;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
};

const useDataFetching = (initialUrl: string, initialData: any): ReturnDataT => {
  const [data, setData] = useState<any | null>(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const result = await axios(url);
      setData(result.data);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { data, isLoading, isError, setUrl };
};

export default useDataFetching;
