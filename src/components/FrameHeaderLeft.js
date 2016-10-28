/*
	顶部导航栏，左侧
*/

import React from 'react';

class FrameHeaderLeft extends React.Component {

	render() {
	    return (
	      	<div>
	      		<div id="header-left">
	      			<ul className="clearfix left">
	      				<li className="logo"></li>
	      				<li className="item">
	      					<a href="#" className="optional">自选</a>
	      				</li>
	      				<li className="item active">
	      					<a href="#" className="market">市场</a>
	      				</li>
	      				<li className="item">
	      					<a href="#" className="news">资讯</a>
	      				</li>
	      				<li className="item">
	      					<a href="#" className="cal">财经日历</a>
	      				</li>
	      				<li className="item">
	      					<a href="#" className="user">用户中心</a>
	      				</li>
	      			</ul>
	      		</div>
	      	</div>
	    );
	}
}

FrameHeaderLeft.defaultProps = {

};

export default FrameHeaderLeft;
