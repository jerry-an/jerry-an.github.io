$(document).ready(function(){
	$.team = new Vue({
		el: '#teamlist',
		data: {
			members: [{
						'title': 'CEO',
						'name': 'James Wang',
						'avatar': 'img/team/1.jpg',
						'intros':[
							 'Ph.D., in Computer Science from New York University, B.S. from Peking University',
							 '10 years US Finance & Technology industry experience',
							 'Formerly Senior Quantitative Researcher in Citadel LLC (a world famous hedge fund)',
							 'Achieved over US$100 million in revenue',
							 'Worked for Barclays Capital, Bloomberg Tradebook and Ask.com'
						]
					 },
					 {
						'title': 'CTO',
						'name': 'Jack OuYang',
						'avatar': 'img/team/2.jpg',
						'intros':[
							'Blockchain technical specialist',
							'Proficient in Ethereum smart contract',
							'Formerly principal of Thunder(NASDAQ:XNET) download team',
							'Leader of underlying data transmission module team',
							'Million-level internet products experience',
							'10-year experience in internet industry',
							'Master of systems engineering from Xi\'an Jiaotong University.'
						]
					 },
                     {
						'title': 'Director of Big Data Technology',
						'name': 'Jerry An',
						'avatar': 'img/team/2.jpg',
						'intros':[
							'Experienced in product R & D and project management',
							'Former PM leading R & D team over one hundred people',
							'Worked in Guangdong Planning and designing Institute of Telecommunications',
							'Former head of big data research and development department',
							'Master of computer science from Beijing University of Posts and Telecommunications.'
						]
					 },
					 {
						'title': 'Strategic Director',
						'name': 'Howard Chen',
						'avatar': 'img/team/2.jpg',
						'intros':[
							'Responsible for global innovative technology investment in investment arm of one of BAT',
							'Former Senior manager in Goldman Sachs and Carlyle Group',
							'Wharton MBA',
							'B.S. from Fudan University.'
						]
					 },
					 {
						'title': 'COO',
						'name': 'Liam Wang',
						'avatar': 'img/team/2.jpg',
						'intros':[
							'Cornerstone Investors of multiple blockchain projects',
							'Firm believer of blockchain technology',
							'Former CEO of Yunxi Technologies',
							'Former head of China market in US-funded and Japan-funded companies',
							'Experienced in product planning, operations, and organizational management.'
						]
					 },
					 {
						'title': 'Director of Product & Sales',
						'name': 'Sean Mao',
						'avatar': 'img/team/2.jpg',
						'intros':[
							'Executive director of KEYWISE CAPITAL, Hong Kong',
							'Ph.D. from Stanford University',
							'Served as director of Barclays Investment Banking (Hong Kong)',
							'Former director of CITIC Securities International Asset Management (Hong Kong) Ltd.,',
							'Former director of Harvest International (Hong Kong)',
							'Former VP of Fixed Income division of the U.S. Citigroup (New York).'
						]
					 }
			],
			advisors: [{
						'name': 'Tian Jia',
						'avatar': 'img/team/1.jpg',
						'intros':[
							 'An evangelist of bitcoin and blockchain technology since 2011',
							 'Shareholder of BitFinex',
							 'Venture Advisor for ZhenFund',
							 'Achieved over US$100 million in revenue',
							 'Investor in 34 blockchain projects'
						]
			        },
			        {
						'name': 'Pang Chau',
						'avatar': 'img/team/1.jpg',
						'intros':[
							 'Nearly 20 years of experience in quantitative finance',
							 'Focuses on the application of machine learning in quantitative transactions',
							 'Served as Managing Director/Partner of Citadel Capital',
							 'Managing Director of Knight Capital Group',
							 'CTO of Vatic Labs',
                             'Created the largest dark pool in the world',
                             'M.S. in Computer Science from Stanford University.'
						]
			        },
			        {
						'name': 'NED KEE',
						'avatar': 'img/team/1.jpg',
						'intros':[
						     'Founder of cryptocurrency exchange shuzibi.com',
							 'Former Director of Technology of Thunder Inc.',
							 'Member of Thunder Product Board'
						]
			        }
			]
		}
	});
	$.nav = new Vue({
		el: '#static-mainNav',
		data: {
			menu: [
			{},
			{
				'disp': 'Strategies',
				'subs': [
					{
						'url': 'strategies-crypto.html',
						'name': 'Cryptocurrency'
					}/*,
					{
						'url': 'strategies-ashare.html',
						'name': 'A Share'
					}*/
				]
			}
			]
		}
	}); 
});
