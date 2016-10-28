/*
	市场首页右侧：
	1、快速入口
	2、综合涨幅榜、跌幅榜
	3、财经日历
*/

import React from 'react';
import MICInfoPart1 from 'components/market/index/MICInfoPart1';
import MICInfoPart2 from 'components/market/index/MICInfoPart2';
import MICInfoPart3 from 'components/market/index/MICInfoPart3';

class MICInfo extends React.Component {
	render() {
	    return (
	      	<div className="wrap-right">
	      		<MICInfoPart1 />
	      		<MICInfoPart2 />
	      		<MICInfoPart3 />
	      	</div>
	    );
	}
}

MICInfo.defaultProps = {

};

export default MICInfo;