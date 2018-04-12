#!/usr/local/bin/python3
import pandas as pd
import matplotlib.pyplot as plt
import datetime as dt
import json
#df = pd.read_csv('crypto_usd.csv')
#data = {}
#ccindex = [(x, y, z) for x, y, z in zip(df['Date'].apply(lambda x:x.replace('-','')), map(lambda x:"%.2f" % x, df['Index']), map(lambda x:"%.2f" % x, df['BTC']))]
#print(json.dumps(ccindex))

df = pd.read_csv('crypto_btc.csv')
data = {}
ccindex = [(x, y, z) for x, y, z in zip(df['Date'], map(lambda x:"%.2f" % x, df['Index']), map(lambda x:"%.2f" % x, df['ETH/BTC']))]
#print json.dumps(ccindex)
with open("crypto_btc.json","w") as f:
	json.dump(ccindex,f)

df = pd.read_csv('crypto_eth.csv')
data = {}
ccindex = [(x, y, z) for x, y, z in zip(df['Date'], map(lambda x:"%.2f" % x, df['Index']), map(lambda x:"%.2f" % x, df['BTC/ETH']))]
#print(json.dumps(ccindex))

with open("crypto_eth.json","w") as f:
	json.dump(ccindex,f)

#df = pd.read_csv('crypto_usd.csv')
#data = {}
#print json.dumps([(x, y, z) for x, y, z in zip(df['Date'].apply(lambda x:x.replace('-','')), map(lambda x:"%.2f" % x, df['Index']), map(lambda x:"%.2f" % x, df['BTC/ETH']))])
