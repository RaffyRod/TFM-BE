const router = require("express").Router();

// obtener todos los precios
router.get("/",(req, res)=>{
    res.json({
        mensaje: "ingredientes"
    })
})

module.exports = router;