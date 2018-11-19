# School self-evaluation and learning environment: what relationship?

Francesca Giovannetti  
Bruno Sartini  
Gianmarco Spinaci

## 1. Introduction

Does the presence of libraries, museums and other cultural institutions in the surroundings of schools impact the way schools evaluate their teaching performance? Do building certifications also play a role in school self-evaluation?

This project will look at school self-evaluations from a particular perspective to find out whether the presence or lack of cultural institutions and of building certifications are among the factors affecting school performance. 

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

However, 1328 schools chose not to give any explanations ('Motivazioni non dichiarate'), 6 schools filled the form with a single full-stop ('.'). It is also interesting that that IC San Giacomo in Trieste is the only school who decided to give an explanation in 

Notwithstanding the presence of explanations, the reasons behind school grades are not clear-cut. Schools tend to describe the activities carried out during the academic year, with little explanation on how such activities may have had an impact on their performance. Similarly, schoold provide statistics about students performance without discussing the underlying reasons. 

The aim of this project is to gain insight into the reasons behind the result of school self-evaluations through data, in order to find out whether building certifications and nearby cultural institutions affect the results in school evaluations. 

In order to achieve this, the project aligns 1) the results of school evaluation for a.y. 2016-2017; 2) the data related to school building certifications (especially habitability and earthquake resistance); 3) the geo-data about cultural institutions such as libraries and museums in the school surroundings. 

The datasets used for this experiment come from MIUR (italian Ministry of Education, University and Research) and MiBACT (italian Ministry of Cultural Heritage and Activities). 

## 3. Original datasets and mashup

### D1
MIUR, 13 February 2018, Autovalutazione della scuola sezione Esiti. Scuola statale, electronic dataset, Portale Unico dei Dati della Scuola, viewed 11 November 2018, http://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?datasetId=DS0500VALUTAZIONE_ESITI_STA

Content description:


### D2
MIUR, 27 September 2018, Certificazioni e documenti relativi alla sicurezza, electronic dataset, Portale Unico dei Dati della Scuola, viewed 11 November 2018, http://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?datasetId=DS0280EDICONSICUREZZASTA

Content description:

### D3
MiBACT, 10 November 2018 (modified), Luoghi della cultura, electronic dataset, Gli Open Data, viewed 11 November 2018, http://dati.beniculturali.it/dataset/dataset-luoghi.ttl

Content description:

### D4.1 (auxiliary dataset)
MIUR, 13 February 2018, Rubrica di valutazione utilizzata dalla scuola per l'autovalutazione, electronic dataset, Portale Unico dei Dati della Scuola, viewed 11 November 2018, http://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?datasetId=DS0540RUBRICA_VAL

Content description:

### D4.2 (auxiliary dataset)
MIUR, 22 June 2018, Informazioni anagrafiche scuole statali, electronic dataset, Portale Unico dei Dati della Scuola, viewed 11 November 2018, http://dati.istruzione.it/opendata/opendata/catalogo/elements1/leaf/?datasetId=DS0400SCUANAGRAFESTAT

Content description:

### D5 (mashup)
Dataset: [dataset link]  
Metadata: [metadata XML/RDF link]

Content description:

## 4. Datasets analysis

### 4.1 Information quality
_D1, D2 contengono solo il codice scuola ed è necessario ricorrere a D4.2 per disambiguare, il che ha poco senso. Se avessero voluto mantenere una forma di privacy non avrebbero dovuto pubblicare il dataset utile alla disambiguazione. A questo punto tanto valeva inserire direttamente il nome della scuola e la suddivisione in province nel dataset dell'autovalutazione_

_D3 è in formato open XML/RDF e contiene informazioni utili al fine della geolocalizzazione dei luoghi culturali, ben fatto a mio avviso_

_metadati_

_Nel tracciato record del Dataset 1 manca una spiegazione chiara del codice criterio e siamo quindi dovuti ricorrere a un dataset ausiliario, comunque anch'esso poco chiaro_

_Nel dataset D2 non ci sono dati relativi alle certificazioni in corso_

_Nel dataset 2 ci sono dei trattini con un significato ambiguo_

### 4.2 Juridical analysis (privacy, licenses, purposes, etc.)

_Il Dataset 1 presenta problemi di privacy perché sono inclusi nel dataset i commenti dell’insegnante compilatore dell’autovalutazione che fanno riferimento a singoli studenti (es. ci dicono che c’è stato un unico studente straniero bocciato oppure che c’è uno studente con una determinata disabilità, parla in negativo delle “famiglie che non alzano la voce”). Usiamo dataset 17/18, ma menzioniamo nel documento comunque i problemi etico-legali dei dataset delle annate precedenti._

_Il sito Portale Unico dei Dati della Scuola ha nel footer la dicitura “Tutti i diritti riservati”, mentre sotto a ogni dataset è riportata la licenza IO DL (https://www.dati.gov.it/content/italian-open-data-license-v20_


Privacy: Although it does not contain any direct reference to natural persons (e.g. name, address, driving license, detailed physical description), D1 includes indirect information from which it is still possible to trace the individuals referenced. For example, 

The same dataset from a.y. 2015-2016 mentions


### 4.3 Ethical analysis

_e qui? Se affrontiamo il problema della privacy sopra, cosa scriviamo? Ripetere oppure unire i due punti in una sezione "Analisi etico-giuridica?"_

### 4.4 Technical analysis (formats, metadata, URIs, provenance)

1. All the MIUR datasets taken into consideration (D1, D2, D4.1 and D4.2) use the following date format: full year plus second half of following year with no white spaces or slashes between the two (e.g. 201617). This makes it difficult for machines as well as humans to clearly identify the nature of these particular pieces of data (i.e. the fact that they represent consecutive years and not year plus month if last two digits go from 1 to 12). Furthermore the datasets cover an academic year, meaning that the data do not cover the period going from e.g. January 2016 to December 2017.   Durations in CSV could be specified as a time interval according to the standard ISO_8601: YYYY-MM-DD/YYYY-MM-DD (e.g. 2016-09-01/2017-08-31).

2. D1 features text in slovenian (slovenian schools in Friuli Venezia Giulia express their self-evaluation in slovenian rather than italian). Languages should be declared in the dataset.  
E.g. <miur:MOTIVAZIONEPUNTEGGIOSCUOLA xml:lang="sl">[description in slovanian]</miur:MOTIVAZIONEPUNTEGGIOSCUOLA> 

2. _I codici istituto sono da disambiguare (istituto Forlì usa vecchio codice provincia fo anziché FC)._

3. _nella versione XML/RDF dei dataset MIUR sono specificati vari namespace fra i quali dicat, ma nessuno di essi è effettivamente impiegato_


### 4.5 Updating the dataset over time

### 4.6 Summary

| Id | Problem description | Severity (1-3) | Type (Syntax/Semantics) | Proposed solution |
|-------------------------------|----------------------------|----------------|-------------------------|----------------------------|
| D1, D2, D4.1, D4.2 / Column A | Ambiguous date format used | 1.5 | Syntax | Adopt ISO 8601 date format |
|  |  |  |  |  |
|  |  |  |  |  |
   

## 5. Visualization

_Descrizione tecnica_