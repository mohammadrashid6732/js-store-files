const BASE_URL = "https://fakestoreapi.com";

const postData = async (path, data) => {
  try {
    const response = await fetch(`${BASE_URL}/${path}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    alert("An error occurred");
  }
};

const getProducts = async (path) => {
  try {
    const response = await fetch(`${BASE_URL}/${path}`);
    const json = response.json();
    return json;
  } catch (error) {
    alert("An error occurred");
  }
};
export { postData, getProducts };
