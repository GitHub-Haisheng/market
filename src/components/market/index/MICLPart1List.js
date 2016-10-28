/*
	股票指数列表
*/

import React from 'react';
import { connect } from 'react-redux';
import MICLPart1ListItem from 'components/market/index/MICLPart1ListItem';
import { getStockIndexList } from '../../../actions/marketIndex'

class MICLPart1List extends React.Component {

    constructor(props) {
        super(props);
        this.displayName = '';
    }

    componentWillMount(){
        this.props.getStockIndexList();
    }

    render() {
        let _data = this.props.list;
        console.log(_data);
        return  <div id="top-left" className="top-left">
        	<div className="table-box">
        		<div className='thead clearfix'>
					<div className="item name">名称</div>
					<div className="item price">最新价</div>
					<div className="item rate">涨跌幅</div>
					<div className="item volume">成交量</div>
    			</div>
    			<div className="tbody">
            {
              _data.map(function(item){
                return <MICLPart1ListItem key = { item.tickerId } { ...item } />
              })
            }
    			</div>
        	</div>
        </div>
        ;
    }
}

MICLPart1List.defaultProps = {

}

/*
    connect方法的两个参数：1、映射store中的数据到组件；2、映射action方法到组件
*/

function mapStateToProps (store) {
    return {
        list : store.stockIndexList.list
    }
}

export default connect(mapStateToProps , { getStockIndexList })(MICLPart1List);


