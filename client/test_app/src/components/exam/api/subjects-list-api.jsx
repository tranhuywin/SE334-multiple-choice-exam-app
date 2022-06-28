import React, { Component } from "react";

const HeaderApiGet = (paraMethod) => {
  if (
    localStorage.getItem("accessToken") !== null &&
    localStorage.getItem("accessToken") !== undefined
  ) {
    var accessToken = localStorage.getItem("accessToken");
  }

  const requestOptions = {
    mode: "no-cors",
    method: paraMethod,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return requestOptions;
};

const ExamApi = {
  getExam: async (subjectsId) => {
    const url = `http://localhost:3001/subjects/${subjectsId}`;
    const response = await fetch(url, HeaderApiGet("GET"));
    console.log(response);
    const data = await response.json();
    return data;
  },
};

export default ExamApi;
