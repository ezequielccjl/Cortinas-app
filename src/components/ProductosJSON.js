//IMPORT IMAGES BLACKOUT
import imgMuestraBO from '../imgProds/blackout/blackout.png'

    //Fiberglass
    import bright_white from '../imgProds/blackout/fiberglass/B.O-CLÁSICO-BRIGHT-WHITE-MOR147-400x516.jpg'
    import ivory from '../imgProds/blackout/fiberglass/B.O-CLÁSICO-_-IVORY-MOR148-400x516.jpg'
    import beige from '../imgProds/blackout/fiberglass/B.O-CLÁSICO-BEIGE-MOR149-400x516.jpg'
    import artic_silver from '../imgProds/blackout/fiberglass/B.O-CLÁSICO-ARTIC-SILVER-MOR150-400x516.jpg'
    import jet_black from '../imgProds/blackout/fiberglass/B.O-CLÁSICO-JET-BLACK-MOR154-400x516.jpg'

    //Fiberglass Wide
    import plus_bright_white from '../imgProds/blackout/fiberglassWide/B.O-PLUS-BRIGHT-WHITE-MO3152-1-400x516.jpg'
    import plus_ivory from '../imgProds/blackout/fiberglassWide/B.O-PLUS-IVORY-MO3153-400x516.jpg'
    import plus_silver_grey from '../imgProds/blackout/fiberglassWide/B.O-PLUS-SILVER-GREY-MO0809-2-400x516.jpg'

    //Standard
    import gris from '../imgProds/blackout/standard/Blackout-Gris-400x516.jpg'
    import blanco from '../imgProds/blackout/standard/blanco-400x516.png'
    import natural from '../imgProds/blackout/standard/natural-400x516.png'

//IMPORT IMAGES VERTICAL
import imgMuestraVE from '../imgProds/vertical/vertical.png'

//IMPORT IMAGES SUNSCREEN
import imgMuestraSu from '../imgProds/sunscreen/sunscreen.png'

//IMPORT IMAGES DECO
import imgMuestraDe from '../imgProds/deco/deco.png'

//IMPORT IMAGES DUO
import imgMuestraDu from '../imgProds/duo/duo.gif'

//IMPORT IMAGES HORIZONTALES
import imgMuestraHo from '../imgProds/horizontal/horizontal.gif'

//IMPORT IMAGES IMPRESAS
import imgMuestraIm from '../imgProds/impresas/impresas.png'

//IMPORT IMAGES DOBLE
import imgMuestraDo from '../imgProds/dobles/dobles.jpg'


export const listaCatalogo = [
    {
    id: "blackout",
    titulo: "BLACK OUT",
    subtitulo: "Oscuridad",
    imgMuestra: imgMuestraBO,
    ventajas: [
        "Aislante Térmico",
        "Control Acústico",
        "Control Lumínico",
        "Durabilidad Asegurada",
        "Fácil Limpieza"
    ],
    telas: [{
        nombre: "Black Out Fiberglass™ 5000",
        arrayTelas: [{
            nombreTela: "Clásico Bright White",
            img: bright_white
        },{
            nombreTela: "Clásico Ivory",
            img: ivory
        },{
            nombreTela: "Clásico Beige",
            img: beige
        },{
            nombreTela: "Clásico Artic Silver",
            img: artic_silver
        },{
            nombreTela: "Clásico Jet Black",
            img: jet_black
        }]
    },{
        nombre: "Black Out Fiberglass™ 5000 Wide",
        arrayTelas: [{
            nombreTela: "Plus Bright White",
            img: plus_bright_white
        },{
            nombreTela: "Plus Ivory",
            img: plus_ivory
        },{
            nombreTela: "Plus Silver Grey",
            img: plus_silver_grey
        }]
    },{
        nombre: "Black Out Standart",
        arrayTelas: [{
            nombreTela: "Blanco",
            img: blanco
        },{
            nombreTela: "Natural",
            img: natural
        },{
            nombreTela: "Gris",
            img: gris
        }]
    }]
},{
    id: "verticales",
    titulo: "VERTICALES",
    subtitulo: "Regulable",
    imgMuestra: imgMuestraVE,
    ventajas: [
        "Control Acústico",
        "Control Lumínico",
        "Durabilidad Asegurada",
        "Diferentes Niveles de Privacidad",
        "Flexibilidad"
    ],
    telas: [{
        nombre: "Premium Plus",
        arrayTelas: [

        ]
    },{
        nombre: "Premium",
        arrayTelas: [
            
        ]
    }]

},{
   id: "motorizadas",
   titulo: "MOTORIZADAS",
   subtitulo: "",
   ventajas: [
       "Confort y tecnología",
       "Control mediante control remoto",
       "Evita roturas en paredes existentes",
       "Tecnología fiable y sin cables"
   ],
   telas: [{
       nombre:"",
       arrayTelas: [

       ]
   }]
},{
    id: "sunscreen",
    titulo: "SUNSCREEN",
    subtitulo: "Transparente y Translúcida",
    imgMuestra: imgMuestraSu,
    ventajas: [
        "Visibilidad Exterior",
        "Fácil Limpieza",
        "Control Acústico",
        "Luz Natural",
        "Visibilidad Exterior",
        "Durabilidad Asegurada"
    ],
    telas: [{
        nombre: "",
        arrayTelas: [

        ]
    }]
},{
    id: "deco",
    titulo: "DECO",
    subtitulo: "Translúcida",
    imgMuestra: imgMuestraDe,
    ventajas: [
        "Durabilidad Asegurada",
        "Fácil Limpieza",
        "Colores Vívidos",
        "Luz Natural",
        "Privacidad 24HS"
    ],
    telas: [{
        nombre: "",
        arrayTelas: [

        ]
    }]
},{
    id: "duo",
    titulo: "DUO ENROLABLE",
    subtitulo: "Visibilidad Regulable",
    imgMuestra: imgMuestraDu,
    ventajas: [
        "Visibilidad Regulable",
        "Control Lumínico",
        "Durabilidad Asegurada",
        "Tejidos Técnicos",
    ],
    telas: [{
        nombre: "",
        arrayTelas: [

        ]
    }]
},{
    id: "horizontales",
    titulo: "HORIZONTALES",
    subtitulo: "Láminas Graduable",
    imgMuestra: imgMuestraHo,
    ventajas: [
        "Material Anticorrosivo",
        "Fácil Limpieza",
        "Control Lumínico",
        "Durabilidad Asegurada",
    ],
    telas: [{
        nombre: "",
        arrayTelas: [

        ]
    }]
},{
    id: "impresas",
    titulo: "IMPRESAS",
    subtitulo: "Personalizadas",
    imgMuestra: imgMuestraIm,
    ventajas: [
        "Impresión de Alta Calidad",
        "Fácil Limpieza",
        "Colores Vívidos",
        "Durabilidad Asegurada",
    ],
    telas: [{
        nombre: "",
        arrayTelas: [

        ]
    }]
},{
    id: "dobles",
    titulo: "DOBLES",
    subtitulo: "Versatilidad en Ambientes",
    imgMuestra: imgMuestraDo,
    ventajas: [
        "Impresión de Alta Calidad",
        "Fácil Limpieza",
        "Colores Vívidos",
        "Durabilidad Asegurada",
    ],
    telas: [{
        nombre: "",
        arrayTelas: [

        ]
    }]
}]