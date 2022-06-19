import axiosClient from "./axiosClient";

const SignApi = {

    login: async (params) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(params)
        };

        const url = 'http://localhost:3001/auth/login';
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        localStorage.setItem("accessToken", data.data.user.accessToken);
        return data.data.user;
    },

    register: async (params) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(params)
        };

        const url = 'http://localhost:3001/auth/register';
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        return data.data.user;
    },
}

export default SignApi;