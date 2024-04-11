import { useSelector } from "react-redux";
import { useLocation } from "react-router";

export default function Temp_Education() {
  const { pathname } = useLocation();
  const EducationDetailsArrRedux = useSelector(
    (state) => state.education.educationArr
  );
  const EducationDetailsArrLocal =
    JSON.parse(localStorage.getItem("educationDetails")) == null
      ? EducationDetailsArrRedux
      : JSON.parse(localStorage.getItem("educationDetails"));
  const EducationDetailsArr =
    pathname === "/editor/education"
      ? EducationDetailsArrRedux
      : EducationDetailsArrLocal;

  const educArr = EducationDetailsArr.map((item, index) => {
    return (
      <div className="w-full" key={index}>
        <div className="flex gap-2">
          <p className="font-bold">
            {item.degree} <span>in</span> <span>{item.fieldOfStudy}</span>
          </p>
          <p>
            {item.startDate}
            <span>-{item.endDate}</span>
          </p>
        </div>
        <p className="font-semibold">
          {item.schoolName}, <span>{item.schoolLocation}</span>
        </p>
        <div dangerouslySetInnerHTML={{ __html: item.description }} className="text-justify"/>
      </div>
    );
  });
  return (
    <div className="w-full">
      {educArr.length ? (
        <div className="text-center w-full">
          <h1 className="text-primary text-xl">Education</h1>
        </div>
      ) : (
        ""
      )}
      <br />
      <div className="flex flex-col gap-4">{educArr}</div>
    </div>
  );
}
