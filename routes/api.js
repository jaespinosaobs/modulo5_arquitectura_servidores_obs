const express = require('express');
const employeesC = require('../controller/employees');

const api = express.Router();

api.get('/employees', (req, res, next) => {
    const page = Number(req.query.page);
    const user = req.query.user === 'true';
    const badges = req.query.badges;
    
    let employees = employeesC.getAll();

    if(user) {
        employees = employeesC.filterUsers(employees);
    }

    if(badges) {
        employees = employeesC.filterBadges(employees, badges);
    }
    
    if(!isNaN(page)) {
        employees = employeesC.getPage(employees, page);
    }

    res.json(employees);
});

api.get('/employees/oldest', ((req, res, next) => {
    res.json(employeesC.getOldest());
}));

api.get('/employees/:name', ((req, res, next) => {
    res.json(employeesC.getEmployeeByName(req.params.name));
}));

api.post('/employees', (req, res, next) => {

});

module.exports = api;