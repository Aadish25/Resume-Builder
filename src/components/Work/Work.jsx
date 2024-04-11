import { Link, useLocation } from "react-router-dom";

import WorkCard from "../Work-Card/WorkCard";
import { useDispatch, useSelector } from "react-redux";
import { setWorkArr, setWorkOpen } from "../../reducers/work-exp/work";
import { setPath } from "../../reducers/choose-path/choosePath";

export default function Work() {
  const dispatch = useDispatch();
  const {pathname}=useLocation();
  const workDetailsArr = useSelector((state) => state.work_exp.workArr);
  const handleworkCards = async () => {
    await new Promise((resolve) => {
      dispatch(setWorkArr());
      resolve(); // Resolve the promise once dispatch(setWorkArr()) completes
    });

    // Code to execute after dispatch(setWorkArr())
    dispatch(setWorkOpen(workDetailsArr.length));
  };
  const workDetailsArrStringified = JSON.stringify(workDetailsArr);
  const handleClickNext = () => {
    localStorage.setItem("workDetails", workDetailsArrStringified);
  };
  return (
    <div className="flex flex-col-reverse lg:flex-col gap-6 w-full  lg:w-1/2  px-6 py-3">
      <div className="flex max-sm:flex-col gap-2 justify-between items-center">
      <Link to={"/editor/education"}>
          <button className="btn  btn-outline max-sm:w-full">Back</button>
        </Link>
      <Link to={"/choose-template"}><button className="btn  btn-accent max-sm:w-full" onClick={()=>dispatch(setPath(pathname))}>Templates</button></Link>
        <button
          onClick={() => document.getElementById("my_modal_2").showModal()}
          className="btn btn-outline btn-primary max-sm:w-full"
        >
          Preview
        </button>
        <Link to={"/editor/projects"}>
          <button
            className="btn btn-primary max-sm:w-full"
            onClick={handleClickNext}
          >
            Next
          </button>
        </Link>
      </div>
      <div className="flex  font-primary py-3 px-6 rounded-md flex-col gap-2 border-t-2 shadow-md shadow-red-700 border-red-700">
        <h1 className="text-2xl font-bold">Professional Experience</h1>
        <p className="text-sm text-slate-400">
          Tell us about your most recent job.
        </p>
        {workDetailsArr.map((item, index) => {
          return (
            <WorkCard key={index} parentIndex={index} open={item.isOpen} />
          );
        })}

        <button
          className=" btn-outline mt-3 btn max-w-max bg-red-300"
          onClick={handleworkCards}
        >
          Add more work experience
        </button>
      </div>
    </div>
  );
}
