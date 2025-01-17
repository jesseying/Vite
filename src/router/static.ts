import type { RouteRecordRaw } from 'vue-router'

const pageTitle = (name: string): string => {
  return `pagesTitle.${name}`
}

/*
 * 静态路由
 */
const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    meta: { title: 'index' },
    component: () => import('@/pages/index.vue')
    // redirect: '/'
    // children: [
    //   {
    //     path: '/index',
    //     name: 'index',
    //     meta: { title: 'index' },
    //     component: () => import('')
    //   }
    // ]
  }
]

/*
 * 后台基础静态路由
 */
// const adminBaseRoute: RouteRecordRaw = {
//     path: '/admin',
//     name: 'admin',
//     component: () => import('/@/layouts/backend/index.vue'),
//     redirect: '/admin/loading',
//     meta: {
//         title: pageTitle('admin'),
//     },
//     children: [
//         {
//             path: 'loading',
//             name: 'adminMainLoading',
//             component: () => import('/@/layouts/common/components/loading.vue'),
//             meta: {
//                 title: pageTitle('Loading'),
//             },
//         },
//     ],
// }

/*
 * 前台基础静态路由
 */
// const memberCenterBaseRoute: RouteRecordRaw = {
//     path: '/user',
//     name: 'user',
//     component: () => import('/@/layouts/frontend/user.vue'),
//     redirect: '/user/loading',
//     meta: {
//         title: pageTitle('User'),
//     },
//     children: [
//         {
//             path: 'loading',
//             name: 'userMainLoading',
//             component: () => import('/@/layouts/common/components/loading.vue'),
//             meta: {
//                 title: pageTitle('Loading'),
//             },
//         },
//     ],
// }

// staticRoutes.push(adminBaseRoute)
// staticRoutes.push(memberCenterBaseRoute)

// export { staticRoutes, adminBaseRoute, memberCenterBaseRoute }
export { staticRoutes }
