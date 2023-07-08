const router = require("express").Router();

router.get("/",(req, res)=>{
    res.json({
        mensaje: "usuarios"
    })
})

module.exports = router;