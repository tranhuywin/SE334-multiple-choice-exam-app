import React, { Component } from "react";

const Header = (params, paraMethod) => {
  const requestOptions = {
    method: paraMethod,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  };

  return requestOptions;
};

const TestApi = {
  sendAnswer: async (params) => {
    const url = "http://localhost:3001/user-exam";
    const response = await fetch(url, Header(params, "POST"));
    const data = await response.json();
    return data;
  },
};

export default TestApi;
