/*
	指数及其走势图
*/

import React from 'react';
import MICLPart1List from 'components/market/index/MICLPart1List';
import MICLPart1Chart from 'components/market/index/MICLPart1Chart';

class MICListPart1 extends React.Component {

    constructor(props) {
        super(props);
        this.displayName = '';
    }

    render() {
        return <div id="top" className="top">
        	<div id="top-banner">
        		<div className="tStock tBar">
            		股票指数<a className="all">所有关注</a>
            		<a className="more">更多&gt;</a>
        		</div>
        	</div>
        	<MICLPart1List />
            <MICLPart1Chart />
        </div>;
    }
}

MICListPart1.defaultProps = {

}

export default MICListPart1;
