const { ErrorObject } = require("../helpers/error");
const { Visit, Detail } = require("../database/models");


exports.findAll = async () => {
    try {
      const visits = await Visit.findAll({include: [{ model: Detail}]});
      return visits;
    } catch (error) {
      throw new ErrorObject(error.message, error.statusCode || 500);
    }
  };

  exports.getVisit = async (id) => {
    try {
      const visit = await Visit.findByPk(id, {include: [{ model: Detail}]});
      if (!visit) throw new ErrorObject("Visit not found", 404);
      return visit;
    } catch (error) {
      throw new ErrorObject(error.message, error.statusCode || 500);
    }
  };

  module.exports.createVisit = async (visit) => {
    try {
       const date = visit.date;
    //   const find = await User.findOne({ where: { date } });
    //   if (find) {
    //     throw new ErrorObject("date is already exists", 400);
    //   }
      await Visit.create(visit);
      return await Visit.findOne({ where: { date } });
    } catch (error) {
      throw new ErrorObject(error.message, error.statusCode || 500);
    }
  };

  exports.editVisit = async (id, props) => {
    try {
      const visit = await Visit.findByPk(id);
      if (!visit) throw new ErrorObject("Visit not found", 404);
      const result = await Visit.update(props, { where: { id } });
      return result;
    } catch (error) {
      throw new ErrorObject(error.message, error.statusCode || 500);
    }
  };

  