/*
	市场首页债券列表
*/

import React from 'react';
import { connect } from 'react-redux';
import MICLPart2ListItem3 from 'components/market/index/MICLPart2ListItem3';
import { getBondList } from '../../../actions/marketIndex';

class MICLPart2List3 extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MICLPart2List3';
    }
    componentWillMount(){
        this.props.getBondList();
    }

    render() {
        console.log(this.props.list);
        return <div>
        	<div className="center-list center-list-3">
                <div className="tBar">
                	<span>商品</span><a className="more">更多&gt;</a>
                </div>
                <div className="table-box">
                    <div >
                        <div className='thead clearfix'>
                            <div className="item name">名称</div>
                            <div className="item buy">买价</div>
                            <div className="item sale">卖价</div>
                        </div>
                        <div className='tbody'>
	                        <MICLPart2ListItem3 />
	                        <MICLPart2ListItem3 />
	                        <MICLPart2ListItem3 />
	                        <MICLPart2ListItem3 />
	                        <MICLPart2ListItem3 />
	                        <MICLPart2ListItem3 />
	                    </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

MICLPart2List3.defaultProps = {
	
}

function mapStateToProps (store) {
    return {
        list : store.bondList.list
    }
}

export default connect(mapStateToProps , { getBondList })(MICLPart2List3);
