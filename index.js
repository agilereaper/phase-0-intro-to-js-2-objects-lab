const employee = {
    name: 'bob',
    streetAddress: '113 hawk',
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployees = {...employee}
    newEmployees[key] = value
    return newEmployees
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee}
    delete newEmployee.name
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name
    return employee
}