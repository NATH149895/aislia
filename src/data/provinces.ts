// Données provinciales.
// zone = lettre d'hiver de la zone climatique de BASE (communes les plus basses), CTE DB-HE Anejo B.
// 'α' = zone alpha des Canaries. La zone réelle dépend de l'altitude de la commune
// et fait foi sur le certificat énergétique.

export type ZoneLetter = 'α' | 'A' | 'B' | 'C' | 'D' | 'E';
export type InsulationStatus = 'toda' | 'altitud' | 'verificar' | 'no';
export type HeatPumpTier = 'prioritaria' | 'intermedia' | 'limitada';

export interface Province {
  slug: string;
  name: string;
  capital: string;
  community: string;
  ine: string; // = 2 premiers chiffres du code postal
  zone: ZoneLetter;
  insulation: InsulationStatus;
  heatPump: HeatPumpTier;
}

type Raw = [slug: string, name: string, capital: string, community: string, ine: string, zone: ZoneLetter, insulation?: InsulationStatus];

const raw: Raw[] = [
  ['alava', 'Álava', 'Vitoria-Gasteiz', 'País Vasco', '01', 'D'],
  ['albacete', 'Albacete', 'Albacete', 'Castilla-La Mancha', '02', 'C'],
  ['alicante', 'Alicante', 'Alicante', 'Comunidad Valenciana', '03', 'B'],
  ['almeria', 'Almería', 'Almería', 'Andalucía', '04', 'A'],
  ['avila', 'Ávila', 'Ávila', 'Castilla y León', '05', 'D'],
  ['badajoz', 'Badajoz', 'Badajoz', 'Extremadura', '06', 'C'],
  ['baleares', 'Illes Balears', 'Palma', 'Illes Balears', '07', 'B'],
  ['barcelona', 'Barcelona', 'Barcelona', 'Cataluña', '08', 'C'],
  ['burgos', 'Burgos', 'Burgos', 'Castilla y León', '09', 'D'],
  ['caceres', 'Cáceres', 'Cáceres', 'Extremadura', '10', 'C'],
  ['cadiz', 'Cádiz', 'Cádiz', 'Andalucía', '11', 'A'],
  ['castellon', 'Castellón', 'Castellón de la Plana', 'Comunidad Valenciana', '12', 'B'],
  ['ciudad-real', 'Ciudad Real', 'Ciudad Real', 'Castilla-La Mancha', '13', 'C'],
  ['cordoba', 'Córdoba', 'Córdoba', 'Andalucía', '14', 'B'],
  ['a-coruna', 'A Coruña', 'A Coruña', 'Galicia', '15', 'C'],
  ['cuenca', 'Cuenca', 'Cuenca', 'Castilla-La Mancha', '16', 'D'],
  ['girona', 'Girona', 'Girona', 'Cataluña', '17', 'C'],
  ['granada', 'Granada', 'Granada', 'Andalucía', '18', 'A'],
  ['guadalajara', 'Guadalajara', 'Guadalajara', 'Castilla-La Mancha', '19', 'D'],
  ['gipuzkoa', 'Gipuzkoa', 'Donostia-San Sebastián', 'País Vasco', '20', 'D'],
  ['huelva', 'Huelva', 'Huelva', 'Andalucía', '21', 'A'],
  ['huesca', 'Huesca', 'Huesca', 'Aragón', '22', 'C'],
  ['jaen', 'Jaén', 'Jaén', 'Andalucía', '23', 'B'],
  ['leon', 'León', 'León', 'Castilla y León', '24', 'E'],
  ['lleida', 'Lleida', 'Lleida', 'Cataluña', '25', 'C'],
  ['la-rioja', 'La Rioja', 'Logroño', 'La Rioja', '26', 'C'],
  ['lugo', 'Lugo', 'Lugo', 'Galicia', '27', 'D'],
  ['madrid', 'Madrid', 'Madrid', 'Comunidad de Madrid', '28', 'C'],
  ['malaga', 'Málaga', 'Málaga', 'Andalucía', '29', 'A'],
  ['murcia', 'Murcia', 'Murcia', 'Región de Murcia', '30', 'B'],
  ['navarra', 'Navarra', 'Pamplona', 'Navarra', '31', 'C'],
  ['ourense', 'Ourense', 'Ourense', 'Galicia', '32', 'C'],
  ['asturias', 'Asturias', 'Oviedo', 'Principado de Asturias', '33', 'C'],
  ['palencia', 'Palencia', 'Palencia', 'Castilla y León', '34', 'D'],
  ['las-palmas', 'Las Palmas', 'Las Palmas de Gran Canaria', 'Canarias', '35', 'α', 'verificar'],
  ['pontevedra', 'Pontevedra', 'Pontevedra', 'Galicia', '36', 'C'],
  ['salamanca', 'Salamanca', 'Salamanca', 'Castilla y León', '37', 'D'],
  ['santa-cruz-de-tenerife', 'Santa Cruz de Tenerife', 'Santa Cruz de Tenerife', 'Canarias', '38', 'α', 'verificar'],
  ['cantabria', 'Cantabria', 'Santander', 'Cantabria', '39', 'C'],
  ['segovia', 'Segovia', 'Segovia', 'Castilla y León', '40', 'D'],
  ['sevilla', 'Sevilla', 'Sevilla', 'Andalucía', '41', 'B'],
  ['soria', 'Soria', 'Soria', 'Castilla y León', '42', 'D'],
  ['tarragona', 'Tarragona', 'Tarragona', 'Cataluña', '43', 'B'],
  ['teruel', 'Teruel', 'Teruel', 'Aragón', '44', 'C'],
  ['toledo', 'Toledo', 'Toledo', 'Castilla-La Mancha', '45', 'C'],
  ['valencia', 'Valencia', 'Valencia', 'Comunidad Valenciana', '46', 'B'],
  ['valladolid', 'Valladolid', 'Valladolid', 'Castilla y León', '47', 'D'],
  ['bizkaia', 'Bizkaia', 'Bilbao', 'País Vasco', '48', 'C'],
  ['zamora', 'Zamora', 'Zamora', 'Castilla y León', '49', 'D'],
  ['zaragoza', 'Zaragoza', 'Zaragoza', 'Aragón', '50', 'C'],
  ['ceuta', 'Ceuta', 'Ceuta', 'Ceuta', '51', 'B', 'no'],
  ['melilla', 'Melilla', 'Melilla', 'Melilla', '52', 'A', 'no'],
];

