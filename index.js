const employee = {name: 'Akarsh Shukla', streetAddress: '6322 field flower trail'}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const nextEmployee = {...obj};
    
    nextEmployee[key] = value;
    return nextEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    const employee3 = {...obj};
    delete employee3[key];
    return employee3;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}// Write your solution in this file!
