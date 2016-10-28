/*
	市场首页中间列表
*/

import React from 'react';

class MICLPart2ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MICLPart2ListItem';
    }

    render() {

        return <div className="item-group clearfix">
            <div className="item name">
            	<a href="#">{this.props.name}</a>
                <p>{this.props.tickerId}</p>
            </div>
            <div className={ this.props.change < 0 ? 'item buy color-down' :  'item buy color-up'}>
                {this.props.change}
            </div>
            <div className={ this.props.changeRatio < 0 ? 'item sale color-down' :  'item sale color-up'}>
                {this.props.changeRatio}%
            </div>
        </div>;
    }
}

MICLPart2ListItem.defaultProps = {
	
}

export default MICLPart2ListItem;
