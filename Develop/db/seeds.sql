-- Insert data into the departments table
INSERT INTO department (name)
    VALUES ('Front-End Development');

INSERT INTO department (name)
    VALUES ('Back-End Development');

INSERT INTO department (name)
    VALUES ('Management');

-- Insert data into the role table
INSERT INTO role (title, salary, department_id)
    VALUES ("Front-End Team Lead", 120000, 1);

INSERT INTO role (title, salary, department_id)
    VALUES ("Front-End Developer", 100000, 1);

INSERT INTO role (title, salary, department_id)
    VALUES ("Back-End Team Lead", 130000, 2);

INSERT INTO role (title, salary, department_id)
    VALUES ("Back-End Developer", 100000, 2);

INSERT INTO role (title, salary, department_id)
    VALUES ("CTO", 250000, 3);

INSERT INTO role (title, salary, department_id)
    VALUES ("CEO", 750000, 3);

-- Insert data into the employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES ("Tony", "Stark", 6, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES ("Pepper", "Potts", 5, 1);

-- Questions for tutor:
-- How does inputting data work in joined fields? x
-- Help writing queries to do things when option is chosen from inquirer