/*
	某条指数走势图
*/
import React from 'react';
import { connect } from 'react-redux';
import { getStockIndexChart } from '../../../actions/marketIndex'


class MICLPart1Chart extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = '';
    }

    componentWillMount(){
        this.props.getStockIndexChart();
    }

    render() {
        return <div className="top-right">
			{this.props.listData}
		</div>;
    }
}

MICLPart1Chart.defaultProps = {

}

/*
    connect方法的两个参数：1、映射store中的数据到组件；2、映射action方法到组件
*/

function mapStateToProps (store) {

    return {
        listData : store.stockIndexChart.listData
    }
}

export default connect(mapStateToProps , { getStockIndexChart })(MICLPart1Chart);

