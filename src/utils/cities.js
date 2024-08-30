// src/utils/cities.js

import polvorilla from '../assets/images/polvorilla.jpg';
import radaTilly from '../assets/images/rada_tilly.jpg';
import cafayate from '../assets/images/cafayate.jpg';
import iruya from '../assets/images/iruya.jpg';
import puertoDeseado from '../assets/images/puerto_deseado.jpg';
import monteLeon from '../assets/images/monte_leon.webp';
import madryn from '../assets/images/madryn.webp';
import cumbrecita from '../assets/images/cumbrecita.webp';
import mendoza from '../assets/images/mendoza.webp';
import cosquin from '../assets/images/cosquin.webp';
import rosario from '../assets/images/rosario.webp';
import iguazu from '../assets/images/iguazu.jpg';
import buenosaires from '../assets/images/buenosaires.jpg';
import cachi from '../assets/images/cachi.webp';
import sanNicolasDeLosArroyos from '../assets/images/san_nicolas_de_los_arroyos.jpg';
import marChiquitaLake from '../assets/images/mar_chiquita_lake.jpg';

const cities = [
  {
     'name':'Cafayate',
     'zone':'no',
     'image': cafayate,
     'situation':'Localidad de los valles Calchaquíes de la provincia de Salta.',
     'service':'Visita a las formaciones de roca caliza y viñedos',
     'price': 90
  },
  {
     'name':'Parque Nacional Los Cardones',
     'zone':'no',
     'image': cachi,
     'situation':'Cerca de la localidad de Payogasta (Selva de las Yungas).',
     'service':'Caminata por la desértica belleza del Parque Nacional',
     'price': 85
  },
  {
     'name':'Viaducto La Polvorilla',
     'zone':'no',
     'image': polvorilla,
     'situation':'Recorrido en el Tren a las Nubes (desde Salta).',
     'service':"Recorrido por los viaductos del Tren a las Nubes del ramal C-14",
     'price': 124
  },
  {
     'name':'Iruya',
     'zone':'no',
     'image': iruya,
     'situation':'Provincia de Salta (Sierra de Santa Victoria).',
     'service':"Recorrido por la zone (Mirador, Río, iglesias..)",
     'price': 78
  },
  {
     'name':'Buenos Aires',
     'zone':'no',
     'image': buenosaires,
     'situation':'Ciudad autónoma y capital federal de Argentina.',
     'service':"Visita los barrios y plazas más representativos",
     'price': 195
  },
  {
     'name':'Cataratas del Iguazú',
     'zone':'no',
     'image': iguazu,
     'situation':'Entre las provincias de Misiones y Paraná.',
     'service':"Recorrido por los diferentes senderos (Macuco..)",
     'price': 172
  },
  {
     'name':'San Nicolás de los Arroyos',
     'zone':'no',
     'image': sanNicolasDeLosArroyos,
     'situation':'Extremo norte de la Provincia de Buenos Aires.',
     'service':"Escapada a Santuario, Teatro, Parque y Catedral",
     'price': 82
  },
  {
     'name':'Rosario',
     'zone':'no',
     'image': rosario,
     'situation':'Sureste de la Provincia de Santa Fé del Departamento de Rosario.',
     'service':"Recorrido por el Monumento, museos y parques",
     'price': 79
  },
  {
     'name':'Córdoba',
     'zone':'cp',
     'image': cosquin,
     'situation':'Capital de la Provincia de Córdoba (a orillas del río Suquía).',
     'service':"Visita a Altas Cumbres, Capuchinos, 100 curvas y Museos",
     'price': 85
  },
  {
     'name':'Mendoza',
     'zone':'cp',
     'image': mendoza,
     'situation':'Capital de la Provincia, al este de la Cordillera de los Andes.',
     'service':"Visita al Aconcagua, viñedos, bodegas y parques",
     'price': 71
  },
  {
     'name':'La cumbrecita',
     'zone':'cp',
     'image': cumbrecita,
     'situation':'Valle de Calamuchita (Sierras Grandes, Provincia de Córdoba).',
     'service':"Visita a las cascadas, peñón y río subterráneo",
     'price': 83
  },
  {
     'name':'Mar Chiquita Lake',
     'zone':'cp',
     'image': marChiquitaLake,
     'situation':'Noroeste de la Provincia de Córdoba (Santiago del Estero).',
     'service':"Paseo en bote por la costonera, playa y el Mistolar",
     'price': 182
  },
  {
     'name':'Puerto Madryn',
     'zone':'cp',
     'image': madryn,
     'situation':'Noroeste de la Provincia de Chubut (Dpto. de Biedma).',
     'service':"Ver las ballenas y lobos marinos en Punta Loma",
     'price': 197
  },
  {
     'name':'Parque Nal. Monte León',
     'zone':'cp',
     'image': monteLeon,
     'situation':'Litoral marítimo de la Provincia de Santa Cruz (Patagonia).',
     'service':"Recorrido por los senderos y lagos del Parque",
     'price': 69
  },
  {
     'name':'Rada Tilly',
     'zone':'cp',
     'image': radaTilly,
     'situation':'Provincia del Chubut (a 15 km. al sur de Comodoro Rivadavia).',
     'service':"Visita a la Reserva Natural y Museo Regional",
     'price': 112
  },
  {
     'name':'Puerto Deseado',
     'zone':'cp',
     'image': puertoDeseado,
     'situation':'Provincia de Santa Cruz (al norte de la Ría Deseado).',
     'service':"Visita Isla Pinguinos, Reserva Natural y Gruta",
     'price': 163
  },
].map((city, index) => ({
   id: index + 1,
   ...city
 }));

export default cities;