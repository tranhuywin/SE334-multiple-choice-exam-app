const CreateExamApiPost = (params, paraMethod) => {
    if(localStorage.getItem('accessToken') !== null && localStorage.getItem('accessToken') !== undefined) {
        var accessToken = localStorage.getItem('accessToken');
    }
    
    const requestOptions = {
        method: paraMethod,
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(params)
    };

    return requestOptions;
}

const CreateExamApi = {

    AddExam: async (params) => {
        const url = 'http://localhost:3001/exams';
        const response = await fetch(url, CreateExamApiPost(params, 'POST'));
        const data = await response.json();
        return data;
    },
}

export default CreateExamApi;