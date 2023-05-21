DROP SCHEMA IF EXISTS juegos_olimpicos_schema;
CREATE SCHEMA juegos_olimpicos_schema;
USE juegos_olimpicos_schema;

CREATE TABLE Pais (
	nombre VARCHAR(50) NOT NULL,
    num_p INT NOT NULL,
    num_m INT NOT NULL,
    PRIMARY KEY (nombre)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE Deportista (
	matricula VARCHAR(50) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    sexo VARCHAR(50) NOT NULL,
    n_pais VARCHAR(50) NOT NULL,
    PRIMARY KEY (matricula),
    FOREIGN KEY (n_pais) REFERENCES Pais(nombre)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE Disciplina (
	identificador VARCHAR(50) NOT NULL,
    n_comp VARCHAR(50) NOT NULL,
    disciplina VARCHAR(50) NOT NULL,
    PRIMARY KEY (identificador)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE Prueba (
	identificador VARCHAR(50) NOT NULL,
	disciplina VARCHAR(50) NOT NULL,
    fecha DATETIME,
    lugar VARCHAR(50) NOT NULL,
    d_inscritos INT NOT NULL,
    naturaleza VARCHAR(50) NOT NULL,
    PRIMARY KEY (identificador),
    FOREIGN KEY (disciplina) REFERENCES Disciplina(identificador)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE Clasificacion (
	id INT AUTO_INCREMENT,
    matricula VARCHAR(15) NOT NULL,
    identificador_prueba VARCHAR(50) NOT NULL,
    rango INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (matricula) REFERENCES Deportista(matricula),
    FOREIGN KEY (identificador_prueba) REFERENCES Prueba(identificador)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE Resultado (
	identificador_disciplina VARCHAR(50) NOT NULL,
    matricula_oro VARCHAR(50) NOT NULL,
    matricula_p VARCHAR(50) NOT NULL,
    matricula_b VARCHAR(50) NOT NULL,
    PRIMARY KEY (identificador_disciplina),
    FOREIGN KEY (identificador_disciplina) REFERENCES Disciplina(identificador),
    FOREIGN KEY (matricula_oro) REFERENCES Deportista(matricula),
    FOREIGN KEY (matricula_p) REFERENCES Deportista(matricula),
    FOREIGN KEY (matricula_b) REFERENCES Deportista(matricula)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

