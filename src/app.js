const express= require('express');
const app=express();
const path= require('path');
const morgan= require ('morgan');
const mongoose= require('mongoose');

//connecting to db
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db=>console.log('Db connected'))
    .catch (err=>console.log(err));
    

// importing routes
const indexRoutes = require('./routes/index');
const { route } = require('./routes/index');

//settings
app.set('port', process.env.PORT || 3000); //establecemos que tome el puerto del sistema opertivo y si no entonces el puerto 3000
app.set('views', path.join(__dirname, 'views'));//le dice al servidor donde esta la carpeta views
app.set('view engine','ejs'); //motor de plantillas mi motor de plantillas es ejs que trae el codigo js envebido en el codigo html
//middlewares
app.use(morgan('dev'));

//route
app.use('/', indexRoutes);
app.use(express.urlencoded({extended:false}));//cuando un usuario inserta datos y los envia al servidor atraves de este podemos entenderlo

//starting the server
app.listen(app.get('port'), () => {//mandamos a llamar al puerto
    console.log (` Server on port ${app.get('port')}`);
});