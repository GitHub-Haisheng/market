
/*
	市场首页内容区：主题部分列表及右侧相关信息汇总模块
*/

import React from 'react';
import MICList from 'components/market/index/MICList';
import MICInfo from 'components/market/index/MICInfo';

class MarketIndexContent extends React.Component {
	render() {
	    return (
	      	<div className="market-index">
	      		<MICList />
	      		<MICInfo />
	      	</div>
	    );
	}
}

MarketIndexContent.defaultProps = {

};

export default MarketIndexContent;