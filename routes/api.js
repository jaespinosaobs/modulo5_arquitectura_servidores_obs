const express = require('express');
const employeesC = require('../controller/employees');

const api = express.Router();

api.get('/employees', (req, res, next) => {
    res.json(employeesC.getAll());
});

api.post('/employees', (req, res, next) => {

});

module.exports = api;