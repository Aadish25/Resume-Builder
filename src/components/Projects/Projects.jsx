import { Link } from "react-router-dom";
import Template1 from "../Temp_All/Template_1";
import Drawer from "../Drawer/Drawer";
import { useDispatch, useSelector } from "react-redux";
import ProjectCard from "../Project_Card/ProjectCard";
import { setProjectArr, setProjectOpen } from "../../reducers/projects/projects";

export default function Projects() {
  const dispatch = useDispatch();
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
    <div className="flex gap-2 padding w-full flex-col lg:flex-row">
      <div className="flex flex-col-reverse lg:flex-col gap-6 w-full  lg:w-1/2  px-6 py-3">
        <div className="flex justify-between items-center">
          <button className="btn  btn-accent">Templates</button>
          <button
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className="btn btn-outline btn-primary"
          >
            Preview
          </button>
          <Link to={"/editor/skills"}>
            <button className="btn btn-primary" onClick={handleClickNext}>
              Next
            </button>
          </Link>
        </div>
        <div className="flex  font-primary py-3 px-6 rounded-md flex-col gap-2 border-t-2 shadow-md shadow-purple-700 border-purple-700">
          <h1 className="text-2xl font-bold">Projects</h1>
          <p className="text-sm text-slate-400">
            Tell us about your projects.
          </p>
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
      <div className=" w-full hidden sm:block lg:w-1/2">
        <Template1 />
      </div>
      <Drawer />
    </div>
  );
}
