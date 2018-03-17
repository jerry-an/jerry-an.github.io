$(document).ready(function(){

	$.stratlist = new Vue({
		el: '#stratListAShare',
		data: {
			global: {},
			stratReports:[
			{
				'strat-name': 'CoAlpha Strategy',
				'industry-name': 'columbus capital',
				'description': 'China A-shares index hedging strategy: The position is dynamically adjusted daily, with an average position of no more than 50 stocks. Using index hedging, the backtesting result shows the return achieved is 10 times over the past 6 years, which is 2 times of the average level of similar products in the market.',
				'stock-list-list': 
				{
				 "top": [
				  "600811",
				  "300456",
				  "300393",
				  "002413",
				  "603355"
				 ],
				 "bottom": [
				  "601238",
				  "000040",
				  "002489",
				  "600277",
				  "600295"
				 ]
				}
			}
			/*, append strat according to above
			{
				'strat-name': 'CoAlpha Strategy',
				'industry-name': 'columbus capital',
			}
			*/
			]
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
	$.get('js/ashare_nav.json', function (data) {
	    myChart.setOption(option = {
	        tooltip: {
	            trigger: 'axis'
	        },
	        xAxis: {
	        	
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
	        
	       
	        series: {
	            name: 'NAV',
	            type: 'line',
	            data: data.map(function (item) {
	                return item[1];
	            }),
	           
	        }
    	});
	});
	
});