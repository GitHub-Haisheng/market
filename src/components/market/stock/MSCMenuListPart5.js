/*
	市场股票左侧菜单栏 : 左侧菜单栏 -> 换手率榜
*/

import React from 'react';
import MSCMenuSuboxItem from 'components/market/stock/MSCMenuSuboxItem';

class MSCMenuListPart5 extends React.Component{
	render(){
		return (
			<li className="out">
				<div className='tit'>换手率榜<i></i></div>
				<div className='sub-box'>
					<ul className='sub-ul'>
						<div className="name">市场</div>
						<div className="newest">最新价</div>
						<div className="change">涨跌幅</div>
						<MSCMenuSuboxItem />
					</ul>
				</div>
			</li>
		);
	}
}

MSCMenuListPart5.defaultProps = {

};

export default MSCMenuListPart5;