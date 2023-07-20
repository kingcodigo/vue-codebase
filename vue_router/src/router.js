
import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //    { path: '/', redirect: '/teams'},
    {
      name: 'teams',
      path: '/teams',
      meta: {needsAuth:true},
      components: {default: TeamsList, footer:TeamsFooter},
      alias: '/',
      children: [
        { name: 'team-members', path: ':teamId', component: TeamMembers, props: true },
      ],
    },
    { path: '/users', components: {default: UsersList, footer:UsersFooter}},
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior(to,from,savedPosition) {
    console.log('scroll:' + to, from, savedPosition);
    return { left: 0, top: 0};
  }
});

// method runs everytime router is used
router.beforeEach(function(to,from,next) {
    console.log('Global beforeEach');
    console.log(to,from);
   
    if(to.meta.needsAuth) {
        console.log('needs auth!')
    }
    /* next(false) would cancel navigation */
    next();
});

export default router;