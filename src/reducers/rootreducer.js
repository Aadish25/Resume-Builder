import { combineReducers } from "redux";
import details from "./details/details";
import links from "./details_links/links";

const rootReducer = combineReducers({
  details: details,
  details_links:links
});

export default rootReducer;
