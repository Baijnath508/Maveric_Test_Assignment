'use strict';

var util = require('util');
var employeeController = require('../controllers/employee.controller.js');
var designationController = require('../controllers/designation.controller.js');


// function hello(req, res) {
//   // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
//   var name = req.swagger.params.name.value || 'stranger';
//   var hello = util.format('Hello, %s!', name);

//   // this sends back a JSON response which is a single string
//   res.json(hello);
// }
module.exports = {
    addEmployee: employeeController.addEmployee,
    getEmployees: employeeController.getEmployees,
    getEmployeeById: employeeController.getEmployeeById,
    updateEmployee: employeeController.updateEmployee,
    deleteEmployeeById: employeeController.deleteEmployeeById,
    addDesignation: designationController.addDesignation,
    getDesignations: designationController.getDesignations,
    getDesignationById: designationController.getDesignationById,
    updateDesignation: designationController.updateDesignation,
    deleteDesignaionById: designationController.deleteDesignaionById
  };