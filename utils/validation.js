const validationUser = (username) => {
  const regex = /^[a-zA-Z\d_]{4,16}$/;
  const result = regex.test(username);
  return result;
};
const validationPassword = (password) => {
  const regex = /^.{4,16}$/;
  const result = regex.test(password);
  return result;
};

const validationForm = (username, password) => {
  const usernameResult = validationUser(username);
  const passwordResult = validationPassword(password);

  if (usernameResult && passwordResult) {
    return true;
  } else if (!usernameResult) {
    alert("is not valid username");
  } else if (!passwordResult) {
    alert("the password character between 4 - 16");
  }
};

export default validationForm;
