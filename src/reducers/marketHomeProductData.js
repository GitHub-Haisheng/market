/*
	处理行情首页资讯列表的数据
*/
import { Market_Home_Product_Data } from '../actions/marketIndex';

const defaultState = {
	data : []
}

function productData (state = defaultState , action) {

	switch (action.type) {

		case Market_Home_Product_Data:

			return {
				data: action.payload
			};

		default :
			return state;
	}
}

export default productData;