import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function Temp_Projects() {
  const { pathname } = useLocation();
  const projectDetailsArrRedux = useSelector(
    (state) => state.projects.projectsArr
  );

  const projectDetailsArrLocal =
    JSON.parse(localStorage.getItem("projectsDetails")) === null
      ? projectDetailsArrRedux
      : JSON.parse(localStorage.getItem("projectsDetails"));

  const projectDetailsArr =
    pathname === "/editor/projects"
      ? projectDetailsArrRedux
      : projectDetailsArrLocal;

  const projectArr = projectDetailsArr.map((item, index) => {
    return (
      <div className="w-full" key={index}>
        <div className="flex gap-2">
          <p className="font-bold">{item.projectTitle}</p>
        </div>
        <Link to={item.projectLink} target="blank">
          <p className="font-semibold text-blue-400 lowercase ">{item.projectTitle.split(" ").join("")}</p>
        </Link>
        <div dangerouslySetInnerHTML={{ __html: item.projectSummary }} />
      </div>
    );
  });
  return (
    <div className="w-full">
      {projectArr.length ? (
        <div className="text-center w-full">
          <h1 className="text-primary text-xl">Projects</h1>
        </div>
      ) : (
        ""
      )}
      <br />
      <div className="flex flex-col gap-4">{projectArr}</div>
    </div>
  );
}
