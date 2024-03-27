import Url from "../url.js";

const login = (data) =>
  Url({
    method: "POST",
    url: "/login",
    data:data
  });

export default login;
