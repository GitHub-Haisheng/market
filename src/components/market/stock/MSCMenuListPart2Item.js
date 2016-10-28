/*
	市场股票左侧菜单栏 : 一级li下的子模块里，子盒子 sub-box的二级li
*/

import React from 'react';

class MSCMenuListPart2Item extends React.Component{
	render(){
		return (
			<li>
				<span className="sname">石油石化</span>
				<span className="cbar"><em className="zhang"></em><em className="ping"></em><em className="die"></em></span>
				<span className="data up">0.86%</span>
			</li>
		);
	}
}

MSCMenuListPart2Item.defaultProps = {

};

export default MSCMenuListPart2Item;