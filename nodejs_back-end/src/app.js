import  express  from 'express';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import cors from 'cors';
dotenv.config()
import { router as productRoutes } from './routes/ProductRoutes.js';
const app = express();
const PORT = process.env.PORT | 9000;

app.use(cors())

// Route for products
app.use('/api', productRoutes);




// Establishing a connection for our api
app.listen(PORT, () => {
    console.log(`app is running on port: ${PORT}`);
})