<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:dcterms="http://purl.org/dc/terms/"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:gn="http://www.geonames.org/ontology#" xmlns:foaf="http://xmlns.com/foaf/spec/"
    xmlns:cis="http://dati.beniculturali.it/cis/" xmlns:bot="https://w3id.org/bot#" xmlns:dc="http://purl.org/dc/elements/1.1/">
    <xsl:output method="xml" indent="yes" encoding="UTF-8"/>
    <xsl:template match="/">
        <rdf:RDF xmlns:dcterms="http://purl.org/dc/terms/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
            xmlns:gn="http://www.geonames.org/ontology#" xmlns:foaf="http://xmlns.com/foaf/spec/" xmlns:cis="http://dati.beniculturali.it/cis/"
            xmlns:bot="https://w3id.org/bot#" xmlns:dc="http://purl.org/dc/elements/1.1/">
            <!-- seleziona ogni scuola che non sia già comparsa nelle righe precedenti del file -->
            <xsl:for-each
                select="//rdf:Description[starts-with(@rdf:about , 'https://sebucci.github.io/resource/scuola/') and not(@rdf:about = preceding-sibling::rdf:Description/@rdf:about)]">
                <xsl:variable name="school-uri">
                    <xsl:value-of select="@rdf:about"/>
                </xsl:variable>
                <!-- copia tutti gli elementi figli della rdf Description della scuola -->
                <xsl:element name="rdf:Description">
                    <xsl:attribute name="rdf:about">
                        <xsl:value-of select="@rdf:about"/>
                    </xsl:attribute>
                    <xsl:for-each select="*">
                        <xsl:copy-of select="."/>
                    </xsl:for-each>
                    <xsl:for-each select="following-sibling::rdf:Description[@rdf:about = $school-uri]">
                        <xsl:copy-of select="bot:hasBuilding"/>
                    </xsl:for-each>
                </xsl:element>
            </xsl:for-each>
            <!-- aggiunge gli edifici che appartengono alla scuola corrente -->
            <xsl:for-each select="//rdf:Description[starts-with(@rdf:about , 'https://sebucci.github.io/resource/edificio/')]">
                <xsl:element name="rdf:Description">
                    <xsl:attribute name="rdf:about">
                        <xsl:value-of select="@rdf:about"/>
                    </xsl:attribute>
                    <xsl:for-each select="*">
                        <xsl:copy-of select="."/>
                    </xsl:for-each>
                </xsl:element>
            </xsl:for-each>
        </rdf:RDF>
    </xsl:template>
</xsl:stylesheet>
