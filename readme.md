# Documentation

## 1. Introduction

Does the presence of libraries, museums and other cultural places in the surroundings of schools impact the way schools evaluate their teaching performance? Do building certifications also play a role in schools self-evaluation?

When browsing the datasets provided by the italian Ministry of Education, University and Research (MIUR), the reasons behind the results of schools self-evaluation are not clear-cut. Schools tend to describe the activities carried out during the academic year, with little explanation on how such activities may have had an impact on the school. In the same way, statistics about students performance is provided without discussing the possible reasons behind performances. 

This project will look at school self-evaluations according to a particular perspective to see if the unavailability of cultural places nearby the schools and the absence of building certifications can be annoverated among the reasons behind poor school performances. 

## 2. Application scenario

Every year, italian schools are required to evaluate themselves on the basis of 11 criteria, among which are: 
- Risultati scolastici (Overall student performance);
- Risultati nelle prove nazionali standardizzate INVALSI (Student performance in the national INVALSI standardized tests).

This project aligns 1) the results of school evaluations for a.y. 2016-2017; 2) the data related to school building certifications (especially habitability and earthquake resistance); 3) the data related to cultural places such as libraries and museums in the school surroundings. 

The aim is to find out whether building certification issues and scarcity of nearby cultural places correspond to lower results in school evaluations. 

The schools are guided by a list of questions and grade themselves according to a 1-7 scale:
- 1 = Extremely critical
- 3 = Moderately critical
- 5 = Positive
- 7 = Excellent



## 3. Original datasets and mashup

### D1
MIUR, 27 September 2018, Certificazioni e documenti relativi alla sicurezza, electronic dataset, Portale Unico dei Dati della Scuola, viewed 11 November 2018, http://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?datasetId=DS0280EDICONSICUREZZASTA

### D2
MIUR, 13 February 2018, Autovalutazione della scuola sezione Esiti. Scuola statale, electronic dataset, Portale Unico dei Dati della Scuola, viewed 11 November 2018, http://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?datasetId=DS0500VALUTAZIONE_ESITI_STA

### D3
MiBACT, 10 November 2018 (modified), Luoghi della cultura, electronic dataset, Gli Open Data, viewed 11 November 2018, http://dati.beniculturali.it/dataset/dataset-luoghi.ttl

### D4.1 (auxiliary dataset)
MIUR, 13 February 2018, Rubrica di valutazione utilizzata dalla scuola per l'autovalutazione, electronic dataset, Portale Unico dei Dati della Scuola, viewed 11 November 2018, http://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?datasetId=DS0540RUBRICA_VAL

### D4.2 (auxiliary dataset)
MIUR, 22 June 2018, Informazioni anagrafiche scuole statali, electronic dataset, Portale Unico dei Dati della Scuola, viewed 11 November 2018, http://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?datasetId=DS0400SCUANAGRAFESTAT

### D5 (mashup)

## 4. Datasets analysis

### 4.1 Information quality

### 4.2 Juridical analysis (privacy, licenses, purposes, etc.)

### 4.3 Ethical analysis

### 4.4 Technical analysis (formats, metadata, URIs, provenance)

1. All the MIUR datasets taken into consideration (D1, D2, D4.1 and D4.2) use the following date format: full year plus second half of following year with no white spaces or slashes between the two (e.g. 201617). This makes it difficult for machines as well as humans to clearly identify the nature if these particular pieces of data (i.e. the fact that they represent consecutive years and not year plus month if last two digits go from 1 to 12). Furthermore the datasets cover an academic year, meaning that the data do not cover the period going from e.g. January 2016 to December 2017. Durations in CSV could be specified as a time interval according to the standard ISO_8601: YYYY-MM-DD/YYYY-MM-DD (e.g. 2016-09-01/2017-08-31).

2. 


### 4.5 Updating the dataset over time

### 4.6 Summary

| Id | Problem description | Severity (1-3) | Type (Syntax/Semantics) | Proposed solution |
|-------------------------------|----------------------------|----------------|-------------------------|----------------------------|
| D1, D2, D4.1, D4.2 / Column A | Ambiguous date format used | 1.5 | Syntax | Adopt ISO 8601 date format |
|  |  |  |  |  |
|  |  |  |  |  |
   

## 5. Visualization