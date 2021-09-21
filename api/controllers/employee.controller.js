var Mongoose = require("mongoose");
var db = Mongoose.connection;
let collection = "employees";

function addEmployee(req, res) {
    let body = req.body;

    db.collection(collection).insert(body, (err, employee) => {
        if(err) {
            res.status(400).send(err);
        }else {
            employee = employee.ops[0];
            res.status(200).send({employee});
        }
    });
}

function getEmployees(req, res) {

    db.collection(collection).find({}, {_id: 0}).toArray((err, employees) => {
    console.log("err", err, "employees", employees);
        if(err) {
            res.status(400).send(err);
        }else if (employees && employees.length > 0){
            res.status(200).send(employees);
        } else {
            res.status(400).send({message: "No employees found"});
        }
    });
}

function getEmployeeById(req, res) {
    let employeeId = req.swagger.params.employeeId.value;
    db.collection(collection).findOne({ id: employeeId }, (err, employee) => {
        if(err) {
            res.status(400).send(err);
        }else if (employee){

            res.status(200).send({employee});
        } else {
            res.status(400).send({message: "No employee found with given employee Id " + employeeId});
        }
    });
}

function updateEmployee(req, res) {
    let employeeId = req.swagger.params.employeeId.value;
    let body = req.body ? req.body : {};

    db.collection(collection).findOneAndUpdate({ id: employeeId }, {"$set":body}, {new:true}, (err, employee) => {
        if(err) {
            res.status(400).send(err);
        }else if (employee){
            employee = employee["value"]
            res.status(200).send({employee});
        } else {
            res.status(400).send({message: "No employee found with given employee Id " + employeeId});
        }
    });
}

function deleteEmployeeById(req, res) {
    let employeeId = req.swagger.params.employeeId.value;

    db.collection(collection).remove( { id: employeeId }, (err, employee) => {
        if(err) {
            res.status(400).send(err);
        } else {
            res.status(200).send({"message": "Deleted Successfully"});
        }
    });
}


module.exports = {
    addEmployee,
    getEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployeeById
}