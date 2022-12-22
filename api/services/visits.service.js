const { ErrorObject } = require("../helpers/error");
const { Visit, Category, Inspection } = require("../database/models");

exports.findAll = async () => {
  try {
    const visits = await Visit.findAll({ include: [{ model: Inspection }] });
    return visits;
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};

exports.getVisit = async (id) => {
  try {
    const visit = await Visit.findByPk(id, {
      include: [{ model: Inspection }],
    });
    if (!visit) throw new ErrorObject("Visit not found", 404);
    return visit;
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};

module.exports.createVisit = async (visit) => {
   try {
    const date = visit.date;
    const find = await Visit.findOne({ where: { date } });
    if (find) {
      const visitOpen = Visit.findOne({ where: { date } });
      if (visitOpen == true) {
        throw new ErrorObject(
          "date is already exists and is open, you can edit it",
          400
        );
      }
      throw new ErrorObject("date is already exists and was closed", 400);
    }
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
    if(visit.userId !== props.userId) throw new ErrorObject("User can't edit this visit, just the author can do that", 403);
    if(visit.state === true) throw new ErrorObject(`The visit register in date: ${visit.date}, was closed`, 403);
    const result = await Visit.update(props, { where: { id } });
    return result;
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};
