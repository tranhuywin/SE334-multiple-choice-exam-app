import React, { Component } from "react";

const Header = (params, paraMethod) => {
  if (
    localStorage.getItem("accessToken") !== null &&
    localStorage.getItem("accessToken") !== undefined
  ) {
    var accessToken = localStorage.getItem("accessToken");
  }

  const requestOptions = {
    method: paraMethod,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
    body: JSON.stringify(params),
  };

  return requestOptions;
};

const SendAnswerApi = {
  sendAnswer: async (params) => {
    const url = "http://localhost:3001/user-exam";
    const response = await fetch(url, Header(params, "POST"));
    const data = await response.json();
    return data;
  },
};

export default SendAnswerApi;
