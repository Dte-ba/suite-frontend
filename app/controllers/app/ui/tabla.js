import Ember from "ember";

export default Ember.Controller.extend({
  columns: [
    {
      propertyName: "id",
      title: "Identificador"
    },

    {
      propertyName: "nombre",
      title: "Nombre Completo"
    }
  ],

  data: [
    { id: 1, nombre: "Don Ceferino Hazaña" },
    { id: 2, nombre: "Super Mario" },
    { id: 3, nombre: "Pepe Grillo" },
    {
      id: "4 586806e902f55ec6c35257b7",
      nombre: "Claudette"
    },
    {
      id: "5 586806e9c1abb2e9f269a916",
      nombre: "Chris"
    },
    {
      id: "6 586806e9ab090812892c23e7",
      nombre: "Carrillo"
    },
    {
      id: "7 586806e9aad4fa9d0025cff3",
      nombre: "Rosa"
    },
    {
      id: "8 586806e90280a983387ed93d",
      nombre: "Santiago"
    },
    {
      id: "9 586806e9dcf6113585044ba5",
      nombre: "Kerry"
    },
    {
      id: "10 586806e9dcf6113585044ba5",
      nombre: "Otra vez Kerry"
    },

    {
      id: "11 586806e9dcf6113585044ba5",
      nombre: "11 Otra vez Kerry"
    },

    {
      id: "12 586806e9dcf6113585044ba5",
      nombre: "1212 Otra vez Kerry"
    },

    {
      id: "13 586806e9dcf6113585044ba5",
      nombre: "1-3 Otra vez Kerry"
    },

    { id: 1, nombre: "Don Ceferino Hazaña" },
    { id: 2, nombre: "Super Mario" },
    { id: 3, nombre: "Pepe Grillo" },
    {
      id: "4 586806e902f55ec6c35257b7",
      nombre: "Claudette"
    },
    {
      id: "5 586806e9c1abb2e9f269a916",
      nombre: "Chris"
    },
    {
      id: "6 586806e9ab090812892c23e7",
      nombre: "Carrillo"
    },
    {
      id: "7 586806e9aad4fa9d0025cff3",
      nombre: "Rosa"
    },
    {
      id: "8 586806e90280a983387ed93d",
      nombre: "Santiago"
    },
    {
      id: "9 586806e9dcf6113585044ba5",
      nombre: "Kerry"
    },
    {
      id: "10 586806e9dcf6113585044ba5",
      nombre: "Otra vez Kerry"
    },

    {
      id: "11 586806e9dcf6113585044ba5",
      nombre: "11 Otra vez Kerry"
    },

    {
      id: "12 586806e9dcf6113585044ba5",
      nombre: "1212 Otra vez Kerry"
    },

    {
      id: "13 586806e9dcf6113585044ba5",
      nombre: "1-3 Otra vez Kerry"
    }
  ],

  filas: [{ nombre: "Pepe", edad: "20" }, { nombre: "Toto", edad: "30" }],
  columnas: [{ titulo: "Nombre", id: "nombre" }, { titulo: "Edad", id: "edad" }]
});
