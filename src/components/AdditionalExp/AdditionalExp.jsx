import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AdditionalExpCard from "../AdditionalExp_Card/AdditionalExpCard";
import { setAddExpArr, setAddExpOpen } from "../../reducers/addExp/addExp";
import { setPath } from "../../reducers/choose-path/choosePath";

export default function AdditionalExp() {
  const dispatch = useDispatch();
  const {pathname}=useLocation();
  const addExpDetailsArr = useSelector(
    (state) => state.additionalExp.addExpArr
  );
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
    <div className="flex flex-col-reverse lg:flex-col lg:w-1/2  gap-6 px-6 py-3">
      <div className="flex max-sm:flex-col gap-2 justify-between items-center">
        <Link to={"/editor/skills"}>
          <button className="btn  btn-outline max-sm:w-full">Back</button>
        </Link>
        <Link to={"/choose-template"}>
          <button className="btn  btn-accent max-sm:w-full" onClick={()=>dispatch(setPath(pathname))}>Templates</button>
        </Link>
        <button
          onClick={() => document.getElementById("my_modal_2").showModal()}
          className="btn btn-outline btn-primary max-sm:w-full"
        >
          Preview
        </button>
        <Link to={"/editor/summary"}>
          <button
            className="btn btn-primary max-sm:w-full"
            onClick={handleClickNext}
          >
            Next
          </button>
        </Link>
      </div>
      <div className="flex  font-primary py-3 px-6 rounded-md flex-col gap-2 border-t-2 shadow-md shadow-orange-700 border-orange-700">
        <h1 className="text-2xl font-bold">
          Additional Experiences and Achievements
        </h1>
        <p className="text-sm text-slate-400">
          Tell us about your additional experiences and achievements.
        </p>
        {addExpDetailsArr.map((item, index) => {
          return (
            <AdditionalExpCard
              key={index}
              parentIndex={index}
              open={item.isOpen}
            />
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
  );
}
