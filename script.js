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

$('#table-results').on('click','.delete-btn',deleteRow);



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
    //create a jQuery object of id table-body and store it in a variable called tableBodyElement
    let tableBodyElement = $('#table-results')
    let allSalaries = 0;

    tableBodyElement.empty()

    //use a for of loop to iterate through employees array
    for (let employee of employeesArray) {
        

        tableBodyElement.append(`
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.idNumber}</td>
            <td>${employee.title}</td>
            <td>$${employee.salary.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}</td>
            <td>
                <button class="delete-btn">Delete</button>
            </td>
        </tr>
        `)

        allSalaries += employee.salary;
    }

    let monthlyTotal = monthlyCost(allSalaries)

   if (monthlyTotal > 20000) {
       
    $('#monthly-total').css('background-color','red')
    $('#monthly-total').text('$' + monthlyTotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"))

   }else{

    $('#monthly-total').text('$' + monthlyTotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"))

   }
}

//create function that take in one parameter
function monthlyCost(allSalaries){

    //divide allSalaries and return result
    return allSalaries/12
}


function deleteRow(){

    $(this).parent().parent().remove();

    let name = $(this).parent().prev().prev().prev().prev().prev().text()

    console.log(name);

    alert(`${name} was removed from list`)
}