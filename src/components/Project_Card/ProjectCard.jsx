import { useDispatch, useSelector } from "react-redux";
import Text_Editor from "../TextEditor/Text_Editor";
import {
  deleteProjectArr,
  setProjectDetails,
  setProjectOpen,
} from "../../reducers/projects/projects";

export default function ProjectCard({ parentIndex, open }) {
  const dispatch = useDispatch();
  const projectDetails = useSelector((state) => state.projects.projectsArr);
  const project = projectDetails[parentIndex];

  const formDetails = [
    { label: "Project Title", name: "projectTitle" },
    { label: "Project Link", name: "projectLink" },
  ];
  const handleChange = (e, index) => {
    dispatch(
      setProjectDetails({
        name: e.target.name,
        value: e.target.value,
        index: index,
      })
    );
  };
  return (
    <div className=" flex flex-col gap-2 rounded-md border-2 border-slate-300 p-3">
      <div className="flex justify-between items-center">
        <div className="">
          <i className="fa-solid fa-grip-vertical"></i>
        </div>
        <div className="flex items-center gap-3">
          {open ? (
            <i
              className="fa-solid fa-chevron-up"
              onClick={() => dispatch(setProjectOpen(parentIndex))}
            ></i>
          ) : (
            <i
              onClick={() => dispatch(setProjectOpen(parentIndex))}
              className="fa-solid fa-chevron-down"
            ></i>
          )}
          <i
            onClick={() => dispatch(deleteProjectArr(parentIndex))}
            className="fa-solid fa-trash-can"
          ></i>
        </div>
      </div>
      {open ? (
        <div className="w-full flex flex-wrap gap-2 ">
          {formDetails.map((item, index) => {
            return (
              <label key={index} className="form-control">
                <div className="label">
                  <span className="label-text">{item.label}</span>
                  {/* {project} */}
                </div>
                <input
                  type="text"
                  name={item.name}
                  value={project[item.name]}
                  onChange={(e) => handleChange(e, parentIndex)}
                  className="input w-full h-8 md:w-64 input-bordered"
                />
              </label>
            );
          })}
          <div className="w-full">
            <p className="label-text label">Project Summary</p>
            <div className="h-full w-full">
              <Text_Editor
                index={parentIndex}
                name={"projectSummary"}
                setDetails={setProjectDetails}
                dispatch={dispatch}
              />
            </div>
          </div>
        </div>
      ) : (
        // </div>
        // </div>
        ""
      )}
    </div>
  );
}
