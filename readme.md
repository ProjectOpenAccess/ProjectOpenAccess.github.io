# School self-evaluation and learning environment: what relationship?

Francesca Giovannetti  
Bruno Sartini  
Gianmarco Spinaci

## 1. Introduction

Does the presence of libraries, museums and other cultural institutions in the surroundings of schools impact the way schools evaluate their teaching performance? Do building certifications also play a role in school self-evaluation?

This project will look at school self-evaluations from a particular perspective to find out if the presence or lack of cultural institutions and of building certifications are among the factors affecting school performance. 

## 2. Application scenario

School self-evaluation is a reflective process of internal school review. Every year, italian schools are required to assess themselves on the basis of 11 criteria, among which are: 
- Risultati scolastici (Overall student performance);
- Risultati nelle prove nazionali standardizzate INVALSI (Student performance in the national INVALSI standardized tests).

The schools are guided by a list of questions and assign themselves grades according to a 1-7 scale:
- 1 = Extremely critical
- 3 = Moderately critical
- 5 = Positive
- 7 = Excellent

The italian Ministry of Education, University and Research (MIUR) makes available yearly datasets of school self-evaluations. The datasets feature grades and free-text explanations for each grade. 

Notwithstanding the presence of explanations, the reasons behind school grades are not clear-cut. Schools tend to describe the activities carried out during the academic year, with little explanation on how such activities may have had an impact on their performance. Similarly, schoold provide statistics about students performance without discussing the underlying reasons. 

The aim of this project is to gain insight into the reasons behind the result of school self-evaluations through data, in order to find out whether building certifications and nearby cultural institutions affect the results in school evaluations. 

In order to achieve this, the project aligns 1) the results of school evaluation for a.y. 2016-2017; 2) the data related to school building certifications (especially habitability and earthquake resistance); 3) the geo-data about cultural institutions such as libraries and museums in the school surroundings. 

The datasets used for this experiment come from MIUR (Ministry of Education, University and Research) and MiBACT (Ministry of Cultural Heritage and Activities). 

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

1. All the MIUR datasets taken into consideration (D1, D2, D4.1 and D4.2) use the following date format: full year plus second half of following year with no white spaces or slashes between the two (e.g. 201617). This makes it difficult for machines as well as humans to clearly identify the nature of these particular pieces of data (i.e. the fact that they represent consecutive years and not year plus month if last two digits go from 1 to 12). Furthermore the datasets cover an academic year, meaning that the data do not cover the period going from e.g. January 2016 to December 2017.   Durations in CSV could be specified as a time interval according to the standard ISO_8601: YYYY-MM-DD/YYYY-MM-DD (e.g. 2016-09-01/2017-08-31).

2. 


### 4.5 Updating the dataset over time

### 4.6 Summary

| Id | Problem description | Severity (1-3) | Type (Syntax/Semantics) | Proposed solution |
|-------------------------------|----------------------------|----------------|-------------------------|----------------------------|
| D1, D2, D4.1, D4.2 / Column A | Ambiguous date format used | 1.5 | Syntax | Adopt ISO 8601 date format |
|  |  |  |  |  |
|  |  |  |  |  |
   

## 5. Visualization