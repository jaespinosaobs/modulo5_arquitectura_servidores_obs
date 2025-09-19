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
    const isValid = validarObject(employee);
    if(!isValid) {
        throw new Error('bad_request')
    }
    dataEmployees.push(employee);
    return employee;
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

function validarObject(obj) {
    if (typeof obj !== 'object' || obj === null) return false;

    // Validar campos primitivos
    if (typeof obj.name !== 'string') return false;
    if (typeof obj.age !== 'number') return false;
    if (typeof obj.privileges !== 'string') return false;

    // Validar objeto phone
    if (typeof obj.phone !== 'object' || obj.phone === null) return false;

    // Validar objeto favorites
    if (typeof obj.favorites !== 'object' || obj.favorites === null) return false;

    // Validar arrays
    if (!Array.isArray(obj.finished)) return false;
    if (obj.finished.some(item => typeof item !== 'number')) return false;

    if (!Array.isArray(obj.badges)) return false;
    if (obj.badges.some(item => typeof item !== 'string')) return false;

    // Validar array de objetos points
    if (!Array.isArray(obj.points)) return false;
    if (obj.points.some(item =>
        typeof item !== 'object' ||
        item === null ||
        typeof item.points !== 'number' ||
        typeof item.bonus !== 'number'
    )) return false;

    return true;
}

module.exports.getAll = getAll;
module.exports.getOldest = getOldest;
module.exports.getPage = getPage;
module.exports.addEmployee = addEmployee;
module.exports.filterUsers = filterUsers;
module.exports.filterBadges = filterBadges;
module.exports.getEmployeeByName = getEmployeeByName;