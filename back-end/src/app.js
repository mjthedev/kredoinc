import  express  from 'express';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const app = express();
const PORT = process.env.PORT | 9000;


app.listen(PORT, () => {
    console.log(`app is running on port: ${PORT}`);
});
