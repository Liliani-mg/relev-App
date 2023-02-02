const createHttpError = require("http-errors");
const { endpointResponse } = require("../helpers/success");
const { catchAsync } = require("../helpers/catchAsync");
const { createInspection } = require("../services/inspections.service");

module.exports = {
    createInspection: catchAsync(async (req, res, next) => {
        try {
          const inspection = req.body;
          if (req.file) inspection.image = req.file.filename;
          const response = await createInspection(inspection);
      
          endpointResponse({
            res,
            message: "Inspection created successfully",
            body: response,
            code: 201,
          });
        } catch (error) {
          const httpError = createHttpError(
            error.statusCode,
            `[Error creating inspection] - [POST]: ${error.message}`
          );
          next(httpError);
        }
      }),
};
