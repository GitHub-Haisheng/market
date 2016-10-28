
/*
	市场股票中部内容区
*/

import React from 'react';
import MSCMidNews from 'components/market/stock/MSCMidNews';
import MSCMidChart from 'components/market/stock/MSCMidChart';
import MSCMidHotPlate from 'components/market/stock/MSCMidHotPlate';

class MSCMid extends React.Component {
	render() {
	    return (
	      	<div className="mid-content" id="mid-content">
	      		<MSCMidChart />
	      		<MSCMidNews />
	      	</div>
	    );
	}
}

MSCMid.defaultProps = {

};

export default MSCMid;