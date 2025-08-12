import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/layout/DefaultLayout.vue";
import HomePage from "../pages/Home.vue";
import Pricing from "../pages/Pricing.vue";
import About from "../pages/About.vue";
import Services from "../pages/Services.vue";
import Cars from "../pages/Cars.vue";
import CarDetails from "../pages/CarDetails.vue";
import Blog from "../pages/Blog.vue";
import BlogDetails from "../pages/BlogDetails.vue";
import Contact from "../pages/Contact.vue";



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
            },
            {
                path:"/services",
                name:"services",
                component:Services
            },
            {
                path:"/cars",
                name:"cars",
                component:Cars
            },
            {
                path:"/car/:id",
                name:"car",
                component:CarDetails
            },
            {
                path:"/blog",
                name:"blog",
                component:Blog
            },
            {
                path:"/blog/:id",
                name:"blog details",
                component:BlogDetails
            },
            {
                path:"/contact",
                name:"contact",
                component:Contact
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