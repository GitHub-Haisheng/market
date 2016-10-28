/*
	涨跌幅榜
*/

import React from 'react';
import { connect } from 'react-redux';
import MICIPart2Item from 'components/market/index/MICIPart2Item';
import { getProductData } from '../../../actions/marketIndex';

class MICInfoPart2 extends React.Component {

    constructor(props) {
        super(props);
        this.displayName = '';
    }

    componentWillMount(){
        this.props.getProductData();
    }

    render() {
        console.log(this.props.data.txt);
        return <div className="right-center">
            <div className="rose">
                <div className="tBar">
                    <span>涨幅榜</span><a className="more">更多&gt;</a>
                </div>
                <div className="table-box">
                    <div >
                        <div className='thead clearfix'>
                            <div className="item name">名称</div>
                            <div className="item price">最新价</div>
                            <div className="item rate">涨跌幅</div>
                        </div>
                        <div className='tbody'>
                            <MICIPart2Item />
                            <MICIPart2Item />
                            <MICIPart2Item />
                            <MICIPart2Item />
                            <MICIPart2Item />
                        </div>
                    </div>
                </div>
            </div>
            <div className="drop">
                <div className="tBar">
                    <span>跌幅榜</span><a className="more">更多&gt;</a>
                </div>
                <div className="table-box">
                    <div >
                        <div className='thead clearfix'>
                            <div className="item name">名称</div>
                            <div className="item price">最新价</div>
                            <div className="item rate">涨跌幅</div>
                        </div>
                        <div className='tbody'>
                            <MICIPart2Item />
                            <MICIPart2Item />
                            <MICIPart2Item />
                            <MICIPart2Item />
                            <MICIPart2Item />
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

MICInfoPart2.defaultProps = {

}

function mapStateToProps (store) {
    return {
        data : store.productData.data
    }
}

export default connect(mapStateToProps , { getProductData })(MICInfoPart2);

