const mongoose = require('mongoose');   /* importo el modulo de mongoose */

async function connection() {
  await mongoose
 .connect(
    "mongodb+srv://tablonimus:<1234>@loginprotalento.0knpmw1.mongodb.net/?retryWrites=true&w=majority"
 )
 .catch((err) => console.log(err));
}


module.exports = {connection};