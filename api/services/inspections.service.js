const { ErrorObject } = require("../helpers/error");
const {  Inspection  } = require("../database/models");


module.exports.createInspection = async (inspection) => {
   try {
       console.log(Inspection);
       const newInspection = await Inspection.create(inspection);
    return newInspection;
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};
