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
            <div className="item buy">
                {this.props.ask}
            </div>
            <div className="item sale">
                {this.props.bid}
            </div>
        </div>;
    }
}

MICLPart2ListItem.defaultProps = {
	
}

export default MICLPart2ListItem;
