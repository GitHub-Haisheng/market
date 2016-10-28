/*
	指数列表中的每一行
*/
import React from 'react';

class MICLPart1ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MICLPart1ListItem';
    }
    render() {

        let data = this.props;

        return <div className="item-group clearfix">
          <div className="item name">
            <div>
              <a href="#">{data.name}</a>
              <span>US</span>{data.tickerId}
            </div>
          </div>
          <div className="item price">
            <span>{data.close}</span>
          </div>
          <div className={ data.changeRatio < 0 ? 'item rate color-down' :  'item rate color-up'}>
            <span>{data.changeRatio}%</span>
          </div>
          <div className="item volume">
            <span>{(data.volume/1000).toFixed(2)}M</span>
          </div>
        </div>;
    }
}

MICLPart1ListItem.defaultProps = {

}

export default MICLPart1ListItem;
