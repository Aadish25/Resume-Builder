import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import { setPath } from "../../reducers/choose-path/choosePath";
export default function Navbar() {
  const dispatch=useDispatch();
  return (
    <div className="navbar bg-base-100 fixed z-20 font-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={()=>dispatch(setPath("/editor/details"))}>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <a>Build Resume</a>
              <ul className="p-2">
                <Link to={"/choose-template"}>
                  <li>
                    <a>Choose Template</a>
                  </li>
                </Link>
                <li>
                  <Link to={"/editor/details"}>Editor</Link>
                </li>
              </ul>
            </li>
            <Link to={"/ats-score"}>
              {" "}
              <li>
                <a>ATS Score</a>
              </li>
            </Link>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Career Canvas</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li onClick={()=>dispatch(setPath("/editor/details"))}>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <details>
              <summary>Build Resume</summary>
              <ul className="p-2">
                <Link to={"/choose-template"}>
                  <li>
                    <a>Choose Template</a>
                  </li>
                </Link>
                <li>
                  <Link to={"/editor/details"}>Editor</Link>
                </li>
              </ul>
            </details>
          </li>
          <Link to={"/ats-score"}>
            {" "}
            <li>
              <a>ATS Score</a>
            </li>
          </Link>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={"/login"}>
          {" "}
          <a
            onClick={() => localStorage.removeItem("SavedToken")}
            className="btn"
          >
            {localStorage.getItem("SavedToken") === null ? "Login" : "Logout"}
          </a>
        </Link>
      </div>
    </div>
  );
}
