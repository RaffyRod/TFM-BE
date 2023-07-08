const express = require("express")
const app = express()
const port = process.env.PORT || 3030
const ingredientes = require("./routes/ingredientes")
const precios = require("./routes/precios")
const recetas = require("./routes/recetas")
const valoresNutricionales = require("./routes/valoresNutricionales")
const usuarios = require('./routes/usuarios')



app.use('/ingredientes',ingredientes)
app.use('/precios',precios)
app.use('/recetas',recetas)
app.use('/valores',valoresNutricionales)
app.use('/usuarios',usuarios)

app.listen(port, ()=>{
    console.log('escuchando el puerto ', port)
})