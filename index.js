require('dotenv').config();
const express = require('express');
const productsRoutes = require('./src/routes/products.routes');
const userRoutes = require('./src/routes/user.routes');
const categoryRoutes = require('./src/routes/category.routes')
const authRoutes = require('./src/routes/auth.routes');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSetup = require('./src/docs/swagger');




const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
    allowedHeaders: ['Content-Type', 'Authorization'],
};



const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use("/documentation",swaggerUi.serve, swaggerUi.setup(swaggerSetup))

app.use('/product', productsRoutes);
app.use('/user', userRoutes);
app.use('/category', categoryRoutes);
app.use('/auth', authRoutes);

app.listen(process.env.PORT, () => {
    console.log("corriendo en el puerto 3000");
})