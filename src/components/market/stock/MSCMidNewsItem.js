/*
	市场股票中部内容区 -- 新闻项
*/

import React from 'react';

class MSCMidNewsItem extends React.Component {
	render() {
	    return (
	      	<li className="cleafix">
	      		<span className="le">两分钟股市必读－8.4:奥运会开幕在即三主线掘金16大概念股</span>
	      		<div className="sli">
	      			<span className="ri">证券时报</span>
	      			<span className="ti">2016/08/24</span>
	      		</div>
	      	</li>
	    );
	}
}

MSCMidNewsItem.defaultProps = {

};

export default MSCMidNewsItem;