// ¿Para qué se usa Express?

// Construcción de APIs: Express permite construir APIs RESTful de forma sencilla. Una API (Interfaz de Programación de Aplicaciones) es un conjunto de definiciones y protocolos que permite a las aplicaciones comunicarse entre sí.

// Desarrollo de aplicaciones web: Es ideal para desarrollar aplicaciones web con un backend que gestione rutas, bases de datos, sesiones de usuario y autenticación.

// Gestión de rutas y peticiones HTTP: Permite definir diferentes rutas (URLs) en la aplicación y gestionar solicitudes HTTP (GET, POST, PUT, DELETE, etc.).

// -------------------------------------------------------------------------------
// Ejercicio 1: Crear un Servidor Básico en un Puerto Diferente

// Configura un servidor básico con Express que escuche en el puerto 4000. Cuando un usuario visite la raíz (/) de la aplicación, el servidor debe responder con el mensaje "¡Has llegado al servidor de pruebas en Express!".
// -------------------------------------------------------------------------------
// Ejercicio 2: Agregar Nuevas Rutas con Respuestas

// Agrega dos rutas nuevas a la aplicación:
// Una ruta /services que responda con el mensaje "Servicios disponibles en la aplicación".
// Una ruta /help que responda con el mensaje "Para ayuda, contacta a soporte@miapp.com".
// -------------------------------------------------------------------------------
// Ejercicio 3: Rutas con Parámetros de Ruta

// Crea una ruta /profile/:user que reciba un parámetro user. La ruta debe responder con el mensaje "Bienvenido a tu perfil"
// -------------------------------------------------------------------------------
// Ejercicio 4: Manejo de Solicitudes POST

// Crea una nueva ruta /login que acepte solicitudes POST. Usa express.json() como middleware para analizar el cuerpo de la solicitud, que debe incluir un username y password. Envía una respuesta que indique si el inicio de sesión fue exitoso o fallido (esto puede ser ficticio).
