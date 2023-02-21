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
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update An Employee Role']
    }
]

// function that takes in the string stored in an object
function handleChoice({options}){

    switch(options) {
        case 'View All Departments':
            connection.query(
              'SELECT department.name AS `Department`, department.id AS `Department ID` FROM department',
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
            'SELECT role.title AS `Job Title`, role.id AS `Role ID`, department.id AS `Department ID`, role.salary AS `Salary` FROM role LEFT JOIN department ON role.department_id = department.id',
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
          // WHEN I choose to view all employees
          // THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
          connection.query(
            'SELECT employee.id AS `Employee ID`, employee.first_name AS `First Name`, employee.last_name AS `Last Name`, role.title AS `Title`, employee.manager_id AS `Manager ID` FROM employee LEFT JOIN role ON employee.role_id = role.id, LEFT JOIN employee on employee.manager_id = employee.id',
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
          connection.query(
            'SELECT ',
            function(results) {
                console.table(results); // results contains rows returned by server
            }
            );
          break;

        case 'Add A Role':
          connection.query(
            'SELECT ',
            function(results) {
                console.table(results); // results contains rows returned by server
            }
            );
          break;

        case 'Add An Employee':
          connection.query(
            'SELECT ',
            function(results) {
                console.table(results); // results contains rows returned by server
            }
            );
          break;

        case 'Update An Employee Role':
          connection.query(
            'SELECT ',
            function(results) {
                console.table(results); // results contains rows returned by server
            }
            );
          break;

        default:
          console.log(`uh oh`);
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