import Template1 from "../Temp_All/Template_1";
import Navbar from "../Navbar/Navbar";
import { useDispatch } from "react-redux";
import { setIndex } from "../../reducers/temp_index/temp_index";
import { Link } from "react-router-dom";
export default function ChooseTemplates() {
  const dispatch = useDispatch();
  const templatesArr = [Template1];
  const templates = templatesArr.map((Item, index) => {
    return (
      <Link to={"/editor/details"} key={index}>
        <div
          className="h-[480px] w-[380px] mb-16"
          onClick={dispatch(setIndex(index))}
        >
          <div className="w-[800px] transform origin-top-left scale-[0.398] overflow-hidden">
            <Item />
          </div>
        </div>
      </Link>
    );
  });

  return (
    <>
      <Navbar />
      <div className="flex gap-10 flex-col items-center justify-center w-full p-5">
        <h1 className="text-2xl mt-16">Choose Template</h1>
        <div className="flex w-full flex-wrap justify-center  gap-10 overflow-hidden ">
          {templates}
        </div>
      </div>
    </>
  );
}
