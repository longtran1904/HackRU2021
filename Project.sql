CREATE table recipeList(
	recipe_id INT NOT NULL AUTO_INCREMENT,
	recipe_name varchar(255),
    tags varchar(255),
    image varchar(255),
    descrip varchar(255),
    primary key(recipe_id)
);

CREATE table instruction(
	instruction_id INT NOT NULL AUTO_INCREMENT,
    texts varchar(225),
    PRIMARY KEY (instruction_id)
);

CREATE TABLE recipe_instruction(
	recipe_id INT NOT NULL,
    instruction_id INT NOT NULL,
    PRIMARY KEY (recipe_id, instruction_id)
);