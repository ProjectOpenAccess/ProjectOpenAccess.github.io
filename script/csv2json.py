import csv

output = {}

# Italy
path_percentuali_italia = '../dataset/percentuali/percentuali_italia.csv'

with open(path_percentuali_italia, newline='') as csvfile:

    rows = csv.reader(csvfile, delimiter=',', quotechar='|')
    for row in rows:
        print(row)

    csvfile.close()
