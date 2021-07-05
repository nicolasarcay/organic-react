const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDKi3IKDirPbtOdOAP3nCS8pfGSHThivWU",
    authDomain: "orgnic-coderhouse.firebaseapp.com",
    projectId: "orgnic-coderhouse"
  });
  
var db = firebase.firestore();

var menu =[  
    {
        "id": "1",
        "producto": "Frutillas",
        "descripcion": "Frutillas de Rio Negro",
        "precio": 350,
        "leyenda": "Precio por Kilo",
        "boton": "Ver Producto",
        "imagen": "http://nicolasa26.sg-host.com/wp-content/uploads/2021/06/frutillas.jpg",
        "stock": 8,
        "link": "frutillas",
        "bgProduct": "http://nicolasa26.sg-host.com/wp-content/uploads/2021/06/frutillas-bg.jpg.webp",
        "categoria": "frutas",
        "destacado": true
    },
    {
        "id": "2",
        "producto": "Platanos",
        "descripcion": "Organicos de Brasil",
        "precio": 250,
        "leyenda": "Precio por Kilo",
        "boton": "Ver Producto",
        "imagen": "http://nicolasa26.sg-host.com/wp-content/uploads/2021/06/platano-1.jpg.webp",
        "stock": 20,
        "link": "platanos",
        "bgProduct": "http://nicolasa26.sg-host.com/wp-content/uploads/2021/06/platanos-bg.jpg.webp",
        "categoria": "frutas",
        "destacado": true
    },
    {
        "id": "3",
        "producto": "Naranjas",
        "descripcion": "Naranjas de Entre Rios",
        "precio": 95,
        "leyenda": "Precio por Kilo",
        "boton": "Ver Producto",
        "imagen": "http://nicolasa26.sg-host.com/wp-content/uploads/2021/06/naranjas.jpg",
        "stock": 9,
        "link": "naranjas",
        "bgProduct": "http://nicolasa26.sg-host.com/wp-content/uploads/2021/06/naranjas-bg.jpg",
        "categoria": "frutas",
        "destacado": false
    },
    {
        "id": "4",
        "producto": "Uvas",
        "descripcion": "Uvas de Mendoza",
        "precio": 150,
        "leyenda": "Precio por Kilo",
        "boton": "Ver Producto",
        "imagen": "http://nicolasa26.sg-host.com/wp-content/uploads/2021/06/uvas.jpg",
        "stock": 15,
        "link": "uvas",
        "bgProduct": "http://nicolasa26.sg-host.com/wp-content/uploads/2021/06/uvas-bg.jpg.webp",
        "categoria": "frutas",
        "destacado": true
    },
    {
        "id": "5",
        "producto": "Papas",
        "descripcion": "Papas de San Luis",
        "precio": 90,
        "leyenda": "Precio por Kilo",
        "boton": "Ver Producto",
        "imagen": "http://nicolasa26.sg-host.com/wp-content/uploads/2021/07/papas.jpg",
        "stock": 50,
        "link": "papas",
        "bgProduct": "http://nicolasa26.sg-host.com/wp-content/uploads/2021/07/papas-bg.jpg",
        "categoria": "verduras",
        "destacado": true
    },
    {
        "id": "6",
        "producto": "Conserva Pimientos",
        "descripcion": "Producida con Pimientos Organicos",
        "precio": 250,
        "leyenda": "Precio por unidad",
        "boton": "Ver Producto",
        "imagen": "http://nicolasa26.sg-host.com/wp-content/uploads/2021/07/conserva-pimiento.jpg",
        "stock": 45,
        "link": "conserva-pimientos",
        "bgProduct": "http://nicolasa26.sg-host.com/wp-content/uploads/2021/07/conserva-pimiento-bg.jpg",
        "categoria": "conservas",
        "destacado": true
    },
    {
        "id": "7",
        "producto": "Zanahorias",
        "descripcion": "Produccion Organica de Misiones",
        "precio": 95,
        "leyenda": "Precio por Kilo",
        "boton": "Ver Producto",
        "imagen": "http://nicolasa26.sg-host.com/wp-content/uploads/2021/07/zanahorias.jpg",
        "stock": 35,
        "link": "zanahorias",
        "bgProduct": "http://nicolasa26.sg-host.com/wp-content/uploads/2021/07/zanahorias-bg.jpg",
        "categoria": "verduras",
        "destacado": false
    },
    {
        "id": "8",
        "producto": "Conserva Berenjenas",
        "descripcion": "Producida con berenjenas biodinamicas",
        "precio": 300,
        "leyenda": "Precio por unidad",
        "boton": "Ver Producto",
        "imagen": "hhttp://nicolasa26.sg-host.com/wp-content/uploads/2021/07/conserva-berenjena.jpg",
        "stock": 65,
        "link": "conserva-berenjenas",
        "bgProduct": "http://nicolasa26.sg-host.com/wp-content/uploads/2021/07/conserva-berenjena-bg.jpg",
        "categoria": "conservas",
        "destacado": false
    },
    {
        "id": "9",
        "producto": "Remolachas",
        "descripcion": "Produccion organica de Cordoba",
        "precio": 50,
        "leyenda": "Precio por atado",
        "boton": "Ver Producto",
        "imagen": "http://nicolasa26.sg-host.com/wp-content/uploads/2021/07/remolachas.jpg",
        "stock": 25,
        "link": "remolachas",
        "bgProduct": "http://nicolasa26.sg-host.com/wp-content/uploads/2021/07/remolachas-bg.jpg",
        "categoria": "verduras",
        "destacado": false
    },
    {
        "id": "10",
        "producto": "Peras",
        "descripcion": "Peras organicas origen Rio Negro",
        "precio": 200,
        "leyenda": "Precio por kilo",
        "boton": "Ver Producto",
        "imagen": "http://nicolasa26.sg-host.com/wp-content/uploads/2021/07/peras.jpg",
        "stock": 60,
        "link": "peras",
        "bgProduct": "http://nicolasa26.sg-host.com/wp-content/uploads/2021/07/peras-bg.jpg",
        "categoria": "frutas",
        "destacado": false
    },
    {
        "id": "11",
        "producto": "Paltas",
        "descripcion": "Produccion de Mendoza",
        "precio": 650,
        "leyenda": "Precio por kilo",
        "boton": "Ver Producto",
        "imagen": "http://nicolasa26.sg-host.com/wp-content/uploads/2021/07/paltas.jpg",
        "stock": 30,
        "link": "palta",
        "bgProduct": "http://nicolasa26.sg-host.com/wp-content/uploads/2021/07/paltas-bg.jpg",
        "categoria": "verduras",
        "destacado": true
    },
    {
        "id": "12",
        "producto": "Manzanas",
        "descripcion": "Produccion familiar de Rio Negro",
        "precio": 175,
        "leyenda": "Precio por kilo",
        "boton": "Ver Producto",
        "imagen": "http://nicolasa26.sg-host.com/wp-content/uploads/2021/07/manzanas.jpg",
        "stock": 50,
        "link": "manzanas",
        "bgProduct": "http://nicolasa26.sg-host.com/wp-content/uploads/2021/07/manzanas-bg.jpg",
        "categoria": "frutas",
        "destacado": false
    },
    {
        "id": "13",
        "producto": "Conserva Tomates",
        "descripcion": "Producida con Tomates Organicos",
        "precio": 320,
        "leyenda": "Precio por unidad",
        "boton": "Ver Producto",
        "imagen": "http://nicolasa26.sg-host.com/wp-content/uploads/2021/07/conserva-tomate.jpg",
        "stock": 62,
        "link": "conserva-tomates",
        "bgProduct": "http://nicolasa26.sg-host.com/wp-content/uploads/2021/07/conserva-tomate-bg.jpg",
        "categoria": "conservas",
        "destacado": false
    },
    {
        "id": "14",
        "producto": "Cebollas",
        "descripcion": "Produccion Indoor Hidroponica",
        "precio": 75,
        "leyenda": "Precio por kilo",
        "boton": "Ver Producto",
        "imagen": "http://nicolasa26.sg-host.com/wp-content/uploads/2021/07/cebollas.jpg",
        "stock": 75,
        "link": "cebollas",
        "bgProduct": "http://nicolasa26.sg-host.com/wp-content/uploads/2021/07/cebollas-bg.jpg",
        "categoria": "verduras",
        "destacado": false
    },
    {
        "id": "15",
        "producto": "Brocoli",
        "descripcion": "Produccion Familiar Agroecologica",
        "precio": 70,
        "leyenda": "Precio por unidad",
        "boton": "Ver Producto",
        "imagen": "http://nicolasa26.sg-host.com/wp-content/uploads/2021/07/brocolis.jpg",
        "stock": 30,
        "link": "brocoli",
        "bgProduct": "http://nicolasa26.sg-host.com/wp-content/uploads/2021/07/brocolis-bg.jpg",
        "categoria": "verduras",
        "destacado": false
    }
 ]

menu.forEach(function(obj) {
    db.collection("products").add({
        id: obj.id,
        producto: obj.producto,
        descripcion: obj.descripcion,
        precio: obj.precio,
        leyenda: obj.leyenda,
        boton: obj.boton,
        imagen: obj.imagen,
        stock: obj.stock,
        link: obj.link,
        bgProduct: obj.bgProduct,
        categoria: obj.categoria||"",
        destacado: obj.destacado
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});