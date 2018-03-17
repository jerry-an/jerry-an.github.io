import pandas as pd
import sys
import json
df = pd.read_csv(sys.argv[1]).query('date==%s' % sys.argv[2])
print df.head()
data = {}
data['top'] = ["%06d" % int(x) for x in df.sort_values(by='weight').head()['symbol'].tolist()]
data['bottom'] =["%06d" % int(x) for x in df.sort_values(by='weight', ascending=False).head()['symbol'].tolist()]
print json.dumps(data, indent=1)
