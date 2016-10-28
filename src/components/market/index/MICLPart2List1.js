/*
	市场首页外汇列表
*/

import React from 'react';
import { connect } from 'react-redux';
import MICLPart2ListItem1 from 'components/market/index/MICLPart2ListItem1';
import { getCurrencyList } from '../../../actions/marketIndex'

class MICLPart2List1 extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MICLPart2List1';
    }

    componentWillMount(){
        this.props.getCurrencyList();
    }

    render() {

        let _data = this.props.list
        return <div>
        	<div className="center-list center-list-1">
                <div className="tBar">
                	外汇<a className="more">更多&gt;</a>
                </div>
                <div className="table-box">
                    <div>
                        <div className='thead clearfix'>
                            <div className="item name">名称</div>
                            <div className="item buy">买价</div>
                            <div className="item sale">卖价</div>
                        </div>
                        <div className='tbody'>
	                        {
                                _data.map(function(item){
                                    return <MICLPart2ListItem1 key = { item.tickerId } { ...item } />
                                })
                            }
	                    </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

MICLPart2List1.defaultProps = {

}

function mapStateToProps (store) {
    return {
        list : store.currencyList.list
    }
}

export default connect(mapStateToProps , { getCurrencyList })(MICLPart2List1);
