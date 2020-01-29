import VueRouter from 'vue-router';
import Home from './components/home/Home';
import PageTwo from './components/pages/PageTwo';
import PageThree from './components/pages/PageThree';
import Auth from './components/auth/Auth';

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/PageTwo', component: PageTwo },
        { path: '/PageThree', component: PageThree },
        { path: '/Auth', component: Auth },
        { path: '*', redirect: '/' }
    ]
});