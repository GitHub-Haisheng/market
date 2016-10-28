/*
	市场股票左侧菜单栏 : 二级subox标题
*/

import React from 'react';

class MSCMenuSuboxTitle extends React.Component{
	render(){
		return (
			<li className="sub-top clearfix">
				<div className="name">市场</div>
				<div className="ecode">代码</div>
				<div className="excode">交易所代码</div>
				<div className="newest">最新价</div>
				<div className="change">涨跌幅</div>
				<div className="changeN">涨跌额</div>
				<div className="enum">成交量</div>
				<div className="expri">成交额</div>
				<div className="tprice">最高</div>
				<div className="dprice">最低</div>
				<div className="open">开盘</div>
				<div className="close">昨收</div>
			</li>
		);
	}
}

MSCMenuSuboxTitle.defaultProps = {

};

export default MSCMenuSuboxTitle;