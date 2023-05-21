SELECT * FROM juegos_olimpicos_schema.Deportista;
SELECT * FROM juegos_olimpicos_schema.Pais;
SELECT * FROM juegos_olimpicos_schema.Disciplina;
SELECT * FROM juegos_olimpicos_schema.Prueba;
SELECT * FROM juegos_olimpicos_schema.Clasificacion;
SELECT * FROM juegos_olimpicos_schema.Resultado;

-- Consulta 1
SELECT apellidos, nombre FROM juegos_olimpicos_schema.Deportista WHERE n_pais = 'Mexico';

-- Consulta 2
SELECT d.apellidos, d.nombre, SUM(c.rango) AS puntos_acumulados
FROM Deportista d
JOIN Clasificacion c ON d.matricula = c.matricula
WHERE d.n_pais = 'USA'
GROUP BY d.apellidos, d.nombre;

-- Consulta 3
SELECT DISTINCT d.apellidos, d.nombre
FROM Deportista d
JOIN Clasificacion c ON d.matricula = c.matricula
WHERE c.rango = 1;

-- Consulta 4
SELECT DISTINCT d.apellidos, d.nombre
FROM Deportista d
JOIN Clasificacion c ON d.matricula = c.matricula
JOIN Pais p ON d.n_pais = p.nombre
WHERE p.nombre LIKE '%Mexico%';

-- Consulta 5 (Usando NOT IT y NOT EXISTS)
SELECT d.apellidos, d.nombre
FROM Deportista d
WHERE d.matricula NOT IN (
    SELECT c.matricula
    FROM Clasificacion c
    WHERE c.rango = 1
);

SELECT apellidos, nombre
FROM Deportista
WHERE NOT EXISTS (
    SELECT 1
    FROM Clasificacion
    WHERE Clasificacion.matricula = Deportista.matricula
    AND rango = 1
);

-- Consulta 6
SELECT DISTINCT d.apellidos, d.nombre
FROM Deportista d
JOIN Clasificacion c ON d.matricula = c.matricula;

-- Consulta 7 Imprime todas las finales cuando ganas primer lugar (aqui recibes la mayor cantidad de puntos)
SELECT p.identificador, p.disciplina, p.d_inscritos, p.naturaleza
FROM Prueba p
JOIN Clasificacion c ON p.identificador = c.identificador_prueba
WHERE c.rango = 1 AND p.naturaleza = 'Final';

-- Consulta 8 (Ningun pais participo en todas)
SELECT p.nombre
FROM Pais p
WHERE NOT EXISTS (
    SELECT *
    FROM Prueba pr
    WHERE NOT EXISTS (
        SELECT *
        FROM Deportista d
        WHERE d.n_pais = p.nombre AND d.matricula IN (
            SELECT c.matricula
            FROM Clasificacion c
            WHERE c.identificador_prueba = pr.identificador
        )
    )
);

-- Consulta 9 Número mínimo de participantes en un país:
SELECT MIN(num_p) AS min_participantes
FROM Pais;

-- Consulta 10 Obtener la cantidad de deportistas clasificados por sexo F y M
SELECT d.sexo, COUNT(*) AS total_deportistas
FROM Deportista d
JOIN Pais p ON d.n_pais = p.nombre
GROUP BY d.sexo;

-- Consulta 11 Obtener países y deportistas que han obtenido medallas en los Juegos Olímpicos
SELECT p.nombre AS nombre_pais, d.nombre AS nombre_deportista, COUNT(*) AS total_medallas
FROM Pais p
LEFT JOIN Deportista d ON p.nombre = d.n_pais
LEFT JOIN Clasificacion c ON d.matricula = c.matricula
GROUP BY p.nombre, d.nombre
ORDER BY total_medallas DESC
LIMIT 5;

-- Consulta 12 Al ingresar un nombre, ver su(s) prueba(s), identificador(es) de la prueba
SELECT d.nombre, p.lugar, c.identificador_prueba
FROM Deportista d
INNER JOIN Clasificacion c ON d.matricula = c.matricula
INNER JOIN Prueba p ON c.identificador_prueba = p.identificador
WHERE d.nombre LIKE '%Diego%';

