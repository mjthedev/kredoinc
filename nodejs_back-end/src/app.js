import  express  from 'express';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import { router as productRoutes } from './routes/ProductRoutes.js';
const app = express();
const PORT = process.env.PORT | 9000;



// Route for products

app.use('/', productRoutes);



app.listen(PORT, () => {
    console.log(`app is running on port: ${PORT}`);
});
