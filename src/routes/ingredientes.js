const router = require("express").Router();

router.get("/",(req, res)=>{
    res.json({
        mensaje: "ingredientes"
    })
})

module.exports = router;