import { Link } from "react-router-dom";
import Template1 from "../Temp_All/Template_1";
import Drawer from "../Drawer/Drawer";
import { useDispatch, useSelector } from "react-redux";
import AdditionalExpCard from "../AdditionalExp_Card/AdditionalExpCard";
import { setAddExpArr, setAddExpOpen } from "../../reducers/addExp/addExp";

export default function AdditionalExp() {
  const dispatch = useDispatch();
  const addExpDetailsArr = useSelector((state) => state.additionalExp.addExpArr);
  const handleAddExpCards = async () => {
    await new Promise((resolve) => {
      dispatch(setAddExpArr());
      resolve(); // Resolve the promise once dispatch(setWorkArr()) completes
    });

    // Code to execute after dispatch(setWorkArr())
    dispatch(setAddExpOpen(addExpDetailsArr.length));
  };
  const addExpDetailsArrStringified = JSON.stringify(addExpDetailsArr);
  const handleClickNext = () => {
    localStorage.setItem("additionalDetails", addExpDetailsArrStringified);
  };
  return (
    <div className="flex gap-2 padding w-full flex-col lg:flex-row">
      <div className="flex flex-col-reverse lg:flex-col lg:w-1/2  gap-6 px-6 py-3">
        <div className="flex justify-between items-center">
          <button className="btn  btn-accent">Templates</button>
          <button
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className="btn btn-outline btn-primary"
          >
            Preview
          </button>
          <Link to={"/editor/additional-experience"}>
            <button className="btn btn-primary" onClick={handleClickNext}>
              Next
            </button>
          </Link>
        </div>
        <div className="flex  font-primary py-3 px-6 rounded-md flex-col gap-2 border-t-2 shadow-md shadow-orange-700 border-orange-700">
          <h1 className="text-2xl font-bold">Additional Experiences and Achievements</h1>
          <p className="text-sm text-slate-400">Tell us about your additional experiences and achievements.</p>
          {addExpDetailsArr.map((item, index) => {
            return (
              <AdditionalExpCard key={index} parentIndex={index} open={item.isOpen} />
            );
          })}

          <button
            className=" btn-outline mt-3 btn max-w-max bg-orange-300"
            onClick={handleAddExpCards}
          >
            Add more projects
          </button>
        </div>
      </div>
      <div className="hidden sm:block">
        <Template1 />
      </div>
      <Drawer />
    </div>
  );
}
