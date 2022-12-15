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
        meta:{
            title:'首页',
            icon:''
        },
        children: [{
            path: 'home',
            name: 'home',
            component: ()=> import('../pages/index/index.vue'),
            meta: {
                icon: 'Document',
                title: '文档'
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
    },{
        path: '/setting',
        name: "setting",
        component: Layout,
        redirect:'/setting/index', 
        meta:{
            title:'设置',
            icon:''
        },
        children:[{
            path:'index',
            name:"seetingIndex",
            component:()=>import('../pages/setting/index.vue'),
            meta:{
                icon:"Setting",
                title:"历史密码设置"
            }
            
        }]
    }


]