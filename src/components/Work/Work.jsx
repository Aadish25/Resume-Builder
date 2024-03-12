import { Link } from "react-router-dom";
import Template1 from "../Temp_All/Template_1";
import Drawer from "../Drawer/Drawer";
import WorkCard from "../Work-Card/WorkCard";
import { useDispatch, useSelector } from "react-redux";
import { setWorkArr, setWorkOpen } from "../../reducers/work-exp/work";

export default function Work() {
  const dispatch = useDispatch();
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
    localStorage.setItem("workDetails",workDetailsArrStringified);
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
          <Link to={"/editor/education"}>
            <button className="btn btn-primary" onClick={handleClickNext}>
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
            // console.log(index);
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
      <div className=" w-full hidden sm:block lg:w-1/2">
        <Template1 />
      </div>
      <Drawer />
    </div>
  );
}
