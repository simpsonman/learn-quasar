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
