#!/usr/local/bin/python3
import pandas as pd
import matplotlib.pyplot as plt
import datetime as dt
import json
import sys
#df = pd.read_csv('crypto_usd.csv')
#data = {}
#ccindex = [(x, y, z) for x, y, z in zip(df['Date'].apply(lambda x:x.replace('-','')), map(lambda x:"%.2f" % x, df['Index']), map(lambda x:"%.2f" % x, df['BTC']))]
#print(json.dumps(ccindex))


filename = sys.argv[1]
strategy = sys.argv[2]
filedir = '/data/analysis/ljs/sim/CC/hour/'

output = {"btc":"crypto_btc.json","eth":"crypto_eth.csv","usd":"crypto_usd.csv"}
benchmark = {"btc":"ETH/BTC","eth":"BTC/ETH","usd":"BTC/USD"}

df = pd.read_csv(filedir + filename)
data = {}
ccindex = [(x, y, z) for x, y, z in zip(df['Date'], map(lambda x:"%.2f" % x, df['Index']), map(lambda x:"%.2f" % x, df[benchmark[strategy]]))]
#print json.dumps(ccindex)
with open(output[strategy],"w") as f:
	json.dump(ccindex,f)
