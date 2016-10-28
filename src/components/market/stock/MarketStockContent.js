
/*
	市场股票内容区：左侧菜单栏 中间详情区域 右侧 简要内容区
*/
require('styles/stock-m.less');

import React from 'react';
import MSCMenu from 'components/market/stock/MSCMenu';
import MSCRight from 'components/market/stock/MSCRight';
import MSCMid from 'components/market/stock/MSCMid';

class MarketStockContent extends React.Component {
	render() {
	    return (
	      	<div className="wrap clearfix">
				<MSCMenu />
				<MSCMid />
				<MSCRight />
	      	</div>
	    );
	}
}

MarketStockContent.defaultProps = {

};

export default MarketStockContent;