const express = require('express'); 
const app = express(); 
const indexRouter = require('./routes/indexRouter.js');
const newRouter = require('./routes/newRouter.js');

app.use("/new", newRouter); 
app.use("/", indexRouter); 

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`); 
})