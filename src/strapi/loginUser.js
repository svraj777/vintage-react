import React from "react";
import axios from "axios";
import url from "../utils/URL";

export default async function loginUser({ email, password }) {
  // Request API.
  const response = await axios
    .post(`${url}/auth/local`, {
      identifier: email,
      password,
    })
    // .then((response) => {
    //   // Handle success.
    //   console.log("Well done!");
    //   console.log("User profile", response.data.user);
    //   console.log("User token", response.data.jwt);
    // })
    .catch((error) => {
      // Handle error.
      console.log("An error occurred:", error.response);
    });
  return response;
}
