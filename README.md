# SUITE - Frontend

[![CircleCI](https://circleci.com/gh/Dte-ba/suite-frontend.svg?style=svg)](https://circleci.com/gh/Dte-ba/suite-frontend)


## ¿Cómo iniciar el proyecto?

Cloná el repositorio y después ejecutá los siguientes
comandos:


```
npm install
bower install
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

No hace falta realizar el deploy a mano, porque se hace directamente
desde circle.ci una vez que corren bien los test. Pero si querés
realizarlo de forma local hay que ejecutar estos pasos:

```
git remote add dokku dokku@dtelab.com.ar:testing-suite
```

y luego ejecutar

```
git push dokku master
```

