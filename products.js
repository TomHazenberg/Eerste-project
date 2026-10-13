export const source='https://www.voedingscentrum.nl/nl/gezond-eten-met-de-schijf-van-vijf.aspx';
export const products=[
{id:'appel',name:'Appel',category:'Groente & fruit',icon:'🍎',description:'Een verse appel, zonder toevoegingen.',status:'yes',reason:'Vers fruit past binnen de Schijf van Vijf.',barcode:'DEMO001'},
{id:'wortel',name:'Wortel',category:'Groente & fruit',icon:'🥕',description:'Verse wortel, zonder toevoegingen.',status:'yes',reason:'Verse groente past binnen de Schijf van Vijf.',barcode:'DEMO002'},
{id:'water',name:'Water',category:'Dranken',icon:'💧',description:'Gewoon water, zonder suiker of smaaktoevoegingen.',status:'yes',reason:'Water is een passende drank binnen de Schijf van Vijf.',barcode:'DEMO003'},
{id:'cola',name:'Cola met suiker',category:'Dranken',icon:'🥤',description:'Voorbeeld van een suikerhoudende frisdrank.',status:'no',reason:'Suikerhoudende frisdrank valt buiten de Schijf van Vijf.',alternative:'water',barcode:'DEMO004'},
{id:'brood',name:'Volkorenbrood',category:'Brood & granen',icon:'🍞',description:'Voorbeeldverpakking: samenstelling nog niet beschikbaar.',status:'unknown',reason:'De naam alleen is onvoldoende om deze verpakking te beoordelen. Controleer ingrediënten en voedingswaarden.',barcode:'DEMO005'},
{id:'yoghurt',name:'Yoghurt',category:'Zuivel & eiwitten',icon:'🥣',description:'Voorbeeldverpakking: vetgehalte en toevoegingen onbekend.',status:'unknown',reason:'Zonder vetgehalte, ingrediënten en voedingswaarden kunnen we dit product niet beoordelen.',barcode:'DEMO006'},
{id:'olie',name:'Olijfolie',category:'Vetten & oliën',icon:'🫒',description:'Pure olijfolie, zonder toevoegingen.',status:'yes',reason:'Olijfolie is een zachte of vloeibare vetsoort die past binnen de Schijf van Vijf.',barcode:'DEMO007'}
];
export const categories=[...new Set(products.map(p=>p.category))];
export function searchProducts(query='',category='Alle producten'){const q=query.trim().toLocaleLowerCase('nl');return products.filter(p=>(category==='Alle producten'||p.category===category)&&(p.name.toLocaleLowerCase('nl').includes(q)||p.barcode.toLowerCase()===q));}
export function findBarcode(value){return products.find(p=>p.barcode===value.trim().toUpperCase());}
export const labels={yes:'Past binnen de Schijf van Vijf',no:'Buiten de Schijf van Vijf',unknown:'Nog niet te beoordelen'};
