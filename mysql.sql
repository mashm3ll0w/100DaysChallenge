-- Databases CRUD operations - (Create, Read, Update, Delete)


-- 01 Create

-- create a new table
CREATE TABLE customers (
  id INT NOT NULL,
  first_name VARCHAR,
  last_name VARCHAR,
  email_address VARCHAR,
  PRIMARY KEY(id)
);

-- insert contents into table
INSERT INTO customers
VALUES(1, "Charles", "Swaleh", "mash@mellow.com"), (2, "Sara", "Munini", "tello@aurora.com");


-- 02 Read

-- display the entire table
SELECT * from customers

--  03 Update

-- Update by adding a column in a table
ALTER TABLE customers
ADD phone_number VARCHAR

-- Update the records in a table
UPDATE customers
set phone_number = "+254 703 192 336"
WHERE first_name="Charles"


-- 04 Delete

-- delete a record from a table
DELETE FROM customers
WHERE first_name="Charles"

-- delete entire table
DROP TABLE customers