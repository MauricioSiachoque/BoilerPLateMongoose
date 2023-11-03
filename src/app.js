//configuraciones de express

//---------------------- EXPRESS ---------------------- //


const express = require("express"); // importo el modulo de express
const cors = require("cors");        // importo el modulo de cors
const app = express();              // se ejecuta y guardamos en una variable  (guardamos una instancia de express)
const port = 3000;                  // constante del puerto que levantare en el servidor 


//  ---------------- MIDDLEWARES (configuraciones express)------------------------------------//

app.use(express.json());      // middleware para acepta jsons(body) en mios peticiciones http // 
app.use(cors());    //-------------PARA ACEPTAR PETICIONES del front o postman ---------------------//



// -------------------- vinculo mis modelos para usar rutas--------------------// 

const Perrito = require ("./Models/Perros");

// RUTAS // 

app.get("/",  (req, res) => {
  const allDogs = Perrito.find({});
  console.log(allDogs);
  res.send("hola mundo, ruta inicial de ejemplo, bienvenido");
});

app.post("/perrito", (req, res) => {
  try {
     const name = req.query.name;
  const nuevoPerrito = Perrito.create({ name: name });
  res.json("Perro creado correctamente");
  } catch (error) {
    console.log(error);
  }
 
});

// - - - - - ---------------------------------------------------------------------//

module.exports = {app, port};
