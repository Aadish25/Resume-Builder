import { useDispatch, useSelector } from "react-redux";
import Template1 from "../Temp_All/Template_1";
import Drawer from "../Drawer/Drawer";
import { Link } from "react-router-dom";
import Text_Editor from "../TextEditor/Text_Editor";
import { setSummary } from "../../reducers/summary/summary";
import Navbar from "../Navbar/Navbar";

export default function Summary() {
  const dispatch = useDispatch();
  const summary = useSelector((state) => state.summary.summaryDesc);
  const stringyfiedSummary = JSON.stringify(summary);
  const handleClickNext = () => {
    localStorage.setItem("summary", stringyfiedSummary);
  };
  return (
    <>
      <Navbar />
      <div className="flex gap-2 padding w-full flex-col lg:flex-row absolute top-10">
        <div className="flex flex-col-reverse lg:flex-col gap-6 w-full  lg:w-1/2  px-6 py-3">
          <div className="flex max-sm:flex-col gap-2 justify-between items-center">
            <button className="btn  btn-accent max-sm:w-full">Templates</button>
            <button
              onClick={() => document.getElementById("my_modal_2").showModal()}
              className="btn btn-outline btn-primary max-sm:w-full"
            >
              Preview
            </button>
            <Link to={"/download"}>
              <button
                className="btn btn-primary max-sm:w-full"
                onClick={handleClickNext}
              >
                Download
              </button>
            </Link>
          </div>
          <div className="flex  font-primary py-3 px-6 rounded-md flex-col gap-2 border-t-2 shadow-md text- shadow-pink-500 border-pink-500">
            <h1 className="text-2xl font-bold">Summary</h1>
            <p className="text-sm text-slate-400">
              Summarize your work experience, education and skills here.
            </p>
            <Text_Editor
              index={0}
              name={"Summary"}
              setDetails={setSummary}
              dispatch={dispatch}
            />
          </div>
        </div>
        <div className=" w-full hidden sm:block lg:w-1/2">
          <Template1 />
        </div>
        <Drawer />
      </div>
    </>
  );
}
