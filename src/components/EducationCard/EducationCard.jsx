import { useDispatch } from "react-redux";
import Text_Editor from "../TextEditor/Text_Editor";
import {
  deleteEducationArr,
  setEducationDetails,
  setEducationOpen,
} from "../../reducers/education/education";

export default function EducationCard({ parentIndex, open }) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dispatch = useDispatch();
  const formDetails = [
    { label: "School Name", name: "schoolName" },
    { label: "School Location", name: "schoolLocation" },
    { label: "Degree", name: "degree" },
    { label: "Field of Study", name: "fieldOfStudy" },
  ];
  const handleChange = (e, index) => {
    if (e.target.name == "startDate" || e.target.name == "endDate") {
      const parts = e.target.value.split("-");
      const year2 = parts[0];
      const monthIndex = parseInt(parts[1]) - 1; // Subtract 1 to match array index
      const dateFinal = `${monthNames[monthIndex]} ${year2}`;
      dispatch(
        setEducationDetails({
          name: e.target.name,
          value: dateFinal,
          index: index,
        })
      );
    } else {
      dispatch(
        setEducationDetails({
          name: e.target.name,
          value: e.target.value,
          index: index,
        })
      );
    }
  };
  const handleChangeToggle = (e, index) => {
    e.target.checked
      ? dispatch(
          setEducationDetails({
            name: "endDate",
            value: "Present",
            index: index,
          })
        )
      : dispatch(
          setEducationDetails({
            name: "endDate",
            value: "",
            index: index,
          })
        );
  };
  return (
    <div className=" flex flex-col gap-2 rounded-md border-2 border-slate-300 p-3">
      <div className="flex justify-between items-center">
        <div className="">
          <i className="fa-solid fa-grip-vertical"></i>
        </div>
        <div className="flex items-center gap-3">
          {open ? (
            <i
              className="fa-solid fa-chevron-up"
              onClick={() => dispatch(setEducationOpen(parentIndex))}
            ></i>
          ) : (
            <i
              onClick={() => dispatch(setEducationOpen(parentIndex))}
              className="fa-solid fa-chevron-down"
            ></i>
          )}
          <i
            onClick={() => dispatch(deleteEducationArr(parentIndex))}
            className="fa-solid fa-trash-can"
          ></i>
        </div>
      </div>
      {open ? (
        <div className="w-full flex flex-wrap gap-2 ">
          {formDetails.map((item, index) => {
            return (
              <label key={index} className="form-control">
                <div className="label">
                  <span className="label-text">{item.label}</span>
                </div>
                <input
                  type="text"
                  name={item.name}
                  onChange={(e) => handleChange(e, parentIndex)}
                  className="input w-full h-8 md:w-64 input-bordered"
                />
              </label>
            );
          })}
          <div className="w-full flex gap-2 flex-wrap">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Start Date</span>
              </div>
              <input
                className="input w-full h-8 md:w-64  input-bordered"
                type="date"
                name="startDate"
                onChange={(e) => handleChange(e, parentIndex)}
              ></input>
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text">End Date</span>
              </div>
              <input
                className="input w-full h-8 md:w-64  input-bordered"
                type="date"
                name="endDate"
                onChange={(e) => handleChange(e, parentIndex)}
              ></input>
              <div className="form-control ">
                <label className="label cursor-pointer">
                  <span className="label-text ">I currently study here</span>
                  <input
                    type="checkbox"
                    className="toggle toggle-sm "
                    onChange={(e) => handleChangeToggle(e, parentIndex)}
                  />
                </label>
              </div>
            </label>
          </div>
          <div className="w-full">
            <p className="label-text label">Description</p>
            <div className="h-full w-full">
              <Text_Editor
                index={parentIndex}
                name={"description"}
                setDetails={setEducationDetails}
                dispatch={dispatch}
              />
            </div>
          </div>
        </div>
      ) : (
        // </div>
        // </div>
        ""
      )}
    </div>
  );
}
