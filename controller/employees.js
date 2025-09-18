const dataEmployees = require('../data/employees.json');

function getAll() {
    return dataEmployees;
}

function getPage(employees, page) {
    const indexStart = 2 * (page - 1);
    return employees.slice(indexStart, indexStart + 2);
}

function getOldest() {
    const copyEmployees = JSON.parse(JSON.stringify(dataEmployees));
    return copyEmployees.sort((employeeA, employeeB) => employeeB.age - employeeA.age)[0];
}

function addEmployee(employee) {

}

function filterUsers(employees) {
    return employees.filter(employee => employee.privileges === 'user');
}

function filterBadges(employees, badge) {
    return employees.filter(employee => employee.badges.includes(badge));
}

function getEmployeeByName(name) {
    return dataEmployees.filter(employee => employee.name === name)[0];
}

module.exports.getAll = getAll;
module.exports.getOldest = getOldest;
module.exports.getPage = getPage;
module.exports.addEmployee = addEmployee;
module.exports.filterUsers = filterUsers;
module.exports.filterBadges = filterBadges;
module.exports.getEmployeeByName = getEmployeeByName;