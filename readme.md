TO DO
Inserire veloce sezione sui risultati finora ottenuti nei limiti dei dati visualizzabili in demo.
Scrivere criteri che abbiamo usato per rappresentare le percentuali edilizie/numero di cultural institutes
 



# School self-evaluation, building certifications and cultural institutes: what relationship?

Francesca Giovannetti  
Bruno Sartini  
Gianmarco Spinaci

## 1. Introduction

In recent years, Italy's school system has become a hot topic. The Italian education system is often put in comparison with other European education systems, for example in terms of fundings and student performance (see articles by [Il Sole 24 ORE](https://www.ilsole24ore.com/art/notizie/2017-08-29/italia-terzultima-europa-spesa-istruzione-germania-spende-doppio-190050.shtml?uuid=AE8jEVJC) and [Repubblica](https://www.repubblica.it/scuola/2016/12/06/news/ocse_scuola_studenti_nord_e_sud-153559264/).   

Another much debated topic is school safety. In 2016, about 44 structural failures and collapses in Italian schools were registered (see [Corriere della Sera](https://www.corriere.it/scuola/medie/17_novembre_22/edilizia-scolastica-44-crolli-all-anno-miur-piu-due-miliardi-arrivo-ce09130a-cf75-11e7-a1da-9278adb4d756.shtml)).

On the positive side, Italy is known all over the world for its rich cultural heritage. Collaboration between cultural institutions and schools is crucial in order to build a connection between the youngest generations and the cultural richness of their country. 

In this light, two questions naturally arise:
1. Does the presence of libraries, museums and other cultural institutions in the surroundings of schools impact the way schools evaluate their teaching performance? 
2. Do building certifications also play a role in school self-evaluation?

This project will look at school self-evaluations from a particular perspective to find out whether the presence or lack of cultural institutions and of building certifications are among the factors affecting school performance. Because of the topics it deals with, we named the project SEBuCCI (Self-Evaluation, Buildings Certificates, Cultural Institutions).

## 2. Application scenario

SEBuCCI aligns data from different sources in order to achieve the objective of gaining insight, thanks to data, into school self-evaluations. In particular SEBuCCI looks at the availability or absence of school safety certifications and cultural institutions, such as libraries and museums, as possible reasons behind school self-evaluation results. 

### 2.1 School self-evaluation

School self-evaluation is a reflective process of internal school review. Every year, italian schools are required to assess themselves on the basis of 11 criteria.

Schools follow a provided list of questions on the basis of which assign themselves a grade for each criteron according to a 1-7 scale:
- 1 = Extremely critical
- 3 = Moderately critical
- 5 = Positive
- 7 = Excellent

The results are grouped into two main sections:

- Esiti (Evaluations): revolving around student results (criteria 21-24);
- Processi (Processes): revolving around school activities (criteria 31-37).

SEBuCCI focuses on criterion 21 'Risultati Scolastici' (Overall student performance) as it is particularly relevant to the aim of the project. We expected that, among all, student performance would be the most affected by closeness to cultural institutions and safety of school buildings. 

### 2.2 The data

Every year, MiUR (Italian Ministry of Education, University and Research) makes available the open datasets containing the results of school self-evaluations. Specifically, the datasets feature assigned grades and textual explanations for the grades. 

MiUR also publishes irregular updates on school safety certificates as open data. 

SEBuCCI aligns school self-evaluations with school safety certificates to find out if there is a trend (i.e. highest grades when certificates are in accordance with applicable law). 

SEBuCCI makes also use of the open dataset of 'Luoghi culturali' (Cultural institutions) published by MiBACT (Italian Ministry of Cultural Heritage and Activities) to identify and locate cultural institutions and their proximity to schools in Italy. 

### 2.3 E-Governance

In the context of E-Governance, SEBuCCI might play a role in:

- promoting debate among citizens, who could press municipalities for an increase of the presence of cultural institutions such as libraries in the areas where these are not available.

- helping schools to become aware of the presence of nearby cultural institutions so to increase collaborative projects and visits.  

### 2.2 E-Governance Connotation

In the context of E-Governance, SEBuCCI might play a role in:

- promoting debate among citizens, who could press municipalities for an increase of the presence of cultural institutions such as libraries in the areas where these are not available.

- helping schools to become aware of the presence of nearby cultural institutions so to increase collaborative projects and visits.  


### 1.1 Why SEBuCCI?

School self-evaluation is a process of internal school review carried out by the teachers every year. The teachers assign

The italian Ministry of Education, University and Research (MIUR) makes available yearly datasets of school self-evaluations. The datasets feature grades and free-text explanations for each grade. 

However, 1328 schools chose not to give any explanations ('Motivazioni non dichiarate'), 6 schools filled the form with a single full-stop ('.'). 

Notwithstanding the presence of explanations, the reasons behind school grades are not clear-cut. Schools tend to describe the activities carried out during the academic year, with little explanation on how such activities may have had an impact on their performance. Similarly, schools provide statistics about students performance without discussing the underlying reasons. 

<!-- Dovremmo scrivere più informazioni sul why -->

### 1.2 The SEBuCCI rationale



The aim of this project is to gain insight -  through data - into the reasons behind the result of school self-evaluations, in order to find out whether building certifications and nearby cultural institutions affect the results of school evaluations.

In order to achieve this, the project aligns 1) the results of school evaluation for a.y. 2016-2017; 2) the data related to school building certifications (especially habitability and earthquake resistance); 3) the geo-data about cultural institutions such as libraries and museums in the school surroundings. 

