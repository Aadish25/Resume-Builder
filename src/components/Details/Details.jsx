import { useDispatch, useSelector } from "react-redux";

import { setDetails } from "../../reducers/details/details";
import {
  deleteLinks,
  setLinks,
  setLinksArr,
} from "../../reducers/details_links/links";

import { Link } from "react-router-dom";


export default function Home() {
  const linksArr = useSelector((state) => state.details_links.linksArr);
  const detailsObj = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const formDetails = [
    { label: "First Name", name: "firstName" },
    { label: "Last Name", name: "lastName" },
    { label: "Job Title Name", name: "jobTitle" },
    { label: "Phone", name: "phone" },
    { label: "Email Address", name: "email" },
    { label: "Address", name: "address" },
    { label: "City", name: "city" },
    { label: "State", name: "state" },
    { label: "Country", name: "country" },
    { label: "Zip Code", name: "zipCode" },
  ];
  const handleChange = (e) => {
    dispatch(setDetails({ name: e.target.name, value: e.target.value }));
  };
  const handleLinkDelete = (index) => {
    dispatch(deleteLinks({ index: index }));
  };
  const handleLinks = () => {
    dispatch(setLinksArr());
  };
  const handleChangeLink = (e, index) => {
    return dispatch(
      setLinks({ name: e.target.name, value: e.target.value, index: index })
    );
  };
  const stringifiedDetailsObj = JSON.stringify(detailsObj);
  const stringifiedLinksArr = JSON.stringify(linksArr);
  const handleClickNext = () => {
    localStorage.setItem("details", stringifiedDetailsObj);
    localStorage.setItem("detailsLinks", stringifiedLinksArr);
  };
  return (
    <div className="flex flex-col-reverse lg:flex-col gap-6 w-full  lg:w-1/2  px-6 py-3">
      <div className="flex justify-between items-center flex-col sm:flex-row gap-2">
        <button className="btn  btn-accent max-sm:w-full">Templates</button>
        <button
          onClick={() => document.getElementById("my_modal_2").showModal()}
          className="btn btn-outline btn-primary max-sm:w-full"
        >
          Preview
        </button>
        <Link to={"/editor/education"}>
          <button
            onClick={handleClickNext}
            className="btn btn-primary max-sm:w-full"
          >
            Next
          </button>
        </Link>
      </div>
      <div className="flex font-primary py-3 px-6 rounded-md flex-col gap-2 border-t-2 shadow-md shadow-blue-700 border-blue-700">
        <h1 className="text-2xl font-bold">Personal Details</h1>
        <p className="text-sm text-slate-400">
          Get started with the basics: your name and contact information.
        </p>
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
                  onChange={handleChange}
                  className="input w-full h-8 md:w-64 input-bordered"
                />
              </label>
            );
          })}
        </div>
        <button
          className=" btn-outline mt-3 btn max-w-max bg-blue-300"
          onClick={handleLinks}
        >
          Click to add link
        </button>
        <div className="w-full flex  flex-wrap gap-2">
          {linksArr.map((item, index) => {
            return (
              <label
                key={index}
                className="flex flex-col md:flex-row md:items-center gap-2 "
              >
                <div className="">
                  {" "}
                  <div className="label">
                    <span className="label-text">Description</span>
                  </div>
                  <input
                    type="text"
                    name="description"
                    onChange={(e) => handleChangeLink(e, index)}
                    value={item.description}
                    className="input h-8 input-bordered  w-full  max-w-xs  md:w-64 "
                  />
                </div>
                <div className="">
                  <div className="label">
                    <span className="label-text">Links</span>
                  </div>
                  <input
                    type="text"
                    name="link"
                    value={item.link}
                    onChange={(e) => handleChangeLink(e, index)}
                    className="input h-8 input-bordered max-w-xs  w-full md:w-64 "
                  />
                </div>
                <i
                  onClick={() => handleLinkDelete(index)}
                  className="fa-solid fa-trash md:mt-9"
                ></i>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
