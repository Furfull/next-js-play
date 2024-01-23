import axios from 'axios';

const apiUrl = 'https://my-json-server.typicode.com/Furfull/dataProcess/blob/main/db.json';

const fetchData = async () => {
    try {
    const response = await axios.get(apiUrl);
    return response.data;
    } catch (error) {
    console.error('Axios error:', error);
    }
};

export default fetchData;
