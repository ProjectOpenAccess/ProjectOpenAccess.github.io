import csv
import json
import os
from geopy.geocoders import Nominatim

index_list = {
    "regione": 1,
    'provincia': 2,
    'codice_scuola': 5,
    'indirizzo': 7,
    'cap': 8,
    'nome_scuola': 6
}

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
