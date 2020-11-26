DROP DATABASE IF EXISTS manager_db;

CREATE DATABASE manager_db;

USE manager_db;

CREATE TABLE bands (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    band_name VARCHAR(20) NOT NULL UNIQUE, 
    number_of_members INT (4)
);


CREATE TABLE role (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    instrument_name VARCHAR(20),
    salary INT (8),
    band VARCHAR (20) NOT NULL,
    -- INDEX band (band_name),
    -- CONSTRAINT band_fk FOREIGN KEY (band) REFERENCES bands(band_name)
);


CREATE TABLE member (
    id INT AUTO_INCREMENT NOT NULL ,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    instrument VARCHAR(20) NOT NULL,
    band VARCHAR(20) NOT NULL,
    -- FOREIGN KEY (instrument) REFERENCES role(instrument_name)
    -- FOREIGN KEY (band) REFERENCES role (band)
    )

