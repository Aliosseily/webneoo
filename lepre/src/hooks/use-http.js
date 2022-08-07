import axios from "axios";
import { useCallback, useReducer } from "react";

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
 axios.defaults.baseURL = 'http://localhost:5000/api/v1/';

function httpReducer(state, action) {
  if (action.type === "SEND") {
    return {
      response: [],
      error: null,
      loading: true,
    };
  }

  if (action.type === "SUCCESS") {
    return {
      response: action.responseData,
      error: null,
      loading: false,
    };
  }

  if (action.type === "ERROR") {
    return {
      response: null,
      error: action.errorMessage,
      loading: false,
    };
  }

  return state;
}

const useAxios = () => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: true,
    data: null,
    error: null,
  });

  const fetchData = useCallback(
    async ({ url, method = "GET", body = null, headers = null }) => {
      try {
        dispatch({ type: "SEND" });
        const res = await axios({
          method: method,
          url: url,
          headers: headers,
          data: body,
        });
        dispatch({ type: "SUCCESS", responseData: res.data });
      } catch (err) {
        dispatch({
          type: "ERROR",
          errorMessage: "Something went wrong!",
        });
      }
    },
    []
  );
  return { ...httpState, fetchData };
};

export default useAxios;
