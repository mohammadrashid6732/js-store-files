import { getCookies } from "./utils/cookie";

const initHandler = () => {
  const cookie = getCookies();
  if (!cookie) {
    location.assign("index.html");
  }
};
document.addEventListener("DOMContentLoaded", initHandler);
 