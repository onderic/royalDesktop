import { createRouter, createWebHistory } from 'vue-router';
import Admin from '@/layouts/Admin.vue';
import Doctor from '@/layouts/Doctor.vue';
import { useAuthStore } from '@/stores/authStore';

const Dashboard = () => import('@/views/Admin/Dashboard.vue');
const AddJob = () => import('@/views/Admin/AddJob.vue');
const ManageJobs = () => import('@/views/Admin/ManageJobs.vue');
const JobDetail = () => import('@/views/Admin/JobDetail.vue');
const EditJob = () => import('@/views/Admin/EditJob.vue');
const Users = () => import('@/views/Admin/Users.vue');
const Companies = () => import('@/views/Admin/Companies.vue');
const Categories = () => import('@/views/Admin/Categories.vue');
const ApplicationsList = () => import('@/views/Admin/ApplicationsList.vue');
const QueuePage = () => import('@/views/Admin/QueuePage.vue');
const Settings = () => import('@/views/Admin/Settings.vue');
const DocSettings = () => import('@/views/Doctor/DocSettings.vue');
const Interview = () => import('@/views/Admin/Interview.vue');
const DashboardDoctor = () => import('@/views/Doctor/Dashboard.vue');
const Patients = () => import('@/views/Doctor/Patients.vue');
const Agents = () => import('@/views/Admin/Agents.vue')
const complete = () => import('@/views/Admin/CompleteApplications.vue')

const Login = () => import('@/views/Auth/Login.vue');
const Register = () => import('@/views/Auth/Register.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  
    {
      path: '/',
      redirect: '/admin/dashboard',
      component: Admin,
      meta: { requiresAuth: true, requiresRole: ['admin', 'superuser'] },
      children: [
        {
          path: '/admin/dashboard',
          name: 'adminDashboard',
          component: Dashboard,
          meta: { requiresAuth: true, requiresRole: ['admin', 'superuser'] }
        },
        {
          path: '/admin/careers/new',
          name: 'addJob',
          component: AddJob,
          meta: { requiresAuth: true, requiresRole: ['admin', 'superuser'] }
        },
        {
          path: '/admin/careers/edit/:id',
          name: 'EditJob',
          component: EditJob,
          meta: { requiresAuth: true, requiresRole: ['admin', 'superuser'] }
        },
        {
          path: '/admin/careers/manage',
          name: 'manageJobs',
          component: ManageJobs,
          meta: { requiresAuth: true, requiresRole: ['admin', 'superuser'] }
        },
        {
          path: '/admin/career/:id',
          name: 'jobDetail',
          component: JobDetail,
          meta: { requiresAuth: true, requiresRole: ['admin', 'superuser'] }
        },
        {
          path: '/admin/users/',
          name: 'users',
          component: Users,
          meta: { requiresAuth: true, requiresRole: ['admin', 'superuser'] }
        },
        {
          path: '/admin/companies/',
          name: 'companies',
          component: Companies,
          meta: { requiresAuth: true, requiresRole: ['admin', 'superuser'] }
        },
        {
          path: '/admin/agents/',
          name: 'agents',
          component: Agents,
          meta: { requiresAuth: true, requiresRole: ['admin', 'superuser'] }
        },
        {
          path: '/admin/categories/',
          name: 'categories',
          component: Categories,
          meta: { requiresAuth: true, requiresRole: ['admin', 'superuser'] }
        },
        {
          path: '/admin/applications/',
          name: 'applications',
          component: ApplicationsList,
          meta: { requiresAuth: true, requiresRole: ['admin', 'superuser'] }
        },
        {
          path: '/admin/complete/applications/',
          name: 'completeApplications',
          component: complete,
          meta: { requiresAuth: true, requiresRole: ['admin', 'superuser'] }
        },
        {
          path: '/admin/queue/',
          name: 'queue',
          component: QueuePage,
          meta: { requiresAuth: true, requiresRole: ['admin', 'superuser'] }
        },
        {
          path: '/admin/settings/',
          name: 'setting',
          component: Settings,
          meta: { requiresAuth: true, requiresRole: ['admin', 'superuser'] }
        },
        {
          path: '/admin/interviews/',
          name: 'interview',
          component: Interview,
          meta: { requiresAuth: true, requiresRole: ['admin', 'superuser'] }
        },
      ]
    },
    {
      path: '/doctor',
      redirect: '/doctor/dashboard',
      component: Doctor,
      meta: { requiresAuth: true, requiresRole: ['doctor'] },
      children: [
        {
          path: '/doctor/dashboard',
          name: 'doctorDashboard',
          component: DashboardDoctor,
          meta: { requiresAuth: true, requiresRole: ['doctor'] }
        },
        {
          path: '/doctor/patients/',
          name: 'patients',
          component: Patients,
          meta: { requiresAuth: true, requiresRole: ['doctor'] }
        },
        {
          path: '/doctor/settings/',
          name: 'docSetting',
          component: DocSettings,
          meta: { requiresAuth: true, requiresRole: ['doctor'] }
        },
      ]
    },
    {
      path: '/auth/login',
      name: 'login',
      component: Login,
      meta: { requiresGuest: true }
    },
    {
      path: '/auth/register',
      name: 'register',
      component: Register,
      meta: { requiresGuest: true }
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const isAuthenticated = authStore.isAuthenticated;
  const userRole = authStore.role;

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' });
  } else if (to.meta.requiresGuest && isAuthenticated) {
    next({ name: 'home' });
  } else if (to.meta.requiresRole && 
    (!Array.isArray(to.meta.requiresRole)
      ? userRole !== to.meta.requiresRole
      : !to.meta.requiresRole.includes(userRole))
  ) {
    next({ name: 'home' });
  } else {
    next();
  }
});

export default router;
