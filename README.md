# SUITE 2 - Frontend

[![Build Status](https://travis-ci.org/Dte-ba/suite-frontend.svg?branch=master)](https://travis-ci.org/Dte-ba/suite-frontend)

- Url de prueba: http://suite.surge.sh


## ¿Cómo iniciar el proyecto?

Cloná el repositorio y después ejecutá los siguientes
comandos:


```
npm install
bower install
```

Luego, para lanzar la aplicación ejecutá el comando:


```
ember serve
```

(si no tenés instalado ember en tu sistema, ejecutá `npm install -g ember-cli`)


## Deploy

Para realizar el deploy de la aplicación estamos usando dokku sobre
el dominio http://dtelab.com.ar

Para realizar el deploy deberías tener configurado un remote de git
similar al siguiente:

```
git remote add dokku dokku@dtelab.com.ar:testing-suite
```

y luego ejecutar

```
git push dokku master
```
