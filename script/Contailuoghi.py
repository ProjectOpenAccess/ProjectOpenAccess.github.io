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
        if scuola[label] != "":
            listaprovince.append(scuola[label])
    listaprovince = set(listaprovince)
    return listaprovince



def csvprovincialuoghi (data, label):
    listacap = listami(data,label)
    diz = dict()
    for cap in listacap:
        x = 0
        for row in data:
            if cap == row[label]:
                x = x+1
            else:
                continue
            diz[cap] = x
    return diz

def stupiddiz (data,label1,label2):
    diz2 = dict()
    for x in data:
        diz2[x[label1]] = x[label2]
    return diz2



def dictocsv (dict,nome):
    risultatocsv = open(nome + ".csv", "w+")
    risultatocsv.write("provincia,luogoperkm2\n")
    for key in dict:
        risultatocsv.write(str(key)+","+str(dict[key])+"\n")

#dictocsv(dizionariocap, "provacsvcap")

def dizionariofinale(diz1,diz2):
    dizfinale = dict()
    for key1 in diz1:
        dizfinale[key1] = float(diz1[key1])/float(diz2[key1])
    return dizfinale




