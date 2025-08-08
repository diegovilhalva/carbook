import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/layout/DefaultLayout.vue";
import HomePage from "../pages/Home.vue";


const routes = [
    {
        path: "/",
        component: DefaultLayout,
        children:[
            {
                path:"",
                name:"home",
                component:HomePage
            }
        ]
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
})

export default router