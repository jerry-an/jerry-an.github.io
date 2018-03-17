$(document).ready(function(){
	$.stratlist = new Vue({
		el: '#stratListCrypto',
		data: {
			global: {},
			stratReports:[
			{
				'strat-name': 'CoAlpha Strategy',
				'industry-name': 'CoAlpha Inc.',
				'description': 'The CoAlpha MOM30 index product is a cryptocurrency investment product that adopts index strategy. This index strategy is a simple quantitative strategy that dynamically adjusts the portfolio weights of 30 cryptocurrency based on market capital and momentum. It can achieve a higher return to risk ratio  than holding a single digital currency such as BTC, due to investment diversification and dynamic allocation.  For 2017, this strategy has a return of 17070% with Sharpe Ratio 4.82 and Sortino Ratio 7.12, versus BTC\'s return of 1384% with Sharpe Ratio 3.11 and Sortino Ratio 4.55. The advantages for this strategy are: better diversification, easy to understand, easy to implement the trade execution, and large capital capacity. So it is suitable for large scale asset allocation and less sophisticated investors.',
				'stock-list-list': 
				{
				 "top": [
				  
				 ],
				 "bottom": [
				 ]
				}
			},
			
			/*, append strat according to above
			{
				'strat-name': 'CoAlpha Strategy',
				'industry-name': 'CoAlpha Inc.',
			}
			*/
			]
		},
		computed: {
				hasList : function() {
					return (this.stratReports['stock-list-list'] != undefined)
				}

		},
		methods: {
			uiStratList: function(idx) {
				if (this.stratReports[idx]['stock-list-list'] === undefined)
					return []
				var tmp = _.zip(this.stratReports[idx]['stock-list-list']['top'],
					this.stratReports[idx]['stock-list-list']['bottom'])
				console.log(tmp)
				return tmp
			}
		}
		
	});
	var myChart = echarts.init(document.getElementById('Strategy-img-fluid-1'));
	$.get('js/crypto_nav.json', function (data) {
	    myChart.setOption(option = {
	        title : {
               subtext: 'MOM30Index:sharpe=4.82;sortino=7.12\nBTC:sharpe=3.11;sortino=4.55'
            },
	        legend: {

               data:['MOM30Index','BTC'],
               top: 40
            },
	        tooltip: {
	            trigger: 'axis'
	        },
	        xAxis: {
	        	axisLabel : {
                     formatter: function(category){
                           return category.substring(0,6);
                          }
                },
	            data: data.map(function (item) {
	                return item[0];
	            })
	        },
	        yAxis: {
	        	title: 'NAV',
	            splitLine: {
	                show: false
	            }
	        },
	        toolbox: {
	            left: 'center',
	            feature: {
	                dataZoom: {
	                    yAxisIndex: 'none'
	                },
	                restore: {},
	                saveAsImage: {}
	            }
	        },
	        series: [
	        {
	            name: 'MOM30Index',
	            type: 'line',
	            data: data.map(function (item) {
	                return item[1];
	            }),
	        },
	        {
	            name: 'BTC',
	            type: 'line',
	            data: data.map(function (item) {
	                return item[2];
	            }),
	        }]
    	});
	});
});
