import { useSelector } from "react-redux";
import { useLocation } from "react-router";

export default function Temp_Work_Exp() {
  const { pathname } = useLocation();
  const workDetailsArrRedux = useSelector((state) => state.work_exp.workArr);

  const workDetailsArrLocal =
    JSON.parse(localStorage.getItem("workDetails")) === null
      ? workDetailsArrRedux
      : JSON.parse(localStorage.getItem("workDetails"));

  const workDetailsArr =
    pathname === "/editor/work-experience"
      ? workDetailsArrRedux
      : workDetailsArrLocal;

  const workArr = workDetailsArr.map((item, index) => {
    return (
      <div className="w-full" key={index}>
        <div className="flex gap-2">
          <p className="font-bold">{item.companyName}</p>
          <p>
            {item.startDate}
            <span>-{item.endDate}</span>
          </p>
        </div>
        <p className="font-semibold">{item.positionTitle}</p>
        <div dangerouslySetInnerHTML={{ __html: item.workSummary }} className="text-justify"/>
      </div>
    );
  });
  return (
    <div className="w-full">
      {workArr.length ? (
        <div className="text-center w-full">
          <h1 className="text-primary text-xl">Professional Experience</h1>
        </div>
      ) : (
        ""
      )}
      <br />
      <div className="flex flex-col gap-4">{workArr}</div>
    </div>
  );
}
