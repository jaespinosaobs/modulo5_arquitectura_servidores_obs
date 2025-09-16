const employees = require('../data/employees.json');

export function getAll() {
    return employees;
}

export function getPage(page) {
    const indexStart = 2 * (page - 1);
    return employees.slice(indexStart, indexStart + 2);
}

export function getOldest() {
    return employees.sort((employeeA, employeeB) => employeeA.age - employeeB.age)[0];
}

export function addEmployee(employee) {

}

export function getUsers() {
    return employees.filter(employee => employee.privileges === 'user');
}

export function getBlackBadgets() {
    return employees.filter(employee => employee.badges.includes('black'));
}

export function getEmployeeByName(name) {

}