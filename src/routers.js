import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import Login from './components/Login.vue';
import AddFile from './components/AddFile.vue';
import Results from './components/Results.vue';
import Show_file from "./components/Show_file.vue";
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
        path : '/',
        redirect : '/Login'
    },
    {
        name : 'Home',
        component : Home,
        path : '/home'
    },
    {
        name : 'SignUp',
        component : SignUp,
        path : '/sign-up'
    },
    {
        name : 'Login',
        component : Login,
        path : '/Login'
    },
    {
        name : 'AddFile',
        component : AddFile,
        path : '/AddFile'
    },
    {
        name : 'Results',
        component : Results,
        path : '/Results'
    },
    {
        name : 'Show_file',
        component : Show_file,
        path : '/Show_file/:id'
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;