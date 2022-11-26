-- CREATE DATABASE kredoinc;

USE kredoinc;



-- CREATE TABLE categories (
-- id INT AUTO_INCREMENT PRIMARY KEY,
-- name VARCHAR(255) NOT NULL
-- )

-- DROP TABLE categories;

-- INSERT INTO categories (name) VALUES ('shirts');
-- INSERT INTO categories (name) VALUES ('pants');
-- INSERT INTO categories (name) VALUES ('shoes');

-- SELECT * FROM categories;
-- SELECT BIN_TO_UUID(id) AS ID, name FROM categories;  



 -- CREATE TABLE products (
--  id BINARY(16) NOT NULL,
--  Name VARCHAR(255) NOT NULL,
--  Price DECIMAL NOT NULL,
--  Description VARCHAR(225) NOT NULL,
--  category_id INT NOT NULL, 
--  PRIMARY KEY (id),
--  FOREIGN KEY (category_id) REFERENCES categories(id)
--  )
 
-- INSERT INTO products (id, Name, Price, Description, category_id) VALUES (UUID_TO_BIN(UUID()), 'T-Shirt', 16.99, 'Supremely soft pima cotton adds to the everyday comfort of a closet-staple T-shirt with side vents.', 1)
-- INSERT INTO products (id, Name, Price, Description, category_id) VALUES (UUID_TO_BIN(UUID()), 'Long-Sleeve Shirt', 24.99, 'No matter what the day brings your way, keep your smart-casual look on point in a classic long-sleeve T-shirt crafted with plenty of stretch.', 1)
-- INSERT INTO products (id, Name, Price, Description, category_id) VALUES (UUID_TO_BIN(UUID()), 'V-Neck Shirt', 19.99, "Supersoft cotton defines a V-neck T-shirt that's easy to layer or wear on its own.", 1)
-- INSERT INTO products (id, Name, Price, Description, category_id) VALUES (UUID_TO_BIN(UUID()), 'Button-Up Shirt', 39.99, "There's nothing like the classics as this comfortable button-up attests with its soft cotton fabric and versatile plaid pattern.", 1)
-- INSERT INTO products (id, Name, Price, Description, category_id) VALUES (UUID_TO_BIN(UUID()), 'Crewneck Sweatshirt', 44.99, "This crewneck sweatshirt cut from lightweight fleece is one you'll want in every color.", 1)

-- INSERT INTO products (id, Name, Price, Description, category_id) VALUES (UUID_TO_BIN(UUID()), 'Slim Straight Fit Pants', 59.40, 'Go casual or more polished with straight-leg pants crafted from sueded cotton sateen that feels supersoft and comfortably stretchy.', 2)
-- INSERT INTO products (id, Name, Price, Description, category_id) VALUES (UUID_TO_BIN(UUID()), 'Slim Straight Commuter Pants', 64.50, 'Get the polish of trousers and the casual ease of five-pocket style with these slim-cut straight-leg pants made from light, breathable Italian stretch-sateen.', 2)
-- INSERT INTO products (id, Name, Price, Description, category_id) VALUES (UUID_TO_BIN(UUID()), 'Cool Comfort Performance Twill Pantss', 99.00 , 'Neutral coloring gives you a fresh alternative to your everyday denim in five-pocket pants cut slim from soft, stretchy cotton-blend twill.', 2)
-- INSERT INTO products (id, Name, Price, Description, category_id) VALUES (UUID_TO_BIN(UUID()), 'Slim Fit Sateen Pants', 99.00  , 'Made from stretchy Italian sateen with a microsuede finish, these slim-cut pants are your go-to from work to weekend and everywhere in between.', 2)
-- INSERT INTO products (id, Name, Price, Description, category_id) VALUES (UUID_TO_BIN(UUID()), 'Slim Straight Leg Twill Pants', 99.00  , 'Get the polish of trousers and the casual ease of five-pocket style with these slim-tailored straight-leg pants made from stretchy Italian Sorrento twill.', 2)

-- INSERT INTO products (id, Name, Price, Description, category_id) VALUES (UUID_TO_BIN(UUID()), 'Dane Cap Toe Oxford', 54.99  , 'Handsome, polished and easy to wear, this wardrobe-staple leather oxford sports minimal detailing to give it maximum versatility across your formal wardrobe.', 3)
-- INSERT INTO products (id, Name, Price, Description, category_id) VALUES (UUID_TO_BIN(UUID()), 'Park Avenue Oxford', 394.99, 'Subtle yet striking, this six-eyelet cap-toe oxford features a full leather lining, a single oak-eather sole and a fit that accommodates higher arches.', 3)
-- INSERT INTO products (id, Name, Price, Description, category_id) VALUES (UUID_TO_BIN(UUID()), 'Strand Cap Toe Oxford', 394.99, 'Exquisite broguing highlights the capped toe of this six-eyelet oxford crafted from calfskin leather with a handsome burnish.', 3)
-- INSERT INTO products (id, Name, Price, Description, category_id) VALUES (UUID_TO_BIN(UUID()), 'Strandmok Cap Toe Oxford', 394.99, 'Exquisite broguing highlights the capped toe of this six-eyelet balmoral oxford crafted from buttery-soft suede and finished with a split reverse welt.', 3)
-- INSERT INTO products (id, Name, Price, Description, category_id) VALUES (UUID_TO_BIN(UUID()), 'Siena Brogue Oxford', 394.99, "Minimalist broguing elevates an Italian-made oxford crafted from smooth and shiny leather that'll have you looking sharp.", 3)

-- SELECT * FROM products;
-- SELECT BIN_TO_UUID(id) AS ID, Name, Price, Description, category_id FROM products;  
-- SELECT * FROM products

SELECT BIN_TO_UUID(id) AS ID, Name, Price, Description, category_id FROM products
WHERE category_id = 1;


-- SELECT BIN_TO_UUID(products.id) AS ID, products.Name, products.Price, products.Description, products.category_id FROM products
-- JOIN categories ON products.category_id = categories.id




-- DROP TABLE products; 