/*
	程序主入口文件 包含 顶部导航栏 主内容区  底部内容区
	主内容区为顶部导航控制显示内容
*/

require('styles/App.less');

import React from 'react';
import FrameHeader from 'components/FrameHeader';
import FrameContentWrap from 'components/FrameContentWrap';

class AppComponent extends React.Component {
  render() {
    return (
    	<div>
	    	<FrameHeader />
        <div>
          {this.props.children || <FrameContentWrap />}
        </div>
    	</div>
    );
  }
}

AppComponent.defaultProps = {

};

export default AppComponent;
