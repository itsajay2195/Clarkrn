import {
  SET_SEARCH_DATA,
  SET_REFRESHING,
  SET_SEARCH_QUERY,
  SET_CURRENT_PAGE,
} from './actionTypes';

const productListReducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.payload};
    case SET_SEARCH_DATA:
      return {...state, searchData: action.payload};
    case SET_REFRESHING:
      return {...state, refreshing: action.payload};
    case SET_SEARCH_QUERY:
      return {...state, searchQuery: action.payload};
    default:
      return state;
  }
};

export default productListReducer;
