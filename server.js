require('./config/config')
const route = require('./routes/userRoute')
const express = require('express');
PORT = process.env.PORT || 1333

const app = express();
app.use(express.json());
app.use('/api', route)
app.get('/', (req,res)=>{
    res.send("welcome message")
})

app.listen(PORT, ()=>{
    console.log('This app is listening on port ' + PORT)
})
