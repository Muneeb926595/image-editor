import { SearchActionTypes } from "../redux/actionTypes";

const INITIAL_STATE: SearchState = {
  users: [],
  totalPages: "0",
  currentPage: 0,
  loading: false,
};
interface Action {
  payload: any;
  type: string;
}
const SearchReducer = (
  state: SearchState = INITIAL_STATE,
  action: Action
): SearchState => {
  switch (action.type) {
    case SearchActionTypes.SEARCH_USERS_START: {
      if (action.payload.pageNo === 1) {
        state.users = [];
        state.totalPages = "0";
        state.currentPage = 0;
        state.loading = false;
        return { ...state, loading: true };
      } else {
        return { ...state, loading: false };
      }
    }
    case SearchActionTypes.SEARCH_USERS_SUCCESS: {
      if (action.payload.currentPage === 1) {
        state.users = [];
        return {
          ...state,
          users: action.payload.users,
          totalPages: action.payload.totalPages,
          currentPage: action.payload.currentPage,
          loading: false,
        };
      } else {
        return {
          ...state,
          users: [...state.users, ...action.payload.users],
          totalPages: action.payload.totalPages,
          currentPage: action.payload.currentPage,
          loading: false,
        };
      }
    }
    case SearchActionTypes.SEARCH_USERS_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
export default SearchReducer;
