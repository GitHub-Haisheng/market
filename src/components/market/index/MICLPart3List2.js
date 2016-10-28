/*
    资讯列表
*/

import React from 'react';
import { connect } from 'react-redux';
import MICLPart3List2Item from 'components/market/index/MICLPart3List2Item';
import { getNewsList } from '../../../actions/marketIndex';

class MICLPart3List2 extends React.Component {

    constructor(props) {
        super(props);
        this.displayName = '';
    }

    componentWillMount(){
        this.props.getNewsList();
    }

    render() {
        console.log(this.props.data);
        return <div className="bottom-list-2">
            <div className="tBar">
                <span>资讯</span>
                <a className="more">更多&nbsp;&gt;</a>
            </div>
            <ul>
                <MICLPart3List2Item />
                <MICLPart3List2Item />
                <MICLPart3List2Item />
                <MICLPart3List2Item />
                <MICLPart3List2Item />
                <MICLPart3List2Item />
            </ul>
        </div>;
    }
}

MICLPart3List2.defaultProps = {

}

function mapStateToProps (store) {
    return {
        list : store.newsList.list
    }
}

export default connect(mapStateToProps , { getNewsList })(MICLPart3List2);


