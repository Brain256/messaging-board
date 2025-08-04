const { Router } = require("express"); 

const newRouter = Router(); 

newRouter.get("/", (req, res) => {
    res.send("<h1>New</h1>"); 
})

module.exports = newRouter; 