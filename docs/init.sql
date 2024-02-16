CREATE TABLE reptil (id SERIAL NOt NULL PRIMARY KEY,
					 nome VARCHAR(50) NOT NULL,
					 idade INT, 
					 genero VARCHAR(12) NOT NULL, 
					 tipoDeEscamas VARCHAR(20));
					 
CREATE TABLE ave (id SERIAL NOt NULL PRIMARY KEY,
					 nome VARCHAR(50) NOT NULL,
					 idade INT, 
					 genero VARCHAR(12) NOT NULL, 
					 Envergadura FLOAT(4));
					 
CREATE TABLE mamifero (id SERIAL NOT NULL PRIMARY KEY,
					 nome VARCHAR(50) NOT NULL,
					 idade INT, 
					 genero VARCHAR(12) NOT NULL, 
					 Raca VARCHAR(20));
		
INSERT INTO mamifero (nome, idade, genero, raca)
	VALUES
('Simba', 2, 'Macho', 'Leao'),
('Timao', 1, 'Macho', 'Suricato'),
('Pumba', 10, 'Macho', 'Javali'),
('Nala', 2, 'Femea', 'Leao');

INSERT INTO reptil (nome, idade, genero, raca)
	VALUES
('Pascal', 3, 'Macho', 'camaleao'),
('Saci', 5, 'Femea', 'Salamandra'),
('Leo', 103, 'Macho', 'Tartaruga'),

ALTER TABLE reptil
ALTER COLUMN tipoDeEscamas TYPE VARCHAR(50);

SELECT * FROM mamiferos;

-- ALTER TABLE reptil
-- ALTER COLUMN tipoDeESCAMA

-- SELECT * FROM mamífero
-- SELECT * FROM ave
-- SELECT * FROM reptil