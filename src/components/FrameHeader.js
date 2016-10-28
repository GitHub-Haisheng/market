/*
	顶部导航栏组件，包含导航栏左部tab及右部其他操作
*/

require('styles/header.less');

import React from 'react';
import FrameHeaderLeft from 'components/FrameHeaderLeft';
import FrameHeaderRight from 'components/FrameHeaderRight';

class FrameHeader extends React.Component {
  render() {
    return (
      	<div className="header">
      		<FrameHeaderLeft />
      		<FrameHeaderRight />
      	</div>
    );
  }
}

FrameHeader.defaultProps = {

};

export default FrameHeader;