function insulationFor(zone: ZoneLetter): InsulationStatus {
  return zone === 'C' || zone === 'D' || zone === 'E' ? 'toda' : 'altitud';
}
function heatPumpFor(zone: ZoneLetter): HeatPumpTier {
  if (zone === 'D' || zone === 'E') return 'prioritaria';
  if (zone === 'C') return 'intermedia';
  return 'limitada';
}

export const PROVINCES: Province[] = raw
  .map(([slug, name, capital, community, ine, zone, ins]) => ({
    slug, name, capital, community, ine, zone,
    insulation: ins ?? insulationFor(zone),
    heatPump: heatPumpFor(zone),
  }))
  .sort((a, b) => a.name.localeCompare(b.name, 'es'));

export const ZONE_LABEL: Record<ZoneLetter, string> = {
  'α': 'α (Canarias)', A: 'A', B: 'B', C: 'C', D: 'D', E: 'E',
};

export const INSULATION_TEXT: Record<InsulationStatus, { short: string; long: string; tone: 'ok' | 'mid' | 'no' }> = {
  toda: {
    short: 'Elegible en toda la provincia',
    long: 'Toda la provincia está en zona climática C, D o E, así que cualquier municipio cumple el requisito climático de la ficha RES022.',
    tone: 'ok',
  },
  altitud: {
    short: 'Solo municipios de montaña',
    long: 'La zona base de la provincia es A o B. Solo los municipios situados en altitud pasan a zona C, D o E y pueden acogerse a la ficha RES022.',
    tone: 'mid',
  },
  verificar: {
    short: 'A estudiar caso por caso',
    long: 'En Canarias solo algunas localidades de cumbre alcanzan la zona C. Estudiamos cada vivienda a partir de su certificado energético.',
    tone: 'mid',
  },
  no: {
    short: 'No elegible',
    long: 'El clima de esta ciudad (zona A o B) no permite acogerse a la ficha RES022 de aislamiento de desvanes.',
    tone: 'no',
  },
};

export const HEATPUMP_TEXT: Record<HeatPumpTier, { short: string; long: string; tone: 'ok' | 'mid' | 'no' }> = {
  prioritaria: {
    short: 'Zona prioritaria · desde 1 €',
    long: 'Con un clima frío (zona D o E), la demanda de calefacción es alta y los CAE generados también: es donde la aerotermia desde 1 € es más alcanzable.',
    tone: 'ok',
  },
  intermedia: {
    short: 'Ayuda importante',
    long: 'En zona C la ayuda CAE es elevada y, con los nuevos multiplicadores, puede cubrir buena parte de la instalación. En municipios altos (zona D) se acerca al 1 €.',
    tone: 'mid',
  },
  limitada: {
    short: 'Ayuda parcial',
    long: 'En clima templado (zona A o B) la ayuda existe pero es menor: lo normal es que quede un importe a tu cargo, salvo en municipios de montaña.',
    tone: 'no',
  },
};

export const provinceByIne = (ine: string) => PROVINCES.find((p) => p.ine === ine);
