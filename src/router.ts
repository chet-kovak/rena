import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import Genesis from '@/views/Genesis.vue';
import Burn from '@/views/Burn.vue';
import About from '@/views/About.vue';
import Stake from '@/views/Stake.vue';
import Vault from '@/views/Vault.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: '/', name: 'home', component: Home },
  { path: '/genesis', name: 'genesis', component: Genesis },
  { path: '/burn', name: 'burn', component: Burn },
  { path: '/about', name: 'about', component: About },
  { path: '/stake', name: 'stake', component: Stake },
  { path: '/vault', name: 'vault', component: Vault }
];

const router = new VueRouter({
  routes
});

export default router;
