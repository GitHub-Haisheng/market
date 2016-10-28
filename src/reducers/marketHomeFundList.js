/*
	处理行情首页基金列表的数据
*/
import { Market_Home_Fund_List } from '../actions/marketIndex';

const defaultState = {
	list : []
}

function fundList (state = defaultState , action) {

	switch (action.type) {

		case Market_Home_Fund_List:

			return {
				list: action.payload
			};

		default :
			return state;
	}
}

export default fundList;