import { connection } from "../models/database/db.js";




export default function getProduct(req,res) {
    connection.connect(function(err) {
        if(err) {
          console.error(err)
        }
        connection.query(`SELECT BIN_TO_UUID(id) AS id, Name, Price, Description, category_id FROM products HAVING id = "${req.params.id}"`, function (err, result) {
          if(err) {
            console.error(err);
          }
          console.log(result);
          res.send(JSON.stringify(result));
        });
      });
}
