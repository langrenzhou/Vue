import vue from "vue"
import vuerouter from "vue-router"
vue.use(vuerouter)
const routes=[
    {
        name:"shouye",
        path:'/',
        component:()=>import("@/components/shouye.vue") 
    },
    {
        name:"dicover",
        path:'/dicover',
        component:()=>import("@/components/dicover.vue") 
    },
    {
        name:"order",
        path:'/order',
        component:()=>import("@/components/order.vue") 
    },
]
const router=new vuerouter({
    routes
})
export default router