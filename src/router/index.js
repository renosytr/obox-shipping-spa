import { createRouter, createWebHistory } from 'vue-router'

// Auth
import Login from '@/views/Auth/LoginView.vue'
import Register from '@/views/Auth/RegisterView.vue'
import NotFoundError from '@/views/Auth/NotFoundError.vue'
import PasswordResetRequestView from '@/views/Auth/PasswordResetRequestView.vue'
import Posts from '@/views/Posts/PostListView.vue'
import PostDraft from '@/views/Posts/PostDraftView.vue'
import PostTrash from '@/views/Posts/PostTrashView.vue'
import Comments from '@/views/Comment/CommentListView.vue'
import BasicSetting from '@/views/Setting/BasicSettingView.vue'

// Pages
import Dashboard from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/404-not-found',
      name: '404-not-found',
      component: NotFoundError
    },
    {
      path: '/password-reset-request',
      name: 'password-reset-request',
      component: PasswordResetRequestView
    },
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/posts/all',
      name: 'all-posts',
      component: Posts
    },
    {
      path: '/posts/draft',
      name: 'draft-posts',
      component: PostDraft
    },
    {
      path: '/posts/trash',
      name: 'trash-posts',
      component: PostTrash
    },
    {
      path: '/comments',
      name: 'comments',
      component: Comments
    },
    {
      path: '/basic-setting',
      name: 'basic-setting',
      component: BasicSetting
    },
    {
      path: '/basic-setting',
      name: 'basic-setting',
      component: BasicSetting
    }
  ]
})

export default router
