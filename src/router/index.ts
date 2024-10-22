import { createRouter,createWebHashHistory } from "vue-router";

import Counter from "../views/Counter.vue";


const routes= [
    {
        path: "/",
        name: "Home",
        redirect: "/counter",
    },
    {
        path: "/counter",
        name: "Counter",
        component: Counter,
    },
    {
        path: "/todo",
        name: "Todo",
        component: () => import("../views/Todo.vue")
    },
    {
        path: "/account",
        name: "Account",
        component: () => import("../views/AccountingApp.vue")
    },
   
];

const router =createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;