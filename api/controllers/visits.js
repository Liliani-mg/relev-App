const createHttpError = require("http-errors");
const { endpointResponse } = require("../helpers/success");
const { catchAsync } = require("../helpers/catchAsync");
const { findAll, createVisit, editVisit, getVisit, getActualVisit, getUserVisit} = require("../services/visits.service");

module.exports = {
  get: catchAsync(async (req, res, next) => {
    try {
      const response = await findAll();

      endpointResponse({
        res,
        message: "Visits retrieved successfully",
        body: response,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving visits] - [index - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),

  getOne: catchAsync(async (req, res, next) => {
    try {
      const response = await getVisit(req.params.id);
    
      endpointResponse({
        res,
        message: "Visit retrieved successfully",
        body: response,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving visit] - [/:id - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),


  create: catchAsync(async (req, res, next) => {
    try {
      const visit = req.body;
     
      const response = await createVisit(visit);
   
      endpointResponse({
        res,
        message: "Visit created successfully",
        body: response,
        code: 201,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creating visit] - [POST]: ${error.message}`
      );
      next(httpError);
    }
  }),
  editVisit: catchAsync(async (req, res, next) => {
    try {
      const id = req.params.id;
      const visitData = req.body;
      await editVisit(id, visitData);
      endpointResponse({
        res,
        message: "Visit update successfully",
        code: 202,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error updating visit] - [/:id - PUT]: ${error.message}`
      );
      next(httpError);
    }
  }),
  getOneVisit: catchAsync(async (req, res, next) => {
    try {
      
      const response = await getActualVisit();
        
      endpointResponse({
        res,
        message: "Visit retrieved successfully",
        body: response,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving visit] - [/visits/panelUser - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),

  getUserVisitOpen: catchAsync(async (req, res, next) => {
    try {
      
      const response = await getUserVisit(req.body);
        
      endpointResponse({
        res,
        message: "Visit retrieved successfully you can edit it",
        body: response,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving visit] - [/visits/panelUser - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),
};
