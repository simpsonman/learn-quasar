const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'typography',
        component: () => import('src/pages/TypographyComp.vue'),
      },
      {
        path: 'colors',
        component: () => import('src/pages/ColorsComp.vue'),
      },
      {
        path: 'spacing',
        component: () => import('src/pages/SpacingComp.vue'),
      },
      {
        path: 'breakpoints',
        component: () => import('src/pages/BreakpointsComp.vue'),
      },
      {
        path: 'classes-variables',
        component: () => import('src/pages/ClassesVariablesComp.vue'),
      },
      {
        path: 'flex-grid-1',
        component: () => import('src/pages/FlexGrid1.vue'),
      },
      {
        path: 'profile',
        component: () => import('src/pages/profile/ProfilePage.vue'),
        children: [
          {
            path: '',
            component: () => import('pages/profile/ProfilePosts.vue'),
          },
          {
            path: 'saved',
            component: () => import('pages/profile/ProfileSaved.vue'),
          },
          {
            path: 'tagged',
            component: () => import('pages/profile/ProfileTagged.vue'),
          },
        ],
      },
      {
        path: 'form-handling',
        component: () => import('src/pages/FormHandling.vue'),
      },
      {
        path: 'quasar-utils',
        component: () => import('src/pages/QuasarUtils.vue'),
      },
      {
        path: 'quasar-language-packs',
        component: () => import('src/pages/QuasarLanguagePacks.vue'),
      },
    ],
  },
  {
    path: '/sub',
    component: () => import('layouts/SubLayout.vue'),
    children: [
      { path: '', component: () => import('pages/sub/IndexPage.vue') },
      {
        path: 'sub-page-1',
        component: () => import('pages/sub/SubPage1.vue'),
      },
      {
        path: 'sub-page-2',
        component: () => import('pages/sub/SubPage2.vue'),
      },
    ],
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      {
        path: 'sign-in',
        component: () => import('pages/auth/SignIn.vue'),
      },
      {
        path: 'sign-up',
        component: () => import('pages/auth/SignUp.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
