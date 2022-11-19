import  express  from 'express';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import productRoute from './models/Products/products';
dotenv.config()
const app = express();
const PORT = process.env.PORT | 9000;



// Route for products

app.use('/', productRoute);

app.listen(PORT, () => {
    console.log(`app is running on port: ${PORT}`);
});
