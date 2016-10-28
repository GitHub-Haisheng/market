
/*
	市场组件：包含左侧slider和右侧内容区  右侧内容区（首页  股票  基金  商品  外汇 切换显示）
*/
require('styles/marketIndex.less');

import React from 'react';
import MarketSlider from 'components/market/MarketSlider';
import MarketContent from 'components/market/MarketContent';

class MarketWrap extends React.Component {

	render() {
	    return (
	      	<div className="main">
	      		<MarketSlider />
            { this.props.children || <MarketContent /> }
	      	</div>
	    );
	}
}

MarketWrap.defaultProps = {

};

export default MarketWrap;
