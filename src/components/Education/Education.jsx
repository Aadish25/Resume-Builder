import { Link } from "react-router-dom";
import {
  setEducationArr,
  setEducationOpen,
} from "../../reducers/education/education";
import EducationCard from "../EducationCard/EducationCard";
import { useDispatch, useSelector } from "react-redux";


export default function Education() {
  const dispatch = useDispatch();
  const EducationDetailsArr = useSelector(
    (state) => state.education.educationArr
  );
  const handleEducationCards = async () => {
    await new Promise((resolve) => {
      dispatch(setEducationArr());
      resolve();
    });
    dispatch(setEducationOpen(EducationDetailsArr.length));
  };
  const educDetailsArrStringified = JSON.stringify(EducationDetailsArr);
  const handleClickNext = () => {
    localStorage.setItem("educationDetails", educDetailsArrStringified);
  };
  return (
    <div className="flex flex-col-reverse lg:flex-col gap-6 w-full  lg:w-1/2  px-6 py-3">
      <div className="flex max-sm:flex-col gap-2 justify-between items-center">
      <Link to={"/choose-template"}><button className="btn  btn-accent max-sm:w-full">Templates</button></Link>
        <button
          onClick={() => document.getElementById("my_modal_2").showModal()}
          className="btn btn-outline btn-primary max-sm:w-full"
        >
          Preview
        </button>
        <Link to={"/editor/work-experience"}>
          <button
            className="btn btn-primary max-sm:w-full"
            onClick={handleClickNext}
          >
            Next
          </button>
        </Link>
      </div>
      <div className="flex  font-primary py-3 px-6 rounded-md flex-col gap-2 border-t-2 shadow-md shadow-yellow-500 border-yellow-500">
        <h1 className="text-2xl font-bold">Education</h1>
        <p className="text-sm text-slate-400">
          Add your most relevant education, including programs you&apos;re
          currently enrolled in.
        </p>
        {EducationDetailsArr.map((item, index) => {
          return (
            <EducationCard key={index} parentIndex={index} open={item.isOpen} />
          );
        })}

        <button
          className=" btn-outline mt-3 btn max-w-max bg-yellow-300"
          onClick={handleEducationCards}
        >
          Add more education
        </button>
      </div>
    </div>
  );
}
