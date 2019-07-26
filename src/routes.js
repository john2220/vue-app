import Tips from './Tips.vue';
import About from './About.vue';
import Welcome from './Welcome.vue';

export const routes = [
	{ path: '/', component: Welcome },
	{ path: '/about', component: About },
	{ path: '/tips', component: Tips }
];