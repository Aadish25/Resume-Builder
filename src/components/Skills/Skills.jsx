import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  deleteSkill,
  setSkills,
  setSkillsArr,
} from "../../reducers/skills/skills";
import { setPath } from "../../reducers/choose-path/choosePath";


export default function Skills() {
  const dispatch = useDispatch();
  const {pathname}=useLocation();
  const skillsArr = useSelector((state) => state.skills.skillsArr);

  const handleChange = (e, index) => {
    dispatch(setSkills({ index: index, value: e.target.value }));
  };
  const skills = skillsArr.map((item, index) => {
    return (
      <div
        className="flex justify-between items-center gap-2 w-full"
        key={index}
      >
        <div className="flex items-center gap-2">
          <p className=" font-light">Skill</p>
          <input
            key={index}
            type="text"
            value={item}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs h-8"
            onChange={(e) => handleChange(e, index)}
          />
        </div>
        <i
          onClick={() => dispatch(deleteSkill(index))}
          className="fa-solid fa-trash-can"
        ></i>
      </div>
    );
  });

  const skillsArrStringified = JSON.stringify(skillsArr);
  const handleClickNext = () => {
    localStorage.setItem("skills", skillsArrStringified);
  };
  return (
    <div className="flex flex-col-reverse lg:flex-col gap-6 w-full  lg:w-1/2  px-6 py-3">
      <div className="flex max-sm:flex-col gap-2 justify-between items-center">
      <Link to={"/editor/projects"}>
          <button className="btn  btn-outline max-sm:w-full">Back</button>
        </Link>
      <Link to={"/choose-template"}><button className="btn  btn-accent max-sm:w-full" onClick={()=>dispatch(setPath(pathname))}>Templates</button></Link>
        <button
          onClick={() => document.getElementById("my_modal_2").showModal()}
          className="btn btn-outline btn-primary max-sm:w-full"
        >
          Preview
        </button>
        <Link to={"/editor/additional-experience"}>
          <button
            className="btn btn-primary max-sm:w-full"
            onClick={handleClickNext}
          >
            Next
          </button>
        </Link>
      </div>
      <div className="flex  font-primary py-3 px-6 rounded-md flex-col gap-2 border-t-2 shadow-md shadow-green-500 border-green-500">
        <h1 className="text-2xl font-bold">Skills</h1>
        <p className="text-sm text-slate-400">
          Add relevant professional key skills and proficiencies.
        </p>
        {skills}
        <button
          className=" btn-outline mt-3 btn max-w-max bg-green-300"
          onClick={() => dispatch(setSkillsArr())}
        >
          Add more skills
        </button>
      </div>
    </div>
  );
}
