const Header = (params, paraMethod) => {
    const requestOptions = {
        method: paraMethod,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
    };

    return requestOptions;
}

const SignApi = {

    login: async (params) => {

        const url = 'http://localhost:3001/auth/login';
        const response = await fetch(url, Header(params, 'POST'));
        const data = await response.json();
        localStorage.setItem("accessToken", data.data.user.accessToken);
        localStorage.setItem("role", data.data.user.role);
        return data.data.user;
    },

    register: async (params) => {

        const url = 'http://localhost:3001/auth/register';
        const response = await fetch(url, Header(params, 'POST'));
        const data = await response.json();
        return data.data.user;
    },
}

export default SignApi;