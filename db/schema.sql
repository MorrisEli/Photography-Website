--DATABASE

--TABLE

-- department, job, employee
DROP DATABASE IF EXISTS pixelperfect_db;
CREATE DATABASE pixelperfect_db;
USE pixelperfect_db;

DROP TABLE IF EXISTS photos;

CREATE TABLE photos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    photo_name VARCHAR(30) NOT NULL,
    photo_price VARCHAR(30) NOT NULL
);
