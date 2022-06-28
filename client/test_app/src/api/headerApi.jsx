const HeaderApiGet = (paraMethod) => {
    if(localStorage.getItem('accessToken') !== null && localStorage.getItem('accessToken') !== undefined) {
        var accessToken = localStorage.getItem('accessToken');
    }
    
    const requestOptions = {
        method: paraMethod,
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
    };

    return requestOptions;
}

const HeaderApi = {

    getUser: async () => {

        const url = 'http://localhost:3001/users/me';
        const response = await fetch(url, HeaderApiGet('GET'));
        const data = await response.json();
        return data;
    },
}

export default HeaderApi;