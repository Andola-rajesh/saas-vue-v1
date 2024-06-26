import { createMemoryHistory, createRouter } from 'vue-router'

import SignUp from './components/SignUp.vue'
import SignIn from './components/SignIn.vue'

const routes = [
  { path: '/signup', component: SignUp },
  { path: '/signin', component: SignIn },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router