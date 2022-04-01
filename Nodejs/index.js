const mongoose = require('mongoose');
const app = require('./app');
const ControladorUsuario = require('./src/controllers/usuario.controller')

mongoose.Promise = global.Promise;                                                        
mongoose.connect('mongodb://localhost:27017/TareaGrupo', { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("Se encuentra conectado a la base de datos.");

    ControladorUsuario.usuarioPorDefecto();
    
    app.listen(3000, function () {
        console.log("Esta corriendo correctamente en el puerto 3000!")
    })

}).catch(error => console.log(error));