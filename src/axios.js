import axios from 'axios';

// Instance function is used if we want to change the URL of the data being fetched to the given component.
// Can be used together with the default axios API.
// Helps modify the baseURL if we want more than one
const instance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;