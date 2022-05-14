// console.log('script');

// Create  empty array
let employees = [];

$(document).ready(readyNow)

function readyNow(){
    console.log('JQ');
}


/* 
Create employee data function 
function should have 6 parameters
return all data as an object
*/

let employeeFactory = (firstName, lastName, idNumber, title, salary) => {

    return {
        firstName : firstName,
        lastName : lastName,
        idNumber :idNumber,
        title : title,
        salary : salary

    }
}