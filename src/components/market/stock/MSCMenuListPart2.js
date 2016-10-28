/*
	市场股票左侧菜单栏 : 左侧菜单栏 -> 热门板块
*/

import React from 'react';
import MSCMenuListPart2Item from 'components/market/stock/MSCMenuListPart2Item';

class MSCMenuListPart2 extends React.Component{
	render(){
		return (
			<li className="out">
				<div className='tit'>热门板块<i></i></div>
				<div className='sub-box'>
					<div className='sub-tit'>所有关注</div>
					<ul className='sub-ul02'>
						<li className="market">
							<span>市场</span>
							<span>上涨</span>
							<span>持平</span>
							<span>下跌</span>
						</li>
						<li className="market">
							<span className="select">中国</span>
							<span>13</span>
							<span>2</span>
							<span>8</span>
						</li>
						<MSCMenuListPart2Item />
					</ul>
				</div>
			</li>
		);
	}
}

MSCMenuListPart2.defaultProps = {

};

export default MSCMenuListPart2;