/*
	处理行情首页债券列表的数据
*/
import { Market_Home_Bond_List } from '../actions/marketIndex';

const defaultState = {
	list : []
}

function bondList (state = defaultState , action) {

	switch (action.type) {

		case Market_Home_Bond_List:

			return {
				list: action.payload
			};

		default :
			return state;

	}
}

export default bondList;