/*
  市场左侧菜单  包含首页 股票 基金 外汇 商品
*/
import React from 'react'
import { Link , IndexLink } from 'react-router';

class MarketSlider extends React.Component {
  render() {
    return (
      	<div id="menu" className="menu">
      		<ul>
      			<li className="list clic">
              <IndexLink to="/market/home">首页</IndexLink>
            </li>
		      	<li className="list">
              <Link to="/market/stock">股票</Link>
            </li>
		      	<li className="list"><Link to="/">基金</Link></li>
		      	<li className="list">外汇</li>
		      	<li className="list">商品</li>
      		</ul>
      	</div>
    );
  }
}

MarketSlider.defaultProps = {

};

export default MarketSlider;
