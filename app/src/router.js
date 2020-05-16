import VueRouter from 'vue-router';
import Home from './components/home/Home';
import PageTwo from './components/pages/PageTwo';
import NeedsWants from './components/pages/NeedsWants';
import Auth from './components/auth/Auth';
import MultipleChoice from './components/pages/MultipleChoice';
import QuestionOne from './components/pages/QuestionOne';
import QuestionTwo from './components/pages/QuestionTwo';
import QuestionThree from './components/pages/QuestionThree';
import Leaderboard from './components/pages/Leaderboard';

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/PageTwo', component: PageTwo },
        { path: '/NeedsWants', component: NeedsWants },
        { path: '/Auth', component: Auth },
        { path: '/MultipleChoice', component: MultipleChoice },
        { path: '/QuestionOne', component: QuestionOne },
        { path: '/QuestionTwo', component: QuestionTwo },
        { path: '/QuestionThree', component: QuestionThree },
        { path: '/Leaderboard', component: Leaderboard },
        { path: '*', redirect: '/' }
    ]
});