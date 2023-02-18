const inquirer = require('inquirer');
// get the client
const mysql = require('mysql2');

// sample code for mysql2

        // // get the client
        // const mysql = require('mysql2');

        // create the connection to database
        const connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        database: 'test'
        });

        // simple query
        connection.query(
        'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
        function(err, results, fields) {
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
        }
        );

        // with placeholder
        connection.query(
        'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
        ['Page', 45],
        function(err, results) {
            console.log(results);
        }
        );


// check challenge 11 for constructor examples

// check challenge 11 for inquirer selection examples

const initialPrompt = [
    {
        type: 'list',
        name: 'options',
        message: 'Please choose one of the following:',
        choices: ['View All Departments', 'View All Roles', 'View All Employess', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update An Emplloyee Role']
    }
]

function init() {

    // asks questions in the terminal to receive input from the user
    inquirer
      .prompt(initialPrompt)
        .then((answers) => {
          console.log(answers)
        });
  
  }
  
  init();