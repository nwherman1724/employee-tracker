-- deletes database if exists
DROP DATABASE IF EXISTS business_db;

-- creates database
CREATE DATABASE business_db;

-- chooses the business_db
USE business_db;

-- creates a table named department that contains id and names
CREATE TABLE department (
    id INT AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

-- creates a table named role that contains id, title, salary and department id
CREATE TABLE role(
    id INT AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id)

);

-- creates a table named employee that contains id, firstname, last name, role id, and amanger id
CREATE TABLE employee(
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);
