const mysql = require("mysql");
const inquirer = require("inquirer");
const table = require("console.table");
const { type } = require("os");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Zyjazz#1",
    database: "manager_db"
});


connection.connect(err => {
    if (err){
        throw err;
    }
    console.log("Connected at port 3000")
    mainPrompt();
});


function mainPrompt(){
    inquirer.prompt({
        name: "WhatDo", 
        type: "rawlist",
        message: "What would you like to do?",
        choices: [
            {
                name:"Add Band",
                value: "Add_Band"
            },
            {
                name:"Add Role",
                value:"Add_Role"
            },
            {
                name: "Add Member",
                value: "Add_Member"  
            },
            {
                name: "View All Bands",
                value: "View_Bands"
            }, 
            {
                name: "View All Roles",
                value: "View_Roles"
            },
            {
                name: "View All Members",
                value: "View_Members"
            },
            {
                name: "Update Salary",
                value: "Update_Salary"
            }
        ]
    }).then(afterAnswer);
}


function afterAnswer ({WhatDo}){
    switch (WhatDo){
        case "Add_Band":
            addBand();
            break;

        case "Add_Role":
            addRole();
            break;
        
        case "Add_Member":
            addMember();
            break;

        case "View_Bands":
            viewBands();
            break;

        case "View_Roles":
            viewRoles();
            break;
        
        case "View_Members":
            viewMembers();
            break;

        case "Update_Salary":
            updateSalary();
            break;

        case "Exit":
        default:
            console.log("See Ya");
            connection.end();
    }
}



function addBand() {
    inquirer
        .prompt([{
            name: "Band_Name",
            type: "input",
            message: "What is the name of the Band?"
        },
        {
            name: "Number_of_members",
            type: "input",
            message: "How many members in the band?"
        },
        ])
        .then(({ Band_Name, Number_of_members}) => {
            let newBand = {
                band_name: Band_Name,
                number_of_members: Number_of_members
            }
            const query = "INSERT INTO bands SET ?";
            connection.query(query, newBand, (err, res) => {
                if (err) {
                    throw err;
                }
                console.log("Your Band has been added")

                mainPrompt();
            });
        })
};


function addRole() {
    inquirer
        .prompt([{
            name: "instrument_name",
            type: "input",
            message: "What is their instrument?"
        },
        {
            name: "salary",
            type: "input",
            message: "What is their salary?"
        },
        {
            name: "band",
            type: "input",
            message: "What band are they in?"
        }
        ])
        .then(({ instrument_name, salary, band }) => {
            let newRole = {
                instrument_name: instrument_name,
                salary: salary,
                band: band
            }
            const query = "INSERT INTO role SET ?";
            connection.query(query, newRole, (err, res) => {
                if (err) {
                    throw err;
                }
                console.log("Your Role has been added")

                mainPrompt();
            });
        })
};

function addMember() {
    inquirer
        .prompt([{
            name: "first_name",
            type: "input",
            message: "What is their first name?"
        },
        {
            name: "last_name",
            type: "input",
            message: "What is their last name?"
        },
        {
            name: "instrument",
            type: "input",
            message: "What is their instrument?"
        },
        {
            name: "band",
            type: "input",
            message: "What band are they in?"
        }
        ])
        .then(({ first_name, last_name, instrument, band }) => {
            let newMember = {
                first_name: first_name,
                last_name: last_name,
                instrument: instrument,
                band: band
            }
            const query = "INSERT INTO member SET ?";
            connection.query(query, newMember, (err, res) => {
                if (err) {
                    throw err;
                }
                console.log("Your member has been added")

                mainPrompt();
            });
        })
};


function viewBands(){
    connection.query(`SELECT * FROM bands`, (err,res)=>{
    if (err) {
        throw err;
    }
    console.log('Data received from bands');
    console.table(res)
    mainPrompt();
});
}

function viewRoles(){
    connection.query(`SELECT * FROM role`, (err,res)=>{
    if (err) {
        throw err;
    }
    console.log('Data received from role chart');
    console.table(res)
    mainPrompt();
});
}

function viewMembers(){
    connection.query(`SELECT * FROM member`, (err,res)=>{
    if (err) {
        throw err;
    }
    console.log('Data received from members');
    console.table(res)
    mainPrompt();
});
}


function updateSalary(){
    inquirer.prompt([{
        name: "id",
        type: "number",
        message: "What id would you like to update?"
    },
   {
        name: "newSalary",
        type: "number",
        message: "What is their new Salary?"
    },
    ]).then(({id, newSalary}) => {
    
        connection.query("UPDATE role SET ? WHERE ? ", [{id: id},{salary: newSalary} ], (err, res) => {
            if (err) {
                throw err;
            }
            console.log("Your salary has been updated")

            mainPrompt();
        });
    })};

// function updateSalary(){
//     inquirer.prompt([{
//             name: "id",
//             type: "input",
//             message: "What ID would you like to update?"
//             },
//             {
//             name: "salary",
//             type: "input",
//             message: "What is their new salary?"
//             },           
//         ]).then(({id, salary}) => {
//         connection.query("UPDATE role WHERE ? SET ?",[{id: id }, {salary: salary}], (req,res) => {
//             if (err) {
//                 throw err;
//             }
//             console.log("Your employee has been updated")

//         });
//         })};

