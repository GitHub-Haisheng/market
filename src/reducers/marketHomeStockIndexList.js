/*
	处理行情首页股票指数列表的数据
*/
import { Market_Home_Stock_Index_List } from '../actions/marketIndex';

const defaultState = {
	list : []
}

function stockIndexList (state = defaultState , action) {

	switch (action.type) {

		case Market_Home_Stock_Index_List:

			return {
				list: action.payload
			};

		default :
			return state;

	}
}

export default stockIndexList;