/*
	财经日历
*/

import React from 'react';

class MICInfoPart3 extends React.Component {

    constructor(props) {
        super(props);
        this.displayName = '';
    }

    render() {
        return <div className="right-bottom">
        	<div className="tBar">
                <span>财经日历</span>
                <a className="more">更多&nbsp;&gt;</a>
            </div>
            <div className="cont">
                <div className="txt">
                    <span className="tYmd">2016年8月19日</span>
                    <span className="tWeek">星期一</span>
                </div>
                <div className="no-event">
                    <span>今日无重大财经事件</span>
                </div>
            </div>
        </div>;
    }
}

MICInfoPart3.defaultProps = {

}

export default MICInfoPart3;
