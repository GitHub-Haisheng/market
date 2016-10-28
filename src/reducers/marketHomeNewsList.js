/*
	处理行情首页资讯列表的数据
*/
import { Market_Home_News_List } from '../actions/marketIndex';

const defaultState = {
	list : []
}

function newsList (state = defaultState , action) {

	switch (action.type) {

		case Market_Home_News_List:

			return {
				list: action.payload
			};

		default :
			return state;
	}
}

export default newsList;