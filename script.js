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


$
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
     
    // create employee variable to store new objects
    let employee = employeeFactory(firstName, lastName, idNumber, title, salary);

    //push employee object to employee array
    employees.push(employee)

    //console.log(employees);

    //create employee variable to store new objects
    $('#employee-first-name').val('')
    $('#employee-last-name').val('')
    $('#employee-id').val('')
    $('#employee-title').val('')
    $('#employee-salary').val('') 

    displayEmployeeData(employees)

}

// create a function that takes in one parameter 
function displayEmployeeData(employeesArray){
    
    //use a for of loop to iterate through employees array
    for (let employee of employeesArray) {
        
        console.log(employee.firstName);
    }
}