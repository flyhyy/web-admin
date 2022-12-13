// 登陆后的 路由配置 
import Layout from '../layout/index.vue'
/**
 * 登陆成功后的 路由添加配置
 */
export const LoginSuccessedRoutes = [
    {
        path: '/index',
        name: "index",
        component: Layout,
        redirect:'/index/home', 
        children: [{
            path: 'home',
            name: 'home',
            component: ()=> import('../pages/index/index.vue'),
            meta: {
                icon: 'Document',
                title: '首页'
            }
        },
        {
            path: 'history',
            name: 'history',
            component: ()=> import('../pages/history/index.vue') ,
            meta: {
                icon: 'Clock',
                title: '历史'
            }
        },]
    },

]