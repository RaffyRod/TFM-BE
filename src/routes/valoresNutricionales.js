const router = require("express").Router();

router.get("/",(req, res)=>{
    res.json({
        mensaje: "valores nutricionales"
    })
})

module.exports = router;