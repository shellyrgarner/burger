create database burgers_db;
use burgers_db;

create table burgers (
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(45),
    devoured BOOLEAN,
    PRIMARY KEY(id)
)   