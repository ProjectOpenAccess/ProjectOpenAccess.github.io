# The SEBuCCI project. School self-evaluation, building certifications and cultural institutions: what relationship?

Francesca Giovannetti  
Bruno Sartini  
Gianmarco Spinaci

## 1. Introduction

In recent years, Italy's school system has become a hot topic. The Italian education system is often put in comparison with other European systems; for instance as concerns fundings and student performance (see articles by [Il Sole 24 ORE](https://www.ilsole24ore.com/art/notizie/2017-08-29/italia-terzultima-europa-spesa-istruzione-germania-spende-doppio-190050.shtml?uuid=AE8jEVJC) and [Repubblica](https://www.repubblica.it/scuola/2016/12/06/news/ocse_scuola_studenti_nord_e_sud-153559264/).   

School safety is another much debated topic. In 2016, about 44 structural failures and collapses in Italian schools have been registered (see [Corriere della Sera](https://www.corriere.it/scuola/medie/17_novembre_22/edilizia-scolastica-44-crolli-all-anno-MIUR-piu-due-miliardi-arrivo-ce09130a-cf75-11e7-a1da-9278adb4d756.shtml)).

On the positive side, Italy is known all over the world for its rich cultural heritage. The SEBuCCI project promotes the idea that collaboration between cultural institutions and schools is crucial in order to build a connection between the youngest generations and the cultural richness of their country. 

In this light, two questions naturally arise:
1. Does the presence of libraries, museums and other cultural institutions in school surroundings impact how schools evaluate their teaching performance? 
2. Do building certifications also play a role in school self-evaluation?

SEBuCCI will look at school self-evaluations from a particular perspective to find out whether **the presence or lack of cultural institutions and of building certifications is among the factors affecting school performance**. We named the project SEBuCCI (Self-Evaluation, Buildings Certificates, Cultural Institutions) because of the topics it focuses on.

## 2. Application scenario

SEBuCCI aligns data from different sources in order to gain insight, through to data, into school self-evaluations. In particular, SEBuCCI looks at available school safety certificates and cultural institutions, such as libraries and museums, as possible reasons behind positive school self-evaluation results. 

In order to achieve this, the project aligns 1) the results of school self-evaluation for school year 2016-2017; 2) the data related to school building certificates (especially habitability and earthquake resistance); 3) the geo-data about cultural institutions such as libraries and museums in the school surroundings. The result will be a an explorable map which allows users to visualize data about school self-evaluations, school safety certificates and cultural institutions for each school in Italy.

### 2.1 School self-evaluation

School self-evaluation is a reflective process of internal school review. Every year, Italian schools are required to assess themselves on the basis of 11 criteria.

Schools follow a provided list of questions on the basis of which assign themselves a grade for each criterion according to a 1-7 scale:
- 1 = Extremely critical
- 3 = Moderately critical
- 5 = Positive
- 7 = Excellent

The results are grouped into two main sections:

- Esiti (Evaluations): revolving around student results (criteria 21-24);
- Processi (Processes): revolving around school activities (criteria 31-37).

SEBuCCI focuses on criterion 21 'Risultati Scolastici' (Overall student performance) as it is particularly relevant to the aim of the project. We expected that, among all, student performance would be the most affected by closeness to cultural institutions and safety of school buildings. 

### 2.2 The data

Every year, MIUR (Italian Ministry of Education, University and Research) makes available open datasets containing the results of school self-evaluations. Specifically, the datasets feature school self-evaluation results and free-text result explanations. 

MIUR also publishes irregular updates on school safety certificates as open data. 

SEBuCCI aligns school self-evaluations with school safety certificates to find out if there is a trend (i.e. highest grades when certificates are in accordance with applicable law). 

SEBuCCI makes also use of the open dataset of 'Luoghi culturali' (Cultural institutions) published by MiBACT (Italian Ministry of Cultural Heritage and Activities) to identify and locate cultural institutions and their proximity to schools in Italy. 

### 2.3 How SEBuCCI can contribute to E-Governance

In the context of E-Governance, SEBuCCI might play a role in:

- promoting debate among citizens, who could press municipalities for an increase of the presence of cultural institutions such as libraries in the areas where these are not available.

- helping schools to become aware of the presence of nearby cultural institutions so to increase collaborative projects and visits.

- raising awareness over the status of school safety certificates.

## 3. Original datasets and mashup

