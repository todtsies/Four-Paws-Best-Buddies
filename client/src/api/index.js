import axios from 'axios';


const API = '/posts';

axios.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const fetchPost = (id) => axios.get(`${API}/${id}`);
export const fetchPosts = (page) => axios.get(`${API}?page=${page}`);
export const fetchPostsBySearch = (searchQuery) => axios.get(`${API}/search?searchQuery=${searchQuery}`);
export const createPost = (newPost) => axios.post(`${API}`, newPost);
export const likePost = (id) => axios.patch(`${API}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${API}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${API}/${id}`);

export const signIn = (formData) => axios.post('/user/signin', formData);
export const signUp = (formData) => axios.post('/user/signup', formData);

// API.interceptors.request.use((req) => {
//     if (localStorage.getItem('profile')) {
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//     }
//     return req;
// });

// export const fetchPosts = () => axios.get(API);
// export const createPost = (newPost) => axios.post(API, newPost);
// export const fetchPostsBySearch = (searchQuery) => axios.get(`${API}/search?searchQuery=${searchQuery}`);
// export const likePost = (id) => axios.patch(`${API}/${id}/likePost`);
// export const updatePost = (id, updatedPost) => axios.patch(`${API}/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${API}/${id}`);
// export const signIn = (formData) => axios.post('/user/signin', formData);
// export const signUp = (formData) => axios.post('/user/signup', formData);