/*
	快速入口
*/

import React from 'react';

class MICInfoPart1 extends React.Component {

    constructor(props) {
        super(props);
        this.displayName = '';
    }

    render() {
        return <div className="right-top clearfix">
            <a className="quick-link">热门板块</a>
            <a className="quick-link">个股排行</a>
            <a className="quick-link">基金收益</a>
            <a className="quick-link">基金筛选</a>
        </div>;
    }
}

MICInfoPart1.defaultProps = {

}

export default MICInfoPart1;
