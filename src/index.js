const express = require('express');
const productsRoutes = require('./routes/products.routes');
const userRoutes = require('./routes/user.routes');
const cors = require('cors');
require('dotenv').config();



const corsOptions = {
    origin: 'http://localhost:3001', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
    credentials: true, 
    optionsSuccessStatus: 204,
};



const app = express();
app.use(cors(corsOptions));
app.use(express.json());


app.use('/producto',productsRoutes);
app.use('/user', userRoutes)

app.listen(process.env.PORT, () => {
    console.log("corriendo en el puerto 3000");
})