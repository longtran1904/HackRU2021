CREATE DATABASE HackRU;

USE HackRU;

CREATE TABLE recipeList(
	recipe_id INT NOT NULL AUTO_INCREMENT,
	recipe_name varchar(255),
    tags varchar(255),
    recipe_image varchar(255),
    nutrition varchar(255),
    descrip varchar(255),
    primary key(recipe_id)
);

CREATE TABLE instruction(
	recipe_id INT NOT NULL,
    instruction_id INT NOT NULL AUTO_INCREMENT,
    texts varchar(255),
    PRIMARY KEY (instruction_id)
);