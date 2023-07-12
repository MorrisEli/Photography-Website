require('dotenv').config();

const express = require('express');
//mysql2 to connect to database
const mysql = require('mysql2');
//inquirer to interact
const inquirer = require('inquirer');
//cTable tp print rows
const cTable = require('console.table');

const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        port: 3000,
        user: 'root',
        password: process.env.PASSWORD,
        database: 'company_db'
    });

console.log('Welcome to Pixel Perfect!');





function startMenu() {
    startMenu();
    inquirer.createPromptModule({
        message: 'What would you like to do? (Use arrow keys.)',
        name: 'menu',
        type: 'list',
        choices: [
            'View all Employees',
            'Add Employee',
            'Update Employee Role',
            'View All Roles',
            'Add a Role',
            'View All Departments',
            'Add Department',
            'Exit'
        ],
    })

        //response case,.
        .then(response => {
            switch (response.menu) {
                case 'View all Employees':
                    viewDepartment();
                    break;
                case 'Add Employee':
                    viuewJobs();
                    break;
                case 'Update Employee':
                    viewEmployees();
                    break;
                case 'View All Roles':
                    addDepartment;
                    break;
                case 'Add a Role':
                    addJob();
                    break;
                case 'View All Departments':
                    addEmployee();
                    break;
                case 'Add Department':
                    addDepartment;
                    break;
                case "Exit":
                    connection.end(); //exit
                    break;
                default:
                    connection.end;
            }
        });
}