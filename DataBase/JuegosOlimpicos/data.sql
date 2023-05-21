USE juegos_olimpicos_schema;

INSERT INTO Pais VALUES
("Mexico", 3, 4),
("Italia", 3, 2),
("Brasil", 6, 3),
("USA", 10, 2),
("Canada", 6, 2);

INSERT INTO Deportista VALUES 
("A001", "Diego", "Fernandez", "M", "Mexico"),
("A002", "Luca", "Ricci", "M", "Italia"),
("A003", "Piero", "Rossi", "M", "Italia"),
("A004", "Bruna", "Alves", "F", "Brasil"),
("A005", "Emma", "Stone", "F", "USA"),
("A006", "Will", "Smith", "M", "Canada"),
("A007", "Miranda", "Sierra", "F", "Mexico"),
("A008", "Elizabeth", "Baxter", "F", "USA");

INSERT INTO Disciplina VALUES
("D1", "400m", "Natacion"),
("D2", "300m", "Mar Abierto"),
("D3", "500m", "Atletismo");

INSERT INTO Prueba VALUES
("N-P1", "D1", CURRENT_TIMESTAMP, "Alberca 1", 3, "Eliminatoria 1"),
("N-P2", "D1", CURRENT_TIMESTAMP, "Alberca 1", 2, "Final"),
("M-P1", "D2", CURRENT_TIMESTAMP, "Costa 1", 4, "Eliminatoria 1"),
("M-P2", "D2", CURRENT_TIMESTAMP, "Costa 1", 3, "Eliminatoria 2"),
("M-P3", "D2", CURRENT_TIMESTAMP, "Costa 2", 2, "Final"),
("A-P1", "D3", CURRENT_TIMESTAMP, "Campo Olimpico", 3, "Eliminatoria 1"),
("A-P2", "D3", CURRENT_TIMESTAMP, "Campo Olimpico", 2, "Final");

INSERT INTO Clasificacion (matricula, identificador_prueba, rango) VALUES
("A001", "N-P1", 1),
("A001", "N-P2", 1),
("A002", "N-P1", 2),
("A002", "N-P2", 2),
("A006", "N-P1", 3),

("A004", "M-P1", 2),
("A004", "M-P2", 2),
("A004", "M-P3", 1),
("A005", "M-P1", 1),
("A005", "M-P2", 1),
("A005", "M-P3", 2),
("A007", "M-P1", 3),
("A007", "M-P2", 3),
("A008", "M-P1", 4),

("A004", "A-P1", 1),
("A004", "A-P2", 1),
("A005", "A-P1", 2),
("A005", "A-P2", 2),
("A008", "A-P1", 3);

INSERT INTO Resultado VALUES
("D1", "A001", "A002", "A003"),
("D2", "A004", "A005", "A007"),
("D3", "A004", "A005", "A008");

