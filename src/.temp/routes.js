const c1 = () => import(/* webpackChunkName: "page--src--templates--project-vue" */ "/Users/lukas.riedel/code/portfolio-gridsome/src/templates/Project.vue")
const c2 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/lukas.riedel/code/portfolio-gridsome/node_modules/gridsome/app/pages/404.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/lukas.riedel/code/portfolio-gridsome/src/pages/Index.vue")

export default [
  {
    path: "/projects/widex-copy/",
    component: c1
  },
  {
    path: "/projects/widex/",
    component: c1
  },
  {
    path: "/projects/ssrs/",
    component: c1
  },
  {
    path: "/projects/propstreet/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    name: "home",
    path: "/",
    component: c3
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
