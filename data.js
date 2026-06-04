const PRODUCTOS_CATALOGO = [
  {
    "id": 1,
    "fase": 1,
    "nombre": "Gel Limpiador Espumoso",
    "marca": "CeraVe",
    "precio": 72.9,
    "ingrediente_activo": "Ceramidas, Niacinamida",
    "vehiculo": "Gel",
    "indicacion_clinica": "Limpia y seborrregula sin resecar",
    "filtro_baumann": [
      "OSNT",
      "OSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/cerave-gel-espumoso.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Limpia y seborrregula sin resecar",
    "descripcionLarga": "Gel de CeraVe formulado con Ceramidas, Niacinamida. Limpia y seborrregula sin resecar. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ceramidas",
      "Niacinamida"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 2,
    "fase": 1,
    "nombre": "Crema-Espuma Limpiadora",
    "marca": "CeraVe",
    "precio": 75.9,
    "ingrediente_activo": "Aminoácidos, Ceramidas",
    "vehiculo": "Crema-Espuma",
    "indicacion_clinica": "Limpieza suave que retiene la hidratación",
    "filtro_baumann": [
      "DSNT",
      "DSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/cerave-crema-espuma.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Limpieza suave que retiene la hidratación",
    "descripcionLarga": "Crema-Espuma de CeraVe formulado con Aminoácidos, Ceramidas. Limpieza suave que retiene la hidratación. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Aminoácidos",
      "Ceramidas"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 3,
    "fase": 1,
    "nombre": "Gel Control de Imperfecciones",
    "marca": "CeraVe",
    "precio": 79.9,
    "ingrediente_activo": "Ácido Salicílico 2%",
    "vehiculo": "Gel",
    "indicacion_clinica": "Desobstruye poros y trata imperfecciones",
    "filtro_baumann": [
      "OSPW",
      "OSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/cerave-control-imperfecciones.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Desobstruye poros y trata imperfecciones",
    "descripcionLarga": "Gel de CeraVe formulado con Ácido Salicílico 2%. Desobstruye poros y trata imperfecciones. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácido Salicílico 2%"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 4,
    "fase": 1,
    "nombre": "Effaclar Gel Purificante",
    "marca": "La Roche-Posay",
    "precio": 109.9,
    "ingrediente_activo": "Zinc PCA, Agua Termal",
    "vehiculo": "Gel",
    "indicacion_clinica": "Elimina impurezas y regula el exceso de brillo",
    "filtro_baumann": [
      "OSNT",
      "ORNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/lrp-effaclar-gel.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Elimina impurezas y regula el exceso de brillo",
    "descripcionLarga": "Gel de La Roche-Posay formulado con Zinc PCA, Agua Termal. Elimina impurezas y regula el exceso de brillo. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Zinc PCA",
      "Agua Termal"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 5,
    "fase": 1,
    "nombre": "Effaclar H Iso-Biome Crema Lavante",
    "marca": "La Roche-Posay",
    "precio": 115,
    "ingrediente_activo": "Orellana, Niacinamida",
    "vehiculo": "Crema",
    "indicacion_clinica": "Limpiador calmante para pieles resecas por tratamientos",
    "filtro_baumann": [
      "DSPT",
      "OSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/lrp-effaclar-h.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Limpiador calmante para pieles resecas por tratamientos",
    "descripcionLarga": "Crema de La Roche-Posay formulado con Orellana, Niacinamida. Limpiador calmante para pieles resecas por tratamientos. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Orellana",
      "Niacinamida"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 6,
    "fase": 1,
    "nombre": "Toleriane Dermo-Cleanser",
    "marca": "La Roche-Posay",
    "precio": 99.9,
    "ingrediente_activo": "Glicerina",
    "vehiculo": "Fluido",
    "indicacion_clinica": "Limpiador de alta tolerancia para piel sensible",
    "filtro_baumann": [
      "DSPT",
      "DSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/lrp-toleriane-dermo.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Limpiador de alta tolerancia para piel sensible",
    "descripcionLarga": "Fluido de La Roche-Posay formulado con Glicerina. Limpiador de alta tolerancia para piel sensible. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Glicerina"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 7,
    "fase": 1,
    "nombre": "Sensibio Gel Moussant",
    "marca": "Bioderma",
    "precio": 89.9,
    "ingrediente_activo": "Glucósido de Coco",
    "vehiculo": "Gel",
    "indicacion_clinica": "Limpiador calmante que refuerza la hidratación",
    "filtro_baumann": [
      "DSNT",
      "OSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/bioderma-sensibio-gel.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Limpiador calmante que refuerza la hidratación",
    "descripcionLarga": "Gel de Bioderma formulado con Glucósido de Coco. Limpiador calmante que refuerza la hidratación. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Glucósido de Coco"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 8,
    "fase": 1,
    "nombre": "Sébium Gel Moussant",
    "marca": "Bioderma",
    "precio": 89.9,
    "ingrediente_activo": "Sulfato de Zinc y Cobre",
    "vehiculo": "Gel",
    "indicacion_clinica": "Limpiador purificante que controla el exceso de sebo",
    "filtro_baumann": [
      "OSNT",
      "ORNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/bioderma-sebium-gel.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Limpiador purificante que controla el exceso de sebo",
    "descripcionLarga": "Gel de Bioderma formulado con Sulfato de Zinc y Cobre. Limpiador purificante que controla el exceso de sebo. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Sulfato de Zinc y Cobre"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 9,
    "fase": 1,
    "nombre": "Sensibio Agua Micelar",
    "marca": "Bioderma",
    "precio": 75.9,
    "ingrediente_activo": "Ésteres de Ácidos Grasos",
    "vehiculo": "Solución",
    "indicacion_clinica": "Desmaquilla e higieniza respetando la sensibilidad",
    "filtro_baumann": [
      "TODOS"
    ],
    "imagen_url": "https://www.aruma.pe/media/bioderma-sensibio-agua.jpg",
    "apto_para_todos": true,
    "descripcionCorta": "Desmaquilla e higieniza respetando la sensibilidad",
    "descripcionLarga": "Solución de Bioderma formulado con Ésteres de Ácidos Grasos. Desmaquilla e higieniza respetando la sensibilidad. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ésteres de Ácidos Grasos"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 10,
    "fase": 1,
    "nombre": "Sébium Agua Micelar",
    "marca": "Bioderma",
    "precio": 75.9,
    "ingrediente_activo": "Gluconato de Zinc",
    "vehiculo": "Solución",
    "indicacion_clinica": "Limpia impurezas y previene la obstrucción de poros",
    "filtro_baumann": [
      "OSNT",
      "ORNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/bioderma-sebium-agua.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Limpia impurezas y previene la obstrucción de poros",
    "descripcionLarga": "Solución de Bioderma formulado con Gluconato de Zinc. Limpia impurezas y previene la obstrucción de poros. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Gluconato de Zinc"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 11,
    "fase": 1,
    "nombre": "Cleanance Gel Limpiador",
    "marca": "Avène",
    "precio": 104.9,
    "ingrediente_activo": "Comedoclastin",
    "vehiculo": "Gel",
    "indicacion_clinica": "Reduce el exceso de grasa y previene brotes",
    "filtro_baumann": [
      "OSNT",
      "OSPW"
    ],
    "imagen_url": "https://www.aruma.pe/media/avene-cleanance-gel.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Reduce el exceso de grasa y previene brotes",
    "descripcionLarga": "Gel de Avène formulado con Comedoclastin. Reduce el exceso de grasa y previene brotes. Ayuda a controlar imperfecciones y prevenir futuros brotes.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Comedoclastin"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 12,
    "fase": 1,
    "nombre": "XeraCalm A.D Aceite Limpiador",
    "marca": "Avène",
    "precio": 119.9,
    "ingrediente_activo": "I-modulia, Ceramidas",
    "vehiculo": "Aceite",
    "indicacion_clinica": "Alivia el prurito y la sequedad de pieles atópicas",
    "filtro_baumann": [
      "DSPT",
      "DSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/avene-xeracalm-aceite.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Alivia el prurito y la sequedad de pieles atópicas",
    "descripcionLarga": "Aceite de Avène formulado con I-modulia, Ceramidas. Alivia el prurito y la sequedad de pieles atópicas. Formulado con tecnología avanzada para resultados visibles desde las primeras aplicaciones.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "I-modulia",
      "Ceramidas"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 13,
    "fase": 1,
    "nombre": "Loción Limpiadora de Piel Sensible",
    "marca": "Cetaphil",
    "precio": 65.9,
    "ingrediente_activo": "Niacinamida, Pantenol",
    "vehiculo": "Loción",
    "indicacion_clinica": "Higiene suave sin necesidad de enjuague",
    "filtro_baumann": [
      "DSNT",
      "DSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/cetaphil-limpiador-sensible.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Higiene suave sin necesidad de enjuague",
    "descripcionLarga": "Loción de Cetaphil formulado con Niacinamida, Pantenol. Higiene suave sin necesidad de enjuague. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Niacinamida",
      "Pantenol"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 14,
    "fase": 1,
    "nombre": "Cetaphil PRO AD Derma Limpiador",
    "marca": "Cetaphil",
    "precio": 94.9,
    "ingrediente_activo": "Filagrina",
    "vehiculo": "Crema",
    "indicacion_clinica": "Restaura la barrera en pieles extremadamente secas",
    "filtro_baumann": [
      "DSNT",
      "DSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/cetaphil-pro-ad-limpiador.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Restaura la barrera en pieles extremadamente secas",
    "descripcionLarga": "Crema de Cetaphil formulado con Filagrina. Restaura la barrera en pieles extremadamente secas. Nutre y repara la barrera cutánea para una piel más saludable.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Filagrina"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 15,
    "fase": 1,
    "nombre": "Acniben Gel Limpiador",
    "marca": "ISDIN",
    "precio": 84.9,
    "ingrediente_activo": "Zincamide, Ácido Salicílico",
    "vehiculo": "Gel",
    "indicacion_clinica": "Higiene purificante profunda para pieles acneicas",
    "filtro_baumann": [
      "OSNT",
      "OSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/isdin-acniben-gel.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Higiene purificante profunda para pieles acneicas",
    "descripcionLarga": "Gel de ISDIN formulado con Zincamide, Ácido Salicílico. Higiene purificante profunda para pieles acneicas. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Zincamide",
      "Ácido Salicílico"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 16,
    "fase": 1,
    "nombre": "Isdinceutics Essential Cleansing",
    "marca": "ISDIN",
    "precio": 149.9,
    "ingrediente_activo": "Aceite de Oliva, Clary Sage",
    "vehiculo": "Aceite",
    "indicacion_clinica": "Aceite limpiador que emulsiona impurezas y maquillaje",
    "filtro_baumann": [
      "DRNT",
      "DRPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/isdin-essential-cleansing.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Aceite limpiador que emulsiona impurezas y maquillaje",
    "descripcionLarga": "Aceite de ISDIN formulado con Aceite de Oliva, Clary Sage. Aceite limpiador que emulsiona impurezas y maquillaje. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": true,
    "ingredientesActivos": [
      "Aceite de Oliva",
      "Clary Sage"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 17,
    "fase": 1,
    "nombre": "Hydro Boost Water Gel Cleanser",
    "marca": "Neutrogena",
    "precio": 45.9,
    "ingrediente_activo": "Ácido Hialurónico",
    "vehiculo": "Gel",
    "indicacion_clinica": "Gel limpiador ligero que recarga la hidratación facial",
    "filtro_baumann": [
      "OSNT",
      "DSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/neutrogena-hydro-boost-cleanser.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Gel limpiador ligero que recarga la hidratación facial",
    "descripcionLarga": "Gel de Neutrogena formulado con Ácido Hialurónico. Gel limpiador ligero que recarga la hidratación facial. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácido Hialurónico"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 18,
    "fase": 1,
    "nombre": "Purified Skin Exfoliante Facial",
    "marca": "Neutrogena",
    "precio": 42.9,
    "ingrediente_activo": "Ácido Salicílico",
    "vehiculo": "Gel",
    "indicacion_clinica": "Remueve células muertas y destapa poros obstruidos",
    "filtro_baumann": [
      "ORNT",
      "ORPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/neutrogena-purified-skin-exfoliante.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Remueve células muertas y destapa poros obstruidos",
    "descripcionLarga": "Gel de Neutrogena formulado con Ácido Salicílico. Remueve células muertas y destapa poros obstruidos. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácido Salicílico"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 19,
    "fase": 1,
    "nombre": "Low pH Good Morning Gel Cleanser",
    "marca": "COSRX",
    "precio": 59.9,
    "ingrediente_activo": "Extracto de Árbol de Té, BHA",
    "vehiculo": "Gel",
    "indicacion_clinica": "Limpiador suave de pH balanceado para uso matutino",
    "filtro_baumann": [
      "OSNT",
      "ORNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/cosrx-low-ph-gel.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Limpiador suave de pH balanceado para uso matutino",
    "descripcionLarga": "Gel de COSRX formulado con Extracto de Árbol de Té, BHA. Limpiador suave de pH balanceado para uso matutino. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Extracto de Árbol de Té",
      "BHA"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 20,
    "fase": 1,
    "nombre": "Salicylic Acid Daily Gentle Cleanser",
    "marca": "COSRX",
    "precio": 62.9,
    "ingrediente_activo": "Ácido Salicílico 0.5%",
    "vehiculo": "Gel",
    "indicacion_clinica": "Limpiador exfoliante suave que combate imperfecciones",
    "filtro_baumann": [
      "ORNT",
      "ORPW"
    ],
    "imagen_url": "https://www.aruma.pe/media/cosrx-salicylic-cleanser.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Limpiador exfoliante suave que combate imperfecciones",
    "descripcionLarga": "Gel de COSRX formulado con Ácido Salicílico 0.5%. Limpiador exfoliante suave que combate imperfecciones. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácido Salicílico 0.5%"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 21,
    "fase": 1,
    "nombre": "Madagascar Centella Ampoule Foam",
    "marca": "SKIN1004",
    "precio": 79,
    "ingrediente_activo": "Centella Asiática",
    "vehiculo": "Espuma",
    "indicacion_clinica": "Espuma limpiadora calmante de alta densidad",
    "filtro_baumann": [
      "DSPT",
      "DSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/skin1004-centella-foam.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Espuma limpiadora calmante de alta densidad",
    "descripcionLarga": "Espuma de SKIN1004 formulado con Centella Asiática. Espuma limpiadora calmante de alta densidad. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Centella Asiática"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 22,
    "fase": 1,
    "nombre": "Madagascar Centella Light Cleansing Oil",
    "marca": "SKIN1004",
    "precio": 119,
    "ingrediente_activo": "Centella, Aceites botánicos",
    "vehiculo": "Aceite",
    "indicacion_clinica": "Remueve maquillaje e impurezas oleosas con suavidad",
    "filtro_baumann": [
      "TODOS"
    ],
    "imagen_url": "https://www.aruma.pe/media/skin1004-cleansing-oil.jpg",
    "apto_para_todos": true,
    "descripcionCorta": "Remueve maquillaje e impurezas oleosas con suavidad",
    "descripcionLarga": "Aceite de SKIN1004 formulado con Centella, Aceites botánicos. Remueve maquillaje e impurezas oleosas con suavidad. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Centella",
      "Aceites botánicos"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 23,
    "fase": 1,
    "nombre": "Gokujyun Hyaluronic Acid Bubble Wash",
    "marca": "Hada Labo",
    "precio": 74.9,
    "ingrediente_activo": "Ácido Hialurónico triple",
    "vehiculo": "Espuma",
    "indicacion_clinica": "Espuma autogenerada ultra-hidratante protectora",
    "filtro_baumann": [
      "DSNT",
      "DSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/hada-labo-bubble-cleanser.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Espuma autogenerada ultra-hidratante protectora",
    "descripcionLarga": "Espuma de Hada Labo formulado con Ácido Hialurónico triple. Espuma autogenerada ultra-hidratante protectora. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácido Hialurónico triple"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 24,
    "fase": 1,
    "nombre": "AHA BHA PHA 30 Days Miracle Bar",
    "marca": "Some By Mi",
    "precio": 49.9,
    "ingrediente_activo": "Ácidos exfoliantes, Árbol de té",
    "vehiculo": "Barra",
    "indicacion_clinica": "Barra limpiadora exfoliante que unifica la textura",
    "filtro_baumann": [
      "ORNT",
      "ORPW"
    ],
    "imagen_url": "https://www.aruma.pe/media/somebymi-miracle-bar.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Barra limpiadora exfoliante que unifica la textura",
    "descripcionLarga": "Barra de Some By Mi formulado con Ácidos exfoliantes, Árbol de té. Barra limpiadora exfoliante que unifica la textura. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácidos exfoliantes",
      "Árbol de té"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 25,
    "fase": 1,
    "nombre": "Normaderm Phytosolution Gel",
    "marca": "Vichy",
    "precio": 104.9,
    "ingrediente_activo": "Zinc, Cobre, Ácido Salicílico",
    "vehiculo": "Gel",
    "indicacion_clinica": "Limpiador profundo para imperfecciones en piel grasa",
    "filtro_baumann": [
      "OSNT",
      "OSPW"
    ],
    "imagen_url": "https://www.aruma.pe/media/vichy-normaderm-gel.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Limpiador profundo para imperfecciones en piel grasa",
    "descripcionLarga": "Gel de Vichy formulado con Zinc, Cobre, Ácido Salicílico. Limpiador profundo para imperfecciones en piel grasa. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Zinc",
      "Cobre",
      "Ácido Salicílico"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 26,
    "fase": 1,
    "nombre": "Pureté Thermale Gel Fresco",
    "marca": "Vichy",
    "precio": 94.9,
    "ingrediente_activo": "Agua Volcánica de Vichy",
    "vehiculo": "Gel",
    "indicacion_clinica": "Elimina partículas contaminantes y calma la sensibilidad",
    "filtro_baumann": [
      "TODOS"
    ],
    "imagen_url": "https://www.aruma.pe/media/vichy-purete-gel.jpg",
    "apto_para_todos": true,
    "descripcionCorta": "Elimina partículas contaminantes y calma la sensibilidad",
    "descripcionLarga": "Gel de Vichy formulado con Agua Volcánica de Vichy. Elimina partículas contaminantes y calma la sensibilidad. Calma la piel reactiva y reduce la sensibilidad cutánea.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Agua Volcánica de Vichy"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 27,
    "fase": 1,
    "nombre": "Agua Micelar Todo en 1",
    "marca": "Garnier",
    "precio": 29.9,
    "ingrediente_activo": "Micelas limpiadoras",
    "vehiculo": "Solución",
    "indicacion_clinica": "Higieniza, desmaquilla y reconforta el rostro de forma diaria",
    "filtro_baumann": [
      "TODOS"
    ],
    "imagen_url": "https://www.aruma.pe/media/garnier-micelar-rosa.jpg",
    "apto_para_todos": true,
    "descripcionCorta": "Higieniza, desmaquilla y reconforta el rostro de forma diaria",
    "descripcionLarga": "Solución de Garnier formulado con Micelas limpiadoras. Higieniza, desmaquilla y reconforta el rostro de forma diaria. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Micelas limpiadoras"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 28,
    "fase": 1,
    "nombre": "Agua Micelar en Aceite",
    "marca": "Garnier",
    "precio": 34.9,
    "ingrediente_activo": "Aceite de Argán, Micelas",
    "vehiculo": "Bifásico",
    "indicacion_clinica": "Remueve maquillaje de larga duración sin resecar la piel",
    "filtro_baumann": [
      "DRNT",
      "DRPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/garnier-micelar-oleo.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Remueve maquillaje de larga duración sin resecar la piel",
    "descripcionLarga": "Bifásico de Garnier formulado con Aceite de Argán, Micelas. Remueve maquillaje de larga duración sin resecar la piel. Formulado con tecnología avanzada para resultados visibles desde las primeras aplicaciones.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Aceite de Argán",
      "Micelas"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 29,
    "fase": 1,
    "nombre": "Limpiador Pure Active Carbón 3 en 1",
    "marca": "Garnier",
    "precio": 32.9,
    "ingrediente_activo": "Carbón Activo, Ácido Salicílico",
    "vehiculo": "Crema",
    "indicacion_clinica": "Funciona como limpiador, exfoliante y mascarilla",
    "filtro_baumann": [
      "ORNT",
      "ORPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/garnier-carbon-limpiador.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Funciona como limpiador, exfoliante y mascarilla",
    "descripcionLarga": "Crema de Garnier formulado con Carbón Activo, Ácido Salicílico. Funciona como limpiador, exfoliante y mascarilla. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Carbón Activo",
      "Ácido Salicílico"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 30,
    "fase": 1,
    "nombre": "Gel Limpiador Equilibrante",
    "marca": "Nivea",
    "precio": 24.9,
    "ingrediente_activo": "Algas Marinas, Glicerina",
    "vehiculo": "Gel",
    "indicacion_clinica": "Regula el exceso de brillo en la zona T facial",
    "filtro_baumann": [
      "OSNT",
      "ORNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/nivea-gel-equilibrante.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Regula el exceso de brillo en la zona T facial",
    "descripcionLarga": "Gel de Nivea formulado con Algas Marinas, Glicerina. Regula el exceso de brillo en la zona T facial. Regula la producción de sebo para un acabado mate y fresco.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Algas Marinas",
      "Glicerina"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 31,
    "fase": 1,
    "nombre": "Gel Limpiador Refrescante",
    "marca": "Nivea",
    "precio": 24.9,
    "ingrediente_activo": "Vitamina E",
    "vehiculo": "Gel",
    "indicacion_clinica": "Limpia profundamente manteniendo la frescura de la piel",
    "filtro_baumann": [
      "DSNT",
      "DRNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/nivea-gel-refrescante.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Limpia profundamente manteniendo la frescura de la piel",
    "descripcionLarga": "Gel de Nivea formulado con Vitamina E. Limpia profundamente manteniendo la frescura de la piel. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Vitamina E"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 32,
    "fase": 1,
    "nombre": "DermatoClean [Hyaluron] Gel",
    "marca": "Eucerin",
    "precio": 89.9,
    "ingrediente_activo": "Complejo APG, Hialurónico",
    "vehiculo": "Gel",
    "indicacion_clinica": "Limpieza extra suave que hidrata la epidermis",
    "filtro_baumann": [
      "TODOS"
    ],
    "imagen_url": "https://www.aruma.pe/media/eucerin-dermatoclean-gel.jpg",
    "apto_para_todos": true,
    "descripcionCorta": "Limpieza extra suave que hidrata la epidermis",
    "descripcionLarga": "Gel de Eucerin formulado con Complejo APG, Hialurónico. Limpieza extra suave que hidrata la epidermis. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Complejo APG",
      "Hialurónico"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 33,
    "fase": 1,
    "nombre": "ProAcne Solution Cleansing Gel",
    "marca": "Eucerin",
    "precio": 99.9,
    "ingrediente_activo": "Anfóteros al 6%",
    "vehiculo": "Gel",
    "indicacion_clinica": "Limpiador diario libre de jabón para piel acneica",
    "filtro_baumann": [
      "OSNT",
      "ORNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/eucerin-proacne-gel.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Limpiador diario libre de jabón para piel acneica",
    "descripcionLarga": "Gel de Eucerin formulado con Anfóteros al 6%. Limpiador diario libre de jabón para piel acneica. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Anfóteros al 6%"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 34,
    "fase": 1,
    "nombre": "Cetaphil PRO Oil Control Espuma",
    "marca": "Cetaphil",
    "precio": 89.9,
    "ingrediente_activo": "Tecnología de Zinc",
    "vehiculo": "Espuma",
    "indicacion_clinica": "Elimina la oleosidad excesiva con efecto calmante",
    "filtro_baumann": [
      "OSNT",
      "OSPW"
    ],
    "imagen_url": "https://www.aruma.pe/media/cetaphil-pro-oil-foam.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Elimina la oleosidad excesiva con efecto calmante",
    "descripcionLarga": "Espuma de Cetaphil formulado con Tecnología de Zinc. Elimina la oleosidad excesiva con efecto calmante. Calma la piel reactiva y reduce la sensibilidad cutánea.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Tecnología de Zinc"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 35,
    "fase": 1,
    "nombre": "Just Salicylic Acid 2% Cleanser",
    "marca": "Revox",
    "precio": 39.9,
    "ingrediente_activo": "Ácido Salicílico 2%",
    "vehiculo": "Gel",
    "indicacion_clinica": "Tónico limpiador exfoliante que clarifica los poros",
    "filtro_baumann": [
      "ORNT",
      "OSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/revox-salicylic-cleanser.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tónico limpiador exfoliante que clarifica los poros",
    "descripcionLarga": "Gel de Revox formulado con Ácido Salicílico 2%. Tónico limpiador exfoliante que clarifica los poros. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácido Salicílico 2%"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 36,
    "fase": 1,
    "nombre": "Water Boost Micellar Gel Wash",
    "marca": "Simple",
    "precio": 34.9,
    "ingrediente_activo": "Minerales esenciales",
    "vehiculo": "Gel",
    "indicacion_clinica": "Higiene refrescante que combate la sequedad cutánea",
    "filtro_baumann": [
      "DSNT",
      "DSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/simple-micelar-wash.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Higiene refrescante que combate la sequedad cutánea",
    "descripcionLarga": "Gel de Simple formulado con Minerales esenciales. Higiene refrescante que combate la sequedad cutánea. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Minerales esenciales"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 37,
    "fase": 1,
    "nombre": "Kind to Skin Refreshing Wash",
    "marca": "Simple",
    "precio": 34.9,
    "ingrediente_activo": "Pro-Vitamina B5",
    "vehiculo": "Gel",
    "indicacion_clinica": "Gel de limpieza hipoalergénico libre de jabón",
    "filtro_baumann": [
      "DSNT",
      "OSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/simple-refreshing-wash.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Gel de limpieza hipoalergénico libre de jabón",
    "descripcionLarga": "Gel de Simple formulado con Pro-Vitamina B5. Gel de limpieza hipoalergénico libre de jabón. Formulado con tecnología avanzada para resultados visibles desde las primeras aplicaciones.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Pro-Vitamina B5"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 38,
    "fase": 1,
    "nombre": "Revitalift Pro-Retinol Gel",
    "marca": "L'Oréal Paris",
    "precio": 39.9,
    "ingrediente_activo": "Pro-Retinol, Ácido Salicílico",
    "vehiculo": "Gel",
    "indicacion_clinica": "Limpiador renovador que alisa la textura y líneas finas",
    "filtro_baumann": [
      "DRNW",
      "ORNW"
    ],
    "imagen_url": "https://www.aruma.pe/media/loreal-revitalift-limpiador.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Limpiador renovador que alisa la textura y líneas finas",
    "descripcionLarga": "Gel de L'Oréal Paris formulado con Pro-Retinol, Ácido Salicílico. Limpiador renovador que alisa la textura y líneas finas. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Pro-Retinol",
      "Ácido Salicílico"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 39,
    "fase": 1,
    "nombre": "Revitalift Hialurónico Gel",
    "marca": "L'Oréal Paris",
    "precio": 39.9,
    "ingrediente_activo": "Ácido Hialurónico puro",
    "vehiculo": "Gel",
    "indicacion_clinica": "Limpiador hidratante que aporta volumen y suavidad",
    "filtro_baumann": [
      "DSNT",
      "DSNW"
    ],
    "imagen_url": "https://www.aruma.pe/media/loreal-hyaluronic-gel.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Limpiador hidratante que aporta volumen y suavidad",
    "descripcionLarga": "Gel de L'Oréal Paris formulado con Ácido Hialurónico puro. Limpiador hidratante que aporta volumen y suavidad. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácido Hialurónico puro"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 40,
    "fase": 1,
    "nombre": "Peach Punch Sweet Foam",
    "marca": "Tony Moly",
    "precio": 52.9,
    "ingrediente_activo": "Extracto de Durazno",
    "vehiculo": "Espuma",
    "indicacion_clinica": "Espuma cremosa y aromática que nutre el rostro seco",
    "filtro_baumann": [
      "DSNT",
      "DRNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/tonymoly-peach-foam.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Espuma cremosa y aromática que nutre el rostro seco",
    "descripcionLarga": "Espuma de Tony Moly formulado con Extracto de Durazno. Espuma cremosa y aromática que nutre el rostro seco. Nutre y repara la barrera cutánea para una piel más saludable.",
    "imagenFallback": "#E0F2FE",
    "precioVariable": false,
    "ingredientesActivos": [
      "Extracto de Durazno"
    ],
    "pasoRutina": "Limpieza AM/PM"
  },
  {
    "id": 41,
    "fase": 2,
    "nombre": "Madagascar Centella Toning Toner",
    "marca": "SKIN1004",
    "precio": 89,
    "ingrediente_activo": "PHA, Extracto de Centella",
    "vehiculo": "Solución",
    "indicacion_clinica": "Exfoliación diaria suave e hidratación profunda",
    "filtro_baumann": [
      "DSPT",
      "DSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/skin1004-centella-toner.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Exfoliación diaria suave e hidratación profunda",
    "descripcionLarga": "Solución de SKIN1004 formulado con PHA, Extracto de Centella. Exfoliación diaria suave e hidratación profunda. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "PHA",
      "Extracto de Centella"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 42,
    "fase": 2,
    "nombre": "AHA/BHA Clarifying Toner",
    "marca": "COSRX",
    "precio": 69.9,
    "ingrediente_activo": "AHA, BHA, Agua de Sauce",
    "vehiculo": "Bruma",
    "indicacion_clinica": "Tónico exfoliante de uso diario que refina poros",
    "filtro_baumann": [
      "ORNT",
      "ORPW"
    ],
    "imagen_url": "https://www.aruma.pe/media/cosrx-ahab ha-toner.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tónico exfoliante de uso diario que refina poros",
    "descripcionLarga": "Bruma de COSRX formulado con AHA, BHA, Agua de Sauce. Tónico exfoliante de uso diario que refina poros. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "AHA",
      "BHA",
      "Agua de Sauce"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 43,
    "fase": 2,
    "nombre": "Full Fit Propolis Synergy Toner",
    "marca": "COSRX",
    "precio": 79.9,
    "ingrediente_activo": "Própolis de Abeja 72.6%",
    "vehiculo": "Solución",
    "indicacion_clinica": "Tónico altamente nutritivo con acción antibacteriana",
    "filtro_baumann": [
      "DSNT",
      "DSPW"
    ],
    "imagen_url": "https://www.aruma.pe/media/cosrx-propolis-toner.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tónico altamente nutritivo con acción antibacteriana",
    "descripcionLarga": "Solución de COSRX formulado con Própolis de Abeja 72.6%. Tónico altamente nutritivo con acción antibacteriana. Nutre y repara la barrera cutánea para una piel más saludable.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Própolis de Abeja 72.6%"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 44,
    "fase": 2,
    "nombre": "Centella Water Alcohol-Free Toner",
    "marca": "COSRX",
    "precio": 65.9,
    "ingrediente_activo": "Centella Asiática",
    "vehiculo": "Bruma",
    "indicacion_clinica": "Bruma calmante que alivia la irritación",
    "filtro_baumann": [
      "DSPT",
      "DSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/cosrx-centella-toner.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Bruma calmante que alivia la irritación",
    "descripcionLarga": "Bruma de COSRX formulado con Centella Asiática. Bruma calmante que alivia la irritación. Calma la piel reactiva y reduce la sensibilidad cutánea.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Centella Asiática"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 45,
    "fase": 2,
    "nombre": "Gokujyun Premium Hyaluronic Lotion",
    "marca": "Hada Labo",
    "precio": 89.9,
    "ingrediente_activo": "5 tipos de Ácido Hialurónico",
    "vehiculo": "Esencia",
    "indicacion_clinica": "Esencia densa que brinda hidratación profunda",
    "filtro_baumann": [
      "DSNT",
      "DSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/hadalabo-premium-lotion.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Esencia densa que brinda hidratación profunda",
    "descripcionLarga": "Esencia de Hada Labo formulado con 5 tipos de Ácido Hialurónico. Esencia densa que brinda hidratación profunda. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "5 tipos de Ácido Hialurónico"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 46,
    "fase": 2,
    "nombre": "Gokujyun Light Hyaluronic Lotion",
    "marca": "Hada Labo",
    "precio": 79.9,
    "ingrediente_activo": "Ácido Hialurónico",
    "vehiculo": "Esencia",
    "indicacion_clinica": "Loción hidratante ligera ideal para piel mixta-grasa",
    "filtro_baumann": [
      "OSNT",
      "OSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/hadalabo-light-lotion.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Loción hidratante ligera ideal para piel mixta-grasa",
    "descripcionLarga": "Esencia de Hada Labo formulado con Ácido Hialurónico. Loción hidratante ligera ideal para piel mixta-grasa. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácido Hialurónico"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 47,
    "fase": 2,
    "nombre": "AHA BHA PHA Miracle Toner",
    "marca": "Some By Mi",
    "precio": 79.9,
    "ingrediente_activo": "Ácidos, Niacinamida",
    "vehiculo": "Solución",
    "indicacion_clinica": "Tónico renovador que aclara manchas e imperfecciones",
    "filtro_baumann": [
      "OSPW",
      "ORPW"
    ],
    "imagen_url": "https://www.aruma.pe/media/somebymi-miracle-toner.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tónico renovador que aclara manchas e imperfecciones",
    "descripcionLarga": "Solución de Some By Mi formulado con Ácidos, Niacinamida. Tónico renovador que aclara manchas e imperfecciones. Renueva la superficie cutánea dejando la piel más suave y uniforme.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácidos",
      "Niacinamida"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 48,
    "fase": 2,
    "nombre": "Japanese Ritual Essence Tonic",
    "marca": "Revox",
    "precio": 44.9,
    "ingrediente_activo": "Flor de Cerezo, Hialurónico",
    "vehiculo": "Solución",
    "indicacion_clinica": "Esencia tonificante que calma y rejuvenece la piel",
    "filtro_baumann": [
      "DSNT",
      "OSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/revox-japanese-tonic.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Esencia tonificante que calma y rejuvenece la piel",
    "descripcionLarga": "Solución de Revox formulado con Flor de Cerezo, Hialurónico. Esencia tonificante que calma y rejuvenece la piel. Calma la piel reactiva y reduce la sensibilidad cutánea.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Flor de Cerezo",
      "Hialurónico"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 49,
    "fase": 2,
    "nombre": "Essence Toner",
    "marca": "Pyunkang Yul",
    "precio": 69.9,
    "ingrediente_activo": "Raíz de Astrágalo",
    "vehiculo": "Esencia",
    "indicacion_clinica": "Esencia libre de agua que nutre y repara la barrera",
    "filtro_baumann": [
      "DSPT",
      "DSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/pyunkang-essence-toner.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Esencia libre de agua que nutre y repara la barrera",
    "descripcionLarga": "Esencia de Pyunkang Yul formulado con Raíz de Astrágalo. Esencia libre de agua que nutre y repara la barrera. Nutre y repara la barrera cutánea para una piel más saludable.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Raíz de Astrágalo"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 50,
    "fase": 2,
    "nombre": "Supple Preparation Unscented Toner",
    "marca": "Dear Klairs",
    "precio": 94.9,
    "ingrediente_activo": "Aminoácidos, Centella",
    "vehiculo": "Solución",
    "indicacion_clinica": "Tónico hidratante sin aceites esenciales ni fragancia",
    "filtro_baumann": [
      "DSPT",
      "DSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/klairs-unscented-toner.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tónico hidratante sin aceites esenciales ni fragancia",
    "descripcionLarga": "Solución de Dear Klairs formulado con Aminoácidos, Centella. Tónico hidratante sin aceites esenciales ni fragancia. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Aminoácidos",
      "Centella"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 51,
    "fase": 2,
    "nombre": "Acniben Spray Facial y Corporal",
    "marca": "ISDIN",
    "precio": 99.9,
    "ingrediente_activo": "Ácido Salicílico, Glicólico",
    "vehiculo": "Bruma",
    "indicacion_clinica": "Exfoliante de secado rápido para imperfecciones",
    "filtro_baumann": [
      "ORNT",
      "ORPW"
    ],
    "imagen_url": "https://www.aruma.pe/media/isdin-acniben-spray.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Exfoliante de secado rápido para imperfecciones",
    "descripcionLarga": "Bruma de ISDIN formulado con Ácido Salicílico, Glicólico. Exfoliante de secado rápido para imperfecciones. Renueva la superficie cutánea dejando la piel más suave y uniforme.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácido Salicílico",
      "Glicólico"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 52,
    "fase": 2,
    "nombre": "Sébium Lotion",
    "marca": "Bioderma",
    "precio": 89.9,
    "ingrediente_activo": "Capriloil Glicina, Zinc",
    "vehiculo": "Solución",
    "indicacion_clinica": "Tónico equilibrador que hidrata y matifica 8 horas",
    "filtro_baumann": [
      "OSNT",
      "ORNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/bioderma-sebium-lotion.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tónico equilibrador que hidrata y matifica 8 horas",
    "descripcionLarga": "Solución de Bioderma formulado con Capriloil Glicina, Zinc. Tónico equilibrador que hidrata y matifica 8 horas. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Capriloil Glicina",
      "Zinc"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 53,
    "fase": 2,
    "nombre": "Hydrabio Tonique",
    "marca": "Bioderma",
    "precio": 89.9,
    "ingrediente_activo": "Patente Aquagenium",
    "vehiculo": "Solución",
    "indicacion_clinica": "Tónico hidratante que activa la hidratación natural",
    "filtro_baumann": [
      "DSNT",
      "DSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/bioderma-hydrabio-tonic.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tónico hidratante que activa la hidratación natural",
    "descripcionLarga": "Solución de Bioderma formulado con Patente Aquagenium. Tónico hidratante que activa la hidratación natural. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Patente Aquagenium"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 54,
    "fase": 2,
    "nombre": "ProAcne Solution Toner",
    "marca": "Eucerin",
    "precio": 99.9,
    "ingrediente_activo": "Ácido Láctico 2%",
    "vehiculo": "Solución",
    "indicacion_clinica": "Destapa poros obstruidos y previene brotes",
    "filtro_baumann": [
      "ORNT",
      "ORPW"
    ],
    "imagen_url": "https://www.aruma.pe/media/eucerin-proacne-toner.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Destapa poros obstruidos y previene brotes",
    "descripcionLarga": "Solución de Eucerin formulado con Ácido Láctico 2%. Destapa poros obstruidos y previene brotes. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácido Láctico 2%"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 55,
    "fase": 2,
    "nombre": "Witch Hazel Toner Original",
    "marca": "Thayers",
    "precio": 59.9,
    "ingrediente_activo": "Hamamelis, Aloe Vera",
    "vehiculo": "Solución",
    "indicacion_clinica": "Tónico astringente natural libre de alcohol purificante",
    "filtro_baumann": [
      "DRNT",
      "ORNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/thayers-witch-hazel.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tónico astringente natural libre de alcohol purificante",
    "descripcionLarga": "Solución de Thayers formulado con Hamamelis, Aloe Vera. Tónico astringente natural libre de alcohol purificante. Formulado con tecnología avanzada para resultados visibles desde las primeras aplicaciones.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Hamamelis",
      "Aloe Vera"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 56,
    "fase": 2,
    "nombre": "Rose Petal Facial Toner",
    "marca": "Thayers",
    "precio": 59.9,
    "ingrediente_activo": "Agua de Rosas, Hamamelis",
    "vehiculo": "Solución",
    "indicacion_clinica": "Tónico hidratante de rosas que unifica el tono facial",
    "filtro_baumann": [
      "DSNT",
      "DSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/thayers-rose-toner.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tónico hidratante de rosas que unifica el tono facial",
    "descripcionLarga": "Solución de Thayers formulado con Agua de Rosas, Hamamelis. Tónico hidratante de rosas que unifica el tono facial. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Agua de Rosas",
      "Hamamelis"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 57,
    "fase": 2,
    "nombre": "Cucumber Witch Hazel Toner",
    "marca": "Thayers",
    "precio": 59.9,
    "ingrediente_activo": "Extracto de Pepino, Hamamelis",
    "vehiculo": "Solución",
    "indicacion_clinica": "Tónico refrescante que reduce el enrojecimiento",
    "filtro_baumann": [
      "OSNT",
      "OSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/thayers-cucumber.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tónico refrescante que reduce el enrojecimiento",
    "descripcionLarga": "Solución de Thayers formulado con Extracto de Pepino, Hamamelis. Tónico refrescante que reduce el enrojecimiento. Calma la piel reactiva y reduce la sensibilidad cutánea.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Extracto de Pepino",
      "Hamamelis"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 58,
    "fase": 2,
    "nombre": "Tónico Botánico de Rosas",
    "marca": "Garnier",
    "precio": 29.9,
    "ingrediente_activo": "Agua de Rosas purificada",
    "vehiculo": "Solución",
    "indicacion_clinica": "Tonifica con delicadeza reconfortando pieles sensibles",
    "filtro_baumann": [
      "DSNT",
      "OSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/garnier-tonico-rosas.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tonifica con delicadeza reconfortando pieles sensibles",
    "descripcionLarga": "Solución de Garnier formulado con Agua de Rosas purificada. Tonifica con delicadeza reconfortando pieles sensibles. Calma la piel reactiva y reduce la sensibilidad cutánea.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Agua de Rosas purificada"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 59,
    "fase": 2,
    "nombre": "Tónico Uniformizante Vitamin C",
    "marca": "Garnier",
    "precio": 34.9,
    "ingrediente_activo": "Vitamina C, Ácido Salicílico",
    "vehiculo": "Solución",
    "indicacion_clinica": "Tónico iluminador que reduce manchas y aporta luz",
    "filtro_baumann": [
      "OSPT",
      "ORPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/garnier-tonico-vitc.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tónico iluminador que reduce manchas y aporta luz",
    "descripcionLarga": "Solución de Garnier formulado con Vitamina C, Ácido Salicílico. Tónico iluminador que reduce manchas y aporta luz. Promueve un tono más uniforme y luminoso con uso continuo.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Vitamina C",
      "Ácido Salicílico"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 60,
    "fase": 2,
    "nombre": "Alcohol-Free Toner",
    "marca": "Neutrogena",
    "precio": 49.9,
    "ingrediente_activo": "Glicerina",
    "vehiculo": "Solución",
    "indicacion_clinica": "Tónico hipoalergénico purificante sin alcohol",
    "filtro_baumann": [
      "TODOS"
    ],
    "imagen_url": "https://www.aruma.pe/media/neutrogena-alcoholfree-toner.jpg",
    "apto_para_todos": true,
    "descripcionCorta": "Tónico hipoalergénico purificante sin alcohol",
    "descripcionLarga": "Solución de Neutrogena formulado con Glicerina. Tónico hipoalergénico purificante sin alcohol. Formulado con tecnología avanzada para resultados visibles desde las primeras aplicaciones.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Glicerina"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 61,
    "fase": 2,
    "nombre": "Loción Suavizante",
    "marca": "Avène",
    "precio": 109.9,
    "ingrediente_activo": "Silicatos, Agua Termal",
    "vehiculo": "Suspensión",
    "indicacion_clinica": "Loción bifásica protectora para piel sensible y seca",
    "filtro_baumann": [
      "DSPT",
      "DSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/avene-locion-suavizante.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Loción bifásica protectora para piel sensible y seca",
    "descripcionLarga": "Suspensión de Avène formulado con Silicatos, Agua Termal. Loción bifásica protectora para piel sensible y seca. Calma la piel reactiva y reduce la sensibilidad cutánea.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Silicatos",
      "Agua Termal"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 62,
    "fase": 2,
    "nombre": "Cleanance Loción Matificante",
    "marca": "Avène",
    "precio": 114.9,
    "ingrediente_activo": "Polvos de Sílice, Comedoclastin",
    "vehiculo": "Suspensión",
    "indicacion_clinica": "Tónico bifásico purificante que absorbe el sebo facial",
    "filtro_baumann": [
      "OSNT",
      "ORNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/avene-cleanance-locion.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tónico bifásico purificante que absorbe el sebo facial",
    "descripcionLarga": "Suspensión de Avène formulado con Polvos de Sílice, Comedoclastin. Tónico bifásico purificante que absorbe el sebo facial. Regula la producción de sebo para un acabado mate y fresco.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Polvos de Sílice",
      "Comedoclastin"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 63,
    "fase": 2,
    "nombre": "Effaclar Loción Astringente",
    "marca": "La Roche-Posay",
    "precio": 119.9,
    "ingrediente_activo": "LHA, Ácido Salicílico",
    "vehiculo": "Solución",
    "indicacion_clinica": "Tónico exfoliante reductor de poros y relieve",
    "filtro_baumann": [
      "ORNT",
      "ORPW"
    ],
    "imagen_url": "https://www.aruma.pe/media/lrp-effaclar-astringente.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tónico exfoliante reductor de poros y relieve",
    "descripcionLarga": "Solución de La Roche-Posay formulado con LHA, Ácido Salicílico. Tónico exfoliante reductor de poros y relieve. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "LHA",
      "Ácido Salicílico"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 64,
    "fase": 2,
    "nombre": "Serozinc Spray Matificante",
    "marca": "La Roche-Posay",
    "precio": 79.9,
    "ingrediente_activo": "Sulfato de Zinc",
    "vehiculo": "Bruma",
    "indicacion_clinica": "Bruma purificante que reduce el brillo graso al instante",
    "filtro_baumann": [
      "OSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/lrp-serozinc.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Bruma purificante que reduce el brillo graso al instante",
    "descripcionLarga": "Bruma de La Roche-Posay formulado con Sulfato de Zinc. Bruma purificante que reduce el brillo graso al instante. Regula la producción de sebo para un acabado mate y fresco.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Sulfato de Zinc"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 65,
    "fase": 2,
    "nombre": "Pureté Thermale Tónico",
    "marca": "Vichy",
    "precio": 99.9,
    "ingrediente_activo": "Agua Volcánica de Vichy",
    "vehiculo": "Solución",
    "indicacion_clinica": "Remueve impurezas finales respetando la barrera",
    "filtro_baumann": [
      "TODOS"
    ],
    "imagen_url": "https://www.aruma.pe/media/vichy-purete-tonico.jpg",
    "apto_para_todos": true,
    "descripcionCorta": "Remueve impurezas finales respetando la barrera",
    "descripcionLarga": "Solución de Vichy formulado con Agua Volcánica de Vichy. Remueve impurezas finales respetando la barrera. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Agua Volcánica de Vichy"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 66,
    "fase": 2,
    "nombre": "Rice Toner",
    "marca": "I'm From",
    "precio": 109.9,
    "ingrediente_activo": "Extracto de Arroz 77.78%",
    "vehiculo": "Esencia",
    "indicacion_clinica": "Tónico iluminador coreano que repara e hidrata",
    "filtro_baumann": [
      "DRPT",
      "DSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/imfrom-rice-toner.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tónico iluminador coreano que repara e hidrata",
    "descripcionLarga": "Esencia de I'm From formulado con Extracto de Arroz 77.78%. Tónico iluminador coreano que repara e hidrata. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Extracto de Arroz 77.78%"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 67,
    "fase": 2,
    "nombre": "Ginseng Essence Water",
    "marca": "Beauty of Joseon",
    "precio": 89.9,
    "ingrediente_activo": "Ginseng 80%, Niacinamida 2%",
    "vehiculo": "Esencia",
    "indicacion_clinica": "Esencia antioxidante revitalizante y unificadora",
    "filtro_baumann": [
      "DSPW",
      "DSNW"
    ],
    "imagen_url": "https://www.aruma.pe/media/boj-ginseng-essence.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Esencia antioxidante revitalizante y unificadora",
    "descripcionLarga": "Esencia de Beauty of Joseon formulado con Ginseng 80%, Niacinamida 2%. Esencia antioxidante revitalizante y unificadora. Formulado con tecnología avanzada para resultados visibles desde las primeras aplicaciones.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ginseng 80%",
      "Niacinamida 2%"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 68,
    "fase": 2,
    "nombre": "Hyaluronic Concentrate",
    "marca": "ISDIN",
    "precio": 189.9,
    "ingrediente_activo": "Ácido Hialurónico",
    "vehiculo": "Esencia",
    "indicacion_clinica": "Serum-gel hidratante y rellenador de relieve",
    "filtro_baumann": [
      "DSNW",
      "OSNW"
    ],
    "imagen_url": "https://www.aruma.pe/media/isdin-hyaluronic-concentrate.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Serum-gel hidratante y rellenador de relieve",
    "descripcionLarga": "Esencia de ISDIN formulado con Ácido Hialurónico. Serum-gel hidratante y rellenador de relieve. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": true,
    "ingredientesActivos": [
      "Ácido Hialurónico"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 69,
    "fase": 2,
    "nombre": "Kind to Skin Soothing Toner",
    "marca": "Simple",
    "precio": 34.9,
    "ingrediente_activo": "Alantoína, Camomila",
    "vehiculo": "Solución",
    "indicacion_clinica": "Tónico calmante libre de alcohol y fragancia",
    "filtro_baumann": [
      "DSNT",
      "OSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/simple-soothing-toner.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tónico calmante libre de alcohol y fragancia",
    "descripcionLarga": "Solución de Simple formulado con Alantoína, Camomila. Tónico calmante libre de alcohol y fragancia. Calma la piel reactiva y reduce la sensibilidad cutánea.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Alantoína",
      "Camomila"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 70,
    "fase": 2,
    "nombre": "Tónico Facial Equilibrante",
    "marca": "Nivea",
    "precio": 24.9,
    "ingrediente_activo": "Algas Marinas",
    "vehiculo": "Solución",
    "indicacion_clinica": "Tonifica y controla el brillo sin resecar la epidermis",
    "filtro_baumann": [
      "OSNT",
      "ORNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/nivea-tonico-equilibrante.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tonifica y controla el brillo sin resecar la epidermis",
    "descripcionLarga": "Solución de Nivea formulado con Algas Marinas. Tonifica y controla el brillo sin resecar la epidermis. Regula la producción de sebo para un acabado mate y fresco.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Algas Marinas"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 71,
    "fase": 2,
    "nombre": "Tónico Facial Suave",
    "marca": "Nivea",
    "precio": 24.9,
    "ingrediente_activo": "Aceite de Almendras dulces",
    "vehiculo": "Solución",
    "indicacion_clinica": "Tónico nutritivo que suaviza las pieles deshidratadas",
    "filtro_baumann": [
      "DSNT",
      "DSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/nivea-tonico-suave.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tónico nutritivo que suaviza las pieles deshidratadas",
    "descripcionLarga": "Solución de Nivea formulado con Aceite de Almendras dulces. Tónico nutritivo que suaviza las pieles deshidratadas. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Aceite de Almendras dulces"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 72,
    "fase": 2,
    "nombre": "Snail Bee High Content Skin",
    "marca": "Benton",
    "precio": 89.9,
    "ingrediente_activo": "Baba de Caracol, Veneno de Abeja",
    "vehiculo": "Esencia",
    "indicacion_clinica": "Tónico que promueve la regeneración celular",
    "filtro_baumann": [
      "DSPW",
      "OSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/benton-snail-bee-skin.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tónico que promueve la regeneración celular",
    "descripcionLarga": "Esencia de Benton formulado con Baba de Caracol, Veneno de Abeja. Tónico que promueve la regeneración celular. Formulado con tecnología avanzada para resultados visibles desde las primeras aplicaciones.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Baba de Caracol",
      "Veneno de Abeja"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 73,
    "fase": 2,
    "nombre": "Aloe BHA Skin Toner",
    "marca": "Benton",
    "precio": 79.9,
    "ingrediente_activo": "Aloe Vera, BHA 0.5%",
    "vehiculo": "Solución",
    "indicacion_clinica": "Tónico hidratante calmante que remueve impurezas",
    "filtro_baumann": [
      "OSNT",
      "OSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/benton-aloe-bha-toner.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tónico hidratante calmante que remueve impurezas",
    "descripcionLarga": "Solución de Benton formulado con Aloe Vera, BHA 0.5%. Tónico hidratante calmante que remueve impurezas. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Aloe Vera",
      "BHA 0.5%"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 74,
    "fase": 2,
    "nombre": "Heartleaf 77% Soothing Toner",
    "marca": "Anua",
    "precio": 99,
    "ingrediente_activo": "Houttuynia Cordata",
    "vehiculo": "Solución",
    "indicacion_clinica": "Tónico calmante líder para pieles reactivas",
    "filtro_baumann": [
      "DSPT",
      "OSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/anua-heartleaf-toner.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tónico calmante líder para pieles reactivas",
    "descripcionLarga": "Solución de Anua formulado con Houttuynia Cordata. Tónico calmante líder para pieles reactivas. Calma la piel reactiva y reduce la sensibilidad cutánea.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Houttuynia Cordata"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 75,
    "fase": 2,
    "nombre": "Starting Treatment Essence",
    "marca": "Secret Key",
    "precio": 109,
    "ingrediente_activo": "Galactomyces fermentados",
    "vehiculo": "Esencia",
    "indicacion_clinica": "Esencia iluminadora que refina la textura de la piel",
    "filtro_baumann": [
      "DSPW",
      "DRNW"
    ],
    "imagen_url": "https://www.aruma.pe/media/secretkey-essence.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Esencia iluminadora que refina la textura de la piel",
    "descripcionLarga": "Esencia de Secret Key formulado con Galactomyces fermentados. Esencia iluminadora que refina la textura de la piel. Renueva la superficie cutánea dejando la piel más suave y uniforme.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Galactomyces fermentados"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 76,
    "fase": 2,
    "nombre": "Green Tea BHA Clear Toner",
    "marca": "Coxir",
    "precio": 59.9,
    "ingrediente_activo": "Té Verde, BHA",
    "vehiculo": "Solución",
    "indicacion_clinica": "Tónico sebo-regulador calmante y antioxidante",
    "filtro_baumann": [
      "OSNT",
      "ORNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/coxir-greentea-toner.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tónico sebo-regulador calmante y antioxidante",
    "descripcionLarga": "Solución de Coxir formulado con Té Verde, BHA. Tónico sebo-regulador calmante y antioxidante. Calma la piel reactiva y reduce la sensibilidad cutánea.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Té Verde",
      "BHA"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 77,
    "fase": 2,
    "nombre": "Revitalift Hialurónico Tónico",
    "marca": "L'Oréal Paris",
    "precio": 39.9,
    "ingrediente_activo": "Ácido Hialurónico puro",
    "vehiculo": "Solución",
    "indicacion_clinica": "Tónico hidratante que rellena líneas de expresión",
    "filtro_baumann": [
      "DSNT",
      "DSNW"
    ],
    "imagen_url": "https://www.aruma.pe/media/loreal-hyaluronic-tonico.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tónico hidratante que rellena líneas de expresión",
    "descripcionLarga": "Solución de L'Oréal Paris formulado con Ácido Hialurónico puro. Tónico hidratante que rellena líneas de expresión. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácido Hialurónico puro"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 78,
    "fase": 2,
    "nombre": "Bright Healthy Radiance Toner",
    "marca": "Cetaphil",
    "precio": 89.9,
    "ingrediente_activo": "Niacinamida",
    "vehiculo": "Solución",
    "indicacion_clinica": "Tónico iluminador aclarador para manchas de piel sensible",
    "filtro_baumann": [
      "DSPT",
      "DRPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/cetaphil-bright-toner.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tónico iluminador aclarador para manchas de piel sensible",
    "descripcionLarga": "Solución de Cetaphil formulado con Niacinamida. Tónico iluminador aclarador para manchas de piel sensible. Promueve un tono más uniforme y luminoso con uso continuo.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Niacinamida"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 79,
    "fase": 2,
    "nombre": "DermatoClean Tónico Suave",
    "marca": "Eucerin",
    "precio": 89.9,
    "ingrediente_activo": "Ácido Hialurónico",
    "vehiculo": "Solución",
    "indicacion_clinica": "Tónico facial humectante que prepara la piel delicada",
    "filtro_baumann": [
      "DSNT",
      "DRNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/eucerin-dermatoclean-tonico.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tónico facial humectante que prepara la piel delicada",
    "descripcionLarga": "Solución de Eucerin formulado con Ácido Hialurónico. Tónico facial humectante que prepara la piel delicada. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácido Hialurónico"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 80,
    "fase": 2,
    "nombre": "Snail Truecica Miracle Toner",
    "marca": "Some By Mi",
    "precio": 84.9,
    "ingrediente_activo": "Baba de Caracol, Truecica",
    "vehiculo": "Solución",
    "indicacion_clinica": "Tónico regenerador que disminuye marcas y cicatrices",
    "filtro_baumann": [
      "DSPT",
      "OSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/somebymi-snail-toner.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tónico regenerador que disminuye marcas y cicatrices",
    "descripcionLarga": "Solución de Some By Mi formulado con Baba de Caracol, Truecica. Tónico regenerador que disminuye marcas y cicatrices. Formulado con tecnología avanzada para resultados visibles desde las primeras aplicaciones.",
    "imagenFallback": "#F3E8FF",
    "precioVariable": false,
    "ingredientesActivos": [
      "Baba de Caracol",
      "Truecica"
    ],
    "pasoRutina": "Tónico AM/PM"
  },
  {
    "id": 81,
    "fase": 3,
    "nombre": "Serum Resurfacing Retinol",
    "marca": "CeraVe",
    "precio": 99.9,
    "ingrediente_activo": "Retinol, Ceramidas",
    "vehiculo": "Gel",
    "indicacion_clinica": "Reduce marcas post-acné y unifica la textura",
    "filtro_baumann": [
      "OSPW",
      "OSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/cerave-retinol-serum.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Reduce marcas post-acné y unifica la textura",
    "descripcionLarga": "Gel de CeraVe formulado con Retinol, Ceramidas. Reduce marcas post-acné y unifica la textura. Renueva la superficie cutánea dejando la piel más suave y uniforme.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": false,
    "ingredientesActivos": [
      "Retinol",
      "Ceramidas"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 82,
    "fase": 3,
    "nombre": "Serum Mela B3 Anti-Manchas",
    "marca": "La Roche-Posay",
    "precio": 189.9,
    "ingrediente_activo": "Melasyl, Niacinamida 10%",
    "vehiculo": "Solución",
    "indicacion_clinica": "Tratamiento corrector de hiperpigmentaciones",
    "filtro_baumann": [
      "DSPT",
      "DRPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/lrp-mela-b3-serum.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tratamiento corrector de hiperpigmentaciones",
    "descripcionLarga": "Solución de La Roche-Posay formulado con Melasyl, Niacinamida 10%. Tratamiento corrector de hiperpigmentaciones. Formulado con tecnología avanzada para resultados visibles desde las primeras aplicaciones.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": true,
    "ingredientesActivos": [
      "Melasyl",
      "Niacinamida 10%"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 83,
    "fase": 3,
    "nombre": "Effaclar Ultra Concentrado",
    "marca": "La Roche-Posay",
    "precio": 179.9,
    "ingrediente_activo": "Ácido Salicílico, Glicólico",
    "vehiculo": "Solución",
    "indicacion_clinica": "Exfoliación diaria que corrige imperfecciones",
    "filtro_baumann": [
      "ORPW",
      "OSPW"
    ],
    "imagen_url": "https://www.aruma.pe/media/lrp-effaclar-serum.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Exfoliación diaria que corrige imperfecciones",
    "descripcionLarga": "Solución de La Roche-Posay formulado con Ácido Salicílico, Glicólico. Exfoliación diaria que corrige imperfecciones. Renueva la superficie cutánea dejando la piel más suave y uniforme.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": true,
    "ingredientesActivos": [
      "Ácido Salicílico",
      "Glicólico"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 84,
    "fase": 3,
    "nombre": "Hyalu B5 Serum",
    "marca": "La Roche-Posay",
    "precio": 179.9,
    "ingrediente_activo": "Ácido Hialurónico, Vitamina B5",
    "vehiculo": "Solución",
    "indicacion_clinica": "Rellena la piel y repara la barrera transepidérmica",
    "filtro_baumann": [
      "DSNW",
      "DSPW"
    ],
    "imagen_url": "https://www.aruma.pe/media/lrp-hyalu-b5-serum.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Rellena la piel y repara la barrera transepidérmica",
    "descripcionLarga": "Solución de La Roche-Posay formulado con Ácido Hialurónico, Vitamina B5. Rellena la piel y repara la barrera transepidérmica. Nutre y repara la barrera cutánea para una piel más saludable.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": true,
    "ingredientesActivos": [
      "Ácido Hialurónico",
      "Vitamina B5"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 85,
    "fase": 3,
    "nombre": "Pure Vitamin C10 Serum",
    "marca": "La Roche-Posay",
    "precio": 189.9,
    "ingrediente_activo": "Vitamina C Pura, Salicílico",
    "vehiculo": "Solución",
    "indicacion_clinica": "Aporta luminosidad y corrige arrugas finas",
    "filtro_baumann": [
      "DSPW",
      "DRPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/lrp-vit-c-serum.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Aporta luminosidad y corrige arrugas finas",
    "descripcionLarga": "Solución de La Roche-Posay formulado con Vitamina C Pura, Salicílico. Aporta luminosidad y corrige arrugas finas. Promueve un tono más uniforme y luminoso con uso continuo.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": true,
    "ingredientesActivos": [
      "Vitamina C Pura",
      "Salicílico"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 86,
    "fase": 3,
    "nombre": "Retinol B3 Serum",
    "marca": "La Roche-Posay",
    "precio": 189.9,
    "ingrediente_activo": "Retinol Puro, Niacinamida",
    "vehiculo": "Solución",
    "indicacion_clinica": "Regenera la piel madura corrigiendo arrugas profundas",
    "filtro_baumann": [
      "DRNW",
      "DRPW"
    ],
    "imagen_url": "https://www.aruma.pe/media/lrp-retinol-b3.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Regenera la piel madura corrigiendo arrugas profundas",
    "descripcionLarga": "Solución de La Roche-Posay formulado con Retinol Puro, Niacinamida. Regenera la piel madura corrigiendo arrugas profundas. Reduce visiblemente líneas de expresión y mejora la firmeza.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": true,
    "ingredientesActivos": [
      "Retinol Puro",
      "Niacinamida"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 87,
    "fase": 3,
    "nombre": "Niacinamide 10 Serum",
    "marca": "La Roche-Posay",
    "precio": 189.9,
    "ingrediente_activo": "Niacinamida al 10%",
    "vehiculo": "Solución",
    "indicacion_clinica": "Corrige manchas oscuras y previene su reaparición",
    "filtro_baumann": [
      "DSPT",
      "OSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/lrp-niacinamide-10.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Corrige manchas oscuras y previene su reaparición",
    "descripcionLarga": "Solución de La Roche-Posay formulado con Niacinamida al 10%. Corrige manchas oscuras y previene su reaparición. Promueve un tono más uniforme y luminoso con uso continuo.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": true,
    "ingredientesActivos": [
      "Niacinamida al 10%"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 88,
    "fase": 3,
    "nombre": "Isdinceutics Melaclear",
    "marca": "ISDIN",
    "precio": 209.9,
    "ingrediente_activo": "Ácido Tranexámico, Niacinamida",
    "vehiculo": "Solución",
    "indicacion_clinica": "Tratamiento intensivo de melasma y manchas oscuras",
    "filtro_baumann": [
      "DSPT",
      "DRPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/isdin-melaclear.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tratamiento intensivo de melasma y manchas oscuras",
    "descripcionLarga": "Solución de ISDIN formulado con Ácido Tranexámico, Niacinamida. Tratamiento intensivo de melasma y manchas oscuras. Promueve un tono más uniforme y luminoso con uso continuo.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": true,
    "ingredientesActivos": [
      "Ácido Tranexámico",
      "Niacinamida"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 89,
    "fase": 3,
    "nombre": "Isdinceutics Flavo-C Ultraglicanos",
    "marca": "ISDIN",
    "precio": 199.9,
    "ingrediente_activo": "Vitamina C, Ultraglicanos",
    "vehiculo": "Ampolla",
    "indicacion_clinica": "Ampollas antioxidantes que devuelven firmeza",
    "filtro_baumann": [
      "DRNW",
      "DRPW"
    ],
    "imagen_url": "https://www.aruma.pe/media/isdin-flavo-c.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Ampollas antioxidantes que devuelven firmeza",
    "descripcionLarga": "Ampolla de ISDIN formulado con Vitamina C, Ultraglicanos. Ampollas antioxidantes que devuelven firmeza. Reduce visiblemente líneas de expresión y mejora la firmeza.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": true,
    "ingredientesActivos": [
      "Vitamina C",
      "Ultraglicanos"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 90,
    "fase": 3,
    "nombre": "Isdinceutics Retinal Intense",
    "marca": "ISDIN",
    "precio": 249.9,
    "ingrediente_activo": "Retinaldehído, Melatonina",
    "vehiculo": "Emulsión",
    "indicacion_clinica": "Serum de noche de máxima eficacia antiarrugas",
    "filtro_baumann": [
      "DRNW",
      "ORNW"
    ],
    "imagen_url": "https://www.aruma.pe/media/isdin-retinal-intense.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Serum de noche de máxima eficacia antiarrugas",
    "descripcionLarga": "Emulsión de ISDIN formulado con Retinaldehído, Melatonina. Serum de noche de máxima eficacia antiarrugas. Reduce visiblemente líneas de expresión y mejora la firmeza.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": true,
    "ingredientesActivos": [
      "Retinaldehído",
      "Melatonina"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 91,
    "fase": 3,
    "nombre": "Madagascar Centella Ampoule",
    "marca": "SKIN1004",
    "precio": 99,
    "ingrediente_activo": "Extracto de Centella al 100%",
    "vehiculo": "Solución",
    "indicacion_clinica": "Calma irritaciones y repara la barrera sensible",
    "filtro_baumann": [
      "DSPT",
      "DSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/skin1004-centella-ampoule.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Calma irritaciones y repara la barrera sensible",
    "descripcionLarga": "Solución de SKIN1004 formulado con Extracto de Centella al 100%. Calma irritaciones y repara la barrera sensible. Calma la piel reactiva y reduce la sensibilidad cutánea.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": false,
    "ingredientesActivos": [
      "Extracto de Centella al 100%"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 92,
    "fase": 3,
    "nombre": "Madagascar Centella Tone Brightening",
    "marca": "SKIN1004",
    "precio": 109,
    "ingrediente_activo": "Centella, Ácido Tranexámico",
    "vehiculo": "Solución",
    "indicacion_clinica": "Ampolla iluminadora que reduce manchas sin irritar",
    "filtro_baumann": [
      "DSPT",
      "OSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/skin1004-brightening-ampoule.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Ampolla iluminadora que reduce manchas sin irritar",
    "descripcionLarga": "Solución de SKIN1004 formulado con Centella, Ácido Tranexámico. Ampolla iluminadora que reduce manchas sin irritar. Promueve un tono más uniforme y luminoso con uso continuo.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": false,
    "ingredientesActivos": [
      "Centella",
      "Ácido Tranexámico"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 93,
    "fase": 3,
    "nombre": "Advanced Snail 96 Mucin",
    "marca": "COSRX",
    "precio": 89.9,
    "ingrediente_activo": "Filtrado de Baba de Caracol 96%",
    "vehiculo": "Esencia",
    "indicacion_clinica": "Repara intensamente la piel aportando elasticidad",
    "filtro_baumann": [
      "DSPT",
      "DSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/cosrx-snail-96.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Repara intensamente la piel aportando elasticidad",
    "descripcionLarga": "Esencia de COSRX formulado con Filtrado de Baba de Caracol 96%. Repara intensamente la piel aportando elasticidad. Nutre y repara la barrera cutánea para una piel más saludable.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": false,
    "ingredientesActivos": [
      "Filtrado de Baba de Caracol 96%"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 94,
    "fase": 3,
    "nombre": "The Vitamin C 23 Serum",
    "marca": "COSRX",
    "precio": 119,
    "ingrediente_activo": "Vitamina C Pura 23%",
    "vehiculo": "Solución",
    "indicacion_clinica": "Serum de alta potencia que unifica el tono e ilumina",
    "filtro_baumann": [
      "DRPT",
      "DRNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/cosrx-vit-c-23.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Serum de alta potencia que unifica el tono e ilumina",
    "descripcionLarga": "Solución de COSRX formulado con Vitamina C Pura 23%. Serum de alta potencia que unifica el tono e ilumina. Promueve un tono más uniforme y luminoso con uso continuo.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": false,
    "ingredientesActivos": [
      "Vitamina C Pura 23%"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 95,
    "fase": 3,
    "nombre": "The Niacinamide 15 Serum",
    "marca": "COSRX",
    "precio": 119,
    "ingrediente_activo": "Niacinamida al 15%, Zinc",
    "vehiculo": "Solución",
    "indicacion_clinica": "Control de sebo y minimizador de poros dilatados",
    "filtro_baumann": [
      "OSNT",
      "OSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/cosrx-niacinamide-15.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Control de sebo y minimizador de poros dilatados",
    "descripcionLarga": "Solución de COSRX formulado con Niacinamida al 15%, Zinc. Control de sebo y minimizador de poros dilatados. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": false,
    "ingredientesActivos": [
      "Niacinamida al 15%",
      "Zinc"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 96,
    "fase": 3,
    "nombre": "The Retinol 0.1 Cream",
    "marca": "COSRX",
    "precio": 109,
    "ingrediente_activo": "Retinol Puro 0.1%",
    "vehiculo": "Crema",
    "indicacion_clinica": "Tratamiento iniciador que suaviza signos de la edad",
    "filtro_baumann": [
      "DRNW",
      "DRPW"
    ],
    "imagen_url": "https://www.aruma.pe/media/cosrx-retinol-01.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tratamiento iniciador que suaviza signos de la edad",
    "descripcionLarga": "Crema de COSRX formulado con Retinol Puro 0.1%. Tratamiento iniciador que suaviza signos de la edad. Formulado con tecnología avanzada para resultados visibles desde las primeras aplicaciones.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": false,
    "ingredientesActivos": [
      "Retinol Puro 0.1%"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 97,
    "fase": 3,
    "nombre": "Minéral 89 Fortificante",
    "marca": "Vichy",
    "precio": 139.9,
    "ingrediente_activo": "Agua Volcánica al 89%",
    "vehiculo": "Gel",
    "indicacion_clinica": "Fortalece la barrera cutánea frente a agresores externos",
    "filtro_baumann": [
      "TODOS"
    ],
    "imagen_url": "https://www.aruma.pe/media/vichy-mineral-89.jpg",
    "apto_para_todos": true,
    "descripcionCorta": "Fortalece la barrera cutánea frente a agresores externos",
    "descripcionLarga": "Gel de Vichy formulado con Agua Volcánica al 89%. Fortalece la barrera cutánea frente a agresores externos. Nutre y repara la barrera cutánea para una piel más saludable.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": true,
    "ingredientesActivos": [
      "Agua Volcánica al 89%"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 98,
    "fase": 3,
    "nombre": "Minéral 89 Probiotic Fractions",
    "marca": "Vichy",
    "precio": 159.9,
    "ingrediente_activo": "Probióticos, Niacinamida",
    "vehiculo": "Solución",
    "indicacion_clinica": "Regenera la piel estresada y apoya la inmunidad cutánea",
    "filtro_baumann": [
      "DSPT",
      "OSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/vichy-mineral-89-probiotic.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Regenera la piel estresada y apoya la inmunidad cutánea",
    "descripcionLarga": "Solución de Vichy formulado con Probióticos, Niacinamida. Regenera la piel estresada y apoya la inmunidad cutánea. Formulado con tecnología avanzada para resultados visibles desde las primeras aplicaciones.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": true,
    "ingredientesActivos": [
      "Probióticos",
      "Niacinamida"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 99,
    "fase": 3,
    "nombre": "Liftactiv Vitamin C Serum",
    "marca": "Vichy",
    "precio": 169.9,
    "ingrediente_activo": "Vitamina C al 15% pura",
    "vehiculo": "Solución",
    "indicacion_clinica": "Serum antioxidante que combate arrugas y fatiga",
    "filtro_baumann": [
      "DRNW",
      "DRPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/vichy-liftactiv-vitc.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Serum antioxidante que combate arrugas y fatiga",
    "descripcionLarga": "Solución de Vichy formulado con Vitamina C al 15% pura. Serum antioxidante que combate arrugas y fatiga. Reduce visiblemente líneas de expresión y mejora la firmeza.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": true,
    "ingredientesActivos": [
      "Vitamina C al 15% pura"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 100,
    "fase": 3,
    "nombre": "Liftactiv Retinol Specialist",
    "marca": "Vichy",
    "precio": 189.9,
    "ingrediente_activo": "Retinol Puro 0.2%, Péptidos",
    "vehiculo": "Solución",
    "indicacion_clinica": "Corrector intensivo de arrugas profundas y pliegues",
    "filtro_baumann": [
      "DRNW",
      "ORNW"
    ],
    "imagen_url": "https://www.aruma.pe/media/vichy-liftactiv-retinol.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Corrector intensivo de arrugas profundas y pliegues",
    "descripcionLarga": "Solución de Vichy formulado con Retinol Puro 0.2%, Péptidos. Corrector intensivo de arrugas profundas y pliegues. Reduce visiblemente líneas de expresión y mejora la firmeza.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": true,
    "ingredientesActivos": [
      "Retinol Puro 0.2%",
      "Péptidos"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 101,
    "fase": 3,
    "nombre": "Sensibio Defensive Serum",
    "marca": "Bioderma",
    "precio": 139.9,
    "ingrediente_activo": "Carnosina, Polifenoles",
    "vehiculo": "Solución",
    "indicacion_clinica": "Serum calmante que previene el envejecimiento",
    "filtro_baumann": [
      "DSPT",
      "DSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/bioderma-sensibio-serum.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Serum calmante que previene el envejecimiento",
    "descripcionLarga": "Solución de Bioderma formulado con Carnosina, Polifenoles. Serum calmante que previene el envejecimiento. Calma la piel reactiva y reduce la sensibilidad cutánea.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": true,
    "ingredientesActivos": [
      "Carnosina",
      "Polifenoles"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 102,
    "fase": 3,
    "nombre": "Sébium Serum Renovador",
    "marca": "Bioderma",
    "precio": 139.9,
    "ingrediente_activo": "Ácido Glicólico",
    "vehiculo": "Solución",
    "indicacion_clinica": "Suaviza la textura de pieles grasas con imperfecciones",
    "filtro_baumann": [
      "OSNT",
      "OSPW"
    ],
    "imagen_url": "https://www.aruma.pe/media/bioderma-sebium-serum.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Suaviza la textura de pieles grasas con imperfecciones",
    "descripcionLarga": "Solución de Bioderma formulado con Ácido Glicólico. Suaviza la textura de pieles grasas con imperfecciones. Renueva la superficie cutánea dejando la piel más suave y uniforme.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": true,
    "ingredientesActivos": [
      "Ácido Glicólico"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 103,
    "fase": 3,
    "nombre": "HyaluronFiller 3D Serum",
    "marca": "Eucerin",
    "precio": 189.9,
    "ingrediente_activo": "Arctiina, Thiamidol",
    "vehiculo": "Solución",
    "indicacion_clinica": "Reduce manchas de la edad y restaura la firmeza",
    "filtro_baumann": [
      "DRPW",
      "DRNW"
    ],
    "imagen_url": "https://www.aruma.pe/media/eucerin-elasticity-serum.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Reduce manchas de la edad y restaura la firmeza",
    "descripcionLarga": "Solución de Eucerin formulado con Arctiina, Thiamidol. Reduce manchas de la edad y restaura la firmeza. Promueve un tono más uniforme y luminoso con uso continuo.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": true,
    "ingredientesActivos": [
      "Arctiina",
      "Thiamidol"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 104,
    "fase": 3,
    "nombre": "Anti-Pigment Dual Serum",
    "marca": "Eucerin",
    "precio": 179.9,
    "ingrediente_activo": "Thiamidol, Ácido Hialurónico",
    "vehiculo": "Emulsión",
    "indicacion_clinica": "Serum despigmentante eficaz contra las manchas oscuras",
    "filtro_baumann": [
      "DRPT",
      "DSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/eucerin-antipigment-serum.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Serum despigmentante eficaz contra las manchas oscuras",
    "descripcionLarga": "Emulsión de Eucerin formulado con Thiamidol, Ácido Hialurónico. Serum despigmentante eficaz contra las manchas oscuras. Promueve un tono más uniforme y luminoso con uso continuo.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": true,
    "ingredientesActivos": [
      "Thiamidol",
      "Ácido Hialurónico"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 105,
    "fase": 3,
    "nombre": "Hydro Boost Serum",
    "marca": "Neutrogena",
    "precio": 74.9,
    "ingrediente_activo": "Ácido Hialurónico, Trehalosa",
    "vehiculo": "Solución",
    "indicacion_clinica": "Tratamiento rehidratante de textura muy ligera",
    "filtro_baumann": [
      "DSNT",
      "OSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/neutrogena-hydroboost-serum.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tratamiento rehidratante de textura muy ligera",
    "descripcionLarga": "Solución de Neutrogena formulado con Ácido Hialurónico, Trehalosa. Tratamiento rehidratante de textura muy ligera. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácido Hialurónico",
      "Trehalosa"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 106,
    "fase": 3,
    "nombre": "Just Salicylic Acid 2%",
    "marca": "Revox",
    "precio": 39.9,
    "ingrediente_activo": "Ácido Salicílico 2%",
    "vehiculo": "Solución",
    "indicacion_clinica": "Serum purificante para puntos negros y sebo",
    "filtro_baumann": [
      "ORNT",
      "OSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/revox-just-salicylic.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Serum purificante para puntos negros y sebo",
    "descripcionLarga": "Solución de Revox formulado con Ácido Salicílico 2%. Serum purificante para puntos negros y sebo. Regula la producción de sebo para un acabado mate y fresco.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácido Salicílico 2%"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 107,
    "fase": 3,
    "nombre": "Just Niacinamide 10%",
    "marca": "Revox",
    "precio": 39.9,
    "ingrediente_activo": "Niacinamida al 10%",
    "vehiculo": "Solución",
    "indicacion_clinica": "Calma eritemas e ilumina la piel opaca",
    "filtro_baumann": [
      "OSNT",
      "OSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/revox-just-niacinamide.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Calma eritemas e ilumina la piel opaca",
    "descripcionLarga": "Solución de Revox formulado con Niacinamida al 10%. Calma eritemas e ilumina la piel opaca. Calma la piel reactiva y reduce la sensibilidad cutánea.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": false,
    "ingredientesActivos": [
      "Niacinamida al 10%"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 108,
    "fase": 3,
    "nombre": "Just Hyaluronic Acid 5%",
    "marca": "Revox",
    "precio": 39.9,
    "ingrediente_activo": "Ácido Hialurónico",
    "vehiculo": "Solución",
    "indicacion_clinica": "Hidratación directa que suaviza líneas finas",
    "filtro_baumann": [
      "DSNT",
      "OSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/revox-just-hyaluronic.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Hidratación directa que suaviza líneas finas",
    "descripcionLarga": "Solución de Revox formulado con Ácido Hialurónico. Hidratación directa que suaviza líneas finas. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácido Hialurónico"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 109,
    "fase": 3,
    "nombre": "Serum Uniform & Matte Vitamin C",
    "marca": "Garnier",
    "precio": 49.9,
    "ingrediente_activo": "Vitamina C, Ácido Salicílico",
    "vehiculo": "Solución",
    "indicacion_clinica": "Disminuye manchas oscuras de manera visible en 3 días",
    "filtro_baumann": [
      "OSPT",
      "ORPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/garnier-serum-vitc.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Disminuye manchas oscuras de manera visible en 3 días",
    "descripcionLarga": "Solución de Garnier formulado con Vitamina C, Ácido Salicílico. Disminuye manchas oscuras de manera visible en 3 días. Promueve un tono más uniforme y luminoso con uso continuo.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": false,
    "ingredientesActivos": [
      "Vitamina C",
      "Ácido Salicílico"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 110,
    "fase": 3,
    "nombre": "Serum Express Aclara Anti-Acné",
    "marca": "Garnier",
    "precio": 49.9,
    "ingrediente_activo": "Ácido Salicílico, Vitamina C",
    "vehiculo": "Solución",
    "indicacion_clinica": "Tratamiento dual aclarador y reductor de imperfecciones",
    "filtro_baumann": [
      "OSPW",
      "OSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/garnier-serum-antiacne.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Tratamiento dual aclarador y reductor de imperfecciones",
    "descripcionLarga": "Solución de Garnier formulado con Ácido Salicílico, Vitamina C. Tratamiento dual aclarador y reductor de imperfecciones. Ayuda a controlar imperfecciones y prevenir futuros brotes.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácido Salicílico",
      "Vitamina C"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 111,
    "fase": 3,
    "nombre": "Revitalift Hialurónico Serum",
    "marca": "L'Oréal Paris",
    "precio": 69.9,
    "ingrediente_activo": "Ácido Hialurónico 1.5%",
    "vehiculo": "Solución",
    "indicacion_clinica": "Suero rellenador hidratante de penetración profunda",
    "filtro_baumann": [
      "DSNT",
      "DSNW"
    ],
    "imagen_url": "https://www.aruma.pe/media/loreal-serum-hialuronico.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Suero rellenador hidratante de penetración profunda",
    "descripcionLarga": "Solución de L'Oréal Paris formulado con Ácido Hialurónico 1.5%. Suero rellenador hidratante de penetración profunda. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácido Hialurónico 1.5%"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 112,
    "fase": 3,
    "nombre": "Revitalift Laser X3 Serum",
    "marca": "L'Oréal Paris",
    "precio": 89.9,
    "ingrediente_activo": "Pro-Xylane al 3%, LHA",
    "vehiculo": "Solución",
    "indicacion_clinica": "Corrige arrugas, redensifica la dermis y reafirma",
    "filtro_baumann": [
      "DRNW",
      "DRPW"
    ],
    "imagen_url": "https://www.aruma.pe/media/loreal-laser-serum.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Corrige arrugas, redensifica la dermis y reafirma",
    "descripcionLarga": "Solución de L'Oréal Paris formulado con Pro-Xylane al 3%, LHA. Corrige arrugas, redensifica la dermis y reafirma. Reduce visiblemente líneas de expresión y mejora la firmeza.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": false,
    "ingredientesActivos": [
      "Pro-Xylane al 3%",
      "LHA"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 113,
    "fase": 3,
    "nombre": "AHA BHA PHA Miracle Serum",
    "marca": "Some By Mi",
    "precio": 89.9,
    "ingrediente_activo": "Centella 14.5%, Ácidos",
    "vehiculo": "Solución",
    "indicacion_clinica": "Suero exfoliante renovador y calmante de uso diario",
    "filtro_baumann": [
      "OSPW",
      "ORPW"
    ],
    "imagen_url": "https://www.aruma.pe/media/somebymi-miracle-serum.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Suero exfoliante renovador y calmante de uso diario",
    "descripcionLarga": "Solución de Some By Mi formulado con Centella 14.5%, Ácidos. Suero exfoliante renovador y calmante de uso diario. Renueva la superficie cutánea dejando la piel más suave y uniforme.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": false,
    "ingredientesActivos": [
      "Centella 14.5%",
      "Ácidos"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 114,
    "fase": 3,
    "nombre": "Yuja Niacin 30 Days Serum",
    "marca": "Some By Mi",
    "precio": 94.9,
    "ingrediente_activo": "Extracto de Yuja 82%, Niacinamida",
    "vehiculo": "Solución",
    "indicacion_clinica": "Suero iluminador antimanachas de origen coreano",
    "filtro_baumann": [
      "DSPT",
      "OSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/somebymi-yuja-serum.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Suero iluminador antimanachas de origen coreano",
    "descripcionLarga": "Solución de Some By Mi formulado con Extracto de Yuja 82%, Niacinamida. Suero iluminador antimanachas de origen coreano. Formulado con tecnología avanzada para resultados visibles desde las primeras aplicaciones.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": false,
    "ingredientesActivos": [
      "Extracto de Yuja 82%",
      "Niacinamida"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 115,
    "fase": 3,
    "nombre": "Freshly Juiced Vitamin Drop",
    "marca": "Dear Klairs",
    "precio": 109.9,
    "ingrediente_activo": "Vitamina C Pura al 5%",
    "vehiculo": "Solución",
    "indicacion_clinica": "Suero hipoalergénico que rejuvenece la piel con luz",
    "filtro_baumann": [
      "DSPT",
      "DSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/klairs-vitamin-drop.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Suero hipoalergénico que rejuvenece la piel con luz",
    "descripcionLarga": "Solución de Dear Klairs formulado con Vitamina C Pura al 5%. Suero hipoalergénico que rejuvenece la piel con luz. Protege contra el daño solar diario y previene el fotoenvejecimiento.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": false,
    "ingredientesActivos": [
      "Vitamina C Pura al 5%"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 116,
    "fase": 3,
    "nombre": "Moisture Serum Reparador",
    "marca": "Pyunkang Yul",
    "precio": 84.9,
    "ingrediente_activo": "Raíz de Astrágalo",
    "vehiculo": "Emulsión",
    "indicacion_clinica": "Suero denso que hidrata y restaura el equilibrio de grasa",
    "filtro_baumann": [
      "DSPT",
      "DSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/pyunkang-moisture-serum.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Suero denso que hidrata y restaura el equilibrio de grasa",
    "descripcionLarga": "Emulsión de Pyunkang Yul formulado con Raíz de Astrágalo. Suero denso que hidrata y restaura el equilibrio de grasa. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": false,
    "ingredientesActivos": [
      "Raíz de Astrágalo"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 117,
    "fase": 3,
    "nombre": "Snail Bee High Content Essence",
    "marca": "Benton",
    "precio": 99.9,
    "ingrediente_activo": "Baba de Caracol, Veneno de Abeja",
    "vehiculo": "Esencia",
    "indicacion_clinica": "Esencia reparadora antiarrugas para piel sensible",
    "filtro_baumann": [
      "DSPW",
      "OSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/benton-snail-essence.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Esencia reparadora antiarrugas para piel sensible",
    "descripcionLarga": "Esencia de Benton formulado con Baba de Caracol, Veneno de Abeja. Esencia reparadora antiarrugas para piel sensible. Reduce visiblemente líneas de expresión y mejora la firmeza.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": false,
    "ingredientesActivos": [
      "Baba de Caracol",
      "Veneno de Abeja"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 118,
    "fase": 3,
    "nombre": "Glow Serum: Propolis + Niacinamide",
    "marca": "Beauty of Joseon",
    "precio": 89.9,
    "ingrediente_activo": "Própolis 60%, Niacinamida 2%",
    "vehiculo": "Solución",
    "indicacion_clinica": "Suero calmante iluminador que minimiza los poros",
    "filtro_baumann": [
      "DSPT",
      "OSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/boj-glow-serum.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Suero calmante iluminador que minimiza los poros",
    "descripcionLarga": "Solución de Beauty of Joseon formulado con Própolis 60%, Niacinamida 2%. Suero calmante iluminador que minimiza los poros. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": false,
    "ingredientesActivos": [
      "Própolis 60%",
      "Niacinamida 2%"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 119,
    "fase": 3,
    "nombre": "Glow Deep Serum: Rice + Arbutin",
    "marca": "Beauty of Joseon",
    "precio": 89.9,
    "ingrediente_activo": "Arroz 68%, Alfa Arbutina",
    "vehiculo": "Solución",
    "indicacion_clinica": "Suero corrector de manchas oscuras duraderas",
    "filtro_baumann": [
      "DSPT",
      "DRPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/boj-glow-deep-serum.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Suero corrector de manchas oscuras duraderas",
    "descripcionLarga": "Solución de Beauty of Joseon formulado con Arroz 68%, Alfa Arbutina. Suero corrector de manchas oscuras duraderas. Promueve un tono más uniforme y luminoso con uso continuo.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": false,
    "ingredientesActivos": [
      "Arroz 68%",
      "Alfa Arbutina"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 120,
    "fase": 3,
    "nombre": "Calming Serum: Green Tea + Panthenol",
    "marca": "Beauty of Joseon",
    "precio": 89.9,
    "ingrediente_activo": "Té Verde 50.9%, Pantenol 5%",
    "vehiculo": "Solución",
    "indicacion_clinica": "Serum ultra-calmante que reduce el eritema facial",
    "filtro_baumann": [
      "DSPT",
      "DSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/boj-calming-serum.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Serum ultra-calmante que reduce el eritema facial",
    "descripcionLarga": "Solución de Beauty of Joseon formulado con Té Verde 50.9%, Pantenol 5%. Serum ultra-calmante que reduce el eritema facial. Calma la piel reactiva y reduce la sensibilidad cutánea.",
    "imagenFallback": "#FEF3C7",
    "precioVariable": false,
    "ingredientesActivos": [
      "Té Verde 50.9%",
      "Pantenol 5%"
    ],
    "pasoRutina": "Sérum AM"
  },
  {
    "id": 121,
    "fase": 4,
    "nombre": "Dynasty Cream",
    "marca": "Beauty of Joseon",
    "precio": 119,
    "ingrediente_activo": "Ginseng, Niacinamida",
    "vehiculo": "Crema",
    "indicacion_clinica": "Hidratación profunda y firmeza aterciopelada",
    "filtro_baumann": [
      "DSPT",
      "DSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/boj-dynasty-cream.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Hidratación profunda y firmeza aterciopelada",
    "descripcionLarga": "Crema de Beauty of Joseon formulado con Ginseng, Niacinamida. Hidratación profunda y firmeza aterciopelada. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ginseng",
      "Niacinamida"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 122,
    "fase": 4,
    "nombre": "Madagascar Centella Cream",
    "marca": "SKIN1004",
    "precio": 109,
    "ingrediente_activo": "Centella, Ceramidas",
    "vehiculo": "Crema",
    "indicacion_clinica": "Crema facial que nutre la barrera cutánea",
    "filtro_baumann": [
      "DSPT",
      "DSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/skin1004-centella-cream.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Crema facial que nutre la barrera cutánea",
    "descripcionLarga": "Crema de SKIN1004 formulado con Centella, Ceramidas. Crema facial que nutre la barrera cutánea. Nutre y repara la barrera cutánea para una piel más saludable.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Centella",
      "Ceramidas"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 123,
    "fase": 4,
    "nombre": "Japanese Ritual Light Cream",
    "marca": "Revox",
    "precio": 44.9,
    "ingrediente_activo": "Ácido Hialurónico",
    "vehiculo": "Crema",
    "indicacion_clinica": "Hidratación suave que retrasa arrugas",
    "filtro_baumann": [
      "OSNT",
      "DSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/revox-japanese-cream.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Hidratación suave que retrasa arrugas",
    "descripcionLarga": "Crema de Revox formulado con Ácido Hialurónico. Hidratación suave que retrasa arrugas. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácido Hialurónico"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 124,
    "fase": 4,
    "nombre": "Panda's Dream Magic Cream",
    "marca": "Tony Moly",
    "precio": 68.9,
    "ingrediente_activo": "Extracto de Bambú",
    "vehiculo": "Crema",
    "indicacion_clinica": "Hidratante coreana que unifica e ilumina la piel",
    "filtro_baumann": [
      "DSPT",
      "DRPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/tonymoly-pandas-dream.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Hidratante coreana que unifica e ilumina la piel",
    "descripcionLarga": "Crema de Tony Moly formulado con Extracto de Bambú. Hidratante coreana que unifica e ilumina la piel. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Extracto de Bambú"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 125,
    "fase": 4,
    "nombre": "Crema Hidratante",
    "marca": "CeraVe",
    "precio": 69.9,
    "ingrediente_activo": "3 Ceramidas, Hialurónico",
    "vehiculo": "Crema",
    "indicacion_clinica": "Crema de alta hidratación continua para piel seca",
    "filtro_baumann": [
      "DSNT",
      "DSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/cerave-crema-hidratante.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Crema de alta hidratación continua para piel seca",
    "descripcionLarga": "Crema de CeraVe formulado con 3 Ceramidas, Hialurónico. Crema de alta hidratación continua para piel seca. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "3 Ceramidas",
      "Hialurónico"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 126,
    "fase": 4,
    "nombre": "Loción Hidratante de Noche",
    "marca": "CeraVe",
    "precio": 79.9,
    "ingrediente_activo": "Niacinamida, Ceramidas",
    "vehiculo": "Loción",
    "indicacion_clinica": "Loción calmante ligera que repara la barrera nocturna",
    "filtro_baumann": [
      "DSNT",
      "OSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/cerave-facial-noche.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Loción calmante ligera que repara la barrera nocturna",
    "descripcionLarga": "Loción de CeraVe formulado con Niacinamida, Ceramidas. Loción calmante ligera que repara la barrera nocturna. Calma la piel reactiva y reduce la sensibilidad cutánea.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Niacinamida",
      "Ceramidas"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 127,
    "fase": 4,
    "nombre": "Loción Hidratante de Día FPS 30",
    "marca": "CeraVe",
    "precio": 79.9,
    "ingrediente_activo": "Ceramidas, Filtros Solares",
    "vehiculo": "Loción",
    "indicacion_clinica": "Loción de uso diario con protección solar básica",
    "filtro_baumann": [
      "DSNT",
      "DRNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/cerave-facial-dia.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Loción de uso diario con protección solar básica",
    "descripcionLarga": "Loción de CeraVe formulado con Ceramidas, Filtros Solares. Loción de uso diario con protección solar básica. Protege contra el daño solar diario y previene el fotoenvejecimiento.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ceramidas",
      "Filtros Solares"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 128,
    "fase": 4,
    "nombre": "Gel-Crema Oil Control",
    "marca": "CeraVe",
    "precio": 84.9,
    "ingrediente_activo": "Ceramidas, Tecnología de Sílice",
    "vehiculo": "Gel-Crema",
    "indicacion_clinica": "Absorbe el exceso de grasa aportando hidratación mate",
    "filtro_baumann": [
      "OSNT",
      "ORNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/cerave-oil-control.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Absorbe el exceso de grasa aportando hidratación mate",
    "descripcionLarga": "Gel-Crema de CeraVe formulado con Ceramidas, Tecnología de Sílice. Absorbe el exceso de grasa aportando hidratación mate. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ceramidas",
      "Tecnología de Sílice"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 129,
    "fase": 4,
    "nombre": "Effaclar Mat Hidratante",
    "marca": "La Roche-Posay",
    "precio": 119.9,
    "ingrediente_activo": "Sebulyse, Polvos de Sílice",
    "vehiculo": "Emulsión",
    "indicacion_clinica": "Reduce el exceso de grasa y el tamaño de los poros",
    "filtro_baumann": [
      "OSNT",
      "ORNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/lrp-effaclar-mat.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Reduce el exceso de grasa y el tamaño de los poros",
    "descripcionLarga": "Emulsión de La Roche-Posay formulado con Sebulyse, Polvos de Sílice. Reduce el exceso de grasa y el tamaño de los poros. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Sebulyse",
      "Polvos de Sílice"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 130,
    "fase": 4,
    "nombre": "Toleriane Sensitive Crema",
    "marca": "La Roche-Posay",
    "precio": 109.9,
    "ingrediente_activo": "Prebióticos, Ceramidas",
    "vehiculo": "Crema",
    "indicacion_clinica": "Calma la irritación reforzando la inmunidad de la piel",
    "filtro_baumann": [
      "DSPT",
      "DSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/lrp-toleriane-sensitive.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Calma la irritación reforzando la inmunidad de la piel",
    "descripcionLarga": "Crema de La Roche-Posay formulado con Prebióticos, Ceramidas. Calma la irritación reforzando la inmunidad de la piel. Calma la piel reactiva y reduce la sensibilidad cutánea.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Prebióticos",
      "Ceramidas"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 131,
    "fase": 4,
    "nombre": "Cicaplast Baume B5+",
    "marca": "La Roche-Posay",
    "precio": 69.9,
    "ingrediente_activo": "Madecassoside, Pantenol 5%",
    "vehiculo": "Bálsamo",
    "indicacion_clinica": "Bálsamo que calma descamación e irritaciones",
    "filtro_baumann": [
      "DSPT",
      "DSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/lrp-cicaplast-baume.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Bálsamo que calma descamación e irritaciones",
    "descripcionLarga": "Bálsamo de La Roche-Posay formulado con Madecassoside, Pantenol 5%. Bálsamo que calma descamación e irritaciones. Calma la piel reactiva y reduce la sensibilidad cutánea.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Madecassoside",
      "Pantenol 5%"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 132,
    "fase": 4,
    "nombre": "Sensibio Defensive Crema",
    "marca": "Bioderma",
    "precio": 99.9,
    "ingrediente_activo": "Carnosina, Vitamina E",
    "vehiculo": "Crema",
    "indicacion_clinica": "Hidratante calmante que refuerza las defensas naturales",
    "filtro_baumann": [
      "DSPT",
      "DSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/bioderma-sensibio-defensive.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Hidratante calmante que refuerza las defensas naturales",
    "descripcionLarga": "Crema de Bioderma formulado con Carnosina, Vitamina E. Hidratante calmante que refuerza las defensas naturales. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Carnosina",
      "Vitamina E"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 133,
    "fase": 4,
    "nombre": "Sébium Sensitive Crema",
    "marca": "Bioderma",
    "precio": 99.9,
    "ingrediente_activo": "Tecnología Inflastop, Zinc",
    "vehiculo": "Crema-Gel",
    "indicacion_clinica": "Alivia el eritema y previene brotes en piel acneica",
    "filtro_baumann": [
      "OSNT",
      "OSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/bioderma-sebium-sensitive.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Alivia el eritema y previene brotes en piel acneica",
    "descripcionLarga": "Crema-Gel de Bioderma formulado con Tecnología Inflastop, Zinc. Alivia el eritema y previene brotes en piel acneica. Ayuda a controlar imperfecciones y prevenir futuros brotes.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Tecnología Inflastop",
      "Zinc"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 134,
    "fase": 4,
    "nombre": "Atoderm Crema Ultra",
    "marca": "Bioderma",
    "precio": 89.9,
    "ingrediente_activo": "Complejo Skin Protect",
    "vehiculo": "Crema",
    "indicacion_clinica": "Crema rica protectora diaria para piel seca",
    "filtro_baumann": [
      "DSNT",
      "DRNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/bioderma-atoderm-crema.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Crema rica protectora diaria para piel seca",
    "descripcionLarga": "Crema de Bioderma formulado con Complejo Skin Protect. Crema rica protectora diaria para piel seca. Formulado con tecnología avanzada para resultados visibles desde las primeras aplicaciones.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Complejo Skin Protect"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 135,
    "fase": 4,
    "nombre": "Hydro Boost Water Gel",
    "marca": "Neutrogena",
    "precio": 69.9,
    "ingrediente_activo": "Ácido Hialurónico",
    "vehiculo": "Gel",
    "indicacion_clinica": "Hidratante en textura gel que aporta frescura",
    "filtro_baumann": [
      "OSNT",
      "DSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/neutrogena-hydroboost-gel.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Hidratante en textura gel que aporta frescura",
    "descripcionLarga": "Gel de Neutrogena formulado con Ácido Hialurónico. Hidratante en textura gel que aporta frescura. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácido Hialurónico"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 136,
    "fase": 4,
    "nombre": "Hydro Boost Gel-Crema",
    "marca": "Neutrogena",
    "precio": 69.9,
    "ingrediente_activo": "Ácido Hialurónico",
    "vehiculo": "Crema-Gel",
    "indicacion_clinica": "Nutre la piel extra seca sin dejar película grasa",
    "filtro_baumann": [
      "DSNT",
      "DSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/neutrogena-hydroboost-dry.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Nutre la piel extra seca sin dejar película grasa",
    "descripcionLarga": "Crema-Gel de Neutrogena formulado con Ácido Hialurónico. Nutre la piel extra seca sin dejar película grasa. Regula la producción de sebo para un acabado mate y fresco.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácido Hialurónico"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 137,
    "fase": 4,
    "nombre": "pH5 Crema Facial Protectora",
    "marca": "Eucerin",
    "precio": 89.9,
    "ingrediente_activo": "pH5 Citrato, Pantenol",
    "vehiculo": "Crema",
    "indicacion_clinica": "Restaura las defensas naturales e hidrata suavemente",
    "filtro_baumann": [
      "DSPT",
      "DSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/eucerin-ph5-facial.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Restaura las defensas naturales e hidrata suavemente",
    "descripcionLarga": "Crema de Eucerin formulado con pH5 Citrato, Pantenol. Restaura las defensas naturales e hidrata suavemente. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "pH5 Citrato",
      "Pantenol"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 138,
    "fase": 4,
    "nombre": "Aquaphor Pomada Reparadora",
    "marca": "Eucerin",
    "precio": 59.9,
    "ingrediente_activo": "Pantenol, Bisabolol",
    "vehiculo": "Pomada",
    "indicacion_clinica": "Ungüento que acelera la regeneración de piel agrietada",
    "filtro_baumann": [
      "DSNT",
      "DSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/eucerin-aquaphor.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Ungüento que acelera la regeneración de piel agrietada",
    "descripcionLarga": "Pomada de Eucerin formulado con Pantenol, Bisabolol. Ungüento que acelera la regeneración de piel agrietada. Formulado con tecnología avanzada para resultados visibles desde las primeras aplicaciones.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Pantenol",
      "Bisabolol"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 139,
    "fase": 4,
    "nombre": "ProAcne Solution Fluido",
    "marca": "Eucerin",
    "precio": 114.9,
    "ingrediente_activo": "Licochalcona A, Salicílico",
    "vehiculo": "Fluido",
    "indicacion_clinica": "Efecto antibrillo de 8 horas y calmante de brotes",
    "filtro_baumann": [
      "OSNT",
      "ORNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/eucerin-proacne-mat.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Efecto antibrillo de 8 horas y calmante de brotes",
    "descripcionLarga": "Fluido de Eucerin formulado con Licochalcona A, Salicílico. Efecto antibrillo de 8 horas y calmante de brotes. Ayuda a controlar imperfecciones y prevenir futuros brotes.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Licochalcona A",
      "Salicílico"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 140,
    "fase": 4,
    "nombre": "Aqualia Thermal Crema",
    "marca": "Vichy",
    "precio": 119.9,
    "ingrediente_activo": "Agua Volcánica, Hialurónico",
    "vehiculo": "Crema",
    "indicacion_clinica": "Hidratación isotónica que repone sales minerales",
    "filtro_baumann": [
      "DSNT",
      "OSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/vichy-aqualia-ligera.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Hidratación isotónica que repone sales minerales",
    "descripcionLarga": "Crema de Vichy formulado con Agua Volcánica, Hialurónico. Hidratación isotónica que repone sales minerales. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Agua Volcánica",
      "Hialurónico"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 141,
    "fase": 4,
    "nombre": "Normaderm Phytosolution",
    "marca": "Vichy",
    "precio": 129.9,
    "ingrediente_activo": "Ácido Salicílico",
    "vehiculo": "Gel-Crema",
    "indicacion_clinica": "Crema-gel que combate brotes e hidrata la piel grasa",
    "filtro_baumann": [
      "OSNT",
      "OSPW"
    ],
    "imagen_url": "https://www.aruma.pe/media/vichy-normaderm-phytosolution.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Crema-gel que combate brotes e hidrata la piel grasa",
    "descripcionLarga": "Gel-Crema de Vichy formulado con Ácido Salicílico. Crema-gel que combate brotes e hidrata la piel grasa. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": true,
    "ingredientesActivos": [
      "Ácido Salicílico"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 142,
    "fase": 4,
    "nombre": "Minéral 89 Crema de Agua",
    "marca": "Vichy",
    "precio": 129.9,
    "ingrediente_activo": "Ácido Hialurónico, Lípidos",
    "vehiculo": "Crema",
    "indicacion_clinica": "Fortalece e hidrata la barrera por 72 horas",
    "filtro_baumann": [
      "TODOS"
    ],
    "imagen_url": "https://www.aruma.pe/media/vichy-mineral-89-crema.jpg",
    "apto_para_todos": true,
    "descripcionCorta": "Fortalece e hidrata la barrera por 72 horas",
    "descripcionLarga": "Crema de Vichy formulado con Ácido Hialurónico, Lípidos. Fortalece e hidrata la barrera por 72 horas. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": true,
    "ingredientesActivos": [
      "Ácido Hialurónico",
      "Lípidos"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 143,
    "fase": 4,
    "nombre": "Tolérance Control Crema",
    "marca": "Avène",
    "precio": 119.9,
    "ingrediente_activo": "D-Sensinose, Agua Termal",
    "vehiculo": "Crema",
    "indicacion_clinica": "Alivia el ardor y la irritación en pieles sensibles",
    "filtro_baumann": [
      "DSPT",
      "DSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/avene-tolerance-control.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Alivia el ardor y la irritación en pieles sensibles",
    "descripcionLarga": "Crema de Avène formulado con D-Sensinose, Agua Termal. Alivia el ardor y la irritación en pieles sensibles. Calma la piel reactiva y reduce la sensibilidad cutánea.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "D-Sensinose",
      "Agua Termal"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 144,
    "fase": 4,
    "nombre": "Cicalfate+ Crema Reparadora",
    "marca": "Avène",
    "precio": 79.9,
    "ingrediente_activo": "Cobre-Zinc",
    "vehiculo": "Crema",
    "indicacion_clinica": "Crema protectora que acelera la cicatrización",
    "filtro_baumann": [
      "DSPT",
      "DSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/avene-cicalfate.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Crema protectora que acelera la cicatrización",
    "descripcionLarga": "Crema de Avène formulado con Cobre-Zinc. Crema protectora que acelera la cicatrización. Formulado con tecnología avanzada para resultados visibles desde las primeras aplicaciones.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Cobre-Zinc"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 145,
    "fase": 4,
    "nombre": "Cleanance Hydra Crema",
    "marca": "Avène",
    "precio": 114.9,
    "ingrediente_activo": "Aceite de Coco, Pantenol",
    "vehiculo": "Crema",
    "indicacion_clinica": "Nutre la piel resecada por tratamientos secantes",
    "filtro_baumann": [
      "DSPT",
      "OSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/avene-cleanance-hydra.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Nutre la piel resecada por tratamientos secantes",
    "descripcionLarga": "Crema de Avène formulado con Aceite de Coco, Pantenol. Nutre la piel resecada por tratamientos secantes. Nutre y repara la barrera cutánea para una piel más saludable.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Aceite de Coco",
      "Pantenol"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 146,
    "fase": 4,
    "nombre": "Loción Hidratante Diaria",
    "marca": "Cetaphil",
    "precio": 74.9,
    "ingrediente_activo": "Aceite de Aguacate",
    "vehiculo": "Loción",
    "indicacion_clinica": "Loción ligera que hidrata de forma inmediata",
    "filtro_baumann": [
      "DSNT",
      "DRNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/cetaphil-locion-hidratante.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Loción ligera que hidrata de forma inmediata",
    "descripcionLarga": "Loción de Cetaphil formulado con Aceite de Aguacate. Loción ligera que hidrata de forma inmediata. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Aceite de Aguacate"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 147,
    "fase": 4,
    "nombre": "Crema Hidratante Extrema",
    "marca": "Cetaphil",
    "precio": 84.9,
    "ingrediente_activo": "Aceite de Almendras",
    "vehiculo": "Crema",
    "indicacion_clinica": "Crema densa ideal para humectar la piel muy seca",
    "filtro_baumann": [
      "DSNT",
      "DSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/cetaphil-crema.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Crema densa ideal para humectar la piel muy seca",
    "descripcionLarga": "Crema de Cetaphil formulado con Aceite de Almendras. Crema densa ideal para humectar la piel muy seca. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Aceite de Almendras"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 148,
    "fase": 4,
    "nombre": "PRO Urea Crema Alisadora",
    "marca": "Cetaphil",
    "precio": 99.9,
    "ingrediente_activo": "Urea al 10%, Lactato",
    "vehiculo": "Crema",
    "indicacion_clinica": "Exfolia con delicadeza suavizando el relieve áspero",
    "filtro_baumann": [
      "DRNT",
      "DRPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/cetaphil-urea-crema.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Exfolia con delicadeza suavizando el relieve áspero",
    "descripcionLarga": "Crema de Cetaphil formulado con Urea al 10%, Lactato. Exfolia con delicadeza suavizando el relieve áspero. Renueva la superficie cutánea dejando la piel más suave y uniforme.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Urea al 10%",
      "Lactato"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 149,
    "fase": 4,
    "nombre": "Advanced Snail 92 All In One",
    "marca": "COSRX",
    "precio": 99.9,
    "ingrediente_activo": "Mucina de Caracol al 92%",
    "vehiculo": "Crema-Gel",
    "indicacion_clinica": "Gel-crema regenerador que aporta elasticidad",
    "filtro_baumann": [
      "DSPT",
      "OSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/cosrx-snail-92-cream.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Gel-crema regenerador que aporta elasticidad",
    "descripcionLarga": "Crema-Gel de COSRX formulado con Mucina de Caracol al 92%. Gel-crema regenerador que aporta elasticidad. Formulado con tecnología avanzada para resultados visibles desde las primeras aplicaciones.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Mucina de Caracol al 92%"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 150,
    "fase": 4,
    "nombre": "Oil-Free Ultra Lotion",
    "marca": "COSRX",
    "precio": 94.9,
    "ingrediente_activo": "Savia de Abedul al 70%",
    "vehiculo": "Loción",
    "indicacion_clinica": "Loción ligera libre de aceites para piel mixta",
    "filtro_baumann": [
      "OSNT",
      "DSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/cosrx-oilfree-lotion.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Loción ligera libre de aceites para piel mixta",
    "descripcionLarga": "Loción de COSRX formulado con Savia de Abedul al 70%. Loción ligera libre de aceites para piel mixta. Formulado con tecnología avanzada para resultados visibles desde las primeras aplicaciones.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Savia de Abedul al 70%"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 151,
    "fase": 4,
    "nombre": "Rich Moist Soothing Cream",
    "marca": "Dear Klairs",
    "precio": 104.9,
    "ingrediente_activo": "Beta-Glucanos, Ceramidas",
    "vehiculo": "Crema",
    "indicacion_clinica": "Crema nutritiva que optimiza los niveles de humedad",
    "filtro_baumann": [
      "DSPT",
      "DSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/klairs-moist-cream.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Crema nutritiva que optimiza los niveles de humedad",
    "descripcionLarga": "Crema de Dear Klairs formulado con Beta-Glucanos, Ceramidas. Crema nutritiva que optimiza los niveles de humedad. Nutre y repara la barrera cutánea para una piel más saludable.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Beta-Glucanos",
      "Ceramidas"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 152,
    "fase": 4,
    "nombre": "Moisture Cream",
    "marca": "Pyunkang Yul",
    "precio": 89.9,
    "ingrediente_activo": "Extracto de Astrágalo",
    "vehiculo": "Crema",
    "indicacion_clinica": "Crema facial calmante que protege la piel seca",
    "filtro_baumann": [
      "DSPT",
      "DSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/pyunkang-moisture-cream.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Crema facial calmante que protege la piel seca",
    "descripcionLarga": "Crema de Pyunkang Yul formulado con Extracto de Astrágalo. Crema facial calmante que protege la piel seca. Calma la piel reactiva y reduce la sensibilidad cutánea.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Extracto de Astrágalo"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 153,
    "fase": 4,
    "nombre": "AHA BHA PHA Miracle Cream",
    "marca": "Some By Mi",
    "precio": 94.9,
    "ingrediente_activo": "Centella Asiática, Ácidos",
    "vehiculo": "Crema-Gel",
    "indicacion_clinica": "Crema facial calmante que unifica la textura",
    "filtro_baumann": [
      "OSPW",
      "ORPW"
    ],
    "imagen_url": "https://www.aruma.pe/media/somebymi-miracle-cream.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Crema facial calmante que unifica la textura",
    "descripcionLarga": "Crema-Gel de Some By Mi formulado con Centella Asiática, Ácidos. Crema facial calmante que unifica la textura. Renueva la superficie cutánea dejando la piel más suave y uniforme.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Centella Asiática",
      "Ácidos"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 154,
    "fase": 4,
    "nombre": "Just Collagen Amino Acids",
    "marca": "Revox",
    "precio": 39.9,
    "ingrediente_activo": "Aminoácidos, Hialurónico",
    "vehiculo": "Crema",
    "indicacion_clinica": "Humecta la piel mejorando la firmeza facial",
    "filtro_baumann": [
      "DRNW",
      "DRPW"
    ],
    "imagen_url": "https://www.aruma.pe/media/revox-just-collagen.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Humecta la piel mejorando la firmeza facial",
    "descripcionLarga": "Crema de Revox formulado con Aminoácidos, Hialurónico. Humecta la piel mejorando la firmeza facial. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Aminoácidos",
      "Hialurónico"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 155,
    "fase": 4,
    "nombre": "Kind to Skin Moisturizer",
    "marca": "Simple",
    "precio": 34.9,
    "ingrediente_activo": "Aceite de Semilla de Borraja",
    "vehiculo": "Crema",
    "indicacion_clinica": "Hidratante facial ligero hipoalergénico diario",
    "filtro_baumann": [
      "DSNT",
      "OSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/simple-light-moisturizer.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Hidratante facial ligero hipoalergénico diario",
    "descripcionLarga": "Crema de Simple formulado con Aceite de Semilla de Borraja. Hidratante facial ligero hipoalergénico diario. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Aceite de Semilla de Borraja"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 156,
    "fase": 4,
    "nombre": "Crema Uniform & Matte FPS 30",
    "marca": "Garnier",
    "precio": 39.9,
    "ingrediente_activo": "Vitamina C, Filtros UV",
    "vehiculo": "Crema",
    "indicacion_clinica": "Hidratante con control de brillo y acción aclaradora",
    "filtro_baumann": [
      "OSPT",
      "ORPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/garnier-matte-crema.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Hidratante con control de brillo y acción aclaradora",
    "descripcionLarga": "Crema de Garnier formulado con Vitamina C, Filtros UV. Hidratante con control de brillo y acción aclaradora. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Vitamina C",
      "Filtros UV"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 157,
    "fase": 4,
    "nombre": "Hidratante en Gel Express",
    "marca": "Garnier",
    "precio": 39.9,
    "ingrediente_activo": "Vitamina C, Salicílico",
    "vehiculo": "Gel",
    "indicacion_clinica": "Gel de textura fresca que aporta luminosidad",
    "filtro_baumann": [
      "OSNT",
      "ORNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/garnier-vitc-gel.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Gel de textura fresca que aporta luminosidad",
    "descripcionLarga": "Gel de Garnier formulado con Vitamina C, Salicílico. Gel de textura fresca que aporta luminosidad. Renueva la superficie cutánea dejando la piel más suave y uniforme.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Vitamina C",
      "Salicílico"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 158,
    "fase": 4,
    "nombre": "Revitalift Hialurónico Día",
    "marca": "L'Oréal Paris",
    "precio": 59.9,
    "ingrediente_activo": "Ácido Hialurónico, FPS 20",
    "vehiculo": "Crema",
    "indicacion_clinica": "Crema hidratante rellenadora con protección básica",
    "filtro_baumann": [
      "DSNT",
      "DSNW"
    ],
    "imagen_url": "https://www.aruma.pe/media/loreal-hyaluronic-dia.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Crema hidratante rellenadora con protección básica",
    "descripcionLarga": "Crema de L'Oréal Paris formulado con Ácido Hialurónico, FPS 20. Crema hidratante rellenadora con protección básica. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácido Hialurónico",
      "FPS 20"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 159,
    "fase": 4,
    "nombre": "Revitalift Hialurónico Noche",
    "marca": "L'Oréal Paris",
    "precio": 59.9,
    "ingrediente_activo": "Ácido Hialurónico puro",
    "vehiculo": "Crema",
    "indicacion_clinica": "Crema de noche que combate líneas de expresión",
    "filtro_baumann": [
      "DSNT",
      "DSNW"
    ],
    "imagen_url": "https://www.aruma.pe/media/loreal-hyaluronic-noche.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Crema de noche que combate líneas de expresión",
    "descripcionLarga": "Crema de L'Oréal Paris formulado con Ácido Hialurónico puro. Crema de noche que combate líneas de expresión. Reduce visiblemente líneas de expresión y mejora la firmeza.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácido Hialurónico puro"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 160,
    "fase": 4,
    "nombre": "Revitalift Laser X3 Día",
    "marca": "L'Oréal Paris",
    "precio": 79.9,
    "ingrediente_activo": "Pro-Xylane, Hialurónico",
    "vehiculo": "Crema",
    "indicacion_clinica": "Corrige arrugas profundas y redensifica la dermis",
    "filtro_baumann": [
      "DRNW",
      "DRPW"
    ],
    "imagen_url": "https://www.aruma.pe/media/loreal-laser-dia.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Corrige arrugas profundas y redensifica la dermis",
    "descripcionLarga": "Crema de L'Oréal Paris formulado con Pro-Xylane, Hialurónico. Corrige arrugas profundas y redensifica la dermis. Reduce visiblemente líneas de expresión y mejora la firmeza.",
    "imagenFallback": "#ECFDF5",
    "precioVariable": false,
    "ingredientesActivos": [
      "Pro-Xylane",
      "Hialurónico"
    ],
    "pasoRutina": "Hidratación AM/PM"
  },
  {
    "id": 161,
    "fase": 5,
    "nombre": "Fusion Water Magic SPF 50",
    "marca": "ISDIN",
    "precio": 109.9,
    "ingrediente_activo": "Alga Mediterránea, Hialurónico",
    "vehiculo": "Fluido",
    "indicacion_clinica": "Protector solar ultraligero que no irrita los ojos",
    "filtro_baumann": [
      "TODOS"
    ],
    "imagen_url": "https://www.aruma.pe/media/isdin-fusion-water-magic.jpg",
    "apto_para_todos": true,
    "descripcionCorta": "Protector solar ultraligero que no irrita los ojos",
    "descripcionLarga": "Fluido de ISDIN formulado con Alga Mediterránea, Hialurónico. Protector solar ultraligero que no irrita los ojos. Calma la piel reactiva y reduce la sensibilidad cutánea.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": false,
    "ingredientesActivos": [
      "Alga Mediterránea",
      "Hialurónico"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 162,
    "fase": 5,
    "nombre": "Fusion Water Color Medium",
    "marca": "ISDIN",
    "precio": 114.9,
    "ingrediente_activo": "Pigmentos, Hialurónico",
    "vehiculo": "Fluido",
    "indicacion_clinica": "Fotoprotección con cobertura ligera y tono medio",
    "filtro_baumann": [
      "TODOS"
    ],
    "imagen_url": "https://www.aruma.pe/media/isdin-fusion-water-color-medium.jpg",
    "apto_para_todos": true,
    "descripcionCorta": "Fotoprotección con cobertura ligera y tono medio",
    "descripcionLarga": "Fluido de ISDIN formulado con Pigmentos, Hialurónico. Fotoprotección con cobertura ligera y tono medio. Promueve un tono más uniforme y luminoso con uso continuo.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": false,
    "ingredientesActivos": [
      "Pigmentos",
      "Hialurónico"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 163,
    "fase": 5,
    "nombre": "Fusion Water Color Light",
    "marca": "ISDIN",
    "precio": 114.9,
    "ingrediente_activo": "Pigmentos, Hialurónico",
    "vehiculo": "Fluido",
    "indicacion_clinica": "Fotoprotección diaria con color y acabado natural",
    "filtro_baumann": [
      "TODOS"
    ],
    "imagen_url": "https://www.aruma.pe/media/isdin-fusion-water-color-light.jpg",
    "apto_para_todos": true,
    "descripcionCorta": "Fotoprotección diaria con color y acabado natural",
    "descripcionLarga": "Fluido de ISDIN formulado con Pigmentos, Hialurónico. Fotoprotección diaria con color y acabado natural. Protege contra el daño solar diario y previene el fotoenvejecimiento.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": false,
    "ingredientesActivos": [
      "Pigmentos",
      "Hialurónico"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 164,
    "fase": 5,
    "nombre": "Fusion Gel Sport SPF 50",
    "marca": "ISDIN",
    "precio": 109.9,
    "ingrediente_activo": "Jengibre, Mentol",
    "vehiculo": "Gel",
    "indicacion_clinica": "Protector solar corporal ideal para deportistas",
    "filtro_baumann": [
      "ORNT",
      "ORPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/isdin-fusion-gel-sport.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Protector solar corporal ideal para deportistas",
    "descripcionLarga": "Gel de ISDIN formulado con Jengibre, Mentol. Protector solar corporal ideal para deportistas. Protege contra el daño solar diario y previene el fotoenvejecimiento.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": false,
    "ingredientesActivos": [
      "Jengibre",
      "Mentol"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 165,
    "fase": 5,
    "nombre": "Eryfotona AK Fluid SPF 100+",
    "marca": "ISDIN",
    "precio": 149.9,
    "ingrediente_activo": "ADN Repairsomes",
    "vehiculo": "Fluido",
    "indicacion_clinica": "Prevención y tratamiento de queratosis actínica",
    "filtro_baumann": [
      "DRPT",
      "DSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/isdin-eryfotona.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Prevención y tratamiento de queratosis actínica",
    "descripcionLarga": "Fluido de ISDIN formulado con ADN Repairsomes. Prevención y tratamiento de queratosis actínica. Formulado con tecnología avanzada para resultados visibles desde las primeras aplicaciones.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": true,
    "ingredientesActivos": [
      "ADN Repairsomes"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 166,
    "fase": 5,
    "nombre": "Fotoprotector Hydro Oil SPF 30",
    "marca": "ISDIN",
    "precio": 119.9,
    "ingrediente_activo": "Pro-Melanin Technology",
    "vehiculo": "Bifásico",
    "indicacion_clinica": "Protector solar corporal que unifica el bronceado",
    "filtro_baumann": [
      "TODOS"
    ],
    "imagen_url": "https://www.aruma.pe/media/isdin-hydro-oil.jpg",
    "apto_para_todos": true,
    "descripcionCorta": "Protector solar corporal que unifica el bronceado",
    "descripcionLarga": "Bifásico de ISDIN formulado con Pro-Melanin Technology. Protector solar corporal que unifica el bronceado. Protege contra el daño solar diario y previene el fotoenvejecimiento.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": false,
    "ingredientesActivos": [
      "Pro-Melanin Technology"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 167,
    "fase": 5,
    "nombre": "Fotoprotector Hydrolotion SPF 50+",
    "marca": "ISDIN",
    "precio": 119.9,
    "ingrediente_activo": "Sepitonic (Oxigenante)",
    "vehiculo": "Bifásico",
    "indicacion_clinica": "Loción corporal bifásica hidratante y protectora",
    "filtro_baumann": [
      "TODOS"
    ],
    "imagen_url": "https://www.aruma.pe/media/isdin-hydrolotion.jpg",
    "apto_para_todos": true,
    "descripcionCorta": "Loción corporal bifásica hidratante y protectora",
    "descripcionLarga": "Bifásico de ISDIN formulado con Sepitonic (Oxigenante). Loción corporal bifásica hidratante y protectora. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": false,
    "ingredientesActivos": [
      "Sepitonic (Oxigenante)"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 168,
    "fase": 5,
    "nombre": "UV Defender Tono Claro FPS 50+",
    "marca": "L'Oréal Paris",
    "precio": 49.9,
    "ingrediente_activo": "Ácido Hialurónico",
    "vehiculo": "Crema",
    "indicacion_clinica": "Protector solar hidratante con color de toque seco",
    "filtro_baumann": [
      "OSNT",
      "OSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/loreal-uv-defender-claro.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Protector solar hidratante con color de toque seco",
    "descripcionLarga": "Crema de L'Oréal Paris formulado con Ácido Hialurónico. Protector solar hidratante con color de toque seco. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácido Hialurónico"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 169,
    "fase": 5,
    "nombre": "UV Defender Invisible FPS 50+",
    "marca": "L'Oréal Paris",
    "precio": 44.9,
    "ingrediente_activo": "Ácido Hialurónico",
    "vehiculo": "Fluido",
    "indicacion_clinica": "Fluido solar que previene el fotoenvejecimiento",
    "filtro_baumann": [
      "OSNT",
      "ORNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/loreal-uv-defender-invisible.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Fluido solar que previene el fotoenvejecimiento",
    "descripcionLarga": "Fluido de L'Oréal Paris formulado con Ácido Hialurónico. Fluido solar que previene el fotoenvejecimiento. Protege contra el daño solar diario y previene el fotoenvejecimiento.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácido Hialurónico"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 170,
    "fase": 5,
    "nombre": "UV Defender Hidratación FPS 50+",
    "marca": "L'Oréal Paris",
    "precio": 44.9,
    "ingrediente_activo": "Ácido Hialurónico puro",
    "vehiculo": "Crema",
    "indicacion_clinica": "Protector solar diario con alta hidratación",
    "filtro_baumann": [
      "DSNT",
      "DRNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/loreal-uv-defender-hidratante.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Protector solar diario con alta hidratación",
    "descripcionLarga": "Crema de L'Oréal Paris formulado con Ácido Hialurónico puro. Protector solar diario con alta hidratación. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácido Hialurónico puro"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 171,
    "fase": 5,
    "nombre": "Depiderm SPF 50 Cuidado de Día",
    "marca": "Uriage",
    "precio": 119,
    "ingrediente_activo": "Vitamina C, Agua Termal",
    "vehiculo": "Crema",
    "indicacion_clinica": "Crema hidratante aclaradora con protección solar",
    "filtro_baumann": [
      "DSPT",
      "DRPT"
    ],
    "imagen_url": null,
    "apto_para_todos": false,
    "descripcionCorta": "Crema hidratante aclaradora con protección solar",
    "descripcionLarga": "Crema de Uriage formulado con Vitamina C, Agua Termal. Crema hidratante aclaradora con protección solar. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": false,
    "ingredientesActivos": [
      "Vitamina C",
      "Agua Termal"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 172,
    "fase": 5,
    "nombre": "Anthelios UVMune Invisible SPF 50+",
    "marca": "La Roche-Posay",
    "precio": 129.9,
    "ingrediente_activo": "Mexoryl 400",
    "vehiculo": "Fluido",
    "indicacion_clinica": "Máxima protección solar frente a UVA ultralargos",
    "filtro_baumann": [
      "TODOS"
    ],
    "imagen_url": "https://www.aruma.pe/media/lrp-anthelios-fluido.jpg",
    "apto_para_todos": true,
    "descripcionCorta": "Máxima protección solar frente a UVA ultralargos",
    "descripcionLarga": "Fluido de La Roche-Posay formulado con Mexoryl 400. Máxima protección solar frente a UVA ultralargos. Protege contra el daño solar diario y previene el fotoenvejecimiento.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": true,
    "ingredientesActivos": [
      "Mexoryl 400"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 173,
    "fase": 5,
    "nombre": "Anthelios UVMune Crema SPF 50+",
    "marca": "La Roche-Posay",
    "precio": 129.9,
    "ingrediente_activo": "Mexoryl 400, Glicerina",
    "vehiculo": "Crema",
    "indicacion_clinica": "Fotoprotector facial hidratante de amplio espectro",
    "filtro_baumann": [
      "DSNT",
      "DSPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/lrp-anthelios-crema.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Fotoprotector facial hidratante de amplio espectro",
    "descripcionLarga": "Crema de La Roche-Posay formulado con Mexoryl 400, Glicerina. Fotoprotector facial hidratante de amplio espectro. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": true,
    "ingredientesActivos": [
      "Mexoryl 400",
      "Glicerina"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 174,
    "fase": 5,
    "nombre": "Anthelios Oil Correct SPF 50+",
    "marca": "La Roche-Posay",
    "precio": 134.9,
    "ingrediente_activo": "Salicílico, Zinc, Niacinamida",
    "vehiculo": "Crema-Gel",
    "indicacion_clinica": "Fotoprotector diario seborregulador que reduce poros",
    "filtro_baumann": [
      "OSNT",
      "ORNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/lrp-anthelios-oil-correct.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Fotoprotector diario seborregulador que reduce poros",
    "descripcionLarga": "Crema-Gel de La Roche-Posay formulado con Salicílico, Zinc, Niacinamida. Fotoprotector diario seborregulador que reduce poros. Limpia en profundidad sin alterar el equilibrio natural de la piel.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": true,
    "ingredientesActivos": [
      "Salicílico",
      "Zinc",
      "Niacinamida"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 175,
    "fase": 5,
    "nombre": "Anthelios Age Correct SPF 50+",
    "marca": "La Roche-Posay",
    "precio": 139.9,
    "ingrediente_activo": "Ácido Hialurónico, LHA",
    "vehiculo": "Crema",
    "indicacion_clinica": "Protector solar antiedad que corrige arrugas y manchas",
    "filtro_baumann": [
      "DRNW",
      "DRPW"
    ],
    "imagen_url": "https://www.aruma.pe/media/lrp-anthelios-age-correct.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Protector solar antiedad que corrige arrugas y manchas",
    "descripcionLarga": "Crema de La Roche-Posay formulado con Ácido Hialurónico, LHA. Protector solar antiedad que corrige arrugas y manchas. Promueve un tono más uniforme y luminoso con uso continuo.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": true,
    "ingredientesActivos": [
      "Ácido Hialurónico",
      "LHA"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 176,
    "fase": 5,
    "nombre": "Photoderm MAX Aquafluido SPF 50+",
    "marca": "Bioderma",
    "precio": 109.9,
    "ingrediente_activo": "Bioprotección Celular",
    "vehiculo": "Fluido",
    "indicacion_clinica": "Fotoprotección de textura fluida y acabado mate",
    "filtro_baumann": [
      "TODOS"
    ],
    "imagen_url": "https://www.aruma.pe/media/bioderma-photoderm-aquafluido.jpg",
    "apto_para_todos": true,
    "descripcionCorta": "Fotoprotección de textura fluida y acabado mate",
    "descripcionLarga": "Fluido de Bioderma formulado con Bioprotección Celular. Fotoprotección de textura fluida y acabado mate. Renueva la superficie cutánea dejando la piel más suave y uniforme.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": false,
    "ingredientesActivos": [
      "Bioprotección Celular"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 177,
    "fase": 5,
    "nombre": "Photoderm M SPF 50+ Doré",
    "marca": "Bioderma",
    "precio": 114.9,
    "ingrediente_activo": "Glabridina",
    "vehiculo": "Crema",
    "indicacion_clinica": "Protector solar para evitar manchas de melasma",
    "filtro_baumann": [
      "DSPT",
      "DRPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/bioderma-photoderm-m.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Protector solar para evitar manchas de melasma",
    "descripcionLarga": "Crema de Bioderma formulado con Glabridina. Protector solar para evitar manchas de melasma. Promueve un tono más uniforme y luminoso con uso continuo.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": false,
    "ingredientesActivos": [
      "Glabridina"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 178,
    "fase": 5,
    "nombre": "Photoderm AKN Mat SPF 30",
    "marca": "Bioderma",
    "precio": 109.9,
    "ingrediente_activo": "Patente Fluidactiv",
    "vehiculo": "Fluido",
    "indicacion_clinica": "Fluido solar matificante que previene brotes",
    "filtro_baumann": [
      "OSNT",
      "ORNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/bioderma-photoderm-akn.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Fluido solar matificante que previene brotes",
    "descripcionLarga": "Fluido de Bioderma formulado con Patente Fluidactiv. Fluido solar matificante que previene brotes. Ayuda a controlar imperfecciones y prevenir futuros brotes.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": false,
    "ingredientesActivos": [
      "Patente Fluidactiv"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 179,
    "fase": 5,
    "nombre": "Sun Gel-Cream Oil Control SPF 50+",
    "marca": "Eucerin",
    "precio": 119.9,
    "ingrediente_activo": "L-Carnitina, Licochalcona A",
    "vehiculo": "Crema-Gel",
    "indicacion_clinica": "Toque seco con efecto antibrillo de larga duración",
    "filtro_baumann": [
      "OSNT",
      "ORNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/eucerin-oil-control.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Toque seco con efecto antibrillo de larga duración",
    "descripcionLarga": "Crema-Gel de Eucerin formulado con L-Carnitina, Licochalcona A. Toque seco con efecto antibrillo de larga duración. Regula la producción de sebo para un acabado mate y fresco.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": false,
    "ingredientesActivos": [
      "L-Carnitina",
      "Licochalcona A"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 180,
    "fase": 5,
    "nombre": "Sun Pigment Control SPF 50+",
    "marca": "Eucerin",
    "precio": 124.9,
    "ingrediente_activo": "Thiamidol",
    "vehiculo": "Crema",
    "indicacion_clinica": "Protector solar despigmentante que reduce manchas",
    "filtro_baumann": [
      "DSPT",
      "DRPT"
    ],
    "imagen_url": "https://www.aruma.pe/media/eucerin-pigment-control.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Protector solar despigmentante que reduce manchas",
    "descripcionLarga": "Crema de Eucerin formulado con Thiamidol. Protector solar despigmentante que reduce manchas. Promueve un tono más uniforme y luminoso con uso continuo.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": true,
    "ingredientesActivos": [
      "Thiamidol"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 181,
    "fase": 5,
    "nombre": "Sun Photoaging Control SPF 50+",
    "marca": "Eucerin",
    "precio": 119.9,
    "ingrediente_activo": "Ácido Hialurónico",
    "vehiculo": "Crema",
    "indicacion_clinica": "Previene arrugas causadas por la radiación solar",
    "filtro_baumann": [
      "DSNW",
      "DRNW"
    ],
    "imagen_url": "https://www.aruma.pe/media/eucerin-photoaging.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Previene arrugas causadas por la radiación solar",
    "descripcionLarga": "Crema de Eucerin formulado con Ácido Hialurónico. Previene arrugas causadas por la radiación solar. Reduce visiblemente líneas de expresión y mejora la firmeza.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácido Hialurónico"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 182,
    "fase": 5,
    "nombre": "Capital Soleil UV-Clear SPF 50+",
    "marca": "Vichy",
    "precio": 129.9,
    "ingrediente_activo": "Ácido Salicílico, Probióticos",
    "vehiculo": "Fluido",
    "indicacion_clinica": "Fluido solar purificante anti-imperfecciones diario",
    "filtro_baumann": [
      "OSNT",
      "OSPW"
    ],
    "imagen_url": "https://www.aruma.pe/media/vichy-capitalsoleil-uvclear.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Fluido solar purificante anti-imperfecciones diario",
    "descripcionLarga": "Fluido de Vichy formulado con Ácido Salicílico, Probióticos. Fluido solar purificante anti-imperfecciones diario. Ayuda a controlar imperfecciones y prevenir futuros brotes.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": true,
    "ingredientesActivos": [
      "Ácido Salicílico",
      "Probióticos"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 183,
    "fase": 5,
    "nombre": "Capital Soleil UV-Age SPF 50+",
    "marca": "Vichy",
    "precio": 129.9,
    "ingrediente_activo": "Péptidos, Niacinamida",
    "vehiculo": "Fluido",
    "indicacion_clinica": "Fluido solar que previene arrugas y manchas",
    "filtro_baumann": [
      "DRNW",
      "DRPW"
    ],
    "imagen_url": "https://www.aruma.pe/media/vichy-capitalsoleil-uvage.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Fluido solar que previene arrugas y manchas",
    "descripcionLarga": "Fluido de Vichy formulado con Péptidos, Niacinamida. Fluido solar que previene arrugas y manchas. Promueve un tono más uniforme y luminoso con uso continuo.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": true,
    "ingredientesActivos": [
      "Péptidos",
      "Niacinamida"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 184,
    "fase": 5,
    "nombre": "Ultra Mat Fluido Solar SPF 50+",
    "marca": "Avène",
    "precio": 114.9,
    "ingrediente_activo": "Pre-tocoferil",
    "vehiculo": "Fluido",
    "indicacion_clinica": "Protector solar diario matificante resistente al agua",
    "filtro_baumann": [
      "OSNT",
      "ORNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/avene-ultramat.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Protector solar diario matificante resistente al agua",
    "descripcionLarga": "Fluido de Avène formulado con Pre-tocoferil. Protector solar diario matificante resistente al agua. Protege contra el daño solar diario y previene el fotoenvejecimiento.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": false,
    "ingredientesActivos": [
      "Pre-tocoferil"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 185,
    "fase": 5,
    "nombre": "Intense Protect SPF 50+",
    "marca": "Avène",
    "precio": 129.9,
    "ingrediente_activo": "Filtro TriAsorB (Luz Azul)",
    "vehiculo": "Fluido",
    "indicacion_clinica": "Máxima fotoprotección para pieles hipersensibles",
    "filtro_baumann": [
      "TODOS"
    ],
    "imagen_url": "https://www.aruma.pe/media/avene-intense-protect.jpg",
    "apto_para_todos": true,
    "descripcionCorta": "Máxima fotoprotección para pieles hipersensibles",
    "descripcionLarga": "Fluido de Avène formulado con Filtro TriAsorB (Luz Azul). Máxima fotoprotección para pieles hipersensibles. Calma la piel reactiva y reduce la sensibilidad cutánea.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": true,
    "ingredientesActivos": [
      "Filtro TriAsorB (Luz Azul)"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 186,
    "fase": 5,
    "nombre": "Sun Fresh Facial FPS 70",
    "marca": "Neutrogena",
    "precio": 59.9,
    "ingrediente_activo": "Helioplex Technology",
    "vehiculo": "Crema",
    "indicacion_clinica": "Protector solar de textura ligera y rápida absorción",
    "filtro_baumann": [
      "TODOS"
    ],
    "imagen_url": "https://www.aruma.pe/media/neutrogena-sunfresh.jpg",
    "apto_para_todos": true,
    "descripcionCorta": "Protector solar de textura ligera y rápida absorción",
    "descripcionLarga": "Crema de Neutrogena formulado con Helioplex Technology. Protector solar de textura ligera y rápida absorción. Renueva la superficie cutánea dejando la piel más suave y uniforme.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": false,
    "ingredientesActivos": [
      "Helioplex Technology"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 187,
    "fase": 5,
    "nombre": "Hyalu-Cica Water-Fit Sun",
    "marca": "SKIN1004",
    "precio": 99,
    "ingrediente_activo": "Ácido Hialurónico, Centella",
    "vehiculo": "Fluido",
    "indicacion_clinica": "Serum solar hidratante ultraligero de acabado glow",
    "filtro_baumann": [
      "TODOS"
    ],
    "imagen_url": "https://www.aruma.pe/media/skin1004-hyalucica-sun.jpg",
    "apto_para_todos": true,
    "descripcionCorta": "Serum solar hidratante ultraligero de acabado glow",
    "descripcionLarga": "Fluido de SKIN1004 formulado con Ácido Hialurónico, Centella. Serum solar hidratante ultraligero de acabado glow. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácido Hialurónico",
      "Centella"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 188,
    "fase": 5,
    "nombre": "Relief Sun: Rice + Probiotics",
    "marca": "Beauty of Joseon",
    "precio": 99,
    "ingrediente_activo": "Extracto de Arroz 30%",
    "vehiculo": "Crema",
    "indicacion_clinica": "Protector solar orgánico nutritivo y calmante",
    "filtro_baumann": [
      "DSPT",
      "DSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/boj-relief-sun.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Protector solar orgánico nutritivo y calmante",
    "descripcionLarga": "Crema de Beauty of Joseon formulado con Extracto de Arroz 30%. Protector solar orgánico nutritivo y calmante. Calma la piel reactiva y reduce la sensibilidad cutánea.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": false,
    "ingredientesActivos": [
      "Extracto de Arroz 30%"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 189,
    "fase": 5,
    "nombre": "Isdinceutics K-Ox Eyes",
    "marca": "ISDIN",
    "precio": 189.9,
    "ingrediente_activo": "Óxido de Vitamina K, Haloxil",
    "vehiculo": "Crema",
    "indicacion_clinica": "Crema contorno de ojos que reduce bolsas y ojeras",
    "filtro_baumann": [
      "TODOS"
    ],
    "imagen_url": "https://www.aruma.pe/media/isdin-kox-eyes.jpg",
    "apto_para_todos": true,
    "descripcionCorta": "Crema contorno de ojos que reduce bolsas y ojeras",
    "descripcionLarga": "Crema de ISDIN formulado con Óxido de Vitamina K, Haloxil. Crema contorno de ojos que reduce bolsas y ojeras. Formulado con tecnología avanzada para resultados visibles desde las primeras aplicaciones.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": true,
    "ingredientesActivos": [
      "Óxido de Vitamina K",
      "Haloxil"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 190,
    "fase": 5,
    "nombre": "Hyalu B5 Ojos Contorno",
    "marca": "La Roche-Posay",
    "precio": 134.9,
    "ingrediente_activo": "Ácido Hialurónico, Vitamina B5",
    "vehiculo": "Crema",
    "indicacion_clinica": "Crema contorno de ojos que rellena y repara arrugas",
    "filtro_baumann": [
      "DSNW",
      "DSPW"
    ],
    "imagen_url": "https://www.aruma.pe/media/lrp-hyalu-b5-ojos.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Crema contorno de ojos que rellena y repara arrugas",
    "descripcionLarga": "Crema de La Roche-Posay formulado con Ácido Hialurónico, Vitamina B5. Crema contorno de ojos que rellena y repara arrugas. Reduce visiblemente líneas de expresión y mejora la firmeza.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": true,
    "ingredientesActivos": [
      "Ácido Hialurónico",
      "Vitamina B5"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 191,
    "fase": 5,
    "nombre": "Crema Reparadora de Ojos",
    "marca": "CeraVe",
    "precio": 69.9,
    "ingrediente_activo": "Ceramidas, Complejo Marino",
    "vehiculo": "Crema",
    "indicacion_clinica": "Hidrata con suavidad y reduce la apariencia de ojeras",
    "filtro_baumann": [
      "TODOS"
    ],
    "imagen_url": "https://www.aruma.pe/media/cerave-ojos.jpg",
    "apto_para_todos": true,
    "descripcionCorta": "Hidrata con suavidad y reduce la apariencia de ojeras",
    "descripcionLarga": "Crema de CeraVe formulado con Ceramidas, Complejo Marino. Hidrata con suavidad y reduce la apariencia de ojeras. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ceramidas",
      "Complejo Marino"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 192,
    "fase": 5,
    "nombre": "Hydro Boost Gel-Crema de Ojos",
    "marca": "Neutrogena",
    "precio": 54.9,
    "ingrediente_activo": "Ácido Hialurónico",
    "vehiculo": "Gel-Crema",
    "indicacion_clinica": "Gel refrescante que combate la fatiga ocular",
    "filtro_baumann": [
      "DSNT",
      "OSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/neutrogena-hydroboost-ojos.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Gel refrescante que combate la fatiga ocular",
    "descripcionLarga": "Gel-Crema de Neutrogena formulado con Ácido Hialurónico. Gel refrescante que combate la fatiga ocular. Formulado con tecnología avanzada para resultados visibles desde las primeras aplicaciones.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácido Hialurónico"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 193,
    "fase": 5,
    "nombre": "Revitalift Hialurónico Ojos",
    "marca": "L'Oréal Paris",
    "precio": 49.9,
    "ingrediente_activo": "Ácido Hialurónico puro",
    "vehiculo": "Crema",
    "indicacion_clinica": "Crema hidratante rellenadora de líneas finas de ojos",
    "filtro_baumann": [
      "DSNT",
      "DSNW"
    ],
    "imagen_url": "https://www.aruma.pe/media/loreal-hyaluronic-ojos.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Crema hidratante rellenadora de líneas finas de ojos",
    "descripcionLarga": "Crema de L'Oréal Paris formulado con Ácido Hialurónico puro. Crema hidratante rellenadora de líneas finas de ojos. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": false,
    "ingredientesActivos": [
      "Ácido Hialurónico puro"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 194,
    "fase": 5,
    "nombre": "Revitalift Laser X3 Ojos",
    "marca": "L'Oréal Paris",
    "precio": 64.9,
    "ingrediente_activo": "Pro-Xylane, Cafeína",
    "vehiculo": "Crema",
    "indicacion_clinica": "Contorno de ojos antiedad con efecto tensor inmediato",
    "filtro_baumann": [
      "DRNW",
      "DRPW"
    ],
    "imagen_url": "https://www.aruma.pe/media/loreal-laser-ojos.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Contorno de ojos antiedad con efecto tensor inmediato",
    "descripcionLarga": "Crema de L'Oréal Paris formulado con Pro-Xylane, Cafeína. Contorno de ojos antiedad con efecto tensor inmediato. Reduce visiblemente líneas de expresión y mejora la firmeza.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": false,
    "ingredientesActivos": [
      "Pro-Xylane",
      "Cafeína"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 195,
    "fase": 5,
    "nombre": "Minéral 89 Ojos",
    "marca": "Vichy",
    "precio": 119.9,
    "ingrediente_activo": "Agua Volcánica, Hialurónico",
    "vehiculo": "Gel",
    "indicacion_clinica": "Hidrata, alisa y previene arrugas finas deshidratadas",
    "filtro_baumann": [
      "TODOS"
    ],
    "imagen_url": "https://www.aruma.pe/media/vichy-mineral-89-ojos.jpg",
    "apto_para_todos": true,
    "descripcionCorta": "Hidrata, alisa y previene arrugas finas deshidratadas",
    "descripcionLarga": "Gel de Vichy formulado con Agua Volcánica, Hialurónico. Hidrata, alisa y previene arrugas finas deshidratadas. Aporta hidratación duradera y fortalece la barrera cutánea.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": false,
    "ingredientesActivos": [
      "Agua Volcánica",
      "Hialurónico"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 196,
    "fase": 5,
    "nombre": "Japanese Ritual Eye Cream Gel",
    "marca": "Revox",
    "precio": 34.9,
    "ingrediente_activo": "Flor de Cerezo, Hialurónico",
    "vehiculo": "Gel-Crema",
    "indicacion_clinica": "Gel calmante suavizante de líneas de expresión",
    "filtro_baumann": [
      "DSNT",
      "OSNT"
    ],
    "imagen_url": "https://www.aruma.pe/media/revox-japanese-ojos.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Gel calmante suavizante de líneas de expresión",
    "descripcionLarga": "Gel-Crema de Revox formulado con Flor de Cerezo, Hialurónico. Gel calmante suavizante de líneas de expresión. Reduce visiblemente líneas de expresión y mejora la firmeza.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": false,
    "ingredientesActivos": [
      "Flor de Cerezo",
      "Hialurónico"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 197,
    "fase": 5,
    "nombre": "Advanced Snail Peptide Eye",
    "marca": "COSRX",
    "precio": 99.9,
    "ingrediente_activo": "Mucina de Caracol, Péptidos",
    "vehiculo": "Crema",
    "indicacion_clinica": "Crema de ojos nutritiva, iluminadora y reafirmante",
    "filtro_baumann": [
      "DSPW",
      "OSNW"
    ],
    "imagen_url": "https://www.aruma.pe/media/cosrx-snail-ojos.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Crema de ojos nutritiva, iluminadora y reafirmante",
    "descripcionLarga": "Crema de COSRX formulado con Mucina de Caracol, Péptidos. Crema de ojos nutritiva, iluminadora y reafirmante. Reduce visiblemente líneas de expresión y mejora la firmeza.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": false,
    "ingredientesActivos": [
      "Mucina de Caracol",
      "Péptidos"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 198,
    "fase": 5,
    "nombre": "Retinol Intense Advanced",
    "marca": "Some By Mi",
    "precio": 94.9,
    "ingrediente_activo": "Retinol al 0.1%, Niacinamida",
    "vehiculo": "Crema",
    "indicacion_clinica": "Crema contorno de ojos correctora de ojeras y arrugas",
    "filtro_baumann": [
      "DRNW",
      "OSPW"
    ],
    "imagen_url": "https://www.aruma.pe/media/somebymi-retinol-ojos.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Crema contorno de ojos correctora de ojeras y arrugas",
    "descripcionLarga": "Crema de Some By Mi formulado con Retinol al 0.1%, Niacinamida. Crema contorno de ojos correctora de ojeras y arrugas. Reduce visiblemente líneas de expresión y mejora la firmeza.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": false,
    "ingredientesActivos": [
      "Retinol al 0.1%",
      "Niacinamida"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 199,
    "fase": 5,
    "nombre": "Acne Pimple Master Patch",
    "marca": "COSRX",
    "precio": 19.9,
    "ingrediente_activo": "Hidrocoloide",
    "vehiculo": "Parche",
    "indicacion_clinica": "Parches protectores que secan brotes de acné con rapidez",
    "filtro_baumann": [
      "TODOS"
    ],
    "imagen_url": "https://www.aruma.pe/media/cosrx-pimple-patch.jpg",
    "apto_para_todos": true,
    "descripcionCorta": "Parches protectores que secan brotes de acné con rapidez",
    "descripcionLarga": "Parche de COSRX formulado con Hidrocoloide. Parches protectores que secan brotes de acné con rapidez. Ayuda a controlar imperfecciones y prevenir futuros brotes.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": false,
    "ingredientesActivos": [
      "Hidrocoloide"
    ],
    "pasoRutina": "Protección AM"
  },
  {
    "id": 200,
    "fase": 5,
    "nombre": "Revive Eye Serum: Ginseng",
    "marca": "Beauty of Joseon",
    "precio": 99,
    "ingrediente_activo": "Extracto de Ginseng, Retinal",
    "vehiculo": "Esencia",
    "indicacion_clinica": "Serum nocturno contorno de ojos renovador y antiedad",
    "filtro_baumann": [
      "DSPW",
      "DRNW"
    ],
    "imagen_url": "https://www.aruma.pe/media/boj-revive-eye-serum.jpg",
    "apto_para_todos": false,
    "descripcionCorta": "Serum nocturno contorno de ojos renovador y antiedad",
    "descripcionLarga": "Esencia de Beauty of Joseon formulado con Extracto de Ginseng, Retinal. Serum nocturno contorno de ojos renovador y antiedad. Renueva la superficie cutánea dejando la piel más suave y uniforme.",
    "imagenFallback": "#FFF1F2",
    "precioVariable": false,
    "ingredientesActivos": [
      "Extracto de Ginseng",
      "Retinal"
    ],
    "pasoRutina": "Protección AM"
  }
];

const INCOMPATIBILIDADES = [
  { activo1: 'Retinol', activo2: 'AHA/BHA', nivel: 'precaucion', mensaje: '⚠️ PRECAUCIÓN: Retinol + Ácidos exfoliantes pueden causar irritación y descamación severa. Úsalos en noches alternas.' },
  { activo1: 'Vitamina C', activo2: 'Niacinamida alta concentración', nivel: 'precaucion', mensaje: '⚠️ PRECAUCIÓN: Vitamina C + Niacinamida en alta concentración pueden reducir la efectividad mutua y causar enrojecimiento.' },
  { activo1: 'AHA/BHA', activo2: 'AHA/BHA', nivel: 'evitar', mensaje: '🔴 EVITAR: Dos productos con ácidos exfoliantes activos en la misma rutina diaria causa superposición de activos.' }
];
