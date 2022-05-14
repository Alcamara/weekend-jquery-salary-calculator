// console.log('script');

// Create  empty array
let employees = [];

$(document).ready(readyNow)

function readyNow(){
    // console.log('JQ');

    /*
Create a click event that collect data, 
return as an object, and push it to employees array
*/
    $('#submit-btn').on('click',addEmployee)
}


/* 
Create employee data function 
function should have 5 parameters
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



function addEmployee() {

    //Create variables to store each data type
    let firstName =  $('#employee-first-name').val();
    let lastName =  $('#employee-last-name').val();
    let idNumber = $('#employee-id').val();
    let title =  $('#employee-title').val();
    let salary =  Number($('#employee-salary').val());
     
    let employee = employeeFactory(firstName, lastName, idNumber, title, salary);

    // employees.push( employee)

    console.log(employees);

    $('#employee-first-name').val('')
    $('#employee-last-name').val('')
    $('#employee-id').val('')
    $('#employee-title').val('')
    $('#employee-salary').val('')

    

}