/*
	市场首页中间列表
*/

import React from 'react';

class MICIPart2Item extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MICIPart2Item';
    }
    render() {
        return <div className="item-group clearfix">
            <div className="item name">
            	<a href="#">人民币/美元</a>
                <p>CNYUSD</p>
            </div>
            <div className="item price color-up">6.6690</div>
            <div className="item rate color-down">0.86%</div>
        </div>;
    }
}

MICIPart2Item.defaultProps = {
	
}

export default MICIPart2Item;
