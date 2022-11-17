// 登陆后的 路由配置
import PageIndex from '../pages/index/index.vue'
import PageHistory from '../pages/history/index.vue'
import Layout from '../layout/index.vue'
/**
 * 登陆成功后的 路由添加配置
 */
export const LoginInRoutes = [
    {
        path: '/index',
        name: "index",
        component: Layout,
        redirect:'/index/home',
        children: [{
            path: 'home',
            name: 'home',
            component: PageIndex,
            meta: {
                icon: 'Document',
                title: '首页'
            }
        },
        {
            path: 'history',
            name: 'history',
            component: PageHistory,
            meta: {
                icon: 'Clock',
                title: '历史'
            }
        },]
    },

]