/*
	市场股票左侧菜单栏 : 左侧菜单栏 -> 股票指数
*/

import React from 'react';
import MSCMenuSuboxTitle from 'components/market/stock/MSCMenuSuboxTitle';
import MSCMenuSuboxItem from 'components/market/stock/MSCMenuSuboxItem';

class MSCMenuListPart1 extends React.Component{
	render(){
		return (
			<li className="out active">
				<div className='tit'>股票指数<i></i></div>
				<div className='sub-box'>
					<div className='sub-tit'>所有关注</div>
					<ul className='sub-ul'>
						<MSCMenuSuboxTitle />
						<MSCMenuSuboxItem />
					</ul>
				</div>
			</li>
		);
	}
}

MSCMenuListPart1.defaultProps = {

};

export default MSCMenuListPart1;