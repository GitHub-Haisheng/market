/*
	主内容区：切换显示导航栏的内容 一期仅显示市场这一块
*/
import React from 'react';
import { browserHistory } from 'react-router';
import { Router, Route, IndexRoude } from 'react-router';
import MarketWrap from 'components/market/MarketWrap';

class FrameContentWrap extends React.Component {
	render() {
	    return (
	      	<div className="main-content">
            <MarketWrap />
	      	</div>
	    );
	}
}

FrameContentWrap.defaultProps = {

};

export default FrameContentWrap;
