import React from "react";
import axios from "axios";
import url from "../utils/URL";

async function submitOrder({ stripeTokenId, name, total, userToken, items }) {
  const data = { name, total, items, stripeTokenId, userToken };
  console.log(data);
  try {
    const response = await axios.post(`${url}/orders`, data, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}
export default submitOrder;
