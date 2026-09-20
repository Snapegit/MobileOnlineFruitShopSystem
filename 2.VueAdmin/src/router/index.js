	import {
		createRouter,
		createWebHashHistory
	} from 'vue-router'
	import news from '@/views/news/list'
	import dingdanpingjia from '@/views/dingdanpingjia/list'
	import shuiguoxinxi from '@/views/shuiguoxinxi/list'
	import yonghu from '@/views/yonghu/list'
	import discussshuiguoxinxi from '@/views/discussshuiguoxinxi/list'
	import dingdanxinxi from '@/views/dingdanxinxi/list'
	import shuiguofenlei from '@/views/shuiguofenlei/list'
	import storeup from '@/views/storeup/list'
	import config from '@/views/config/list'
	import dingdanpeisong from '@/views/dingdanpeisong/list'

export const routes = [{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	},{
		path: '/',
		name: '首页',
		component: () => import('../views/index'),
		children: [{
			path: '/',
			name: '首页Home',
			component: () => import('../views/HomeView.vue'),
			meta: {
				affix: true
			}
		}, {
			path: '/updatepassword',
			name: '修改密码',
			component: () => import('../views/updatepassword.vue')
		}
		
		,{
			path: '/news',
			name: '系统公告',
			component: news
		}
		,{
			path: '/dingdanpingjia',
			name: '订单评价',
			component: dingdanpingjia
		}
		,{
			path: '/shuiguoxinxi',
			name: '水果信息',
			component: shuiguoxinxi
		}
		,{
			path: '/yonghu',
			name: '用户',
			component: yonghu
		}
		,{
			path: '/discussshuiguoxinxi',
			name: '水果信息评论',
			component: discussshuiguoxinxi
		}
		,{
			path: '/dingdanxinxi',
			name: '订单信息',
			component: dingdanxinxi
		}
		,{
			path: '/shuiguofenlei',
			name: '水果分类',
			component: shuiguofenlei
		}
		,{
			path: '/storeup',
			name: '我的收藏',
			component: storeup
		}
		,{
			path: '/config',
			name: '轮播图',
			component: config
		}
		,{
			path: '/dingdanpeisong',
			name: '订单配送',
			component: dingdanpeisong
		}
		]
	},
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
})

export default router
