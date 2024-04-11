import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Text_Editor from "../TextEditor/Text_Editor";
import { setSummary } from "../../reducers/summary/summary";
import { setPath } from "../../reducers/choose-path/choosePath";

export default function Summary() {
  const dispatch = useDispatch();
  const {pathname}=useLocation();
  const summary = useSelector((state) => state.summary.summaryDesc);
  const stringyfiedSummary = JSON.stringify(summary);
  const handleClickNext = () => {
    localStorage.setItem("summary", stringyfiedSummary);
  };
  return (
    <div className="flex flex-col-reverse lg:flex-col gap-6 w-full  lg:w-1/2  px-6 py-3">
      <div className="flex max-sm:flex-col gap-2 justify-between items-center">
      <Link to={"/editor/additional-experience"}>
          <button className="btn  btn-outline max-sm:w-full">Back</button>
        </Link>
      <Link to={"/choose-template"}><button className="btn  btn-accent max-sm:w-full" onClick={()=>dispatch(setPath(pathname))}>Templates</button></Link>
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
            Next
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
  );
}
