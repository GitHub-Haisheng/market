/*
    基金列表
*/

import React from 'react';
import { connect } from 'react-redux';
import MICLPart3List1Item from 'components/market/index/MICLPart3List1Item';
import { getFundList } from '../../../actions/marketIndex';

class MICLPart3List1 extends React.Component {

    constructor(props) {
        super(props);
        this.displayName = '';
    }

    componentWillMount(){
        this.props.getFundList();
    }

    render() {
        console.log(this.props.list);
        return <div className="bottom-list-1">
            <div className="tBar">
                <span>基金</span><a className="more">更多&gt;</a>
            </div>
            <div className="fund-type">
                <a>股票型</a>
                <a>债券型</a>
                <a>混合型</a>
            </div>
            <div className="table-box">
                <div className='thead clearfix'>
                    <div className="item name">名称</div>
                    <div className="item price">单位净值</div>
                    <div className="item rate">涨跌幅</div>
                    <div className="item rate-price">涨跌额</div>
                </div>
                <div className="tbody">
                    <MICLPart3List1Item />
                    <MICLPart3List1Item />
                    <MICLPart3List1Item />
                    <MICLPart3List1Item />
                </div>
            </div>
        </div>;
    }
}

MICLPart3List1.defaultProps = {

}

function mapStateToProps (store) {
    return {
        list : store.fundList.list
    }
}

export default connect(mapStateToProps , { getFundList })(MICLPart3List1);

