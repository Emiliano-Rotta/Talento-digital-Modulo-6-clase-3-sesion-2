// ¿Para qué se usa Express?

// Construcción de APIs: Express permite construir APIs RESTful de forma sencilla. Una API (Interfaz de Programación de Aplicaciones) es un conjunto de definiciones y protocolos que permite a las aplicaciones comunicarse entre sí.

// Desarrollo de aplicaciones web: Es ideal para desarrollar aplicaciones web con un backend que gestione rutas, bases de datos, sesiones de usuario y autenticación.

// Gestión de rutas y peticiones HTTP: Permite definir diferentes rutas (URLs) en la aplicación y gestionar solicitudes HTTP (GET, POST, PUT, DELETE, etc.).

const express = require('express');
const hola = require('./routes/hola');
const chau = require('./routes/chau');
const app = express()

app.get('/', hola)
// manejando errores

app.get('/chau', chau)

app.get('/parametro/:id',(req, res)=>{ //ruta por parametro
    res.send('parametro express')
})

//ruta post
app.post('/',(req, res)=>{
    const { username, email} = req.body
    if(username && email){
        res.send('Registro exitoso')
    }else{
        res.send('Registro fallido')
    }
})


app.listen(3000,()=>{
    console.log('Puerto 3000')
})
// -------------------------------------------------------------------------------
// Ejercicio 1: Crear un Servidor Básico en un Puerto Diferente

// Configura un servidor básico con Express que escuche en el puerto 4000. Cuando un usuario visite la raíz (/) de la aplicación, el servidor debe responder con el mensaje "¡Has llegado al servidor de pruebas en Express!".
// const express = require('express')
// const app = express()
// const PORT = 4000

// app.get('/', (req, res) => {
//     res.send( "¡Has llegado al servidor de pruebas en Express!")
// })
// app.listen(PORT,()=>{
//     console.log(`Servidor escuchando en el puerto ${PORT}`)
// })

// -------------------------------------------------------------------------------
// Ejercicio 2: Agregar Nuevas Rutas con Respuestas

// Agrega dos rutas nuevas a la aplicación:
// Una ruta /services que responda con el mensaje "Servicios disponibles en la aplicación".
// Una ruta /help que responda con el mensaje "Para ayuda, contacta a soporte@miapp.com".
// const express = require('express')
// const app = express()
// const PORT = 3000

// app.get('/services', (req, res) => {
//     res.send( "Servicios disponibles en la aplicación")
// })
// app.get('/help', (req, res) => {
//     res.send( "Para ayuda, contacta a soporte@miapp.com")
// })
// app.listen(PORT,()=>{
//     console.log(`Servidor escuchando en el puerto ${PORT}`)
// })


// -------------------------------------------------------------------------------
// Ejercicio 3: Rutas con Parámetros de Ruta

// Crea una ruta /profile/:user que reciba un parámetro user. La ruta debe responder con el mensaje "Bienvenido a tu perfil"

// const app = express()
// const PORT = 3000

// app.get('/profile/:user', (req, res) => {
//     const userName = req.params.user
//     res.send( `Bienvenido a tu perfil ${userName}`)
// })

// app.listen(PORT,()=>{
//     console.log(`Servidor escuchando en el puerto ${PORT}`)
// })



// -------------------------------------------------------------------------------
// Ejercicio 4: Manejo de Solicitudes POST

// Crea una nueva ruta /login que acepte solicitudes POST. Usa express.json() como middleware para analizar el cuerpo de la solicitud, que debe incluir un username y password. Envía una respuesta que indique si el inicio de sesión fue exitoso o fallido (esto puede ser ficticio).

// const app = express()
// const PORT = 3000
// app.use(express.json()); //esto lo vemos luego

// app.post('/login', (req, res) => {
//     const { username, password } = req.body;

//     if(username === 'usuario' && password === '1234'){
//         res.send('Inicio de sesión exitoso');
//     }else {
//         res.send('Inicio de sesión fallido'); 
//     }
// })

// app.listen(PORT,()=>{
//     console.log(`Servidor escuchando en el puerto ${PORT}`)
// })