
/*
	市场首页主体：列表及走势图  上中下三栏
	1、指数及其走势图
	2、外汇商品债券列表
	3、基金和资讯
*/

import React from 'react';
import MICListPart1 from 'components/market/index/MICListPart1';
import MICListPart2 from 'components/market/index/MICListPart2';
import MICListPart3 from 'components/market/index/MICListPart3';

class MICList extends React.Component {
	render() {
	    return (
	      	<div className="wrap-left">
	      		<MICListPart1 />
	      		<MICListPart2 />
	      		<MICListPart3 />
	      	</div>
	    );
	}
}

MICList.defaultProps = {
	
};

export default MICList;