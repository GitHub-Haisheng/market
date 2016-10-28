/*
	市场股票右侧栏，上部详细
*/

import React from 'react';
// import MICInfo from 'components/market/index/MICInfo';

class MSCRightDetail extends React.Component {
	render() {
	    return (
	      	<div className="desc-top">
	      		<div className="top-total">
	      			<div className="tt01">
	      				<span>腾讯控股</span>
	      				<span>（00700.HK）</span>
	      			</div>
	      			<div className="tt02 up">
	      				<span>201.000</span>
	      				<span>+2.60</span>
	      				<span>+1.28%</span>
	      			</div>
	      			<div className="add">加入自选</div>
	      			<div className="tab-txt">
	      				<span>交易中：<span className="time">6-17 &nbsp;19:02:01</span></span>
	      				<span>昨收盘：<span className="close up">203.60 &nbsp;+2.60</span></span>
	      			</div>
	      		</div>
	      		<div className="top-tab">
	      			
	      			<div className="tab-table">
	      				<ul>
	      					<li>
	      						<span>成交额</span><span>27.54亿</span>
	      						<span>成交</span><span>1362.2万</span>
	      					</li>
	      					<li>
	      						<span>涨停</span><span>205.40</span>
	      						<span>日增</span><span>-27.0</span>
	      					</li>
	      					<li>
	      						<span>跌停</span><span>200.40</span>
	      						<span>振幅</span><span>2.63%</span>
	      					</li>
	      				</ul>
	      			</div>
	      		</div>
	      	</div>
	    );
	}
}


MSCRightDetail.defaultProps = {

};

export default MSCRightDetail;