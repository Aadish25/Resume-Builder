import { combineReducers } from "redux";
import details from "./details/details";
import links from "./details_links/links";
import work from "./work-exp/work";
import education from "./education/education";
import skills from "./skills/skills";
import projects from "./projects/projects";
import addExp from "./addExp/addExp";
import summary from "./summary/summary";
import snackbar from "./snackbar/snackbar";

const rootReducer = combineReducers({
  details: details,
  details_links: links,
  work_exp: work,
  education: education,
  skills: skills,
  projects: projects,
  additionalExp: addExp,
  summary: summary,
  snackbar: snackbar,
});

export default rootReducer;
