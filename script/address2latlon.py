import csv
import json
import os
from geopy.geocoders import Nominatim
from pprint import pprint

path_bologna_json = 'dataset/geo/bologna.json'
path_nodups = 'dataset/allnodups.csv'
path_percedifici_json = 'json/percedifici.json'
path_scuoleeci_json = 'json/scuoleeci.json'


def address2latlon():

    # Get
    geolocator = Nominatim(user_agent="sebucci")

    buildings = []

    # Italy
    path_edifici_bologna = "script/bologna.csv"
    path_json_address = 'bologna.json'

    with open(path_edifici_bologna, 'r+') as csvfile:

        rows = csv.reader(csvfile, delimiter=',', quotechar='|')

        index = 1

        for row in rows:

            regione = row[1]
            provincia = row[2]
            codice_scuola = row[5]
            nome_scuola = row[6]

            indirizzo = row[7] + ' ' + row[8] + ' ' + row[2]

            location = geolocator.geocode(indirizzo)

            try:

                building = {
                    "codice_scuola": codice_scuola,
                    "nome_scuola": nome_scuola,
                    "regione": regione,
                    "provincia": provincia,
                    "indirizzo": indirizzo,
                    "posizione": {
                        "lat": location.latitude,
                        "lon": location.longitude
                    }
                }
                buildings.append(building)
                index = index + 1
            except:
                pass

        csvfile.close()

    with open(path_json_address, 'w') as fp:

        json.dump(buildings, fp)
        fp.close()


def getBolognaJson():

    return json.load(open(path_bologna_json))


def setBolognaJson(data):

    json.dump(data, open(path_bologna_json, 'w'))


def updateBolognaWithPunteggio():

    no_dups = csv.DictReader(open(path_nodups, 'r'))

    for row in no_dups:
        for school in bologna_json:
            if(row["CODICESCUOLA"] == school["codice_scuola"]):
                school["punteggio"] = row["PUNTEGGIOSCUOLA"]


def updateBolognaWithPercMedia():

    percedifici_json = json.load(open(path_percedifici_json))

    for row in percedifici_json:
        for school in bologna_json:
            if(row["Codice_scuola"] == school["codice_scuola"]):
                school["percentage"] = row["Perc_Media"]


def updateBolognaWithNumCI():

    scuoleeci_json = json.load(open(path_scuoleeci_json))

    for row in scuoleeci_json:
        for school in bologna_json:
            if(row["codicescuola"].upper() == school["codice_scuola"]):
                school["num_cultural_institute"] = row["numero_ci"]


"""
Start here
"""

# Bologna
bologna_json = getBolognaJson()

updateBolognaWithNumCI()

setBolognaJson(bologna_json)
