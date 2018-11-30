
def process_data(source_csv_file_path):
    import csv
    data = list()
    with open(source_csv_file_path, 'r', encoding='utf-8-sig') as test:
        processed_data = csv.DictReader(test, delimiter=',')
        for x in processed_data:
            x = dict(x)
            data.append(x)
    return data


def percentualixd(data):
    print("Valutazione, Percentuale, Numero")
    numeri = ["1","2","3","4","5","6","7"]
    for x in numeri:
        tot = 0
        for y in data:
            if y["PUNTEGGIOSCUOLA"] == x:
                tot = tot + 1
            else:
                continue
        print(str(x) + "," + str(tot*100/32516) + "," + str(tot))
    return tot



def listami(data,label):
    listaprovince = list()
    for scuola in data:
        listaprovince.append(scuola[label])
    listaprovince = set(listaprovince)
    return listaprovince




def percentualsingle(data, label, label2):
    numeri = ["1","2","3","4","5","6","7"]
    dizionario = {}
    tot2 = 0
    print(label, end="", flush=True)
    for x in numeri:
        tot = 0
        for y in data:
            if y[label2] == label:
                tot2 = tot2+1
                if y['PUNTEGGIOSCUOLA'] == x:
                    tot = tot +1
                else:
                    continue
            else:
                continue
        dizionario[x] = str(tot)
        dizionario[x+"perc"] = str(tot*100/totalnumber(data,label2,label))
        for key in dizionario:
            print(", " + dizionario.get(key),end="",flush=True)
        dizionario.clear()
    print("")


def totalnumber(data, label2,label):
    tot = 0
    for y in data:
        if y[label2] == label:
            tot = tot+1
    return tot


def percentualimix (data, label):
    numeri = ["1","2","3","4","5","6","7"]
    listamix = listami(data, label)
    nicelabel = label.lower()
    nicelabel = nicelabel.capitalize()
    print(nicelabel, end="", flush=True)
    for x in numeri:
        print(", " + x +"tot, " + x+"perc", end="", flush=True)
    print("")
    for x in listamix:
        percentualsingle(data, x, label)






