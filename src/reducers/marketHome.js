/*
	行情模块首页部分reducer合集
*/
import { combineReducers } from 'redux';
import stockIndexList from './marketHomeStockIndexList';
import stockIndexChart from './marketHomeStockIndexChart';
import currencyList from './marketHomeCurrencyList';
import commodityList from './marketHomeCommodityList';
import bondList from './marketHomeBondList';
import fundList from './marketHomeFundList';
import newsList from './marketHomeNewsList';
import productData from './marketHomeProductData';

const marketHomeReducer = combineReducers({
	stockIndexList : stockIndexList,
	stockIndexChart : stockIndexChart,
	currencyList : currencyList,
	commodityList : commodityList,
	bondList : bondList,
	fundList : fundList,
	newsList : newsList,
	productData : productData
});

export default marketHomeReducer;