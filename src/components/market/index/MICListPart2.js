/*
	外汇商品债券列表
*/

import React from 'react';
import MICLPart2List1 from 'components/market/index/MICLPart2List1'
import MICLPart2List2 from 'components/market/index/MICLPart2List2'
import MICLPart2List3 from 'components/market/index/MICLPart2List3'

class MICListPart2 extends React.Component {

    constructor(props) {
        super(props);
        this.displayName = '';
    }

    render() {
        return <div className="center">
            <MICLPart2List1 />
            <MICLPart2List2 />
        	<MICLPart2List3 />
        </div>;
    }
}

MICListPart2.defaultProps = {

}

export default MICListPart2;
