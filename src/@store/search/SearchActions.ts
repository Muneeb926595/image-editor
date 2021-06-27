import { getSearchUsersUrl } from "@api/Endpoint";
import { axiosInstance as axios } from "@api/axios";
import { SearchActionTypes } from "../redux/actionTypes";

export const searchUsers = (userPage, userLimit, searchText) => {
  return (dispatch) => {
    dispatch({
      type: SearchActionTypes.SEARCH_USERS_START,
      payload: {
        pageNo: userPage,
      },
    });
    const url = getSearchUsersUrl(
      userPage,
      userLimit,
      searchText,
      localStorage.getItem("userId")
    );
    axios
      .get(url)
      .then((res) => {
        let { users, totalPages, currentPage } = res.data;
        if (users) {
          searchUsersSuccess(dispatch, users, totalPages, currentPage);
        } else {
          searchUsersFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        searchUsersFail(dispatch, "There was an error connection2");
      });
  };
};
const searchUsersFail = (dispatch, errorMessage) => {
  console.log(errorMessage);
  dispatch({
    type: SearchActionTypes.SEARCH_USERS_FAIL,
    payload: {
      errorMessage,
    },
  });
};
const searchUsersSuccess = (dispatch, users, totalPages, currentPage) => {
  dispatch({
    type: SearchActionTypes.SEARCH_USERS_SUCCESS,
    payload: {
      users,
      totalPages,
      currentPage,
    },
  });
};
