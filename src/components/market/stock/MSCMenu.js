
/*
	市场股票左侧菜单栏 : 股票指数 热门板块  涨幅榜  跌幅榜 换手率榜 量比榜 ...
*/

import React from 'react';
import MSCMenuList from 'components/market/stock/MSCMenuList';
// import MICInfo from 'components/market/index/MICInfo';

class MSCMenu extends React.Component {
	render() {
	    return (
	      	<div className="stock-menu left-nav">
	      		<MSCMenuList />
	      	</div>
	    );
	}
}

MSCMenu.defaultProps = {

};

export default MSCMenu;