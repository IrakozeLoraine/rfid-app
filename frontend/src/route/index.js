import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => 
    import(/* webpackChunkName: "content" */ "../components/Content.vue"),
    children: [
      {
        path: '/',
        name: "home",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "../components/Home.vue"
          ),
      },
      {
        path: '/table',
        name: "transaction",
        component: () =>
          import(
            /* webpackChunkName: "transaction" */ "../components/Tables.vue"
          ),
      },
      {
          path: '/card/:id',
          name: "Card",
          component: () =>
            import(
                /* webpackChunkName: "card" */ "../components/Card.vue"
            )
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  hash: false,
  base: process.env.BASE_URL,
  routes
})

export default router;