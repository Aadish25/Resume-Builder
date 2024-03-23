import { useSelector } from "react-redux";
import { useLocation } from "react-router";


export default function Temp_AdditionalExp() {
  const { pathname } = useLocation();
  const addExpArrRedux = useSelector((state) => state.additionalExp.addExpArr);

  const addExpDetailsArrLocal =
    JSON.parse(localStorage.getItem("additionalDetails")) === null
      ? addExpArrRedux
      : JSON.parse(localStorage.getItem("additionalDetails"));

  const addExpDetailsArr =
    pathname === "/editor/additional-experience"
      ? addExpArrRedux
      : addExpDetailsArrLocal;

  const addExpArr = addExpDetailsArr.map((item, index) => {
    return (
      <div className="w-full" key={index}>
        <div className="flex gap-2">
          <p className="font-bold">{item.addExpTitle}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: item.addExpSummary }} />
      </div>
    );
  });
  return (
    <div className="w-full">
      {addExpArr.length ? (
        <div className="text-center w-full">
          <h1 className="text-primary text-xl">
            Additional Experiences and Achievements
          </h1>
        </div>
      ) : (
        ""
      )}
      <br />
      <div className="flex flex-col gap-4">{addExpArr}</div>
    </div>
  );
}
