/*
	市场股票右侧
*/

import React from 'react';
import MSCRightDetail from 'components/market/stock/MSCRightDetail';
import MSCRightExchange from 'components/market/stock/MSCRightExchange';
// import MICInfo from 'components/market/index/MICInfo';

class MSCRight extends React.Component {
	render() {
	    return (
	      	<div className="right-desc">
	      		<MSCRightDetail />
	      		<MSCRightExchange />
	      	</div>
	    );
	}
}

MSCRight.defaultProps = {

};

export default MSCRight;