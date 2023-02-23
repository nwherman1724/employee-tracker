const inquirer = require('inquirer');
// get the client
const mysql = require('mysql2');

// sample code for mysql2

        // create the connection to database
        const connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'business_db'
        });


// check challenge 11 for constructor examples

// check challenge 11 for inquirer selection examples

const initialPrompt = [
    {
        type: 'list',
        name: 'options',
        message: 'Please choose one of the following:',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update An Employee Role', 'Exit']
    }
]

const whichRole = [
  {
      type: 'input',
      name: 'role',
      message: 'What is the role title?',
  },
  {
      type: 'input',
      name: 'salary',
      message: 'What is the roles salary?',
  },
  {
      type: 'input',
      name: 'department',
      message: "What is the role's department ID?",
  },
]

const whichEmp = [
  {
      type: 'input',
      name: 'employee',
      message: 'What is the name of the employee you would like to add?',
  },
]

const whichDept = [
  {
      type: 'input',
      name: 'department',
      message: 'What is the name of the department you would like to add?',
  },
]

function addRole(){
  // WHEN I choose to add a role
  // THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

  inquirer.prompt(whichRole)
  .then((answers) => {
    // prepare the parameterized query
    const query = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
    const values = [answers.role, answers.salary, answers.department];

    // execute the parameterized query with the values
    connection.query(query, values, (err, results, fields) => {
      if (err) {
        console.error(err);
        // handle error
      } else {
        console.table(results);
        // handle success
      }
    });
  });

};

function addEmp(){
  inquirer
    .prompt(whichEmp)
        .then((answers) => {
          console.log(answers)
          connection.query(
            `INSERT INTO department (name)
            VALUES (?)`,
            (`${answers.department}`),
            function(err, results) {
              if(err) {
                console.log(err)
              } else {
              console.table(results)
              }; // results contains rows returned by server
            }
            );
        })
};

function addDept(){
  inquirer
    .prompt(whichDept)
        .then((answers) => {
          connection.query(
            `INSERT INTO department (name)
            VALUES (?)`,
            [answers.department],
            function(err, results) {
              if(err) {
                console.log(err)
              } else {
              console.log("A department has been added to the table.")
              }; // results contains rows returned by server
            }
            );
        })
};

// function that takes in the string stored in an object
function handleChoice({options}){

    switch(options) {
        case 'View All Departments':
            connection.query(
              `SELECT department.name AS 'Department',
                  department.id AS 'Department ID'
               FROM department`,
              (err, results) => {
                if(err) {
                  console.log(err)
                } else {
                console.table(results)
                };
            });
          break;

        case 'View All Roles':
          connection.query(
            `SELECT role.title AS 'Job Title',
                role.id AS 'Role ID', 
                department.id AS 'Department ID',
                role.salary AS 'Salary'
             FROM role 
                LEFT JOIN department ON role.department_id = department.id`,
            function(err, results) {
                if(err) {
                  console.log(err)
                } else {
                console.table(results)
                }; // results contains rows returned by server
            }
            );
          break;

        case 'View All Employees':
          connection.query(
            `SELECT 
                employee.id AS 'Employee ID',
                employee.first_name AS 'First Name',
                employee.last_name AS 'Last Name',
                role.title AS 'Title',
                role.department_id AS 'Department',
                role.salary AS 'Salary',
                CONCAT(manager.first_name, ' ', manager.last_name) AS 'Manager'
             FROM employee 
                LEFT JOIN role ON employee.role_id = role.id
                  LEFT JOIN department ON role.department_id = department.id
                    LEFT JOIN employee manager on manager.id = employee.manager_id`,

            function(err, results) {
              if(err) {
                console.log(err)
              } else {
              console.table(results)
              }; // results contains rows returned by server
            }
            );
          break;

        case 'Add A Department':
          // WHEN I choose to add a department
          // THEN I am prompted to enter the name of the department and that department is added to the database
          addDept();
          break;

        case 'Add A Role':
          // connection.query(
          //   'SELECT ',
          //   function(results) {
          //       console.table(results); // results contains rows returned by server
          //   }
          //   );

          addRole();
          break;

        case 'Add An Employee':
          // connection.query(
          //   'SELECT ',
          //   function(results) {
          //       console.table(results); // results contains rows returned by server
          //   }
          //   );

          addEmp();
          break;

        case 'Update An Employee Role':
          // connection.query(
          //   'SELECT ',
          //   function(results) {
          //       console.table(results); // results contains rows returned by server
          //   }
          //   );
          console.log("still coding")
          break;

        default:
          console.log(`Thank you. Goodbye!`);
      }
};

function init() {

    // asks questions in the terminal to receive input from the user
    inquirer
      .prompt(initialPrompt)
        .then((answers) => {
          handleChoice(answers)
        });
  
  }
  
  init();