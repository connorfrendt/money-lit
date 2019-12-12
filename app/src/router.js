import VueRouter from 'vue-router';
import Home from './components/Home';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';
import Login from './components/Login';

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/PageTwo', component: PageTwo },
        { path: '/PageThree', component: PageThree },
        { path: '/Login', component: Login }
    ]
})