const router = require("express").Router();

router.get("/",(req, res)=>{
    res.json({
        mensaje: "recetas"
    })
})

module.exports = router;