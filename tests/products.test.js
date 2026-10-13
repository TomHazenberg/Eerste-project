import {test} from 'node:test';
import assert from 'node:assert/strict';
import {searchProducts,findBarcode,products} from '../products.js';
test('zoeken werkt zonder hoofdlettergevoeligheid en met witruimte',()=>{assert.equal(searchProducts(' APPEL ')[0].id,'appel');assert.equal(searchProducts('onbekend').length,0);});
test('categorieën beperken resultaten',()=>{assert.deepEqual(searchProducts('','Dranken').map(p=>p.id),['water','cola']);assert.equal(searchProducts('appel','Dranken').length,0);});
test('voorbeeldbarcodes en onbekende winkelbarcodes',()=>{assert.equal(findBarcode(' demo001 ').id,'appel');assert.equal(findBarcode('8712345678901'),undefined);});
test('onvoldoende productsamenstelling leidt tot onbekende beoordeling',()=>{assert.equal(products.find(p=>p.id==='yoghurt').status,'unknown');assert.equal(products.find(p=>p.id==='brood').status,'unknown');});
test('cola heeft een bestaand passend alternatief',()=>{const cola=products.find(p=>p.id==='cola');assert.equal(cola.status,'no');assert.equal(products.find(p=>p.id===cola.alternative).status,'yes');});
