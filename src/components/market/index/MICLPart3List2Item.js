/*
    基金列表
*/

import React from 'react';

class MICLPart3List2Item extends React.Component {

    constructor(props) {
        super(props);
        this.displayName = '';
    }

    render() {
        return <li className="item">
            <a>两分钟股市必读-8.4:奥运会开幕在即三主线掘金16大概念股</a>
            <span className="date">2016/8/24</span>
        </li>
;
    }
}

MICLPart3List2Item.defaultProps = {

}

export default MICLPart3List2Item;

