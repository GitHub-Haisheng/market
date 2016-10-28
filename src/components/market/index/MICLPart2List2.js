/*
	市场首页商品列表
*/

import React from 'react';
import { connect } from 'react-redux';
import MICLPart2ListItem2 from 'components/market/index/MICLPart2ListItem2';
import { getCommodityList } from '../../../actions/marketIndex';

class MICLPart2List2 extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MICLPart2List2';
    }

    componentWillMount(){
        this.props.getCommodityList();
    }

    render() {

        let _data = this.props.list;

        return <div className="center-list center-list-2">
            <div className="tBar">
            	期货<a className="more">更多&gt;</a>
            </div>
            <div className="table-box">
                <div >
                    <div className='thead clearfix'>
                        <div className="item name">名称</div>
                        <div className="item buy">涨跌额</div>
                        <div className="item sale">涨跌幅</div>
                    </div>
                    <div className='tbody'>
                        {
                            _data.map(function(item){
                                return <MICLPart2ListItem2 key = { item.tickerId } { ...item } />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>;
    }
}

MICLPart2List2.defaultProps = {
	
}

function mapStateToProps (store) {
    return {
        list : store.commodityList.list
    }
}

export default connect(mapStateToProps , { getCommodityList })(MICLPart2List2);
