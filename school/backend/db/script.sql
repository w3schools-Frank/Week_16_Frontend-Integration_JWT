DROP DATABASE IF EXISTS school;
CREATE DATABASE school;

\c school;

DROP TABLE IF EXISTS learners;
DROP TABLE IF EXISTS instructors;
CREATE TABLE instructors (
    id SERIAL NOT NULL,
    name VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id)
);
CREATE TABLE learners (
    id SERIAL NOT NULL,
    name VARCHAR(255) NOT NULL,
    program VARCHAR(100) NOT NULL,
    instructor_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (instructor_id) REFERENCES instructors(id)
);

INSERT INTO instructors (name) VALUES ('Frank');
INSERT INTO learners (name, program, instructor_id) VALUES ('Woody', 'Web Development', 1);
INSERT INTO learners (name, program, instructor_id) VALUES ('Robert', 'Web Development', 1);
