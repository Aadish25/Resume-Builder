import { combineReducers } from "redux";
import details from "./details/details";
import links from "./details_links/links";
import work from "./work-exp/work";

const rootReducer = combineReducers({
  details: details,
  details_links:links,
  work_exp:work
});

export default rootReducer;
