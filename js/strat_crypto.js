$(document).ready(function() {
    $.stratlist = new Vue({
        el: '#stratListCrypto',
        data: {
            global: {},
            stratReports: [{
                'strat-name': 'CoAlpha Strategy(based on BTC) ',
                'industry-name': 'CoAlpha Inc.',
                'description': 'The CoAlpha MOM30 index product is a cryptocurrency investment product that adopts index strategy. This index strategy is a simple quantitative strategy that dynamically adjusts the portfolio weights of 30 cryptocurrency based on market capital and momentum. It can achieve a higher return to risk ratio  than holding a single digital currency such as BTC, due to investment diversification and dynamic allocation.  In last year, this strategy has a return of 4204% with Sharpe Ratio 4.66 and Sortino Ratio 5.54, versus ETH\'s return of 129% with Sharpe Ratio 0.74 and Sortino Ratio 1.04. The advantages for this strategy are: better diversification, easy to understand, easy to implement the trade execution, and large capital capacity. So it is suitable for large scale asset allocation and less sophisticated investors.',
                'stock-list-list': {
                    "top": [],
                    "bottom": []
                },
                'imgFluid': 'Strategy-img-fluid-1'
            }, {
                'strat-name': 'CoAlpha Strategy(based on ETH)',
                'industry-name': 'CoAlpha Inc.',
                'description': 'This product is based on ETH. In last year, this strategy has a return of 2083% with Sharpe Ratio 3.29 and Sortino Ratio 4.23, versus BTC\'s return of 78% with Sharpe Ratio 0.35 and Sortino Ratio 0.43.',
                'stock-list-list': {
                    "top": [],
                    "bottom": []
                },
                'imgFluid': 'Strategy-img-fluid-2'
            }]
        },
        computed: {
            hasList: function() {
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
    var usdChart = echarts.init(document.getElementById('Strategy-img-fluid-1'));
    $.get('js/crypto_btc.json', function(data) {
        usdChart.setOption(option = {
            title: {
                subtext: 'MOM30Index:sharpe=4.95;sortino=5.87\nETH:sharpe=0.74;sortino=1.04'
            },
            legend: {

                data: ['MOM30Index', 'ETH'],
                top: 40
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                axisLabel: {
                    formatter: function(category) {
                        return category.substring(4, 8);
                    }
                },
                data: data.map(function(item) {
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
            series: [{
                    name: 'MOM30Index',
                    type: 'line',
                    data: data.map(function(item) {
                        return item[1];
                    }),
                },
                {
                    name: 'ETH',
                    type: 'line',
                    data: data.map(function(item) {
                        return item[2];
                    }),
                }
            ]
        });
    });
    var ethChart = echarts.init(document.getElementById('Strategy-img-fluid-2'));
    $.get('js/crypto_eth.json', function(data) {
        ethChart.setOption(option = {
            title: {
                subtext: 'MOM30Index:sharpe=3.54;sortino=4.55\nBTC:sharpe=0.35;sortino=0.43'
            },
            legend: {

                data: ['MOM30Index', 'BTC'],
                top: 40
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                axisLabel: {
                    formatter: function(category) {
                        return category.substring(4, 8);
                    }
                },
                data: data.map(function(item) {
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
            series: [{
                    name: 'MOM30Index',
                    type: 'line',
                    data: data.map(function(item) {
                        return item[1];
                    }),
                },
                {
                    name: 'BTC',
                    type: 'line',
                    data: data.map(function(item) {
                        return item[2];
                    }),
                }
            ]
        });
    });
});