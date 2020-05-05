import VueRouter from 'vue-router';
import Home from './components/home/Home';
import PageTwo from './components/pages/PageTwo';
import NeedsWants from './components/pages/NeedsWants';
import Auth from './components/auth/Auth';
import MultipleChoice from './components/pages/MultipleChoice';

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/PageTwo', component: PageTwo },
        { path: '/NeedsWants', component: NeedsWants },
        { path: '/Auth', component: Auth },
        { path: '/MultipleChoice', component: MultipleChoice },
        { path: '*', redirect: '/' }
    ]
});