/*
	指数列表中的每一行
*/
import React from 'react';

class MICLPart3List1Item extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MICLPart3List1Item';
    }
    render() {
        return <div className="item-group clearfix">
			<div className="item name">
				<div>
					<a href="#">易方达稳健收益</a>
					<span>US</span>/KX1U6 NYM
				</div>
			</div>
			<div className="item price">
				<span>66.45</span>
			</div>
			<div className="item rate color-up">
				<span>0.86%</span>
			</div>
			<div className="item rate-price color-up">
				<span>1.08</span>
			</div>
		</div>;
    }
}

MICLPart3List1Item.defaultProps = {

}

export default MICLPart3List1Item;
