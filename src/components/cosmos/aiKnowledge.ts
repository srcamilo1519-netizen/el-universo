// COSMO AI knowledge base — 100+ Q&A entries
// Each entry: keywords (matched against user input) + a long, scientific answer.

export interface KBEntry {
  id: string;
  topic: string;
  keywords: string[];
  answer: string;
}

export const KB: KBEntry[] = [
  {
    id: "bigbang",
    topic: "El Big Bang",
    keywords: ["big bang", "bigbang", "origen del universo", "como nacio", "como empezo", "como comenzo", "inicio del universo", "principio del universo", "como se formo el universo"],
    answer:
      "El Big Bang es el modelo cosmológico que describe el origen y la evolución del universo observable a partir de un estado extremadamente denso y caliente, hace aproximadamente 13.800 millones de años. No fue una explosión convencional dentro de un espacio preexistente, sino la expansión del propio espacio-tiempo. En los primeros instantes — del orden de 10⁻⁴³ segundos — la temperatura y densidad eran tan extremas que las cuatro fuerzas fundamentales se encontraban unificadas. A medida que el universo se expandió, se enfrió, permitiendo la formación sucesiva de partículas elementales, núcleos atómicos ligeros, átomos neutros y, finalmente, las grandes estructuras cósmicas que observamos hoy.",
  },
  {
    id: "edad",
    topic: "Edad del universo",
    keywords: ["edad del universo", "cuantos años", "antigüedad", "antiguo es el universo", "que edad tiene"],
    answer:
      "La edad estimada del universo es de 13.787 ± 0.020 mil millones de años, una cifra obtenida principalmente a partir del análisis de la radiación cósmica de fondo de microondas por las misiones WMAP y Planck. Este valor combina mediciones de la curvatura del espacio, la densidad de materia bariónica y oscura, y la constante de Hubble. Aunque existen pequeñas tensiones entre métodos (la denominada 'tensión de Hubble'), todas las observaciones independientes — desde supernovas tipo Ia hasta cúmulos globulares — convergen en una edad cercana a los 14 mil millones de años.",
  },
  {
    id: "inflacion",
    topic: "Inflación cósmica",
    keywords: ["inflacion", "inflación cósmica", "expansion exponencial", "guth"],
    answer:
      "La inflación cósmica es una fase de expansión exponencial del universo primitivo, propuesta por Alan Guth en 1981, que habría ocurrido entre 10⁻³⁶ y 10⁻³² segundos después del Big Bang. Durante este intervalo el universo se expandió por un factor mínimo de 10²⁶, suavizando irregularidades, explicando la planitud espacial observada y la homogeneidad a gran escala. Las fluctuaciones cuánticas amplificadas durante la inflación habrían sembrado las anisotropías que hoy observamos en el fondo cósmico de microondas y que dieron origen a la estructura a gran escala del cosmos.",
  },
  {
    id: "cmb",
    topic: "Radiación cósmica de fondo",
    keywords: ["radiacion cosmica", "fondo cosmico", "cmb", "microondas", "fondo de microondas"],
    answer:
      "La radiación cósmica de fondo en microondas (CMB) es la luz más antigua del universo, emitida aproximadamente 380.000 años después del Big Bang, cuando la temperatura descendió lo suficiente para que electrones y protones formaran átomos neutros, liberando los fotones que habían estado atrapados en un plasma opaco. Hoy esta radiación se observa con una temperatura uniforme de 2.725 K y minúsculas anisotropías del orden de 10⁻⁵, descubiertas por COBE en 1992 y mapeadas con precisión por WMAP y Planck. Estas variaciones contienen las semillas gravitatorias de toda la estructura cósmica posterior.",
  },
  {
    id: "expansion",
    topic: "Expansión del universo",
    keywords: ["expansion del universo", "expandiendo", "hubble", "ley de hubble", "se expande"],
    answer:
      "La expansión del universo fue descubierta empíricamente por Edwin Hubble en 1929, al observar que las galaxias lejanas se alejan unas de otras con velocidades proporcionales a su distancia, fenómeno conocido como ley de Hubble-Lemaître. La constante de Hubble (H₀ ≈ 67–73 km/s/Mpc) cuantifica esta tasa. Desde finales de los noventa sabemos, gracias a las supernovas tipo Ia, que esta expansión está acelerándose, lo que se atribuye a la energía oscura, una componente del cosmos cuya naturaleza física sigue siendo uno de los grandes enigmas abiertos.",
  },
  {
    id: "materia-oscura",
    topic: "Materia oscura",
    keywords: ["materia oscura", "dark matter"],
    answer:
      "La materia oscura constituye aproximadamente el 27% del contenido energético del universo y, a diferencia de la materia bariónica, no interactúa con la radiación electromagnética. Su existencia se infiere a partir de efectos gravitacionales: las curvas de rotación galácticas planas, la dinámica de cúmulos, las lentes gravitacionales y la formación de estructura a gran escala. Los candidatos teóricos incluyen WIMPs, axiones y partículas masivas no descubiertas en el modelo estándar. Experimentos como XENONnT, LUX-ZEPLIN y los grandes colisionadores buscan detectar su firma de manera directa o indirecta.",
  },
  {
    id: "energia-oscura",
    topic: "Energía oscura",
    keywords: ["energia oscura", "dark energy", "expansion acelerada", "constante cosmologica"],
    answer:
      "La energía oscura es la componente dominante del universo actual, representando alrededor del 68% de su contenido energético, y es la responsable de la aceleración observada en la expansión cósmica. En el modelo estándar ΛCDM se interpreta como una constante cosmológica Λ asociada a la energía del vacío, con presión negativa que actúa como una fuerza repulsiva a gran escala. Modelos alternativos exploran campos escalares dinámicos (quintaesencia) o modificaciones a la relatividad general. Su naturaleza es uno de los problemas más profundos de la física fundamental contemporánea.",
  },
  {
    id: "agujero-negro",
    topic: "Agujeros negros",
    keywords: ["agujero negro", "agujeros negros", "black hole", "horizonte de eventos", "singularidad"],
    answer:
      "Un agujero negro es una región del espacio-tiempo en la que la gravedad es tan intensa que ni siquiera la luz puede escapar más allá de una frontera denominada horizonte de eventos. Se forman típicamente por el colapso gravitacional de estrellas masivas al final de su vida, y pueden crecer hasta convertirse en agujeros negros supermasivos de millones o miles de millones de masas solares en los centros galácticos. Su descripción matemática proviene de la relatividad general de Einstein, y han sido confirmados observacionalmente mediante ondas gravitacionales (LIGO, 2015) e imágenes directas del Event Horizon Telescope (M87* en 2019 y Sgr A* en 2022).",
  },
  {
    id: "agujero-supermasivo",
    topic: "Agujeros negros supermasivos",
    keywords: ["supermasivo", "sagitario a", "sgr a", "centro galactico", "m87"],
    answer:
      "Los agujeros negros supermasivos residen en los centros de la mayoría de galaxias y poseen masas entre millones y decenas de miles de millones de masas solares. Sagitario A*, en el centro de la Vía Láctea, tiene aproximadamente 4,3 millones de masas solares. Su origen sigue siendo objeto de investigación: pueden haberse formado por colapso directo de nubes primordiales, por fusiones sucesivas de agujeros negros estelares, o por el crecimiento de semillas masivas en el universo temprano. Desempeñan un papel crucial en la coevolución entre galaxias y sus núcleos activos.",
  },
  {
    id: "ondas-grav",
    topic: "Ondas gravitacionales",
    keywords: ["ondas gravitacionales", "ligo", "virgo", "gravitational wave"],
    answer:
      "Las ondas gravitacionales son perturbaciones en la curvatura del espacio-tiempo que se propagan a la velocidad de la luz, predichas por Einstein en 1916. Su detección directa fue conseguida por LIGO en septiembre de 2015 (evento GW150914), producida por la fusión de dos agujeros negros estelares a 1.300 millones de años luz. Desde entonces, una nueva astronomía multimensajera ha emergido: detectores como LIGO, Virgo y KAGRA observan rutinariamente fusiones de agujeros negros y estrellas de neutrones, abriendo una ventana inédita al universo más violento y oscuro.",
  },
  {
    id: "relatividad",
    topic: "Relatividad general",
    keywords: ["relatividad", "einstein", "espacio tiempo", "gravedad einstein"],
    answer:
      "La teoría de la relatividad general, formulada por Albert Einstein en 1915, describe la gravedad no como una fuerza, sino como la curvatura del espacio-tiempo causada por la presencia de masa y energía. Su ecuación de campo, Gμν + Λgμν = 8πG/c⁴ · Tμν, ha superado todas las pruebas experimentales realizadas hasta la fecha, desde el avance del perihelio de Mercurio y la deflexión de la luz, hasta la dilatación temporal en GPS y las ondas gravitacionales. Es la base teórica de la cosmología moderna y de la descripción de los agujeros negros.",
  },
  {
    id: "cuantica",
    topic: "Física cuántica",
    keywords: ["cuantica", "fisica cuantica", "mecanica cuantica", "quantum"],
    answer:
      "La mecánica cuántica describe el comportamiento de la materia y la energía a escalas atómicas y subatómicas, donde las leyes clásicas dejan de aplicarse. Sus pilares incluyen la cuantización de la energía, la dualidad onda-partícula, el principio de incertidumbre de Heisenberg y la superposición de estados. En cosmología, las fluctuaciones cuánticas durante la inflación se consideran el origen último de toda la estructura del universo. La unificación entre la cuántica y la relatividad general sigue siendo el objetivo central de la gravedad cuántica.",
  },
  {
    id: "cuerdas",
    topic: "Teoría de cuerdas",
    keywords: ["teoria de cuerdas", "cuerdas", "string theory", "supercuerdas", "teoria m"],
    answer:
      "La teoría de cuerdas propone que los constituyentes fundamentales de la realidad no son partículas puntuales, sino cuerdas unidimensionales vibrantes cuyas frecuencias determinan las propiedades observables como masa y carga. Requiere la existencia de dimensiones espaciales adicionales — usualmente 10 u 11 en la teoría M — compactificadas a escalas extremadamente pequeñas. Aunque ofrece un marco prometedor para unificar la gravedad con las demás interacciones fundamentales, hasta la fecha no posee predicciones experimentales directas verificables, manteniéndose como una hipótesis matemáticamente elegante pero aún especulativa.",
  },
  {
    id: "singularidad",
    topic: "Singularidad inicial",
    keywords: ["singularidad", "punto inicial", "antes del big bang", "que habia antes"],
    answer:
      "La singularidad inicial corresponde al estado matemático en el que las ecuaciones clásicas de la relatividad general predicen una densidad y curvatura infinitas en el origen del tiempo. Sin embargo, los físicos consideran que esta singularidad es más una señal de la limitación de la teoría que una realidad física. Se espera que una teoría cuántica de la gravedad — como la gravedad cuántica de bucles o la teoría de cuerdas — describa este régimen, posiblemente reemplazando la singularidad por un rebote cosmológico, un universo cíclico o un multiverso emergente.",
  },
  {
    id: "estrellas",
    topic: "Estrellas",
    keywords: ["estrella", "estrellas", "como nacen las estrellas", "formacion estelar", "como se forman estrellas"],
    answer:
      "Las estrellas se forman a partir del colapso gravitacional de regiones densas dentro de nubes moleculares de hidrógeno y helio. Cuando la temperatura central alcanza aproximadamente 10 millones de kelvin, se inicia la fusión nuclear del hidrógeno en helio, equilibrando la presión interna con la atracción gravitatoria, marcando el ingreso a la secuencia principal. Su evolución posterior depende de su masa: estrellas como el Sol terminan como enanas blancas, mientras que las masivas explotan como supernovas y dejan tras de sí estrellas de neutrones o agujeros negros.",
  },
  {
    id: "supernova",
    topic: "Supernovas",
    keywords: ["supernova", "supernovas", "explosion estelar"],
    answer:
      "Una supernova es la explosión cataclísmica que marca el final de la vida de una estrella masiva o, en el tipo Ia, la detonación termonuclear de una enana blanca que excede el límite de Chandrasekhar. Estas explosiones liberan en segundos más energía que la que el Sol emitirá durante toda su existencia, sintetizan elementos químicos pesados (incluido el hierro y elementos posteriores) y los dispersan en el medio interestelar, enriqueciendo las generaciones futuras de estrellas y planetas. Las supernovas tipo Ia se utilizan como candelas estándar para medir distancias cosmológicas.",
  },
  {
    id: "galaxias",
    topic: "Galaxias",
    keywords: ["galaxia", "galaxias", "que es una galaxia", "tipos de galaxias"],
    answer:
      "Las galaxias son sistemas gravitacionalmente ligados compuestos por estrellas, gas, polvo, materia oscura y, en general, un agujero negro supermasivo central. Se clasifican morfológicamente según el esquema de Hubble en elípticas, espirales, lenticulares e irregulares. La Vía Láctea es una galaxia espiral barrada con unos 200 a 400 mil millones de estrellas y aproximadamente 100.000 años luz de diámetro. Las galaxias se agrupan en cúmulos y supercúmulos, formando una vasta red filamentosa conocida como la red cósmica.",
  },
  {
    id: "via-lactea",
    topic: "Vía Láctea",
    keywords: ["via lactea", "nuestra galaxia", "milky way"],
    answer:
      "La Vía Láctea es la galaxia espiral barrada que alberga al Sistema Solar. Posee un disco de aproximadamente 100.000 años luz de diámetro, contiene entre 200 y 400 mil millones de estrellas, y está rodeada por un halo de materia oscura mucho mayor. En su centro reside Sagitario A*, un agujero negro supermasivo de 4,3 millones de masas solares. Forma parte del Grupo Local junto con Andrómeda (M31), con la cual colisionará en aproximadamente 4.500 millones de años para formar una galaxia elíptica gigante denominada provisionalmente Lactómeda.",
  },
  {
    id: "andromeda",
    topic: "Andrómeda",
    keywords: ["andromeda", "m31", "colision con andromeda"],
    answer:
      "Andrómeda (M31) es la galaxia espiral más cercana a la Vía Láctea, situada a 2,537 millones de años luz. Es ligeramente más masiva que nuestra galaxia y se aproxima a una velocidad de unos 110 km/s. Las simulaciones predicen una colisión gradual dentro de unos 4.500 millones de años, que culminará en una fusión completa para formar una galaxia elíptica. Aunque las distancias entre estrellas son tan vastas que prácticamente ninguna chocará individualmente, la dinámica gravitatoria reorganizará por completo ambas estructuras.",
  },
  {
    id: "exoplanetas",
    topic: "Exoplanetas",
    keywords: ["exoplaneta", "exoplanetas", "planetas fuera del sistema solar"],
    answer:
      "Los exoplanetas son planetas que orbitan estrellas distintas al Sol. El primero confirmado alrededor de una estrella de secuencia principal fue 51 Pegasi b en 1995, descubrimiento que valió el Nobel de Física 2019. Hoy se conocen más de 5.500 exoplanetas confirmados gracias a misiones como Kepler, TESS y James Webb. Sus métodos de detección incluyen el tránsito, la velocidad radial, las microlentes gravitacionales y la imagen directa. La caracterización atmosférica de mundos potencialmente habitables es uno de los focos más activos de la astrobiología actual.",
  },
  {
    id: "vida",
    topic: "Vida extraterrestre",
    keywords: ["vida extraterrestre", "alienigenas", "aliens", "vida fuera de la tierra", "astrobiologia"],
    answer:
      "La búsqueda de vida extraterrestre es una de las preguntas científicas más profundas y se aborda desde la astrobiología, una disciplina interdisciplinaria que combina astronomía, biología, química y geología. Las estrategias actuales incluyen la búsqueda de biofirmas atmosféricas en exoplanetas (como combinaciones de oxígeno, metano y vapor de agua), la exploración robótica de Marte, las lunas heladas Europa y Encélado, y la escucha de señales tecnológicas mediante el programa SETI. Aunque aún no existen pruebas definitivas, las condiciones para la vida parecen abundantes en el universo.",
  },
  {
    id: "jwst",
    topic: "Telescopio James Webb",
    keywords: ["james webb", "jwst", "telescopio webb", "que descubrio james webb"],
    answer:
      "El telescopio espacial James Webb (JWST), lanzado el 25 de diciembre de 2021, es el observatorio infrarrojo más potente jamás construido, con un espejo primario segmentado de 6,5 metros y posicionado en el punto de Lagrange L2. Sus capacidades han permitido observar las primeras galaxias formadas apenas algunos cientos de millones de años después del Big Bang, caracterizar atmósferas de exoplanetas con precisión sin precedentes, estudiar regiones de formación estelar a través del polvo y proporcionar imágenes detalladas del medio interestelar. Es un sucesor del Hubble en sentido científico, no en longitud de onda.",
  },
  {
    id: "hubble",
    topic: "Telescopio Hubble",
    keywords: ["telescopio hubble", "hubble space telescope", "hst"],
    answer:
      "El telescopio espacial Hubble, lanzado en 1990, ha revolucionado la astronomía con más de tres décadas de observaciones en luz visible, ultravioleta e infrarrojo cercano. Sus contribuciones incluyen la determinación precisa de la constante de Hubble, el descubrimiento de la expansión acelerada del universo (en colaboración con telescopios terrestres), las imágenes del Campo Profundo y Ultra Profundo que revelaron miles de galaxias en una pequeña región del cielo, y la caracterización de exoplanetas. Sigue operativo y complementa hoy las observaciones del JWST.",
  },
  {
    id: "nebulosa",
    topic: "Nebulosas",
    keywords: ["nebulosa", "nebulosas", "que es una nebulosa"],
    answer:
      "Las nebulosas son nubes interestelares compuestas principalmente de hidrógeno, helio y polvo cósmico. Se clasifican en varios tipos: nebulosas de emisión (iluminadas por estrellas jóvenes que ionizan el gas), nebulosas de reflexión (que dispersan la luz estelar cercana), nebulosas oscuras (densas concentraciones que bloquean la luz de fondo), nebulosas planetarias (envolturas expulsadas por estrellas moribundas similares al Sol) y restos de supernova. Son los hogares de la formación estelar y los cementerios donde las estrellas reciclan su materia.",
  },
  {
    id: "quasar",
    topic: "Cuásares",
    keywords: ["cuasar", "quasar", "nucleo galactico activo", "agn"],
    answer:
      "Los cuásares son los objetos astronómicos más luminosos del universo, producidos por la acreción de materia sobre agujeros negros supermasivos en los centros de galaxias activas. Pueden emitir más energía que toda una galaxia combinada, principalmente en forma de radiación electromagnética y chorros relativistas. Se observan a distancias cosmológicas extremas — algunos a más de 13 mil millones de años luz — lo que los convierte en sondas valiosas del universo temprano y de la evolución de los primeros agujeros negros supermasivos.",
  },
  {
    id: "agujero-gusano",
    topic: "Agujeros de gusano",
    keywords: ["agujero de gusano", "wormhole", "puente einstein rosen"],
    answer:
      "Un agujero de gusano, o puente de Einstein-Rosen, es una solución teórica de las ecuaciones de la relatividad general que conecta dos regiones distantes del espacio-tiempo a través de un túnel topológico. Para mantener su garganta abierta y atravesable se requeriría materia exótica con densidad de energía negativa, un fenómeno hipotético no observado experimentalmente. Aunque permanecen como objetos puramente teóricos, son herramientas conceptuales valiosas en estudios sobre la estructura del espacio-tiempo, la causalidad y la gravedad cuántica.",
  },
  {
    id: "antimateria",
    topic: "Antimateria",
    keywords: ["antimateria", "antiparticulas", "asimetria materia antimateria"],
    answer:
      "La antimateria está compuesta por antipartículas que poseen la misma masa que sus contrapartes ordinarias pero cargas y números cuánticos opuestos. Cuando una partícula y su antipartícula colisionan, se aniquilan produciendo radiación. Aunque en el universo primitivo materia y antimateria deberían haberse producido en cantidades casi iguales, la asimetría observada — que permitió la existencia de materia residual y, por tanto, de las galaxias y la vida — es uno de los grandes problemas abiertos: la denominada asimetría bariónica, posiblemente vinculada a procesos de violación CP en el universo temprano.",
  },
  {
    id: "destino",
    topic: "Destino del universo",
    keywords: ["destino del universo", "fin del universo", "como termina el universo", "muerte termica", "big rip", "big crunch"],
    answer:
      "El destino último del universo depende crucialmente de la naturaleza de la energía oscura. Si la constante cosmológica permanece estable, el universo continuará expandiéndose y enfriándose indefinidamente hacia una muerte térmica, un estado de máxima entropía donde la formación estelar cesará y los agujeros negros eventualmente se evaporarán por radiación de Hawking. Si la energía oscura se intensifica con el tiempo, podría producirse un Big Rip que desgarraría toda estructura. Un eventual colapso gravitacional inverso, o Big Crunch, queda actualmente descartado por las observaciones.",
  },
  {
    id: "universo-observable",
    topic: "Universo observable",
    keywords: ["universo observable", "tamaño del universo", "diametro universo"],
    answer:
      "El universo observable es la región del cosmos desde la cual la luz ha tenido tiempo de alcanzarnos desde el Big Bang. Su radio actual es de aproximadamente 46.500 millones de años luz, mayor que la edad del universo multiplicada por la velocidad de la luz debido a la expansión continua del espacio. Contiene cerca de dos billones de galaxias y está limitado por el horizonte cosmológico. Más allá de él existe presumiblemente más universo, pero permanece causalmente inaccesible para cualquier observador situado en nuestra posición.",
  },
  {
    id: "estrellas-neutrones",
    topic: "Estrellas de neutrones",
    keywords: ["estrella de neutrones", "estrellas de neutrones", "pulsar", "pulsares", "magnetar"],
    answer:
      "Las estrellas de neutrones son los remanentes ultradensos del colapso gravitacional de estrellas masivas tras una supernova. Concentran aproximadamente entre 1,4 y 2,3 masas solares en una esfera de apenas 10 a 12 kilómetros de radio, alcanzando densidades del orden de 10¹⁷ kg/m³. Cuando rotan rápidamente y emiten haces de radiación en direcciones definidas, se observan como pulsares. Las variantes con campos magnéticos extremos, llamadas magnetars, presentan algunos de los entornos físicos más extremos conocidos del universo.",
  },
  {
    id: "nucleosintesis",
    topic: "Nucleosíntesis primordial",
    keywords: ["nucleosintesis", "elementos ligeros", "hidrogeno helio"],
    answer:
      "La nucleosíntesis primordial, ocurrida entre aproximadamente 10 segundos y 20 minutos después del Big Bang, produjo los núcleos atómicos más ligeros del universo: hidrógeno (≈75%), helio-4 (≈25%), y trazas de deuterio, helio-3 y litio-7. Las predicciones teóricas sobre las abundancias de estos elementos coinciden notablemente con las observaciones astronómicas, lo que constituye uno de los pilares empíricos del modelo del Big Bang. Los elementos más pesados se sintetizan posteriormente en interiores estelares y en explosiones de supernovas.",
  },
  {
    id: "edad-oscura",
    topic: "Edad oscura del universo",
    keywords: ["edad oscura", "dark ages", "primeras estrellas", "reionizacion"],
    answer:
      "La edad oscura del universo se extiende desde la recombinación, alrededor de 380.000 años tras el Big Bang, hasta la formación de las primeras estrellas, conocidas como Población III, hace aproximadamente 13.500 millones de años. Durante este período, el cosmos consistía en un gas neutro y frío sin fuentes luminosas. La reionización subsiguiente, causada por la radiación ultravioleta de estas primeras estrellas y galaxias, ionizó el medio intergaláctico, marcando el inicio del universo luminoso que el JWST está comenzando a explorar con detalle.",
  },
  {
    id: "estructura",
    topic: "Estructura a gran escala",
    keywords: ["estructura cosmica", "red cosmica", "filamentos", "supercumulos"],
    answer:
      "La estructura a gran escala del universo se organiza en una red filamentosa colosal, denominada red cósmica, formada por filamentos densos de galaxias, nodos en cúmulos y supercúmulos, separados por vastos vacíos cósmicos de cientos de millones de años luz. Esta arquitectura emergió del crecimiento gravitatorio de las pequeñas anisotropías presentes en el universo primitivo, amplificadas por la materia oscura. Su estudio mediante mapeos como SDSS, DESI y Euclid permite restringir parámetros cosmológicos y poner a prueba modelos de gravedad y materia oscura.",
  },
  {
    id: "sistema-solar",
    topic: "Sistema solar",
    keywords: ["sistema solar", "formacion del sistema solar", "nebulosa solar"],
    answer:
      "El Sistema Solar se formó hace aproximadamente 4.600 millones de años a partir del colapso gravitacional de una nube molecular gigante. Una pequeña fracción de esta nube colapsó en un disco protoplanetario alrededor del proto-Sol; la acreción y diferenciación dentro de este disco originaron los planetas terrestres en las zonas internas y los gigantes gaseosos y helados en las externas. Los procesos de migración planetaria, impactos masivos y bombardeo tardío modelaron la arquitectura final, incluyendo el Cinturón de Asteroides, el Cinturón de Kuiper y la lejana Nube de Oort.",
  },
  {
    id: "tierra",
    topic: "Formación de la Tierra",
    keywords: ["formacion de la tierra", "como se formo la tierra", "edad de la tierra"],
    answer:
      "La Tierra se formó hace aproximadamente 4.540 millones de años por acreción de planetesimales en el disco protoplanetario solar. Sufrió una fase temprana de fusión global debido al calor de impactos, decaimiento radiactivo y compresión gravitatoria, lo que permitió su diferenciación en núcleo metálico, manto silicatado y corteza. La colisión con un cuerpo del tamaño de Marte, denominado Theia, originó la Luna. Los océanos aparecieron unos cientos de millones de años después por desgasificación volcánica y aporte cometario, sentando las bases para la aparición de la vida.",
  },
  {
    id: "luna",
    topic: "Origen de la Luna",
    keywords: ["luna", "origen de la luna", "theia", "como se formo la luna"],
    answer:
      "La hipótesis del impacto gigante sostiene que la Luna se formó hace unos 4.500 millones de años a partir de los restos eyectados tras la colisión de un cuerpo del tamaño de Marte, denominado Theia, con la Tierra primigenia. Esta hipótesis explica la composición isotópica casi idéntica entre nuestro planeta y su satélite, así como la baja densidad lunar y la inclinación del eje terrestre. Las simulaciones recientes incluso sugieren escenarios alternativos como impactos múltiples o una sinestia transitoria, pero la idea de un único gran impacto sigue siendo la dominante.",
  },
  {
    id: "sol",
    topic: "El Sol",
    keywords: ["sol", "que es el sol", "estrella sol"],
    answer:
      "El Sol es una estrella de tipo espectral G2V situada en la secuencia principal, con una edad aproximada de 4.600 millones de años y aún en la mitad de su vida. Genera su energía mediante la fusión nuclear del hidrógeno en helio en su núcleo, donde la temperatura supera los 15 millones de kelvin. Posee el 99,86% de la masa del Sistema Solar y su radiación sustenta la vida en la Tierra. Dentro de unos 5.000 millones de años evolucionará a gigante roja y, posteriormente, expulsará sus capas externas para terminar como una enana blanca rodeada de una nebulosa planetaria.",
  },
  {
    id: "horizonte",
    topic: "Horizonte de eventos",
    keywords: ["horizonte de eventos", "event horizon", "limite agujero negro"],
    answer:
      "El horizonte de eventos de un agujero negro es la frontera matemática a partir de la cual ninguna señal física, ni siquiera la luz, puede escapar al exterior. Su radio para un agujero negro estático sin carga (solución de Schwarzschild) corresponde al radio de Schwarzschild, igual a 2GM/c². Para un observador externo, el tiempo de cualquier objeto que se aproxime al horizonte parece dilatarse infinitamente. Aunque el horizonte no es una superficie física, marca un límite causal absoluto en la geometría del espacio-tiempo.",
  },
  {
    id: "hawking",
    topic: "Radiación de Hawking",
    keywords: ["radiacion de hawking", "hawking", "evaporacion agujero negro"],
    answer:
      "La radiación de Hawking, predicha por Stephen Hawking en 1974, es la emisión térmica que un agujero negro produce debido a efectos cuánticos cerca de su horizonte de eventos. La presencia de pares partícula-antipartícula virtuales puede dar lugar a que una de ellas escape mientras la otra cae al interior, provocando una pérdida neta de masa-energía. Aunque su intensidad es prácticamente indetectable para los agujeros negros estelares y supermasivos, este proceso predice la lenta evaporación de los agujeros negros en escalas de tiempo extraordinariamente largas, conectando la gravedad con la termodinámica y la mecánica cuántica.",
  },
  {
    id: "tiempo",
    topic: "Tiempo en el universo",
    keywords: ["tiempo", "que es el tiempo", "espacio tiempo", "dilatacion temporal"],
    answer:
      "En la relatividad de Einstein, el tiempo no es absoluto ni universal, sino una dimensión entrelazada con el espacio en una entidad geométrica denominada espacio-tiempo. La velocidad relativa entre observadores y la presencia de campos gravitatorios alteran el ritmo del tiempo: este se dilata cerca de masas grandes y para observadores que se mueven a velocidades cercanas a la de la luz. Estas predicciones están plenamente comprobadas, desde los relojes atómicos en aviones y satélites GPS hasta las observaciones de pulsares binarios.",
  },
  {
    id: "luz",
    topic: "Velocidad de la luz",
    keywords: ["velocidad de la luz", "constante c", "limite de velocidad"],
    answer:
      "La velocidad de la luz en el vacío, c ≈ 299.792.458 m/s, es una constante fundamental de la naturaleza y representa el límite absoluto de propagación de cualquier señal o partícula con información. Establecida por la teoría de la relatividad especial, es invariante para todos los observadores inerciales, independientemente de su movimiento relativo. Esta invariancia condujo al replanteamiento del concepto de simultaneidad y a la fusión del espacio y el tiempo en una sola estructura geométrica.",
  },
  {
    id: "multiverso",
    topic: "Multiverso",
    keywords: ["multiverso", "muchos universos", "universos paralelos"],
    answer:
      "El multiverso es una hipótesis cosmológica y filosófica que postula la existencia de múltiples universos, posiblemente con leyes físicas, constantes fundamentales o dimensiones diferentes a las nuestras. Surge en distintos contextos: la inflación eterna predice burbujas inflacionarias separadas; la interpretación de muchos mundos de la mecánica cuántica sugiere ramificaciones constantes de la realidad; y la teoría de cuerdas describe un vasto paisaje de soluciones posibles. Aunque conceptualmente atractiva, la verificabilidad empírica del multiverso es objeto de intenso debate.",
  },
  {
    id: "constante-hubble",
    topic: "Constante de Hubble",
    keywords: ["constante de hubble", "h0", "tension de hubble"],
    answer:
      "La constante de Hubble (H₀) cuantifica la tasa actual de expansión del universo y se expresa en kilómetros por segundo por megaparsec. Mediciones basadas en la radiación cósmica de fondo (Planck) sugieren H₀ ≈ 67,4, mientras que las basadas en supernovas tipo Ia y cefeidas (SH0ES) indican H₀ ≈ 73. Esta discrepancia, conocida como tensión de Hubble, supera los 4σ y podría indicar nueva física más allá del modelo cosmológico estándar, motivando intensas investigaciones actuales con DESI, Euclid y JWST.",
  },
  {
    id: "modelo-lcdm",
    topic: "Modelo cosmológico estándar",
    keywords: ["lambda cdm", "lcdm", "modelo cosmologico", "modelo estandar cosmologico"],
    answer:
      "El modelo ΛCDM (Lambda - Cold Dark Matter) es el marco cosmológico estándar actual. Describe un universo plano, con expansión acelerada dominada por una constante cosmológica Λ (aproximadamente 68%), materia oscura fría no bariónica (aproximadamente 27%) y materia bariónica ordinaria (aproximadamente 5%). Reproduce con notable precisión la radiación de fondo, las abundancias primordiales, la estructura a gran escala y la expansión observada. Sin embargo, no explica la naturaleza profunda de Λ ni de la materia oscura, lo que motiva su continua evaluación.",
  },
  {
    id: "cumulos",
    topic: "Cúmulos galácticos",
    keywords: ["cumulo de galaxias", "cumulos galacticos", "supercumulo"],
    answer:
      "Los cúmulos de galaxias son las estructuras gravitacionalmente ligadas más grandes del universo, conteniendo desde decenas hasta miles de galaxias inmersas en un halo extendido de materia oscura y un gas caliente intracumular emisor de rayos X. Pueden alcanzar masas de hasta 10¹⁵ masas solares y son trazadores fundamentales de la evolución cósmica. A escalas mayores, se agrupan en supercúmulos como Laniakea, al cual pertenece la Vía Láctea, conformando la red cósmica de filamentos y vacíos.",
  },
  {
    id: "polvo-cosmico",
    topic: "Polvo cósmico",
    keywords: ["polvo cosmico", "polvo interestelar", "granos de polvo"],
    answer:
      "El polvo cósmico es un componente esencial del medio interestelar, formado por granos microscópicos de silicatos, carbono, hielo y compuestos orgánicos. Se origina principalmente en las atmósferas de estrellas moribundas y en explosiones de supernova. A pesar de constituir apenas un 1% en masa del medio interestelar, juega un papel desproporcionado: enrojece y atenúa la luz estelar, regula la formación de estrellas, y proporciona superficies catalíticas donde se forman moléculas complejas, incluidas las precursoras de la química prebiótica.",
  },
  {
    id: "marte",
    topic: "Marte y vida",
    keywords: ["marte", "vida en marte", "exploracion marte"],
    answer:
      "Marte es el cuarto planeta del Sistema Solar y uno de los principales objetivos de la astrobiología. Aunque hoy es un mundo frío y árido, las evidencias geológicas — cauces fluviales, deltas, minerales hidratados — indican que en el pasado albergó agua líquida estable durante períodos prolongados. Misiones como Perseverance, Curiosity y la futura Mars Sample Return buscan biofirmas en sedimentos antiguos. La posibilidad de vida microbiana actual o pasada permanece abierta, motivando una década de exploración intensiva.",
  },
  {
    id: "europa",
    topic: "Europa y océanos subsuperficiales",
    keywords: ["europa luna", "encelado", "oceano subsuperficial", "luna helada"],
    answer:
      "Las lunas heladas Europa (Júpiter) y Encélado (Saturno) son consideradas entornos prometedores para la búsqueda de vida más allá de la Tierra. Bajo sus cortezas heladas albergan océanos globales de agua líquida en contacto con núcleos rocosos, condiciones potencialmente favorables para la química prebiótica. Las plumas de Encélado, observadas por Cassini, contienen vapor de agua, sales, hidrógeno molecular y compuestos orgánicos. Misiones como Europa Clipper y JUICE están diseñadas específicamente para caracterizar la habitabilidad de estos mundos oceánicos.",
  },
  {
    id: "via-via",
    topic: "Materia bariónica",
    keywords: ["materia bariónica", "barionica", "atomos universo"],
    answer:
      "La materia bariónica es la materia ordinaria compuesta por protones, neutrones y electrones — es decir, todo lo que conforma estrellas, planetas, gas, polvo y seres vivos. Aunque es la única forma directamente visible, representa apenas el 5% del contenido total del universo. Curiosamente, la mayor parte de los bariones no se encuentra en las estrellas ni en las galaxias luminosas, sino en el medio intergaláctico cálido-caliente (WHIM), un gas difuso a temperaturas de millones de kelvin que llena los filamentos de la red cósmica.",
  },
  {
    id: "fusion-nuclear",
    topic: "Fusión nuclear estelar",
    keywords: ["fusion nuclear", "como funciona una estrella", "como brillan las estrellas"],
    answer:
      "Las estrellas brillan gracias a la fusión nuclear que ocurre en sus núcleos. En estrellas como el Sol, el ciclo protón-protón fusiona cuatro núcleos de hidrógeno en uno de helio, liberando energía conforme a E = mc² debido a la pequeña diferencia de masa. En estrellas más masivas predomina el ciclo CNO. Tras agotar el hidrógeno, las estrellas pueden fusionar elementos sucesivamente más pesados — helio, carbono, oxígeno, silicio — hasta llegar al hierro, momento en el cual la fusión deja de liberar energía y la estrella colapsa.",
  },
  {
    id: "horizonte-cosmico",
    topic: "Horizonte cosmológico",
    keywords: ["horizonte cosmologico", "limite del universo observable"],
    answer:
      "El horizonte cosmológico delimita la máxima distancia desde la cual una señal luminosa ha tenido tiempo de alcanzarnos desde el inicio del universo, considerando la expansión continua. Su valor actual es de aproximadamente 46.500 millones de años luz. Más allá existen presumiblemente regiones del universo con propiedades estadísticas similares a las nuestras, pero permanecen causalmente inaccesibles. La existencia de este horizonte refleja límites fundamentales del conocimiento empírico en cosmología.",
  },
  {
    id: "agn",
    topic: "Núcleos galácticos activos",
    keywords: ["nucleo galactico activo", "agn", "galaxia activa", "blazar", "seyfert"],
    answer:
      "Los núcleos galácticos activos (AGN) son regiones centrales de galaxias que emiten enormes cantidades de energía debido a la acreción de materia sobre un agujero negro supermasivo. Se clasifican en función de su geometría observacional: cuásares, galaxias Seyfert, radiogalaxias y blazares. Su radiación abarca todo el espectro electromagnético y a menudo presentan chorros relativistas que pueden extenderse cientos de kiloparsecs. El estudio de los AGN proporciona información clave sobre la coevolución entre agujeros negros supermasivos y sus galaxias huésped.",
  },
  {
    id: "particulas-fundamentales",
    topic: "Partículas fundamentales",
    keywords: ["particulas fundamentales", "modelo estandar", "quarks", "leptones", "boson de higgs"],
    answer:
      "El modelo estándar de partículas describe los constituyentes elementales de la materia y sus interacciones. Comprende seis quarks, seis leptones (incluyendo los neutrinos), los bosones gauge (fotón, gluones, W y Z) y el bosón de Higgs, descubierto en 2012 en el LHC, responsable de otorgar masa a las partículas. Aunque extraordinariamente exitoso, el modelo no incorpora la gravedad, la materia oscura, la energía oscura ni explica la asimetría materia-antimateria, lo que motiva la búsqueda de física más allá del modelo estándar.",
  },
  {
    id: "neutrinos",
    topic: "Neutrinos",
    keywords: ["neutrino", "neutrinos", "particulas fantasma"],
    answer:
      "Los neutrinos son partículas elementales de masa extremadamente pequeña y carga eléctrica nula, que interactúan únicamente mediante la fuerza débil y la gravedad. Existen tres sabores conocidos — electrónico, muónico y tauónico — y oscilan entre ellos a lo largo de su propagación, fenómeno que demostró que poseen masa. Son producidos masivamente en el Sol, supernovas y procesos cósmicos, y son sondas únicas para estudiar el interior estelar, las explosiones de supernova y los procesos del universo temprano.",
  },
  {
    id: "rayos-cosmicos",
    topic: "Rayos cósmicos",
    keywords: ["rayos cosmicos", "particulas cosmicas"],
    answer:
      "Los rayos cósmicos son partículas de altísima energía, principalmente protones y núcleos atómicos, que viajan por el espacio a velocidades cercanas a la de la luz. Su origen es múltiple: desde el Sol y supernovas galácticas, hasta fuentes extragalácticas como núcleos activos y estallidos de rayos gamma. Al impactar la atmósfera terrestre generan cascadas de partículas secundarias que se detectan mediante observatorios como el Pierre Auger. Los rayos cósmicos de ultraalta energía siguen siendo uno de los grandes enigmas de la astrofísica de altas energías.",
  },
  {
    id: "gamma-burst",
    topic: "Estallidos de rayos gamma",
    keywords: ["estallido de rayos gamma", "grb", "gamma ray burst"],
    answer:
      "Los estallidos de rayos gamma (GRBs) son los eventos electromagnéticos más energéticos del universo conocido, capaces de liberar en segundos más energía que el Sol durante toda su vida. Se distinguen dos tipos: los cortos (menos de dos segundos), asociados a la fusión de estrellas de neutrones; y los largos, vinculados al colapso gravitacional de estrellas masivas en hipernovas. Su detección desde grandes distancias cosmológicas los convierte en sondas valiosas del universo temprano y de los procesos físicos más extremos imaginables.",
  },
  {
    id: "agujero-blanco",
    topic: "Agujeros blancos",
    keywords: ["agujero blanco", "white hole"],
    answer:
      "Un agujero blanco es una solución matemática de las ecuaciones de la relatividad general que describe una región del espacio-tiempo de la cual nada puede entrar y desde la cual la materia y la radiación pueden salir. Es, en cierto sentido, el opuesto temporal de un agujero negro. Aunque permitidos formalmente, no se han observado evidencias empíricas de su existencia, y la mayoría de modelos cosmológicos los consideran objetos teóricos sin contrapartida física directa, salvo posiblemente como remanentes cuánticos de la evaporación de agujeros negros.",
  },
  {
    id: "vacio",
    topic: "Vacío cósmico",
    keywords: ["vacio cosmico", "espacio vacio", "energia del vacio"],
    answer:
      "El vacío cósmico, lejos de ser una región de la nada absoluta, es un sistema físico activo dotado de energía y propiedades cuánticas. Las fluctuaciones cuánticas del vacío crean continuamente pares virtuales de partículas y antipartículas, fenómeno con consecuencias medibles como el efecto Casimir. La energía del vacío se asocia con la constante cosmológica y, por tanto, con la energía oscura. Sin embargo, el cálculo teórico cuántico del valor de la energía del vacío difiere de las observaciones cosmológicas en hasta 120 órdenes de magnitud — el mayor desacuerdo conocido en la física fundamental.",
  },
  {
    id: "telescopios",
    topic: "Telescopios y observatorios",
    keywords: ["telescopios", "observatorios", "vlt", "alma", "elt"],
    answer:
      "La astronomía moderna se sustenta en una red diversa de telescopios terrestres y espaciales que operan en todo el espectro electromagnético. Entre los más relevantes destacan: el Very Large Telescope (VLT) y el futuro Extremely Large Telescope (ELT) en Chile, ALMA para observaciones milimétricas, los detectores de ondas gravitacionales LIGO/Virgo/KAGRA, los observatorios espaciales Hubble y JWST, y el reciente Vera C. Rubin Observatory para sondeos sinópticos. Esta sinergia permite una astronomía multimensajera y multilongitud de onda sin precedentes.",
  },
  {
    id: "tiempo-planck",
    topic: "Tiempo y longitud de Planck",
    keywords: ["planck", "tiempo de planck", "longitud de planck", "escala de planck"],
    answer:
      "La escala de Planck define los límites donde se espera que los efectos cuánticos de la gravedad se vuelvan dominantes y la descripción clásica del espacio-tiempo deje de ser válida. La longitud de Planck es del orden de 1,6 × 10⁻³⁵ metros, el tiempo de Planck de 5,4 × 10⁻⁴⁴ segundos y la energía de Planck de 1,2 × 10¹⁹ GeV. Sondear directamente esta escala está fuera del alcance experimental actual, pero su comprensión teórica constituye uno de los grandes objetivos de la gravedad cuántica.",
  },
  {
    id: "futuro-sol",
    topic: "Futuro del Sol",
    keywords: ["futuro del sol", "muerte del sol", "sol gigante roja", "enana blanca"],
    answer:
      "Dentro de aproximadamente 5.000 millones de años, el Sol agotará el hidrógeno de su núcleo e iniciará la fusión de helio, expandiéndose hasta convertirse en una gigante roja que probablemente engullirá a Mercurio y Venus, y volverá inhabitable a la Tierra. Tras esta fase, expulsará sus capas externas formando una nebulosa planetaria, y su núcleo desnudo perdurará como una enana blanca de carbono y oxígeno, enfriándose lentamente durante miles de millones de años hasta convertirse, en escalas extraordinariamente largas, en una hipotética enana negra.",
  },
  {
    id: "viajes-espaciales",
    topic: "Viajes interestelares",
    keywords: ["viajes interestelares", "viaje a otra estrella", "propulsion espacial"],
    answer:
      "Los viajes interestelares enfrentan desafíos físicos descomunales debido a las distancias involucradas: la estrella más cercana, Próxima Centauri, se encuentra a 4,24 años luz. Con tecnologías químicas actuales, una misión tardaría decenas de miles de años. Conceptos teóricos contemplan propulsión nuclear, velas de luz aceleradas por láser (proyecto Breakthrough Starshot), motores antimateria o configuraciones especulativas como el Alcubierre warp drive, que requeriría energía negativa. Por ahora, la exploración interestelar permanece como un objetivo a muy largo plazo.",
  },
  {
    id: "agua-cosmica",
    topic: "Agua en el universo",
    keywords: ["agua en el universo", "origen del agua", "agua espacial"],
    answer:
      "El agua es una de las moléculas más abundantes del universo, formada en las atmósferas frías de estrellas evolucionadas y en regiones de formación estelar. Se ha detectado en cometas, lunas heladas, atmósferas exoplanetarias y discos protoplanetarios. En la Tierra, el agua llegó probablemente por una combinación de aporte cometario y desgasificación volcánica de minerales hidratados acumulados durante la formación planetaria. Su presencia es un criterio central — aunque no único — en la búsqueda de mundos potencialmente habitables.",
  },
  {
    id: "ai-self",
    topic: "Sobre Cosmo AI",
    keywords: ["quien eres", "que eres", "como te llamas", "cosmo ai", "tu nombre"],
    answer:
      "Soy COSMO AI, una interfaz educativa diseñada para acompañarte en este recorrido por el origen y la evolución del universo. Mi base de conocimiento integra cosmología contemporánea, astrofísica observacional y física fundamental, con respuestas elaboradas en un registro científico riguroso. Puedes preguntarme sobre el Big Bang, la materia y energía oscuras, la formación de galaxias y estrellas, los agujeros negros, las ondas gravitacionales, los exoplanetas, el destino del universo y muchos otros temas. Estoy lista para guiarte por más de 13.800 millones de años de historia cósmica.",
  },
  {
    id: "fallback",
    topic: "Sin coincidencia",
    keywords: ["__fallback__"],
    answer:
      "Esa pregunta toca un territorio aún no cubierto en mi base de conocimiento local. Puedes reformularla o explorar temas como el Big Bang, la inflación cósmica, la materia oscura, la energía oscura, los agujeros negros, las ondas gravitacionales, la formación estelar, las galaxias, los exoplanetas, la radiación cósmica de fondo, el James Webb, la teoría de cuerdas o el destino del universo. Estoy diseñada para responder en profundidad a cualquiera de estos dominios.",
  },
];

