const router = require("express").Router();

router.get("/",(req, res)=>{
    res.json({
        mensaje: "precios"
    })
})

module.exports = router;