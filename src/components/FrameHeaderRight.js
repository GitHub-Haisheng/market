/*
	顶部导航栏，右侧
*/

import React from 'react';

class FrameHeaderRight extends React.Component {

	render() {
	    return (
	      	<div id="header-right">
	      		<ul className="clearfix right">
	      			<li className="help"></li>
	      			<li className="set"></li>
	      			<li className="user-name">牛牛思密达</li>
	      			<li className="user-photo"></li>
	      			<li className="search">
	      				<input type="text" placeholder="代码/拼音/名称" />
	      			</li>
	      		</ul>
	      	</div>
	    );
	}
}

FrameHeaderRight.defaultProps = {

};

export default FrameHeaderRight;
