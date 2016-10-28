/*
	基金和资讯
*/

import React from 'react';
import MICLPart3List1 from 'components/market/index/MICLPart3List1';
import MICLPart3List2 from 'components/market/index/MICLPart3List2';

class MICListPart3 extends React.Component {

    constructor(props) {
        super(props);
        this.displayName = '';
    }

    render() {
        return <div className="bottom">
            <MICLPart3List1 />
        	<MICLPart3List2 />
        </div>;
    }
}

MICListPart3.defaultProps = {

}

export default MICListPart3;

