/*
	处理行情首页外汇列表的数据
*/
import { Market_Home_Currency_List } from '../actions/marketIndex';

const defaultState = {
	list : []
}

function currencyList (state = defaultState , action) {

	switch (action.type) {

		case Market_Home_Currency_List:

			return {
				list: action.payload
			};

		default :
			return state;

	}
}

export default currencyList;