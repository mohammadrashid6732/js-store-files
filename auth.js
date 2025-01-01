import postData from "./utils/httpReq.js";
import { setCookies } from "./utils/cookie.js";
import authHandler from "./utils/authorization.js";
import validationForm from "./utils/validation.js";

const inputBox = document.querySelectorAll("input");
const loginButton = document.querySelector("button");

const submitHandler = async (event) => {
  event.preventDefault();
  const username = inputBox[0].value;
  const password = inputBox[1].value;

  const validation = validationForm(username, password);
  if (!validation) return;

  const response = await postData("auth/login", { username, password });
  console.log(response);
  setCookies(response.token);
};

loginButton.addEventListener("click", submitHandler);
document.addEventListener("DOMContentLoaded", authHandler);
