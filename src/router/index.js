import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AndroidNewsPosts from '../views/AndroidNewsPosts.vue'
import AndroidFlashPosts from '../views/AndroidFlashPosts.vue'
import AndroidPhonePosts from '../views/AndroidPhonePosts.vue'
import aboutUs from '../views/aboutUs.vue'
import game from '../views/game.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/AndroidNewsPosts',
    name: 'AndroidNewsPosts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AndroidNewsPosts
  }, {
    path: '/post/:id',
    name: 'Post',
    component: () => import('../views/post_id.vue'),
  },
  {
    path: '/AndroidFlashPosts',
    name: 'AndroidFlashPosts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AndroidFlashPosts
  }, {
    path: '/AndroidPhonePosts',
    name: 'AndroidPhonePosts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AndroidPhonePosts
  }, {
    path: '/aboutUs',
    name: 'aboutUs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: aboutUs
  },
  {
    path: '/game',
    name: 'game',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: game
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
/*router.afterEach(() => {


  if (!localStorage.getItem('firstLoad')) {
    localStorage['firstLoad'] = true;
    window.location.reload();
  }
  else {
    localStorage.removeItem('firstLoad');
  }
})*/
export default router
