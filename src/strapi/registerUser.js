import axios from "axios";
import url from "../utils/URL";

async function registerUser({ email, password, username }) {
  const responce = await axios
    .post(`${url}/auth/local/register`, {
      username,
      email,
      password,
    })
    // .then((response) => {
    //   // Handle success.

    //   console.log("User profile", response.data.user);
    //   console.log("User token", response.data.jwt);
    // })
    .catch((error) => {
      // Handle error.
      console.log("An error occurred:", error.response);
    });
  return responce;
}

export default registerUser;
