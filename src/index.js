// Read environment variables
require('dotenv').config();//para leer lo que tiene adentro un archivo .env y asignarlo a las variables de entorno
const app = require('./server');
require('./database');

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
    
  })