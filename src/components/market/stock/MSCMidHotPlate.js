
/*
	市场股票中部内容区
*/

import React from 'react';

class MSCMidHotPlate extends React.Component {
	render() {
		// var litem = [];
		// for (var i = 0; i < hotdata.length; i++) {
		// 	litem.push(
		// 		<li className="clearfix">
		// 			<div className="hname">{hotdata[i].hname}</div>
		// 			<div className="code">{hotdata[i].ecode}</div>
		// 			<div className="excode">{hotdata[i].excode}</div>
		// 			<div className="new">{hotdata[i].newest}</div>
		// 			<div className="change up">{hotdata[i].change}</div>
		// 			<div className="exnum">{hotdata[i].exnum}</div>
		// 			<div className="exper">{hotdata[i].exper}</div>
		// 			<div className="tprice">{hotdata[i].tprice}</div>
		// 			<div className="dprice">{hotdata[i].dprice}</div>
		// 			<div className="turn">{hotdata[i].turn}</div>
		// 		</li>
		// 	);
		// }
	    return (
	      	<div className="hot-wrap">
	      		<div className="hot-tit">公共交通</div>
	      		<div className="bar-show">
	      			<div className="bar-tit">+10.38%</div>
	      			<div className="bar-pic clearfix">
	      				<div className="zhang"></div>
	      				<div className="ping"></div>
	      				<div className="die"></div>
	      			</div>
	      			<div className="bar-data clearfix">
	      				<div className="zdata">上涨支数：<span className="up">70</span></div>
	      				<div className="pdata">持平支数：<span className="ping">10</span></div>
	      				<div className="ddata">下跌支数：<span className="down">20</span></div>
	      			</div>
	      		</div>
	      		<div className="hot-list">
	      			<ul className="hot-ul">
	      				<li className="clearfix">
	      					<div className="hname">成分股名称</div>
	      					<div className="code">代码</div>
	      					<div className="excode">交易所代码</div>
	      					<div className="new">最新价</div>
	      					<div className="change">涨跌幅</div>
	      					<div className="exnum">成交量</div>
	      					<div className="exper">成交额</div>
	      					<div className="tprice">最高价</div>
	      					<div className="dprice">最低价</div>
	      					<div className="turn">换手率</div>
	      				</li>
	      				{
	      					this.props.hotdata.map(function(hotdata){
	      						return (
      									<li className="clearfix">
      										<div className="hname">{hotdata.hname}</div>
      										<div className="code">{hotdata.ecode}</div>
      										<div className="excode">{hotdata.excode}</div>
      										<div className="new">{hotdata.newest}</div>
      										<div className="change up">{hotdata.change}</div>
      										<div className="exnum">{hotdata.exnum}</div>
      										<div className="exper">{hotdata.exper}</div>
      										<div className="tprice">{hotdata.tprice}</div>
      										<div className="dprice">{hotdata.dprice}</div>
      										<div className="turn">{hotdata.turn}</div>
      									</li>
	      							    );
	      					})
	      				}
	      			</ul>
	      		</div>
	      	</div>
	    );
	}
}

MSCMidHotPlate.defaultProps = {
	hotdata: [{
				hname:'意达利控股',
				ecode:'.INX',
				excode:'.INX',
				newest:'2182.87',
				change:'0.86%',
				exnum:'78.73M',
				exper:'78.73M',
				tprice:'2182.87',
				dprice:'2182.87',
				turn:'0.021%'
			},{
				hname:'华多利集团',
				ecode:'.DJX',
				excode:'.DJX',
				newest:'2182.87',
				change:'0.86%',
				exnum:'78.73M',
				exper:'78.73M',
				tprice:'2182.87',
				dprice:'2182.87',
				turn:'0.021%'
			},{
				hname:'越南制造加工',
				ecode:'.IXIC',
				excode:'.IXIC',
				newest:'2182.87',
				change:'0.86%',
				exnum:'78.73M',
				exper:'78.73M',
				tprice:'2182.87',
				dprice:'2182.87',
				turn:'0.021%'
			},{
				hname:'耀莱集团',
				ecode:'00001',
				excode:'00001',
				newest:'2182.87',
				change:'0.86%',
				exnum:'78.73M',
				exper:'78.73M',
				tprice:'2182.87',
				dprice:'2182.87',
				turn:'0.021%'
			},{
				hname:'GA控股',
				ecode:'.10353',
				excode:'10353',
				newest:'2182.87',
				change:'0.86%',
				exnum:'78.73M',
				exper:'78.73M',
				tprice:'2182.87',
				dprice:'2182.87',
				turn:'0.021%'
			},{
				hname:'美东汽车',
				ecode:'80000',
				excode:'80000',
				newest:'2182.87',
				change:'0.86%',
				exnum:'78.73M',
				exper:'78.73M',
				tprice:'2182.87',
				dprice:'2182.87',
				turn:'0.021%'
			},{
				hname:'信义香港',
				ecode:'21000',
				excode:'21000',
				newest:'2182.87',
				change:'0.86%',
				exnum:'78.73M',
				exper:'78.73M',
				tprice:'2182.87',
				dprice:'2182.87',
				turn:'0.021%'
			},{
				hname:'华晨汽车',
				ecode:'21000',
				excode:'21000',
				newest:'2182.87',
				change:'0.86%',
				exnum:'78.73M',
				exper:'78.73M',
				tprice:'2182.87',
				dprice:'2182.87',
				turn:'0.021%'
			}]
};

export default MSCMidHotPlate;