### D1

MIUR, 13 February 2018, Autovalutazione della scuola sezione Esiti. Scuola statale, electronic dataset, Portale Unico dei Dati della Scuola, viewed 11 November 2018, http://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?datasetId=DS0500VALUTAZIONE_ESITI_STA  

License: https://www.dati.gov.it/content/italian-open-data-license-v20

Content description: This dataset lists all Italian institutes by institute code and stores for each institute self-evaluations for every criterion of the Esiti section ((see 2.1)[https://github.com/sebucci/sebucci.github.io/blob/master/readme.md#21-school-self-evaluation])

### D2

MIUR, 27 September 2018, Certificazioni e documenti relativi alla sicurezza, electronic dataset, Portale Unico dei Dati della Scuola, viewed 11 November 2018, http://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?datasetId=DS0280EDICONSICUREZZASTA

License: https://www.dati.gov.it/content/italian-open-data-license-v20

Content description: This dataset provides the list of building safety certifications for each school in Italy. 

### D3

MiBACT, 10 November 2018 (modified), Luoghi della cultura, electronic dataset, Gli Open Data, viewed 11 November 2018, http://dati.beniculturali.it/datasets/luoghi-della-cultura  

License: https://creativecommons.org/licenses/by/3.0/

Content description: This dataset lists cultural institutions in Italy providing information about their location, identification and services.

Note: this dataset is available as RDF only and it is used in SEBuCCI just for visualization purposes. In order to extract the data we used the [SPARQL endpoint](http://dati.beniculturali.it/sparql) of dati.beniculturali.it with the following query:

```sparql
select * where {

select distinct ?s as ?subject

?Nome_Istituzionale
?Descrizione
?ISILIdentifier
?Latitudine
?Longitudine
?Disciplina
?Indirizzo
?Codice_postale
?Comune
?Provincia

where {

graph <http://dati.beniculturali.it/mibact/luoghi> {

?s rdf:type cis:CulturalInstituteOrSite ;
cis:institutionalName ?Nome_Istituzionale .
optional { ?s cis:description ?Descrizione }
optional { ?s cis:ISILIdentifier ?ISILIdentifier }
optional { ?s geo:lat ?Latitudine }
optional { ?s geo:long ?Longitudine }
optional { ?s cis:hasDiscipline [cis:name ?Disciplina] }
optional {
?s cis:hasSite [cis:hasAddress ?address ] .
optional { ?address cis:fullAddress ?Indirizzo   }
optional { ?address cis:postCode ?Codice_postale }
optional { ?address cis:postName ?Comune         }
optional { ?address cis:adminUnitL2 ?Provincia   }
}
}
}
}
```
### D4.1 (auxiliary dataset)

MIUR, 13 February 2018, Rubrica di valutazione utilizzata dalla scuola per l'autovalutazione, electronic dataset, Portale Unico dei Dati della Scuola, viewed 11 November 2018, http://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?datasetId=DS0540RUBRICA_VAL

License: https://www.dati.gov.it/content/italian-open-data-license-v20

Content description: This dataset is an explicatory guide that refers to the criteria used in D1. It is pre-compiled by MIUR and it gives our contextual information about every criterion. 

### D4.2 (auxiliary dataset)

MIUR, 22 June 2018, Informazioni anagrafiche scuole statali, electronic dataset, Portale Unico dei Dati della Scuola, viewed 11 November 2018, http://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?datasetId=DS0400SCUANAGRAFESTAT

License: https://www.dati.gov.it/content/italian-open-data-license-v20

Content description: This dataset lists the location of each school building according to the geographical area (north, south, isles), region, province and municipality.

### D4.3 (auxiliary dataset)

ISTAT, 01 February 2018, Principali statistiche geografiche sui comuni - Superfici delle unità amministrative, Istat Archive (also accessible through SPARQL endpoint on ISTAT open data portal), https://www.istat.it/it/archivio/156224

License: https://www.istat.it/it/note-legali

Content description: With the purpose of describing the geographical characteristics of the Italian territory, ISTAT shares elaborations based on data collected from surveys and other sources. This dataset reports the surface of Italy (in km^2 and ha), alongside with its regions, provinces and municipalities.

### D5 (mashup)

Dataset: https://github.com/sebucci/sebucci.github.io/blob/master/dataset/dataset.rdf  
Metadata: https://github.com/sebucci/sebucci.github.io/blob/master/metadati/metadata.ttl

Content description: The dataset lists all Italian schools. For each school the following attributes are given: region, province, institute, name, address, buildings, evaluation.
For each school building the dataset lists the available safety certificates.

Methodology: The mashup of datasets D1, D2, D4.2 was done semi-automatically using Python scripts and the library Pandas, which required a CSV version of the datasets as an input. The script developed using Pandas was able to align D2 and D4.2 through the property "CODICESCUOLA". The newly created dataset was then aligned with D1 through the property "CODICEISTITUTO". This version of D5 (in CSV format) was named D5-alpha.

Here is the Python script developed:
```python
import pandas as pd


def Aligner(source1,source2,nomeoutput,campo):
    a = pd.read_csv(source1,encoding='utf-8')
    b = pd.read_csv(source2,encoding='utf-8')
    aligned = a.merge(b, on=campo)
    aligned.to_csv(nomeoutput,index=False)
```

After the semi-automatic mashup, D5-alpha was edited to remove unnecessary data such as data related to "Scuola dell'infanzia", not covered by this project. Subsequently, the headings of the CSV dataset were modified in order to facilitate further computation processes (see [below](https://github.com/sebucci/sebucci.github.io/blob/master/readme.md#51-processing-data-through-computation))

Finally, the CSV dataset obtained was transformed into a RDF dataset through an XSLT script. For each school an RDF description was created where the column headings of the CSV input dataset were converted to RDF properties. The RDF dataset obtained makes use of different ontologies, such as [DCMI Metadata Terms](http://dublincore.org/documents/dcmi-terms/), [Dublin Core Metadata Element Set](http://www.dublincore.org/documents/dces/), [GeoNames](https://www.geonames.org/), [FOAF](http://xmlns.com/foaf/spec/), [Cultural-ON (Cultural ONtology)](http://dati.beniculturali.it/lodview/cis/.html).

### D6 (Revision)

Dataset: https://github.com/sebucci/sebucci.github.io/blob/master/dataset/culturalinstituterevised.csv
Metadata: https://github.com/sebucci/sebucci.github.io/blob/master/metadati/metadata.ttl

We decided to make a revision on D3, that includes a correction on some UTF-8 characters that got encoded wrong and also an update on Sardinia's Provinces (problem discussed [below](https://github.com/sebucci/sebucci.github.io/blob/master/readme.md#41-information-quality)). Moreover, we took out some elements of the original dataset that we didn't need for the visualization.

## 4. Datasets analysis

### 4.1 Information quality

In this section we make some observations related to information quality in the main datasets used in SEBuCCI (D1, D2, D3) according to the ["Linee guida per la valorizzazione del patrimonio informativo pubblico" by AGID](https://www.agid.gov.it/it/agenzia/stampa-e-comunicazione/notizie/2017/08/03/open-data-online-linee-guida-valorizzazione-del-patrimonio-informativo-pubblico). 

|  | accuracy | coherence | completeness | currentness | 
|----|-------------------------|------------------|-------------------------|------------------|
| D1 | No. See point 1. | No. See point 6. | No. See points 2 and 3. | Yes |
| D2 | No. See points 1 and 4. | Yes. | No. See points 1 and 4. | Yes |
| D3 | Yes. | Yes. | No see point 7. | No. See point 5. |

1. D1 and D2 do not feature school names. Schools are indeed identified by school codes only. This made it necessary to use an auxiliary dataset (D4.2) in order to disambiguate school names.

2. D1 lists school self-evaluation criteria, but does not provide any information about the meaning of such criteria. In order to fill this gap, we used an auxiliary dataset (D4.1). 

3. D1 features fields filled with sporadic full stops, whose meaning remains unclear, in place of explanations of self-evaluation results. 

4. D2 features ambiguous information about the situation of safety certificates. Normal values are YES or NO. However, 'Non richiesto' (Not requested) and '-' can also be found in the dataset without any accompanying explanation on their meaning.

5. D3 do not feature up-to-date information for what concerns Sardinia provinces, which changed in 2016 going from a total of 8 to a total of 4 ([see Legge Regionale 4 Febbraio 2016 n.2](http://www.regione.sardegna.it/j/v/1270?s=300929&v=2&c=13906&t=1&anno)). As such, province boundaries are not up-to-date in the demo visualization.

6. According to the metadata, D1 should feature school self-evaluations. However, the self-evaluations are grouped according to 'Codice istituto comprensivo' (Comprehensive school ID), instead of being listed by 'Codice scuola' (School ID). 

### 4.2 Juridical and ethical analysis (privacy, licenses, purposes, etc.)

#### Privacy

Although it does not contain any direct reference to natural persons (e.g. name, address, driving license, detailed physical description), D1 includes indirect information from which it could still be possible to trace the individuals referenced. 

This is does not comply with different Italian acts and laws:

- [DECRETO DEL PRESIDENTE DELLA REPUBBLICA 24 giugno 1998, n. 249](http://www.gazzettaufficiale.it/eli/id/1998/07/29/098G0305/sg) In particular art.2 comma 2: "La  comunita'  scolastica  promuove  la solidarieta' tra i suoi
componenti e tutela il diritto dello studente alla riservatezza." and art.2 comma 7: "Gli  studenti  stranieri  hanno  diritto al rispetto della vita culturale  e  religiosa  della  comunita' alla quale appartengono. La scuola  promuove e favorisce iniziative volte alla accoglienza e alla tutela  della loro lingua e cultura e alla realizzazione di attivita' interculturali."

- [DECRETO LEGISLATIVO 30 giugno 2003, n. 196](http://www.gazzettaufficiale.it/eli/id/2003/07/29/003G0218/sg) Art. 50 comma 1: "1. Il divieto di cui all'articolo 13 del decreto del Presidente della Repubblica 22 settembre
1988, n. 448, di pubblicazione e divulgazione con qualsiasi mezzo di notizie o immagini
idonee a consentire l'identificazione di un minore si osserva anche in caso di
coinvolgimento a qualunque titolo del minore in procedimenti giudiziari in **materie diverse
da quella penale.**"

Some significant examples are:

* "[...] come nella classe dove essendoci un alunno affetto da ipoacusia; tutta la classe ha voluto integrare il proprio curriculum con l'apprendimento del LIS (linguaggio dei segni) supportati dall'assistente alla comunicazione."
* "Nell'anno scolastico in corso sono stati sospesi due alunni della scuola primaria per lesioni ai compagni."
* "Le rarissime situazioni nelle quali si evidenzia l'assoluta necessita' di 'ripetere l'anno' (quest'anno un alunno diversamente abile di quinta; lo scorso anno due alunni Rom; inseriti solo a meta' anno in quinta; che finalmente avevano cominciato venire a scuola volentieri!)"
* "La scarsa capacita' di concentrazione dei ragazzi e l'assenza delle famiglie; poco inclini ad alzare la voce quando e' necessario; portano al risultato che i ragazzi non ascoltano; a volte non riescono neanche a rimanere seduti al banco."
* "Nel corrente anno scolastico nel nostro istituto ci sono stati solo due alunni non ammessi: un alunno straniero che non ha praticamente frequentato e un altro che non ha raggiunto gli obiettivi minimi previsti."
* "Nel presente anno scolastico non sono stati ammessi alla classe successiva due alunni della scuola primaria [...]. La motivazione delle non ammissioni si puo' riassumere nei seguenti punti: mancato raggiungimento degli obiettivi minimi programmati assenze (non giustificate da un valido motivo) oltre il limite previsto a livello normativo"
* "Se si esclude un'alunna straniera che si e' ritirata per tornare in Romania (a.s. 2015/16), tutti gli alunni della Scuola primaria negli ultimi due anni scolastici sono stati ammessi alla classe successiva."
* "Solo un'alunna delle nostre classi quinte dell'a.s. 2015/16 non e' stata ammessa alla classe successiva nella scuola secondaria di primo grado nel corrente anno scolastico."
* "1 alunna disabile per fermo pedagogico e 4 trasferiti a.s. 2014/15"

We propose three possible solutions:
1. Remove all free-text explanations for school self-evaluation;
2. Provide schools with pre-compiled questionnaire in place of guidelines;
3. Check text semi-automatically before publication (most ideal in order not to loose interesting information, but also most expensive).

#### Licenses

D1, D2, D4.1 and D4.2 (MIUR) are licensed under the Italian Open Data License (IODL) v2.0, which is very similar to a CC-BY 4.0. Each dataset is accompanied by a clear license declaration. However, the whole website is covered by a "All rights reserved" copyright statement, which does not explicitly mentions the exclusion of the contents accompanied by a IODL 2.0 license. 

The metadata of D3 (MiBACT) do not specify a license e.g. by using the property `dcterms:license` (see http://dati.beniculturali.it/lodview/resource/datasetLuoghiDellaCultura.html). The website footer includes a license for all website contents (CC-BY-SA-3.0.) and points to a separate webpage which lists exceptions, among which is our "Luoghi culturali" dataset, licensed under a CC-BY 3.0.

### 4.3 Technical analysis (formats, metadata, URIs, provenance)

1. All MIUR datasets taken into consideration (D1, D2, D4.1 and D4.2) use the following date format: full year plus second half of following year with no white spaces or slashes between the two (e.g. 201617). This makes it difficult for machines as well as humans to clearly identify the nature of these particular pieces of data (i.e. the fact that they represent consecutive years and not year plus month if last two digits go from 1 to 12). Furthermore the datasets cover an academic year, meaning that the data do not cover the period going from e.g. January 2016 to December 2017.  
Durations in CSV could be specified as a time interval according to the standard ISO_8601: YYYY-MM-DD/YYYY-MM-DD (e.g. 2016-09-01/2017-08-31).

2. D1 features text in Slovenian (Slovenian schools in Friuli Venezia Giulia express their self-evaluation in Slovenian rather than Italian). Languages should be declared at least in the XML/RDF dataset as shown below.

```xml
<MIUR:MOTIVAZIONEPUNTEGGIOSCUOLA xml:lang="sl">
	[description in Slovenian]
</MIUR:MOTIVAZIONEPUNTEGGIOSCUOLA>
```

3. The XML/RDF version of D1 and D2 makes an incorrect use of namespaces and ontologies, which are declared but not used.

4. In the MIUR page of the csv D1 dataset there is no indication about the encoding of the file (if it's ASCII, ISO-8859-1), despite this is encouraged by the ["Linee guida per la valorizzazione del patrimonio informativo pubblico" by AGID](https://www.agid.gov.it/it/agenzia/stampa-e-comunicazione/notizie/2017/08/03/open-data-online-linee-guida-valorizzazione-del-patrimonio-informativo-pubblico). This problem can create various problems in the automatic computation of the data. In fact, a wrong encoding declaration during the analysis may create incorrect data results (some cells may be skipped for example). After trying multiple encodings, the only one that seemed to work without corrupting, using Python library "csv", was "utf-8-sig" ([see Python documentation about it here](https://docs.python.org/2/library/codecs.html#encodings-and-unicode)). An example of a script using that encoding can be seen in [section 5.1](https://github.com/sebucci/sebucci.github.io/blob/master/readme.md#51-data-processing)

### 4.4 Updating the dataset over time

We do not plan to update SEBuCCI as it takes a picture of a specific school year, namely 2016-2017. However, it would be interesting to create new datasets for the following school years to be able to make comparisons between datasets.

### 4.5 Summary

| Id | Problem description | Severity (1-3) | Type (Syntax/Semantics) | Proposed solution |
|-------------------------------|----------------------------|----------------|-------------------------|----------------------------|
| D1, D2, D4.1, D4.2 / Column A | Ambiguous date format used | 1.5 | Syntax | Adopt ISO 8601 date format |
| D1 | Indirect information about individuals | 3 | Semantics, Privacy | Remove information |
| D3, D4.3 | Incorrect information about Sardinia's provinces | 2.5 | Outdated content | Combination of manual and automatic methods to redistribute data in the correct provinces |
| D1 | Encoding of the dataset not specified | 2 | Technical | Include a note on the download page of the dataset stating its encoding |
| D1 | Ambiguity between title and content (school/institutes ID)| 2 | Semantics | Disambiguation through alignment scripts with other datasets |
| D2 | Ambiguity with the content of the cells (-, "Non richiesto") | 2 | Semantics | Our solution was to consider them both as "NO" | 

## 5. Visualization

### 5.1 Data processing

Although the final dataset has been released in RDF format, the CSV has also been made available on the project GitHub repository as it was used to extract the data needed in order to produce the visualization. 

Python was used to process the CSV dataset. Each row of the CSV was converted into a list of dictionaries with the help of the "CSV" library:

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
We then developed algorithms to calculate percentages and extract data specifically useful for the final visualization.
Once the final sub-datasets that were used for computation were acquired, we used the JSON Python library to convert them into a json format as it was one of the inputs requested by the visualization library.

```python
import json
def jsonize(data,nome):
    risultatojson = open(nome+".json", "w+")  #automatically creates a json file with the name specified in the input
    json_data = json.dumps(data)  #converts the data into json format
    risultatojson.write(json_data) #writes on the new file the converted data
```
*\*_All the other scripts can be seen in the [Script Directory](https://github.com/sebucci/sebucci.github.io/blob/master/script/)_*

#### 5.1.1 Get school coordinates from address:

In order to get the latitude and longitude of schools knowing their addresses, we employed the following script: [address2latlon.py](https://github.com/sebucci/sebucci.github.io/blob/master/script/address2latlon.py).

It uses the library [GeoPy](https://geopy.readthedocs.io/en/stable/), which is a client for several popular geocoding web services (under [MIT license](https://github.com/geopy/geopy/blob/master/LICENSE)). Using this library we were able to retrieve geographical coordinates of schools, but only for the province of Bologna, because it has a limiter in usage, so we decided to reduce the set of schools (sebucci is still a demo).

We faced another problem here: according to our dataset we should have 430 schools, but we were able to retrieve only 298 of them. Their addresses are difficult to parse, because they are not well formed.

### 5.2 Handling the visualization (technical description)

In order to visualize the data the following libraries were used:

* **Leaflet.js**: An open-source JavaScript library for mobile-friendly interactive maps.
* **Chart.js**: Simple yet flexible JavaScript charting for designers and developers.
* **Bootstrap**: Build responsive, mobile-first projects on the web with the world's most popular front-end component library.

#### 5.2.1 Further information and licenses

**Leaflet.js**

* Code &copy; [BSD](https://github.com/Leaflet/Leaflet/blob/master/LICENSE)
* Data &copy; [OpenStreetMap contributors](https://www.openstreetmap.org/copyright) 

* In making use of [Wikimedia Tile](https://foundation.wikimedia.org/wiki/Maps_Terms_of_Use) we comply with [OpenStreetMap copyright policy](https://www.openstreetmap.org/copyright).

**OpenStreetMap** 

Both **Wikimedia Tile** and **Leaflet** use data from **OpenStreetMap**.

* Data &copy; [ODbL](https://www.openstreetmap.org/copyright)

**GEOJSON**: Leaflet makes it possible to draw polygons directly from geojson files:

* Regions: To help us draw regions, data from [Stefano Cudini's repository](https://github.com/stefanocudini/leaflet-geojson-selector/blob/master/examples/italy-regions.json) were used.

* Provinces: To help us draw provinces, data from [Dataninja repository](https://github.com/Dataninja/geo-shapes/tree/master/italy/regions) were used.
**N.B.** Each region is contained in a single json file, except for Sardegna provinces which were not updated to 2017. In order to handle this problem, we retrieved additional data from the ISTAT archive [CONFINI DELLE UNITÀ AMMINISTRATIVE A FINI STATISTICI AL 1 GENNAIO 2018](https://www.istat.it/it/archivio/222527), [CC BY 3.0](https://www.istat.it/it/note-legali).

**Chart.js**
For the visualization of school self-evaluation a specific bar chart was chosen ([MIT license](https://www.chartjs.org/docs/latest/notes/license.html)).

**Bootstrap**
v4.1.3., Code &copy; MIT, Docs CC BY 3.0.

### 5.3 Behind the icons (light bulbs and museum buildings)
The visualization makes use of visual metaphors to synthetically represent the data. 

#### 5.3.1 Cultural institutions
N. of cultural institutions divided by Km^2.

For Italy, each region, each province we established the following threshold:

-one museum icon if < 0.0224 (Italian average presence of cultural institutions/Km^2);
-two museum icons if >= 0.0224 and < 0.0448;
-three museum icons if >= 0.0448.

#### 5.3.2 School building safety certificates
For each school building we calculated the percentage of available certificates (for example if 4 of 8 certificates are available, then the percentage is 50%). 
For each school we calculated the average of percentages of available certificates (for example if a school has two buildings, with 25% and 50% of available certificates respectively, then the final percentage is 37.5%).

For Italy, each region, each province, each school we established the following threshold:

-red light bulb <= 33%;
-yellow light bulb > 33% and <=66%;
-green light bulb > 66%.

## 6. Final considerations

### 6.1 School safety certificates

According to statistics, **Prato** is the only Italian province with a green light as concerns building certificates (>66%). Alongside with Prato, the top **16** provinces of Italy are:

1.	Prato (**best**)
2.	Ancona
3.	Mantova
4.	Livorno
5.	Ravenna
6.	Pistoia
7.	Monza E Della Brianza
8.	Torino
9.	Lodi
10.	Savona
11.	Rimini
12.	Biella
13.	Venezia
14.	Bari
15.	Udine
16.	Como

On the opposite side, the following provinces get a red light (<33%):

1.	Pescara (**worst**)
2.	Nuoro 
3.	Reggio Calabria
4.	Vibo Valentia
5.	L'aquila
6.	Crotone
7.	Foggia 
8.	Catanzaro 
9.	Teramo
10.	Chieti
11.	Trieste
12.	Roma
13.	Isernia
14.	Caserta
15.	Frosinone
16.	Rieti

### 6.2 Cultural institutions

The Italian provinces with double the number of cultural institutions compared to the Italian average per square kilometre are 14. The top 16 are:

1.	Trieste (**best**)
2.	Napoli
3.	Genova
4.	Roma
5.	Prato
6.	Firenze
7.	Milano
8.	Imperia
9.	Pistoia
10.	Varese
11.	Rimini
12.	Ascoli Piceno
13.	Macerata
14.	Gorizia
15.	Ancona
16.	Livorno


On the other hand, the provinces with the lowest values (<0.022) are **57**, among which the worst 16 are: 

1.	Belluno (**worst**)
2.	Caltanissetta
3.	Enna
4.	Rovigo
5.	Foggia
6.	Potenza
7.	Rieti
8.	Agrigento
9.	Sondrio
10.	Matera
11.	Taranto
12.	Sassari
13.	Treviso
14.	Crotone
15.	Nuoro
16.	Sud Sardegna 


### 6.3 School self-evaluation

As regards school self-evaluation results (sum of percentage of 5,6 and 7 minus sum of percentage of 1,2,3 and 4), the top 16 Italian provinces are:

1.	Isernia (**best**)
2.	Terni
3.	Verbano-Cusio-Ossola
4.	Benevento
5.	Cremona
6.	Ascoli Piceno
7.	Campobasso
8.	Udine
9.	Alessandria
10.	Catanzaro
11.	Rimini
12.	Pordenone
13.	Arezzo
14.	Barletta-Andria-Trani
15.	Vibo Valentia
16.	Perugia.

On the other hand, the worst 16 are:

1.	Rovigo (**worst**)
2.	Sassari
3.	Cagliari
4.	Sud Sardegna
5.	Novara
6.	Nuoro
7.	Pistoia
8.	Imperia
9.	Biella
10.	Napoli
11.	Pavia
12.	Parma
13.	Trieste
14.	Modena
15.	Chieti
16.	Catania

### 6.4 What about our initial questions? 

1. Does the presence of libraries, museums and other cultural institutions in school surroundings impact how schools evaluate their teaching performance? 
2. Do building certifications also play a role in school self-evaluation? 

#### Cultural institutions

By looking at the best provinces for school self-evaluation and cultural institutions per Km^2, we see that only **Rimini** and **Ascoli Piceno** appear on both lists. On this basis, we can state that **having a high number of cultural institutions nearby the school has no apparent relation with student performance**.


In the same way, by looking at the worst provinces for school self-evaluation and cultural institutions per Km^2, we see that only **Rovigo**, **Sassari**, **Nuoro** and **Sud Sardegna** appear on both lists. On this basis, we can state that **having a low number of cultural institutions nearby the school may slightly have a negative influence on student performance**.

In conclusion, **the number of cultural institutions nearby the school very slightly influence student performance**.

#### School safety certificates

By looking at the best provinces on both school self-evaluation and school safety certificates, **Rimini** and **Pordenone** are the only provinces on both lists. We can conclude that, according to our data, **having a good percentage of school safety certificates has no apparent relation with student performance**.

In the same way, by looking at the provinces having the lowest percentage of school safety certificates and the lowest school self-evaluation results, we can see that only **Nuoro**, **Trieste** and **Chieti** are included in both lists. From this, we can state that **having a bad percentage of school safety certificates has no apparent relation with student performance**.

In conclusion, **the percentage of school safety certificates do not have an apparent relation with student performance**.




