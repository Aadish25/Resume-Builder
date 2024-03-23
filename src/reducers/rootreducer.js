import { combineReducers } from "redux";
import details from "./details/details";
import links from "./details_links/links";
import work from "./work-exp/work";
import education from "./education/education";
import skills from "./skills/skills";
import projects from "./projects/projects";

const rootReducer = combineReducers({
  details: details,
  details_links: links,
  work_exp: work,
  education: education,
  skills: skills,
  projects: projects,
});

export default rootReducer;
