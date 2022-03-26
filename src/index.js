const express=require('express');
const app=express();
const xmlparser=require('express-xml-bodyparser');
//configuraciones

app.set('port',process.env.PORT||3000);

//middlewares donde se procesan los archivos
const xml2jsDefaults={
    explicitArray:false,
    normalize:false,
    normalizeTags:false,
    trim:true
}
app.use(express.json());
app.use(express.urlencoded());
app.use(xmlparser());

//Rutas
app.use(require('./routes/usuarios'));


app.listen(app.get('port'),()=>{

    console.log('servidor en el puerto',app.get('port'));
})