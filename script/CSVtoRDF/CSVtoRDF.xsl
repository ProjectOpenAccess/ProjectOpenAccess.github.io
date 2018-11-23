<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:dcterms="http://purl.org/dc/terms/"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:gn="http://www.geonames.org/ontology#" xmlns:foaf="http://xmlns.com/foaf/spec/"
    xmlns:cis="http://dati.beniculturali.it/cis/" xmlns:bot="https://w3id.org/bot#" xmlns:dc="http://purl.org/dc/elements/1.1/">
    <xsl:output method="xml" indent="yes" encoding="UTF-8"/>
    <xsl:param name="BASE_URI">https://sebucci.github.io/resource/</xsl:param>
    <xsl:template match="/">
        <rdf:RDF xmlns:dcterms="http://purl.org/dc/terms/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
            xmlns:gn="http://www.geonames.org/ontology#" xmlns:foaf="http://xmlns.com/foaf/spec/" xmlns:cis="http://dati.beniculturali.it/cis/"
            xmlns:bot="https://w3id.org/bot#" xmlns:dc="http://purl.org/dc/elements/1.1/">
            <xsl:apply-templates/>
        </rdf:RDF>
    </xsl:template>
    <!-- per ogni scuola crea una RDF description che contiene dati geografici (regione e provincia), istituto comprensivo, nome scuola, indirizzo, cap, risultato autovalutazione -->
    <!-- NB la scuola è ripetuta per ogni edificio, applicare la trasformazione school-grouping.xsl per raggruppare tutti gli edifici per scuola -->
    <xsl:template match="//Row/Cell[5]">
        <rdf:Description rdf:about="{concat($BASE_URI, 'scuola/', Data)}">
            <gn:locatedIn rdf:resource="{concat($BASE_URI, 'regione/', lower-case(parent::Row/Cell[1]/Data))}"/>
            <gn:locatedIn rdf:resource="{concat($BASE_URI, 'provincia/', lower-case(parent::Row/Cell[2]/Data))}"/>
            <dcterms:partOf rdf:resource="{concat($BASE_URI, 'istituto-comprensivo/', parent::Row/Cell[3]/Data)}"/>
            <foaf:name xml:lang="it">
                <xsl:value-of select="translate(parent::Row/Cell[6]/Data, '\&quot;', '')"/>
            </foaf:name>
            <cis:fullAddress>
                <xsl:value-of select="parent::Row/Cell[7]/Data"/>
            </cis:fullAddress>
            <cis:postCode>
                <xsl:value-of select="parent::Row/Cell[8]/Data"/>
            </cis:postCode>
            <dc:description>
                <xsl:value-of select="parent::Row/Cell[18]/Data"/>
            </dc:description>
            <bot:hasBuilding rdf:resource="{concat($BASE_URI, 'edificio/', parent::Row/Cell[9]/Data)}"/>
        </rdf:Description>
    </xsl:template>
    <!-- per ogni edificio crea una RDF description che contiene la lista di certificazioni possedute -->
    <xsl:template match="//Row/Cell[9]">
        <xsl:if test="following-sibling::Cell/Data/text() = 'SI'">
            <rdf:Description rdf:about="{concat($BASE_URI, 'edificio/', Data)}">
                <xsl:if test="parent::Row/Cell[10]/Data='SI'">
                    <dcterms:conformsTo rdf:resource="{concat($BASE_URI, 'certificazione/certificato_agibilita_abitabilita')}"/>
                </xsl:if>
                <xsl:if test="parent::Row/Cell[11]/Data='SI'">
                    <dcterms:conformsTo rdf:resource="{concat($BASE_URI, 'certificazione/certificato_collaudo_statico')}"/>
                </xsl:if>
                <xsl:if test="parent::Row/Cell[12]/Data='SI'">
                    <dcterms:conformsTo rdf:resource="{concat($BASE_URI, 'certificazione/certificato_omologazione_centrale_termica')}"/>
                </xsl:if>
                <xsl:if test="parent::Row/Cell[13]/Data='SI'">
                    <dcterms:conformsTo rdf:resource="{concat($BASE_URI, 'certificazione/certificato_prevenzione_incendi_cpi')}"/>
                </xsl:if>
                <xsl:if test="parent::Row/Cell[14]/Data='SI'">
                    <dcterms:conformsTo rdf:resource="{concat($BASE_URI, 'certificazione/nullaosta_provvisorio_prevenzione_incendi_nop')}"/>
                </xsl:if>
                <xsl:if test="parent::Row/Cell[15]/Data='SI'">
                    <dcterms:conformsTo rdf:resource="{concat($BASE_URI, 'certificazione/certificato_collaudo_impianto_spegnimento')}"/>
                </xsl:if>
                <xsl:if test="parent::Row/Cell[16]/Data='SI'">
                    <dcterms:conformsTo rdf:resource="{concat($BASE_URI, 'certificazione/documento_valutazione_rischio')}"/>
                </xsl:if>
                <xsl:if test="parent::Row/Cell[17]/Data='SI'">
                    <dcterms:conformsTo rdf:resource="{concat($BASE_URI, 'certificazione/piano_emergenza')}"/>
                </xsl:if>
            </rdf:Description>
        </xsl:if>
    </xsl:template>
    <xsl:template match="text()"/>
</xsl:stylesheet>
