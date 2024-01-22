![Estoes](src/assets/images/logo.png "Esto es Agencia Digital")

# Project Manager Frontend Challenge

**Se debe realizar el frontend de una plataforma que que tiene como objetivo realizar la gestión de proyectos.**

### Tabla de Contenidos

- [Diseño](#diseño)
- [Definición funcional](#definición-funcional)
  - [Notas de definiciones funcionales](#notas-de-definiciones-funcionales)
- [Definiciones extras que no están en el diseño](#definiciones-extras-que-no-están-en-el-diseño)
- [Definiciones técnicas](#definiciones-técnicas)
- [Angular](#angular)
  - [Instalación](#instalación)
  - [Servidor de desarrollo local](#servidor-de-desarrollo-local)

## Diseño

* Podés encontrar el diseño [acá](https://www.figma.com/file/YLDHikbDgfsZbVdEbO0H6U/Full-Stack-Test-1?node-id=1%3A1701).

* Referencias del Ant Design System (Figma) [acá](https://www.figma.com/file/9SJOmOAfs5KMUKZJEEZBcc/Ant-Design-System-for-Figma-1.2-(Free-Demo)-(Community)?type=design&node-id=0-1&mode=design&t=oyUFzSxpb26c3OF2-0).

## Definición funcional

**El usuario accede a un administrador de proyectos para realizar la gestión, puede crearlos, editarlos y eliminarlos.**

* **El usuario no puede submitear la creación o edición de un proyecto si los campos no están validados:** no se proporcionaron requisitos especificos de validación, por lo que solo se validan todos los campos como obligatorios. La UI de los campos inválidos sigue las pautas del Ant Design System (Figma).
* **El usuario debe poder utilizar el gestor en Desktop y Mobile:** media queries de 425px de ancho (max).

### Notas de definiciones funcionales
* Los proyectos se listan ordenados de forma descendente según su fecha de creación.
* Los proyectos se almacenan en local storage y por default el demo inicializa con los tres proporcionados en el diseño de Figma.

## Definición extras que no están en el diseño
- [x] El listado de proyectos puede tener un paginado: con el fin de agilizar la muestra de las funcionalidades del demo, la paginación lleva 5 proyectos por página.
- [x] El eliminar puede tener un modal que sugiera si esta seguro de realizar la acción o no. 
- [x] El listado de proyectos puede tener un buscador de la lista por nombre de proyecto. 

## Definiciones técnicas
- [x] Debe estar realizado en un framework de JS, **Angular** o React.
- [x] La aplicación debe estar publicada y debe ser accesible mediante un link o cualquier webserver. [Link de Netlify](project-manager.netlify.app/)
- [x] El código de la aplicación debe estar subida a un [repositorio](https://github.com/PaylemanC/project-manager--FrontendChallenge) de público acceso.

# Angular

Este proyecto fue desarrollado con Angular 15 - [Angular CLI 15.2.6](https://github.com/angular/angular-cli).

## Instalación

Instalar las dependencias con [npm](https://nodejs.org/es/download):

```bash 
npm install
```

## Servidor de desarrollo local

Iniciar servidor con:

```bash 
ng serve
```

Y abrir el navegador en `http://localhost:4200/` (default).

Para más comandos de desarrollo de Angular, usa  `ng help` o visita la [documentación oficial](https://angular.io/cli#command-overview).
