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
          // connection.query(
          //   'SELECT * FROM department',
          //   function(results) {
          //       console.table(results); // results contains rows returned by server
          //   }
          //   );
            connection.query(
              `SELECT department.name AS department FROM department`,
              (err, res) => {
                console.table(res);
            });
          break;

        case 'View All Roles':
          connection.query(
            'SELECT role.id, role.title, role.salary, department.id FROM role LEFT JOIN department ON role.department_id = department.id',
            function(err, results) {
                console.table(results); // results contains rows returned by server
            }
            );
          break;

        case 'View All Employees':
          connection.query(
            'SELECT employee.id, employee.first_name, employee.last_name, role.title, employee.manager_id FROM employee LEFT JOIN role ON employee.role_id = role.id',
            function(err, results) {
                console.table(results); // results contains rows returned by server
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