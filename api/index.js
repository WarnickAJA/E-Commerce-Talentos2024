const dotenv = require('dotenv');
// Cargar variables de entorno
//Importante cargar las variables de entorno antes de la app
dotenv.config();

const app = require('./src/server'); // Importamos la configuración de la app

// Iniciar el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
