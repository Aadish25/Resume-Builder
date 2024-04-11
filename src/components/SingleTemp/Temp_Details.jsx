import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export default function Temp_Details() {
  const { pathname } = useLocation();
  const linksArrRedux = useSelector((state) => state.details_links.linksArr);
  const linksArrLocal =
    JSON.parse(localStorage.getItem("detailsLinks")) == null
      ? linksArrRedux
      : JSON.parse(localStorage.getItem("detailsLinks"));
  const linksArr =
    pathname === "/editor/details" ? linksArrRedux : linksArrLocal;
  const detailsRedux = useSelector((state) => state.details);
  const detailsLocal =
    JSON.parse(localStorage.getItem("details")) == null
      ? detailsRedux
      : JSON.parse(localStorage.getItem("details"));
  const {
    firstName,
    lastName,
    jobTitle,
    phone,
    email,
    address,
    city,
    state,
    country,
    zipCode,
  } = pathname === "/editor/details" ? detailsRedux : detailsLocal;
  const subDetails = [phone, email];
  const basicDetails = subDetails.map((item, index) => {
    return (
      <div
        className={
          index == subDetails.length - 1 && linksArr.length == 0
            ? ""
            : `border-r-2 pr-1`
        }
        key={index}
      >
        <p>{item}</p>
      </div>
    );
  });
  const linksDetails = linksArr.map((item, index) => {
    return (
      <div
        className={
          index == linksArr.length - 1
            ? "flex gap-1"
            : ` flex gap-1 border-r-2 pr-1`
        }
        key={index}
      >
        {item.description ? <p>{item.description}:</p> : ""}

        <Link to={item.link} target="blank">
          <p>{item.link}</p>
        </Link>
      </div>
    );
  });
  return (
    <div className="text-white gap-1 px-4 py-8 bg-primary flex flex-col justify-center items-center ">
      <h1 className="text-3xl font-bold ">
        {firstName} <span>{lastName}</span>
      </h1>
      <p className="text-lg font-semibold">{jobTitle}</p>
      <div className="flex flex-wrap justify-center gap-2 text-xs">
        <p className=" border-r-2 pr-1">{`${address}, ${city}, ${state}, ${country} ${zipCode}`}</p>
        {basicDetails}
        {linksDetails}
      </div>
    </div>
  );
}
