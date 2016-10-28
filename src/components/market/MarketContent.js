
/*
	市场内容区：首页  股票  基金  商品  外汇 切换显示
*/

import React from 'react';
import { Router , Route, browserHistory} from 'react-router';
import MarketIndexContent from 'components/market/index/MarketIndexContent';
import MarketStockContent from 'components/market/stock/MarketStockContent';

class MarketWrap extends React.Component {
	render() {
	    return (
	      	<div className="market-warp">
            <MarketIndexContent />
	      	</div>
	    );
	}
}

MarketWrap.defaultProps = {

};

export default MarketWrap;
