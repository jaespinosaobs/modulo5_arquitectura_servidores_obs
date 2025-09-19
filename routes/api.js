const express = require('express');
const employeesC = require('../controller/employees');

const api = express.Router();

api.get('/employees', (req, res, next) => {
    const page = Number(req.query.page);
    const user = req.query.user === 'true';
    const badges = req.query.badges;

    let employees = employeesC.getAll();

    if (user) {
        employees = employeesC.filterUsers(employees);
    }

    if (badges) {
        employees = employeesC.filterBadges(employees, badges);
    }

    if (!isNaN(page)) {
        employees = employeesC.getPage(employees, page);
    }

    res.json(employees);
});

api.get('/employees/oldest', ((req, res, next) => {
    res.json(employeesC.getOldest());
}));

api.get('/employees/:name', ((req, res, next) => {
    const employee = employeesC.getEmployeeByName(req.params.name);
    if (employee) {
        res.json(employee);
    } else {
        res.status(404);
        res.json({ code: 'not_found' });
    }
}));

api.post('/employees', (req, res, next) => {
    try {
        const resp = employeesC.addEmployee(req.body);
        res.json(resp);
    } catch (error) {
        const msg = error.message;
        res.status(400);
        res.json({ code: msg });
    }
});

module.exports = api;