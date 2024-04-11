import { Link, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import ProjectCard from "../Project_Card/ProjectCard";
import {
  setProjectArr,
  setProjectOpen,
} from "../../reducers/projects/projects";
import { setPath } from "../../reducers/choose-path/choosePath";

export default function Projects() {
  const dispatch = useDispatch();
  const {pathname}=useLocation();
  const projectDetailsArr = useSelector((state) => state.projects.projectsArr);
  const handleProjectsCards = async () => {
    await new Promise((resolve) => {
      dispatch(setProjectArr());
      resolve(); // Resolve the promise once dispatch(setWorkArr()) completes
    });

    // Code to execute after dispatch(setWorkArr())
    dispatch(setProjectOpen(projectDetailsArr.length));
  };
  const projectsDetailsArrStringified = JSON.stringify(projectDetailsArr);
  const handleClickNext = () => {
    localStorage.setItem("projectsDetails", projectsDetailsArrStringified);
  };
  return (
    <div className="flex flex-col-reverse lg:flex-col gap-6 w-full  lg:w-1/2  px-6 py-3">
      <div className="flex max-sm:flex-col gap-2 justify-between items-center">
      <Link to={"/editor/work-experience"}>
          <button className="btn  btn-outline max-sm:w-full">Back</button>
        </Link>
      <Link to={"/choose-template"}><button className="btn  btn-accent max-sm:w-full" onClick={()=>dispatch(setPath(pathname))}>Templates</button></Link>
        <button
          onClick={() => document.getElementById("my_modal_2").showModal()}
          className="btn btn-outline btn-primary max-sm:w-full"
        >
          Preview
        </button>
        <Link to={"/editor/skills"}>
          <button
            className="btn btn-primary max-sm:w-full"
            onClick={handleClickNext}
          >
            Next
          </button>
        </Link>
      </div>
      <div className="flex  font-primary py-3 px-6 rounded-md flex-col gap-2 border-t-2 shadow-md shadow-purple-700 border-purple-700">
        <h1 className="text-2xl font-bold">Projects</h1>
        <p className="text-sm text-slate-400">Tell us about your projects.</p>
        {projectDetailsArr.map((item, index) => {
          return (
            <ProjectCard key={index} parentIndex={index} open={item.isOpen} />
          );
        })}

        <button
          className=" btn-outline mt-3 btn max-w-max bg-purple-300"
          onClick={handleProjectsCards}
        >
          Add more projects
        </button>
      </div>
    </div>
  );
}
