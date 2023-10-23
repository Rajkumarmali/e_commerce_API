const express = require('express')
const app = express();
const dotenv = require('dotenv')
const cors = require('child_process');


const AuthRouter = require('./routes/Auth');
const SellerRouter = require('./routes/Sellers')
const CatalogRouter = require('./routes/Catalogs')
const GetCatalogRouter = require('./routes/GetCatalog')
const orderRoute = require('./routes/Order')

const connectDB = require('./config/db')
app.use(express.json());
dotenv.config();
connectDB();

const PORT = process.env.PORT || 3001

app.use('/api/auth', AuthRouter);
app.use('/api/buyer', SellerRouter);
app.use('/api/seller', CatalogRouter);
app.use('/api/buyer', GetCatalogRouter);
app.use('/api/buyer', orderRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})