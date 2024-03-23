import { useDispatch, useSelector } from "react-redux";
import Text_Editor from "../TextEditor/Text_Editor";
import {
  deleteAddExpArr,
  setAddExpDetails,
  setAddExpOpen,
} from "../../reducers/addExp/addExp";

export default function AdditionalExpCard({ parentIndex, open }) {
  const dispatch = useDispatch();
  const addExpDetails = useSelector((state) => state.additionalExp.addExpArr);
  const addExp = addExpDetails[parentIndex];

  const formDetails = [{ label: "Additional Experience", name: "addExpTitle" }];
  const handleChange = (e, index) => {
    dispatch(
      setAddExpDetails({
        name: e.target.name,
        value: e.target.value,
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
              onClick={() => dispatch(setAddExpOpen(parentIndex))}
            ></i>
          ) : (
            <i
              onClick={() => dispatch(setAddExpOpen(parentIndex))}
              className="fa-solid fa-chevron-down"
            ></i>
          )}
          <i
            onClick={() => dispatch(deleteAddExpArr(parentIndex))}
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
                  value={addExp[item.name]}
                  onChange={(e) => handleChange(e, parentIndex)}
                  className="input w-full h-8 md:w-64 input-bordered"
                />
              </label>
            );
          })}
          <div className="w-full">
            <p className="label-text label">Description</p>
            <div className="h-full w-full">
              <Text_Editor
                index={parentIndex}
                name={"addExpSummary"}
                setDetails={setAddExpDetails}
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
