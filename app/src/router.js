import VueRouter from 'vue-router';
import Home from './components/home/Home';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/PageTwo', component: PageTwo },
        { path: '/PageThree', component: PageThree },
        { path: '*', redirect: '/' }
    ]
});