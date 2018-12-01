def process_data(source_csv_file_path):
    import csv
    data = list()
    with open(source_csv_file_path, 'r', encoding='utf-8-sig') as test:
        processed_data = csv.DictReader(test, delimiter=',')
        for x in processed_data:
            x = dict(x)
            data.append(x)
    return data




def listami(data,label):
    listaprovince = list()
    for scuola in data:
        listaprovince.append(scuola[label])
    listaprovince = set(listaprovince)
    return listaprovince

def percmix (data,label):
    listina = listami(data,label)
    dizzino = {}
    print(label + ", mediaperc")
    for x in listina:
        tot= 0
        sommapmedie = 0
        for y in data:
            if x == y[label]:
                tot = tot+1
                sommapmedie = sommapmedie + float(y["Perc_Media"])
            else:
                continue
        print(x + ", " + str(sommapmedie/tot))


