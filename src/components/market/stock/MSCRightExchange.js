
/*
	市场股票右侧栏，下部
*/

import React from 'react';
// import MICInfo from 'components/market/index/MICInfo';

class MSCRightExchange extends React.Component {
	render() {
	    return (
	      	<div className="desc-bot">
	      		<div className="db-nav">交易数据</div>
	      		<div className="db-wrap">
	      			<ul>
	      				<li>
	      					<span>时间</span>
	      					<span>价格</span>
	      				</li>
	      				<li>
	      					<span>15:48</span>
	      					<span>215.6万</span>
	      				</li>
	      				<li>
	      					<span>15:49</span>
	      					<span>326.1万</span>
	      				</li>
	      			</ul>
	      		</div>
	      	</div>
	    );
	}
}


MSCRightExchange.defaultProps = {

};

export default MSCRightExchange;