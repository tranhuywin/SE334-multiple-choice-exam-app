import React, { Component } from "react";

const HeaderApiGet = (paraMethod) => {
  if (
    localStorage.getItem("accessToken") !== null &&
    localStorage.getItem("accessToken") !== undefined
  ) {
    var accessToken = localStorage.getItem("accessToken");
  }

  const requestOptions = {
    // mode: "no-cors",
    method: paraMethod,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return requestOptions;
};

const TestApi = {
  getTest: async (examId) => {
    try {
      const url = `http://localhost:3001/exams/${examId}`;
      const response = await fetch(url, HeaderApiGet("GET"));
      const data = await response.json();
      console.log(data);
      return data;
    } catch (err) {
      console.error(err);
    }
  },
};

export default TestApi;
