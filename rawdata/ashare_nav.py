import pandas as pd
import matplotlib.pyplot as plt
import datetime as dt
import json
df = pd.read_csv('djt_f2009_LS_stock_Ret_history.csv')
nav = 1
def toNav(x):
    global nav
    nav = nav * (1 + x)
    return nav
df['nav'] = df['ret'].apply(lambda x:toNav(x))
print json.dumps([(x,y) for x,y in zip(df['date'], map(lambda x:"%.2f" % x, df['nav']))])
