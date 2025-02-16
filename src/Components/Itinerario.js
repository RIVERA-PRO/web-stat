// src/itinerario.js
import imagenes from './imagenes';  // Importar las imágenes

const itinerario = [
    {
        id: 1,
        dia: "Día 1",
        titulo: "Presentación Grupal y de Tribu",
        actividades: [
            "18:00 hs: Presentación grupal y de tribu en el Ashram del Hotel",
            "La presentación grupal y de tribu es un momento importante para establecer conexiones y crear un espacio sagrado para el retiro."
        ],
        imagenes: [imagenes[0], imagenes[1], imagenes[2], imagenes[3]]  // Array de imágenes
    },
    {
        id: 2,
        dia: "Día 2",
        titulo: "Meditación en Tribu y Taller de Constelaciones Familiares",
        actividades: [
            "Antes del desayuno: Meditación en tribu",
            "18:00 hs: Taller de constelaciones familiares: sanando al niño interior y liberando patrones negativos"
        ],
        imagenes: [imagenes[4], imagenes[5], imagenes[6], imagenes[7]]
    },
    {
        id: 3,
        dia: "Día 3",
        titulo: "Excursión en Barco a Cabo Frío",
        actividades: [
            "Día completo: Excursión en barco a Cabo Frío",
            "Disfruta de una aventura emocionante en el mar y conecta con la belleza de la naturaleza."
        ],
        imagenes: [imagenes[8], imagenes[9], imagenes[10], imagenes[11]]
    },
    {
        id: 4,
        dia: "Día 4",
        titulo: "Meditación en Grupo y Encuentro Chamánico",
        actividades: [
            "Antes del desayuno: Meditación en grupo",
            "18:00 hs: Encuentro chamánico: limpieza energética, rescate de alma y conexión con la naturaleza"
        ],
        imagenes: [imagenes[12], imagenes[13], imagenes[14], imagenes[15]]
    },
    {
        id: 5,
        dia: "Día 5",
        titulo: "Taller Lúdico y Excursión por Playas de Búzios",
        actividades: [
            "Mañana: Taller lúdico: conexión con el cuerpo y la respiración",
            "14:00 hs: Excursión por playas de Búzios: disfruta de la belleza del entorno",
            "21:00 hs: Velada y ceremonia del fuego en pirámide conexión con la Diosa del Mar"
        ],
        imagenes: [imagenes[16], imagenes[17], imagenes[18], imagenes[19]]
    },
    {
        id: 6,
        dia: "Día 6",
        titulo: "Paseo y Encuentro de Tribu",
        actividades: [
            "16:00 hs: Paseo a la zona comercial de Búzios",
            "21:00 hs: Encuentro de Tribu: Círculo de Palabra"
        ],
        imagenes: [imagenes[20], imagenes[21], imagenes[22], imagenes[23]]
    },
    {
        id: 7,
        dia: "Día 7",
        titulo: "Meditación y Apertura de Espacio Sagrado",
        actividades: [
            "Antes del desayuno: Meditación en grupo",
            "18:00 hs: Apertura de Espacio Sagrado: limpieza con tambor chamánico, animal de poder, rito del útero"
        ],
        imagenes: [imagenes[24], imagenes[25], imagenes[26], imagenes[27]]
    }
];

export default itinerario;
