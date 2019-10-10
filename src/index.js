import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    console.log(request);
    return request; // always return or else you'll block the request
}, error => {
    console.log(error);
    return Promise.reject(error); // forwards to request to have it be handled in the catch block of the component
});

axios.interceptors.response.use(response => {
    console.log(response);
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

// axios.interceptors.request.eject( set top interceptors in variable and call it here);


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
