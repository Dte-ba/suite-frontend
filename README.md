# SUITE - Frontend

[![CircleCI](https://circleci.com/gh/Dte-ba/suite-frontend.svg?style=svg)](https://circleci.com/gh/Dte-ba/suite-frontend)


## ¿Cómo iniciar el proyecto?

Cloná el repositorio y después ejecutá los siguientes
comandos:

```
npm install
```

Luego, para lanzar la aplicación con datos de prueba ejecutá el comando:


```
ember serve
```

(si no tenés instalado ember en tu sistema, ejecutá `npm install -g ember-cli`)

Y si queres usar la aplicación junto con el backend, iniciá la aplicación
justo después de lanzar el backend de esta forma:


```
ember serve --proxy http://127.0.0.1:8000
```


## Deploy

Para realizar el deploy de la aplicación estamos usando dokku sobre
el dominio http://dtelab.com.ar

Los test y el deploy se ejecutan sobre circle.ci, pero el deploy
se ejecuta solamente cuando se encuentra un tag nuevo.

Así que para realizar un deploy te recomendamos usar el comando
"make version", que se encarga de incrementar la versión del proyecto
y subir los tags que van a iniciar el deploy.
