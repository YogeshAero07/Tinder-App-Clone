import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tinder-mern-back-end.herokuapp.com/",
});

export default instance;