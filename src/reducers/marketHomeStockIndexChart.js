/*
	行情首页股票指数列表某条目的走势图数据
*/
import { Market_Home_Stock_Index_Chart } from '../actions/marketIndex';

const defaultState = {
	listData : []
}

function stockIndexChart (state = defaultState , action) {

	switch (action.type) {

		case Market_Home_Stock_Index_Chart:

			return {
				listData: action.payload
			};

		default :
			return state;
	}
}

export default stockIndexChart;