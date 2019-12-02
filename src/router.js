import VueRouter from 'vue-router';
import Home from './components/Home';
import PageTwo from './components/PageTwo';

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/PageTwo', component: PageTwo }
    ]
})