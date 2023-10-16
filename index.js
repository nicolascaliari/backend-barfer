require('dotenv').config();
const express = require('express');
const productsRoutes = require('./src/routes/products.routes');
const userRoutes = require('./src/routes/user.routes');
const cors = require('cors');




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

app.listen(3000, () => {
    console.log("corriendo en el puerto 3000");
})