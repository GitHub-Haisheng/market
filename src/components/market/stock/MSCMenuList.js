/*
	市场股票左侧菜单栏 : 一级列表
*/

import React from 'react';
import MSCMenuListPart1 from 'components/market/stock/MSCMenuListPart1';
import MSCMenuListPart2 from 'components/market/stock/MSCMenuListPart2';
import MSCMenuListPart3 from 'components/market/stock/MSCMenuListPart3';
import MSCMenuListPart4 from 'components/market/stock/MSCMenuListPart4';
import MSCMenuListPart5 from 'components/market/stock/MSCMenuListPart5';
import MSCMenuListPart6 from 'components/market/stock/MSCMenuListPart6';

class MSCMenuList extends React.Component{
	render(){
		return (
			<div>
				<ul className="ul-wrap">
					<MSCMenuListPart1 />
					<MSCMenuListPart2 />
					<MSCMenuListPart3 />
					<MSCMenuListPart4 />
					<MSCMenuListPart5 />
					<MSCMenuListPart6 />
				</ul>
				<div className="expand" id="expand"></div>
			</div>
		);
	}
}

MSCMenuList.defaultProps = {

};

export default MSCMenuList;