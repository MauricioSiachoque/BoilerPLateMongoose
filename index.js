const {app,port} = require("./src/app"); 
const {connection} = require("./src/db");        

// SINCRONIZACION base de datos y servidor express //

connection().then(
    app.listen(port, () => {
      console.log(`servidor levantado en el puerto: ${port}`);
    })
  );
  

 