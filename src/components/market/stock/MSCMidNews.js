/*
	市场股票中部内容区 新闻
*/

import React from 'react';
import MSCMidNewsItem from 'components/market/stock/MSCMidNewsItem';

class MSCMidNews extends React.Component {
	render() {
	    return (
	      	<div className="banner-wrap">
	      		<div className="nav">
	      			<span className="active">新闻</span>
	      			<span>资金</span>
	      			<span>概况</span>
	      			<span>财务</span>
	      			<span>公告</span>
	      			<span>备忘录</span>
	      		</div>
	      		<div className="cont">
	      			<ul className="cont-ul">
	      			<MSCMidNewsItem />
	      			</ul>
	      		</div>
	      	</div>
	    );
	}
}

MSCMidNews.defaultProps = {

};

export default MSCMidNews;