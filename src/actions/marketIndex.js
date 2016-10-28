/*
	市场首页action
*/

import $ from 'jquery';

// 市场首页股票指数列表 这里使用home是避免index的首页含义和指数含义混淆
export const Market_Home_Stock_Index_List = 'Market_Home_Stock_Index_List';
export const Market_Home_Stock_Index_Chart = 'Market_Home_Stock_Index_Chart';
export const Market_Home_Currency_List = 'Market_Home_Currency_List';
export const Market_Home_Commodity_List = 'Market_Home_Commodity_List';
export const Market_Home_Bond_List = 'Market_Home_Bond_List ';
export const Market_Home_Fund_List = 'Market_Home_Fund_List ';
export const Market_Home_News_List = 'Market_Home_News_List ';
export const Market_Home_Product_Data = 'Market_Home_Product_Data';

// 定义url地址 避免以后修改修改域名
const PRO_URL = 'https://webapi.webull.com/api/h5/home/'

// 返回给reducer市场首页股票指数列表的数据
// 待加入获取数据部分
export function getStockIndexList(){

	let req =  $.ajax({
		url: PRO_URL + 'tickers/0/zh',
		dataType: 'jsonp',
		contentType: 'application/jsonp;charset=utf-8',
		callback: 'callback'
    })

	return {
		type : Market_Home_Stock_Index_List,
		payload : req
	}
}

// 返回给reducer市场首页股票指数列表中某条目的走势图数据
// 待加入获取数据部分 根据tickerId请求标的数据
export function getStockIndexChart(){

	return {
		type : Market_Home_Stock_Index_Chart,
		payload : '走势图'
	}
}

// 返回给reducer市场首页外汇列表数据
// 待加入获取数据部分
export function getCurrencyList(){

	let req =  $.ajax({
		url: PRO_URL + 'foreginexchanges/0/zh',
		dataType: 'jsonp',
		contentType: 'application/jsonp;charset=utf-8',
		callback: 'callback'
    })

	return {
		type : Market_Home_Currency_List,
		payload : req
	}
}

// 返回给reducer市场首页商品列表数据
// 待加入获取数据部分
export function getCommodityList(){

	let req =  $.ajax({
		url: PRO_URL + 'futures/0/zh',
		dataType: 'jsonp',
		contentType: 'application/jsonp;charset=utf-8',
		callback: 'callback'
    })

	return {
		type : Market_Home_Commodity_List,
		payload : req
	}
}

// 返回给reducer市场首页债券列表数据
// 待加入获取数据部分
export function getBondList(){

	return {
		type : Market_Home_Bond_List,
		payload : '此处应是首页债券列表数据'
	}
}

// 返回给reducer市场首页基金列表数据
// 待加入获取数据部分
export function getFundList(){

	return {
		type : Market_Home_Fund_List,
		payload : '此处应是首页基金列表数据'
	}
}

// 返回给reducer市场首页资讯列表数据
// 待加入获取数据部分
export function getNewsList(){

	return {
		type : Market_Home_News_List,
		payload : '此处应是首页资讯列表数据'
	}
}

// 返回给reducer市场首页右侧涨、跌幅榜数据
// 待加入获取数据部分
export function getProductData(){

	return {
		type : Market_Home_Product_Data,
		payload : {
			txt : '此处应是首页右侧涨、跌幅榜数据',
			data1 : '涨幅榜',
			data2 : '跌幅榜'
		}
	}
}