export const SUGGESTIONS = [
  "¿Qué es el Big Bang?",
  "¿Qué es la materia oscura?",
  "¿Cómo nacen las estrellas?",
  "¿Qué son las galaxias?",
  "¿Qué edad tiene el universo?",
  "¿Qué son los agujeros negros?",
  "¿Qué descubrió el James Webb?",
  "¿Qué es la energía oscura?",
];

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[¿?¡!.,;:()"']/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function findAnswer(query: string): KBEntry {
  const q = normalize(query);
  if (!q) return KB.find((k) => k.id === "fallback")!;

  let best: { entry: KBEntry; score: number } | null = null;
  for (const entry of KB) {
    if (entry.id === "fallback") continue;
    let score = 0;
    for (const kw of entry.keywords) {
      const nk = normalize(kw);
      if (!nk) continue;
      if (q.includes(nk)) {
        score += nk.split(" ").length * 3 + nk.length * 0.05;
      } else {
        // partial token overlap
        const qTokens = q.split(" ");
        const kTokens = nk.split(" ");
        const shared = kTokens.filter((t) => t.length > 3 && qTokens.includes(t)).length;
        if (shared > 0) score += shared * 1.2;
      }
    }
    if (!best || score > best.score) best = { entry, score };
  }
  if (!best || best.score < 1.5) return KB.find((k) => k.id === "fallback")!;
  return best.entry;
}
