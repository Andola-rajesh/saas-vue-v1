import Vue from 'vue';
import Router from 'vue-router';
import SignIn from './views/SignIn.vue';
import SignUp from './views/SignUp.vue';
import { TokenService } from './services/storage.service';

Vue.use(Router);

const routes = [
  {
    path: '/sign-in',
    name: 'signin',
    component: SignIn,
    meta: {
      public: true,
      onlyWhenLoggedOut: true
    }
  },
  {
    path: '/sign-up',
    name: 'signup',
    component: SignUp,
    meta: {
      public: true,
      onlyWhenLoggedOut: true
    }
  },
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public);
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut);
  const loggedIn = !!TokenService.getToken();

  if (!isPublic && !loggedIn) {
    return next({
      path: '/sign-in',
      query: { redirect: to.fullPath }
    });
  }

  if (loggedIn && onlyWhenLoggedOut) {
    return next('/');
  }

  next();
});

export default router;
