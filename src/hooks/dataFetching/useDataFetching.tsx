import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";

// 다양하게 변할 data 의 type 을 어떻게 설정할지 고민이 필요할 듯.

type State = {
  isLoading: boolean;
  isError: boolean;
  data: any | null;
};

type Action =
  | { type: "FETCH_INIT" }
  | { type: "FETCH_SUCCESS"; payload: any | null }
  | { type: "FETCH_FAILURE" };

export type ReturnDataT = {
  // data: any | null;
  // isLoading: boolean;
  // isError: boolean;
  state: State;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
};

const dataFetchReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "FETCH_INIT":
      // setIsLoading(true);
      // setIsError(false);
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "FETCH_SUCCESS":
      // setData(result.data);
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      // setIsError(true);
      // setIsLoading(false);
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

const useDataFetching = (initialUrl: string, initialData: any): ReturnDataT => {
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });
  const [url, setUrl] = useState(initialUrl);
  // const [data, setData] = useState<any | null>(initialData);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  useEffect(() => {
    let didCancel = false;

    const getData = async () => {
      dispatch({ type: "FETCH_INIT" });

      try {
        const result = await axios(url);
        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };
    getData();

    return () => {
      didCancel = true;
    };
  }, [url]);

  return { state, setUrl };
};

export default useDataFetching;
