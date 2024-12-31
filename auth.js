import postData from "./utils/httpReq.js";
import { getCookies, setCookies } from "./utils/cookie.js";

const inputBox = document.querySelectorAll("input");
const loginButton = document.querySelector("button");

const submitHandler = async (event) => {
  event.preventDefault();
  const username = inputBox[0].value;
  const password = inputBox[1].value;

  const response = await postData("auth/login", { username, password });
  console.log(response);
  setCookies(response.token);
};

const initHandler = () => {
  const cookie = getCookies();
  if (cookie) {
    location.assign("index.html");
  }
};

loginButton.addEventListener("click", submitHandler);
document.addEventListener("DOMContentLoaded", initHandler);
