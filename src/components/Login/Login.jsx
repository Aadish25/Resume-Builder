"use client";
import { Link, Navigate } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { useState } from "react";
import { authLogin } from "../../services";
import { useDispatch } from "react-redux";
import { handleClick } from "../../reducers/snackbar/snackbar";

export function Login() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const formDetails = [
    { label: "Email", name: "email" },
    { label: "Password", name: "password" },
  ];

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  async function login(e) {
    try {
      e.preventDefault();
      const response = await authLogin(data);
      setUser(response.data);
      const token = response.data.token;
      localStorage.setItem("SavedToken", token);
      dispatch(
        handleClick({ message: response.data.msg, severity: "success" })
      );
    } catch (error) {
      dispatch(
        handleClick({ message: error.response.data.msg, severity: "error" })
      );
    }
  }
  return (
    <CardContainer className="inter-var font-primary">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Login
        </CardItem>
        <CardItem
          as="p"
          translateZ="50"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Welcome Back!!!
        </CardItem>
        <CardItem
          as="div"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {formDetails.map((item, index) => {
            return (
              <label key={index} className="form-control">
                <div className="label">
                  <span className="label-text text-white">{item.label}</span>
                </div>
                <input
                  type="text"
                  name={item.name}
                  onChange={handleChange}
                  className="input w-full h-8 md:w-64 input-bordered text-black"
                />
              </label>
            );
          })}
        </CardItem>
        {user && <Navigate to="/home" replace={true} />}
        <Link to={"/home"}>
          <CardItem
            translateZ={20}
            as="button"
            onClick={login}
            className="px-4 py-2 rounded-xl mt-5 bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Login
          </CardItem>
        </Link>
        <Link to={"/signup"}>
          <CardItem
            translateZ={20}
            as="p"
            className="px-4 py-2 rounded-xl mt-5 bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            New user? Create an account!
          </CardItem>
        </Link>
      </CardBody>
    </CardContainer>
  );
}
