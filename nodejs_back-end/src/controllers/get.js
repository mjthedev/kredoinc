import { connection } from '../models/database/db.js';






// GET ALL
 export default function getAll(res) {
    connection.connect(function(err) {
        if(err) {
          console.error(err)
        }
        // the connection class will make an api call and return its data=
        connection.query('SELECT BIN_TO_UUID(id) AS id, Name, Price, Description, category_id FROM products', function (err, result) {
          if(err) {
            console.error(err);
          }
          console.log(result);
          res.send(JSON.stringify(result));
        });
      })
}





