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
        path: 'flex-grid-2',
        component: () => import('src/pages/FlexGrid2.vue'),
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

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
