# Schijfwijzer
Nederlandstalig, mobielvriendelijk prototype voor het herkennen van Schijf van Vijf-productsoorten. Geen dependencies: Node.js 20+ is voldoende.

## Starten
```sh
npm start
```
De server gebruikt poort 3000 (of `PORT`).

## Testen
```sh
npm test
```

## Gebruik en grenzen
- Zoek op productnaam en filter op categorie.
- Open een product voor uitleg, bron, actualisatiedatum en eventueel een alternatief.
- Test barcode-invoer met DEMO001 t/m DEMO007. Deze codes zijn fictief; echte winkelproducten zijn niet aangesloten.
- Barcodefoto's kunnen lokaal worden gelezen wanneer de browser de BarcodeDetector API ondersteunt (doorgaans een beveiligde context). Anders verschijnt een melding met handmatige invoer als alternatief.
- Upload of maak een productfoto en zoek vervolgens zelf het product. Er is geen automatische beeldherkenning. Foto's worden niet naar de server gestuurd.
- Beoordelingen gelden voor beschreven algemene productsoorten. Voor verpakkingen met ontbrekende samenstelling volgt geen beoordeling. De actualisatiedatum is die van de voorbeeldgegevens, geen bewijs van live bronverificatie.

De site gebruikt optioneel Google Fonts; bij geen internet werken systeemlettertypen. Voor productie zijn een betrouwbare actuele productdatabase, verificatie van productgroepcriteria en echte productherkenning nodig. Dit prototype is onafhankelijk van het Voedingscentrum.
