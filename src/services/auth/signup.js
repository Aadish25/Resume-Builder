import Url from "../url.js";

const signup = (data) =>
  Url({
    method: "POST",
    url: "/signup",
    data:data
  });

export default signup;
