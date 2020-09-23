import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
//   const searchUsers = async (text) => {
//     setLoading();

//     const res = await axios.get(
//       `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
//     );

//     dispatch({
//       type: SEARCH_USERS,
//       payload: res.data.items,
//     });
//   };







  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        // searchUsers,
        // clearUsers,
        // getUser,
        // getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );


};


export default GithubState;