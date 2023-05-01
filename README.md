# UpTask API

## Descripción
API para la gestión de tareas de un proyecto. Utiliza Node.js y Express.

## Endpoints

### Proyectos
- **GET /proyectos**: devuelve todos los proyectos.
- **POST /proyectos**: crea un nuevo proyecto.
- **PUT /proyectos/:id**: actualiza un proyecto existente.
- **DELETE /proyectos/:id**: elimina un proyecto existente.

### Tareas
- **GET /tareas**: devuelve todas las tareas.
- **POST /tareas**: crea una nueva tarea.
- **PUT /tareas/:id**: actualiza una tarea existente.
- **DELETE /tareas/:id**: elimina una tarea existente.

### Usuarios
- **POST /usuarios**: crea un nuevo usuario.
- **POST /auth**: autentica un usuario y devuelve un token de acceso.

## Instalación
1. Clonar el repositorio: `git clone https://github.com/Josephxrex/UpTaskAPI.git`
2. Instalar las dependencias: `npm install`
3. Crear un archivo `.env` con las variables de entorno necesarias (ver `.env.example`)
4. Iniciar el servidor: `npm start`

## Tecnologías utilizadas
- Node.js
- Express
- MongoDB
- JWT
- bcrypt