The result would be a an Explorable map that is able to represent all of the aspects reported above for each singular school in our territory. <!-- Più cose da scrivere anche nella mappa finale, magari non nel dettaglio come nella visualization però comunque un qualcosa di più corposo -->

The datasets used for this experiment come from MIUR (italian Ministry of Education, University and Research) and MiBACT (italian Ministry of Cultural Heritage and Activities). 


## 3. Original datasets and mashup

### D1

MIUR, 13 February 2018, Autovalutazione della scuola sezione Esiti. Scuola statale, electronic dataset, Portale Unico dei Dati della Scuola, viewed 11 November 2018, http://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?datasetId=DS0500VALUTAZIONE_ESITI_STA  

License: https://www.dati.gov.it/content/italian-open-data-license-v20

Content description: This dataset lists the institutes by their institute codes and it stores for each institute the self-evaluation for every criterium in the Esiti section (more details in [Section 2.1] (https://github.com/sebucci/sebucci.github.io/blob/master/readme.md#21-school-self-evaluation)


### D2

MIUR, 27 September 2018, Certificazioni e documenti relativi alla sicurezza, electronic dataset, Portale Unico dei Dati della Scuola, viewed 11 November 2018, http://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?datasetId=DS0280EDICONSICUREZZASTA

License: https://www.dati.gov.it/content/italian-open-data-license-v20

Content description: This datasets lists for every school's building information about its certifications (described in detail in section XXX above <!-- Ricordarsi di cambiare questo -->

### D3

MiBACT, 10 November 2018 (modified), Luoghi della cultura, electronic dataset, Gli Open Data, viewed 11 November 2018, http://dati.beniculturali.it/dataset/dataset-luoghi.ttl  

License: https://creativecommons.org/licenses/by/3.0/

Content description: This dataset contains every cultural place of Italy giving out information about its location, identification and some of its services.

### D4.1 (auxiliary dataset)

MIUR, 13 February 2018, Rubrica di valutazione utilizzata dalla scuola per l'autovalutazione, electronic dataset, Portale Unico dei Dati della Scuola, viewed 11 November 2018, http://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?datasetId=DS0540RUBRICA_VAL

License: https://www.dati.gov.it/content/italian-open-data-license-v20

Content description: This dataset is an explicatory guide that refers to the criteria used in D1. It is pre-compiled by MIUR and it gives our contextual information about every criterium. 

### D4.2 (auxiliary dataset)

MIUR, 22 June 2018, Informazioni anagrafiche scuole statali, electronic dataset, Portale Unico dei Dati della Scuola, viewed 11 November 2018, http://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?datasetId=DS0400SCUANAGRAFESTAT

License: https://www.dati.gov.it/content/italian-open-data-license-v20

Content description: This dataset lists for each school building its location information according to Geographical Area (North, Sud, Isles), Region, Province and Municipality.

### D4.3 (auxiliary dataset)

ISTAT, 01 February 2018, Principali statistiche geografiche sui comuni - Superfici delle unità amministrative, Istat Archive (Also accessible through sparql end point in istat open data website), https://www.istat.it/it/archivio/156224

License: https://www.istat.it/it/note-legali

Content description: Istat, with the purpose to describe geographical characteristics of the territory, shares elaborations based on data collected in census surveys or other sources, that refers to the principal units of territory that interests official statistics. In this dataset it is reported the surface (in km^2 and ha) of Italy, its regions, provinces and municipalities.

### D5 (mashup)  <!-- Siamo sicuri di volerlo inserire qui? -->

Dataset: [dataset link]  
Metadata: [metadata XML/RDF link]

Content description:

Metodology: The mashup of the datasets D1, D2, D4.2 was done semi-automatically through some python scripts, in particular using the Pandas library, that required the csv-version of the datasets. The script developed using pandas joined D4.2 and D2 through the keyword "CODICESCUOLA" and then again it joined the newly-created dataset with D1 through the keyword "CODICEISTITUTO". This version of D5 was called D5-alpha.
```python
import pandas as pd


def Aligner(source1,source2,nomeoutput,campo):
    a = pd.read_csv(source1,encoding='utf-8')
    b = pd.read_csv(source2,encoding='utf-8')
    aligned = a.merge(b, on=campo)
    aligned.to_csv(nomeoutput,index=False)
```

After the semi-automatic mashup D5-alpha was edited because it still contained some unnecessary data. 
Because D4.2 contained some items related to "Scuola dell'infanzia" that are not covered by the project, in D5-alpha these items have been removed. Then, other unnecessary fields have been removed and the headings of the csv have been modified in order to make it easier for the computation process (Explained [below](https://github.com/sebucci/sebucci.github.io/blob/master/readme.md#51-processing-data-through-computation))

The final CSV dataset obtained was then transformed into a RDF dataset through an XSLT script. For each school an RDF description was created where the column headings of the CSV input dataset were converted to properties. The RDF dataset obtained makes use of different ontologies, such as [DCMI Metadata Terms](http://dublincore.org/documents/dcmi-terms/), [Dublin Core Metadata Element Set](http://www.dublincore.org/documents/dces/), [GeoNames](https://www.geonames.org/), [FOAF](http://xmlns.com/foaf/spec/), [Cultural-ON (Cultural ONtology)](http://dati.beniculturali.it/lodview/cis/.html).

## 4. Datasets analysis

### 4.1 Information quality
_D1, D2 contengono solo il codice scuola ed è necessario ricorrere a D4.2 per disambiguare, il che ha poco senso. Se avessero voluto mantenere una forma di privacy non avrebbero dovuto pubblicare il dataset utile alla disambiguazione. A questo punto tanto valeva inserire direttamente il nome della scuola e la suddivisione in province nel dataset dell'autovalutazione_

_D3 è in formato open XML/RDF e contiene informazioni utili al fine della geolocalizzazione dei luoghi culturali, ben fatto a mio avviso_

_metadati_

_Nel tracciato record del Dataset 1 manca una spiegazione chiara del codice criterio e siamo quindi dovuti ricorrere a un dataset ausiliario, comunque anch'esso poco chiaro_

_Nel dataset D2 non ci sono dati relativi alle certificazioni in corso_

_Nel dataset 2 ci sono dei trattini con un significato ambiguo_

_I codici istituto sono da disambiguare (istituto Forlì usa vecchio codice provincia fo anziché FC)._ // <-- direi di no

_Nel dataset D3 e D4.3 le province della sardegna non sono state aggiornate secondo la legge regionale 4 febbraio 2016 n.2 sul riordino del sistema delle autonomie locali. In questa legge le province della sardegna sono passate da 8 a 4 (cagliari è diventata da provincia a città metropolitana mentre alcune province sono state inglobate da altre ed è stata formata la provincia  "sud sardegna" http://www.regione.sardegna.it/j/v/1270?s=300929&v=2&c=13906&t=1&anno )_



### 4.2 Juridical analysis (privacy, licenses, purposes, etc.)

#### Privacy

Although it does not contain any direct reference to natural persons (e.g. name, address, driving license, detailed physical description), D1 includes indirect information from which it could still be possible to trace the individuals referenced. Some significant examples are:

* "[...] come nella classe dove essendoci un alunno affetto da ipoacusia; tutta la classe ha voluto integrare il proprio curriculum con l'apprendimento del LIS (linguaggio dei segni) supportati dall'assistente alla comunicazione."
* "Nell'anno scolastico in corso sono stati sospesi due alunni della scuola primaria per lesioni ai compagni."
* "Le rarissime situazioni nelle quali si evidenzia l'assoluta necessita' di 'ripetere l'anno' (quest'anno un alunno diversamente abile di quinta; lo scorso anno due alunni Rom; inseriti solo a meta' anno in quinta; che finalmente avevano cominciato venire a scuola volentieri!)"
* "La scarsa capacita' di concentrazione dei ragazzi e l'assenza delle famiglie; poco inclini ad alzare la voce quando e' necessario; portano al risultato che i ragazzi non ascoltano; a volte non riescono neanche a rimanere seduti al banco."
* "Nel corrente anno scolastico nel nostro istituto ci sono stati solo due alunni non ammessi: un alunno straniero che non ha praticamente frequentato e un altro che non ha raggiunto gli obiettivi minimi previsti."
* "Nel presente anno scolastico non sono stati ammessi alla classe successiva due alunni della scuola primaria [...]. La motivazione delle non ammissioni si puo' riassumere nei seguenti punti: mancato raggiungimento degli obiettivi minimi programmati assenze (non giustificate da un valido motivo) oltre il limite previsto a livello normativo"
* "Se si esclude un'alunna straniera che si e' ritirata per tornare in Romania (a.s. 2015/16), tutti gli alunni della Scuola primaria negli ultimi due anni scolastici sono stati ammessi alla classe successiva."
* "Solo un'alunna delle nostre classi quinte dell'a.s. 2015/16 non e' stata ammessa alla classe successiva nella scuola secondaria di primo grado nel corrente anno scolastico."
* "1 alunna disabile per fermo pedagogico e 4 trasferiti a.s. 2014/15"

We propose three possibile solutions:
1. Remove all free-text explanations for school self-evaluation;
2. Provide schools with pre-compiled questionnaire in place of guidelines;
3. Check text semi-automatically before publication (most ideal in order not to loose interesting information, but also most expensive).

#### Licenses

D1, D2, D4.1 and D4.2 (MIUR) are licensed under the Italian Open Data License (IODL) v2.0, very similar to a CC-BY 4.0. Each dataset is accompanyed by a clear license declaration. However, the whole website is covered by a "All rights reserved" copyright statement, which does not explicitly mentions the exclusion of the contents accompanied by a IODL 2.0 license. 

The metadata of D3 (MiBACT) do not specify a license e.g. by using the property `dcterms:license` (see http://dati.beniculturali.it/lodview/resource/datasetLuoghiDellaCultura.html). Information about licenses is featured in the website footer only. The dataset about "Luoghi culturali" is licensed under CC BY-SA 3.0, which requires attribution and share-alike.

### 4.3 Ethical analysis

_e qui? Se affrontiamo il problema della privacy sopra, cosa scriviamo? Ripetere oppure unire i due punti in una sezione "Analisi etico-giuridica?"_

_frequenza di aggiornamento dei dati, dati edilizia da poco aggiornati_

### 4.4 Technical analysis (formats, metadata, URIs, provenance)

1. All the MIUR datasets taken into consideration (D1, D2, D4.1 and D4.2) use the following date format: full year plus second half of following year with no white spaces or slashes between the two (e.g. 201617). This makes it difficult for machines as well as humans to clearly identify the nature of these particular pieces of data (i.e. the fact that they represent consecutive years and not year plus month if last two digits go from 1 to 12). Furthermore the datasets cover an academic year, meaning that the data do not cover the period going from e.g. January 2016 to December 2017.  
Durations in CSV could be specified as a time interval according to the standard ISO_8601: YYYY-MM-DD/YYYY-MM-DD (e.g. 2016-09-01/2017-08-31).

2. D1 features text in slovenian (slovenian schools in Friuli Venezia Giulia express their self-evaluation in slovenian rather than italian). Languages should be declared at least in the XML/RDF dataset as shown below.

```xml
<miur:MOTIVAZIONEPUNTEGGIOSCUOLA xml:lang="sl">
	[description in slovenian]
</miur:MOTIVAZIONEPUNTEGGIOSCUOLA>
```

3. _nella versione XML/RDF dei dataset MIUR sono specificati vari namespace fra i quali dicat, ma nessuno di essi è effettivamente impiegato_

4. In the MIUR page of the csv D1 dataset there is no indication about the encoding of the file (if it's ASCII, ISO-8859-1). This problem can create various problems in the automatic computation of the data. In fact, a wrong encoding declaration during the analysis may create incorrect data results (some cells may be skipped for example). After trying multiple encodings, the only one that seemed to work without corrupting, using Python library "csv", was "utf-8-sig" ([see Python documentation about it here](https://docs.python.org/2/library/codecs.html#encodings-and-unicode)). An example of a script using that encoding can be seen in section 5.1

### 4.5 Updating the dataset over time

### 4.6 Summary

| Id | Problem description | Severity (1-3) | Type (Syntax/Semantics) | Proposed solution |
|-------------------------------|----------------------------|----------------|-------------------------|----------------------------|
| D1, D2, D4.1, D4.2 / Column A | Ambiguous date format used | 1.5 | Syntax | Adopt ISO 8601 date format |
| D1 | Indirect information about individuals | 3 | Semantics, Privacy | Remove information |
| D3, D4.3 | Incorrect information about Sardinia's provinces | 2.5 | Outdated content | Combination of manual and automatic methods to redistribute data in the correct provinces |
| D1 | Encoding of the dataset not specified | 2 | Technical | Include a note on the download page of the dataset stating its encoding |
   

## 5. Visualization

### 5.1 Processing data through computation

Although the final dataset has been released on RDF format, the csv has been kept because of the further computation that have been done in order to gather the data that would be visualized.

Python has been used in order to process the csv. Every row of the csv has been converted into a list of dictionaries with the help of the "csv" library that handles this kind of format:
```python
def process_data(source_csv_file_path):
    import csv
    data = list()
    with open(source_csv_file_path, 'r', encoding='utf-8-sig') as test:  #Notice the utf-8-sig
        processed_data = csv.DictReader(test, delimiter=',')
        for x in processed_data:
            x = dict(x)
            data.append(x)
    return data
 ```
and then we developed some algorithms in order to calculate percentages and extract particular data useful for the visualization. <!-- Potrei Parlare in particolare dei processi -->
```python
import json
def ansia(data):
	return None
```

Once the final sub-datasets that were used for the computation were acquired, we used the "json" Python library to convert them into a json format as it was one of the inputs requested by the visualization library.
```python
import json
def jsonize(data,nome):
    risultatojson = open(nome+".json", "w+")  #automatically creates a json file with the name specified in the input
    json_data = json.dumps(data)  #converts the data into json format
    risultatojson.write(json_data) #writes on the new file the converted data
```


**Get Latitude and Longitude of schools from address:**

To do this we used the script: [address2latlon.py](https://github.com/sebucci/sebucci.github.io/blob/master/script/address2latlon.py)

### 5.2 Handling visualization (technical description)

In order to visualize data we used some libraries:

* **leaflet.js**: An open-source JavaScript library for mobile-friendly interactive maps.
* **chart.js**: Simple yet flexible JavaScript charting for designers & developers.
* **bootstrap**: Build responsive, mobile-first projects on the web with the world's most popular front-end component library.

**Leaflet.js**

* Code &copy; [BSD](https://github.com/Leaflet/Leaflet/blob/master/LICENSE)
* Data &copy; [OpenStreetMap contributors](https://www.openstreetmap.org/copyright) 

* Using [Wikimedia Tile](https://foundation.wikimedia.org/wiki/Maps_Terms_of_Use) uses we are complying with [OpenStreetMap copyright policy](https://www.openstreetmap.org/copyright)

**OpenStreetMap** 

Both **Wikimedia Tile** and **Leaflet** use Data from **OpenStreetMap** 

* Data &copy; [ODbL](https://www.openstreetmap.org/copyright)

**GEOJSON**: With Leaflet is possible to draw polygons directly from geojson files:

* Regions: For drawing regions we have used data that we found in this [repository](https://github.com/stefanocudini/leaflet-geojson-selector/blob/master/examples/italy-regions.json).

* Provinces: For drawing provinces we used data that we found in this [repository](https://github.com/Dataninja/geo-shapes/tree/master/italy/regions).
**NOTE** For each region, we have a single json file containing the region. The provinces of Sardegna are not updated to 2017.

* Sardegna: For handling the problem listed above, we retrieved data from [CONFINI DELLE UNITÀ AMMINISTRATIVE A FINI STATISTICI AL 1 GENNAIO 2018](https://www.istat.it/it/archivio/222527). [CC BY 3.0](https://www.istat.it/it/note-legali)

#### Chart.js

To visualize the percentages of self-evaluations we used a bar chart [MIT license](https://www.chartjs.org/docs/latest/notes/license.html).

#### Bootstrap

v4.1.3., Code &copy; MIT, Docs CC BY 3.0.

#### Passages

1. Created the webpage using Github pages.
2. Added the map using **leaflet.js**, and we added GeoJSON data (regions and provinces) to draw layers on it
3. todo
