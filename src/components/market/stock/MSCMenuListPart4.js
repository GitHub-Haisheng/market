/*
	市场股票左侧菜单栏 : 左侧菜单栏 -> 跌幅榜
*/

import React from 'react';
import MSCMenuSuboxItem from 'components/market/stock/MSCMenuSuboxItem';

class MSCMenuListPart4 extends React.Component{
	render(){
		return (
			<li className="out">
				<div className='tit'>跌幅榜<i></i></div>
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

MSCMenuListPart4.defaultProps = {

};

export default MSCMenuListPart4;