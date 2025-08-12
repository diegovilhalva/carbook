import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/layout/DefaultLayout.vue";
import HomePage from "../pages/Home.vue";
import Pricing from "../pages/Pricing.vue";
import About from "../pages/About.vue";


const routes = [
    {
        path: "/",
        component: DefaultLayout,
        children:[
            {
                path:"",
                name:"home",
                component:HomePage
            },
            {
                path:"/pricing",
                name:"pricing",
                component:Pricing
            },
            {
                path:"/about",
                name:"about",
                component:About
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