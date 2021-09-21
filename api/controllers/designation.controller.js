var Mongoose = require("mongoose");
// var http = require("http");
var db = Mongoose.connection;

let collection = "designations";

function addDesignation(req, res) {
    let body = req.body;

    db.collection(collection).insert(body, (err, designation) => {
        if(err) {
            res.status(400).send(err);
        }else {
            designation = designation.ops[0];
            res.status(200).send({designation});
        }
    });
}

function getDesignations(req, res) {

    db.collection(collection).find({}, {_id: 0}).toArray( (err, designations) => {
        if(err) {
            res.status(400).send(err);
        }else if (designations && designations.length > 0){
            res.status(200).send(designations);
        } else {
            res.status(400).send({message: "No designations found"});
        }
    });
}

function getDesignationById(req, res) {
    let designationId = req.swagger.params.designationId.value;
    db.collection(collection).findOne({ id: designationId }, (err, designation) => {
        if(err) {
            res.status(400).send(err);
        }else if (designation){

            res.status(200).send(designation);
        } else {
            res.status(400).send({message: "No designation found with given designation Id " + designationId});
        }
    });
}

function updateDesignation(req, res) {
    let designationId = req.swagger.params.designationId.value;
    let body = req.body ? req.body : {};

    db.collection(collection).findOneAndUpdate({ id: designationId }, {"$set":body}, {new:true}, (err, designation) => {
        if(err) {
            res.status(400).send(err);
        }else if (designation){
            designation = designation["value"]
            res.status(200).send({designation});
        } else {
            res.status(400).send({message: "No employee found with given designation Id " + designationId});
        }
    });
}

function deleteDesignaionById(req, res) {
    let designationId = req.swagger.params.designationId.value;

    db.collection(collection).remove( { id: designationId }, (err, designation) => {
        if(err) {
            res.status(400).send(err);
        } else {
            res.status(200).send({message: "Successflly deleted"});
        }
    });
}


module.exports = {
    addDesignation,
    getDesignations,
    getDesignationById,
    updateDesignation,
    deleteDesignaionById
}