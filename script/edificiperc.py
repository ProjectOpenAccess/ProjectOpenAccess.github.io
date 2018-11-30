def process_data(source_csv_file_path):
    import csv
    data = list()
    with open(source_csv_file_path, 'r', encoding='utf-8-sig') as test:
        processed_data = csv.DictReader(test, delimiter=',')
        for x in processed_data:
            x = dict(x)
            data.append(x)
    return data


def percentualimixedifici (data, label):
    risultato = open("risultati.txt", "w+")
    listamix = listami(data, label)
    nicelabel = label.lower()
    nicelabel = nicelabel.capitalize()
    print(nicelabel, end="", flush=True)
    risultato.write("Perc_certificato_agibilita_abitabilita, Perc_certificato_collaudo_statico, Perc_certificato_omologazione_centrale_termi, Perc_certificato_prevenzione_incendi_cpi, Perc_nullaosta_provvisorio_prevenzione_incendi_nop, Perc_certificato_collaudo_impianto_spegnimento, Perc_documento_valutazione_rischio, Perc_piano_emergenza, Perc_Media\n")
    for scuola in listamix:
        risultato.write(perc_edilizia(data, scuola, label)+"\n")


def perc_edilizia(data, scuola, label):
    listaedilizia = ["certificato_agibilita_abitabilita", "certificato_collaudo_statico", "certificato_omologazione_centrale_termi", "certificato_prevenzione_incendi_cpi", "nullaosta_provvisorio_prevenzione_incendi_nop", "certificato_collaudo_impianto_spegnimento", "documento_valutazione_rischio","piano_emergenza"]
    dizperc = {}
    numed = 0
    #print(scuola + ", ", end="", flush=True)
    lastringa = scuola + ", "
    for x in data:
        if x[label] == scuola:
            numed = numed + 1
            for y in listaedilizia:
                if x[y] == 'SI':
                    dizperc[y+str(numed)] = 100
                else:
                    dizperc[y+str(numed)] = 0
        else:
            continue
    listina_percentualine = []
    for w in listaedilizia:
        totalino_xd = 0
        for key in dizperc:
            if w in key:
                totalino_xd = totalino_xd + dizperc.get(key)
            else:
                continue
        listina_percentualine.append(totalino_xd/numed)
        #print(str(totalino_xd/numed)+ " ,", end="",flush=True)
        lastringa = lastringa + str(totalino_xd/numed) + " ,"
    letotalfinal = 0
    for item in listina_percentualine:
        letotalfinal = letotalfinal + item
    #print(str(letotalfinal/8))
    lastringa = lastringa + str(letotalfinal/8)
    return lastringa



def listami(data,label):
    listaprovince = list()
    for scuola in data:
        listaprovince.append(scuola[label])
    listaprovince = set(listaprovince)
    return listaprovince


#percentualimixedifici(source, 'codice_scuola')


import json


def jsonize(data,nome):
    risultatojson = open(nome+".json", "w+")
    json_data = json.dumps(data)
    risultatojson.write(json_data)



