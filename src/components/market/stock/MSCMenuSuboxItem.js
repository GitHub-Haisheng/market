/*
	市场股票左侧菜单栏 : 一级li下的子模块里，子盒子 sub-box的二级li
*/

import React from 'react';

class MSCMenuSuboxItem extends React.Component{
	render(){
		return (
				<li className="clearfix">
					<div className="name">东征TOPIX指数</div>
					<div className="ecode">2182.87</div>
					<div className="excode up">0.86%</div>
					<div className="newest up">2182.87</div>
					<div className="change">0.86%</div>
					<div className="changeN">2182.87</div>
					<div className="enum">2182.87</div>
					<div className="expri">2182.87</div>
					<div className="tprice">2182.87</div>
					<div className="dprice">2182.87</div>
					<div className="open">2182.87</div>
					<div className="close">2182.87</div>
				</li>
		);
	}
}

MSCMenuSuboxItem.defaultProps = {

};

export default MSCMenuSuboxItem;