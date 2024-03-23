import { useSelector } from "react-redux";
import { useLocation } from "react-router";

export default function Temp_Skills() {
  const { pathname } = useLocation();
  const skillsArrRedux = useSelector((state) => state.skills.skillsArr);

  const skillsArrLocal =
    JSON.parse(localStorage.getItem("skills")) === null
      ? skillsArrRedux
      : JSON.parse(localStorage.getItem("skills"));

  const skillsArr =
    pathname === "/editor/skills" ? skillsArrRedux : skillsArrLocal;

  return (
    <div className="w-full ">
      {skillsArr.length ? (
        <div className="text-center w-full">
          <h1 className="text-primary text-xl">Skills</h1>
        </div>
      ) : (
        ""
      )}
      <br />
      <ul className="flex flex-col max-h-16 flex-wrap">
        {skillsArr.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
