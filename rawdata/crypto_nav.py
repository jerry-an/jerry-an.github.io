import pandas as pd
import matplotlib.pyplot as plt
import datetime as dt
import json
df = pd.read_csv('crypto_index.csv')
data = {}
print json.dumps([(x, y, z) for x, y, z in zip(df['Date'].apply(lambda x:x.replace('-','')), map(lambda x:"%.2f" % x, df['Index']), map(lambda x:"%.2f" % x, df['BTC']))])
