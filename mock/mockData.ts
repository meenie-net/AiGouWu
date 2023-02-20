/* 
    AiGouWu
    Mock数据
*/

import { CartType, CouponType, CouponTypeType } from './type/entity/cart'
import { CategoryType } from './type/entity/category'
import { BrandType, ProductType, ProductChannel, SKUType, SPUType, GoodsType } from './type/entity/goods'
import { LocationType, AddressType, CustomerType } from './type/entity/user'
import { OrderStatus, OrderType } from './type/entity/order'
import { HomePageInitDataType } from './type/page/page-home'
import { CategoryPageInitDataType } from './type/page/page-category'
import { CartPageInitDataType } from './type/page/page-cart'
import { MyPageInitDataType } from './type/page/page-my'


//示例
export const SKU_1: SKUType = {
    title: '颜色',
    value: '白',
    stock: 10,
}

export const SPU_1:SPUType = {
    product: {
        name: '',
        price: 1,
        selling: 2,
        salesVolume: 20,
        category: '电器/电视',
        channel: ProductChannel.OVERSEAS,
        img: '',
        desc: '',
        brand: {
            title: '嘉宝',
            logo: '',
        }
    },
    SKU: {
        title: '颜色',
        value: '白',
        stock: 10,
    },
    comment: []//评价
}
//示例
export const goods_1: GoodsType = {
    SPU: SPU_1,
    count: 20//数量
}
export const coupon_1:CouponType = {
    title: '满10减1',
    type: CouponTypeType.ANY_DISCOUNT,
    amount: 20,
    usedAmount: 20,
}
export const cartItem_1 = {
    goods: goods_1,// 商品
    coupon: [coupon_1],// 优惠券
    price: 20,
    freight: 10,// 运费
    total: 30
}

// 示例
export const category_1: CategoryType = {
    title: '电器',
    level: 1,
    item: [
        {
            title: '电视',
            level: 2,
            item: [SPU_1]
        }
    ]
}
export const brand_1: BrandType = {
    title: '嘉宝',
    logo: '',
}
// 示例
export const product_1: ProductType = {
    name: '',
    price: 1,
    selling: 2,
    salesVolume: 20,
    category: '电器/电视',
    channel: ProductChannel.OVERSEAS,
    img: '',
    desc: '',
    brand: brand_1
}

// 示例
export const cart_1: CartType = {
    goods: {
        self: [cartItem_1],
        outside: [cartItem_1],
        other: [cartItem_1]
    },
    address: {
        name: 'string',// 买家姓名
        tel: 'string',// 买家电话
        location: {
            province: 'string',// 省
            city: 'string',// 市
            area: 'string',// 县\区
            town: 'string',// 乡镇\街道
            detail: 'string',// 具体住址
        }// 位置
    },// 地址
    coupon: [coupon_1],// 优惠券
    freight: 30,// 运费,
    totalPrice: 120,// 总价
}
export const order_1:OrderType = {
    ...cart_1,
    status: OrderStatus.FINISHED,
    createTime: 'string'
}
export const location_1:LocationType = {
    province: 'string',// 省
    city: 'string',// 市
    area: 'string',// 县\区
    town: 'string',// 乡镇\街道
    detail: 'string',// 具体住址
}
export const address_1:AddressType = {
    name: 'string',// 买家姓名
    tel: 'string',// 买家电话
    location: location_1// 位置
}
export const customer_1:CustomerType = {
    username: 'string',
    password: 'string',
    sex: 'string',
    avatar: 'string',
    address: [address_1]
}

export const cartPageInitData: CartPageInitDataType = {
    // 购物车页商品
    cart: cart_1
}

export const categoryPageInitData: CategoryPageInitDataType = {
    // 分类页商品分类
    category: category_1,
    // 分类页品牌分类
    brand: brand_1,
}

export const homePageInitData: HomePageInitDataType = {
    // 首页顶部分类
    category: [
		category_1,
		{
			title: '电器',
			level: 1,
			item: [
			    {
			        title: '电视',
			        level: 2,
			        item: [SPU_1]
			    }
			]
		}
	],
    // 首页轮播
    banner: [
        {
            title: '111122',
            img: '../../static/banner-1.png',
            target: 'http://www.baidu.com'
        },
        {
            title: '111122',
            img: '../../static/home-head.png',
            target: '321312'
        },
        {
            title: '111122',
            img: '../../static/banner-1.png',
            target: '321312'
        }
		
    ],
    // 金刚键区
    quickAccess: [
        {
            title: '',
            icon: '',
            target: ''
        }
    ],
    // 新人专享
    newCustomer: {
        url: '',
        img: ''
    },
    // 促销区
    promotion: {
        // 每日疯抢
        daily: {
            // 开始时间
            startTime: '',
            // 链接
            url: 'string',
            // 图片
            img: 'string',
            // 颜色
            color: 'string'
        },
        // 团购优惠
        groupon: {
            // 主标题
            title: 'string',
            // 副标题
            subTitle: 'string',
            // 链接
            url: 'string',
            // 图片
            img: 'string',
            // 颜色
            color: 'string'
        },
        // 新品推荐
        new: {
            // 主标题
            title: 'string',
            // 副标题
            subTitle: 'string',
            // 链接
            url: 'string',
            // 图片
            img: 'string',
            // 颜色
            color: 'string'
        }
    },
    // 好物精选区
    wellChosen: [
        {
            main: {
                // 主标题
                title: 'string',
                // 副标题
                subTitle: 'string',
                // 链接
                url: 'string',
                // 图片
                img: 'string',
                // 颜色
                color: 'string'
            },
            sub: [
                SPU_1
            ]
        }
    ],
    // 猜你喜欢区
    guessYouLike: [SPU_1],
}

export const myPageInitData: MyPageInitDataType = {
    // 我的页用户信息
    userInfo: customer_1,
    // 我的页用户设置
    userSetting: {},
    // 我的页用户订单
    userOrder: [order_1],
}