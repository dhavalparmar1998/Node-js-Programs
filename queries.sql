-- mysql sql - RDBMS - queries
-- excel - worksheets - records in column format

-- DDL

CREATE DATABASE node_dhaval;

CREATE TABLE users(
    name varchar(255),
    age int
);

ALTER TABLE users ADD COLUMN place varchar(100);
ALTER TABLE users DROP place;

ALTER TABLE users ADD COLUMN place varchar(100);
ALTER TABLE users MODIFY place varchar(30);
ALTER TABLE users CHANGE place userplace varchar(30);

ALTER TABLE users ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY;

DESC users;

SHOW DATABASES;
SHOW TABLES;

DROP TABLE users;
DROP DATABASE node_dhaval;

----------------------------------

----DML
INSERT INTO users VALUES ("nishad",20,"borivali", "");
INSERT INTO users VALUES ("dhaval",21,"mulund", "");
INSERT INTO users (age,name,userplace) VALUES (22,"premsai","dadar");

DELETE FROM users;
TRUNCATE TABLE users;

INSERT INTO users (age,name,userplace) VALUES (23,"dikshant","malad");
INSERT INTO users (age,name,userplace) VALUES (24,"neeraj","bhandup");
INSERT INTO users (age,name,userplace) VALUES (25,"mehul","thane");

SELECT * FROM users;
SELECT name,userplace FROM users;





