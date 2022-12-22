const { ErrorObject } = require("../helpers/error");
const { Visit, Category, Inspection} = require("../database/models");



exports.findAll = async () => {
  try {
    const visits = await Visit.findAll({include: [{model: Inspection}]});
    return visits;
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};

exports.getVisit = async (id) => {
  try {
    const visit = await Visit.findByPk(id, {include: [{model: Inspection}]});
    if (!visit) throw new ErrorObject("Visit not found", 404);
    return visit;
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};

module.exports.createVisit = async (visit) => {
  // try {
  //    const date = visit.date;
  // //   const find = await User.findOne({ where: { date } });
  // //   if (find) {
  // //     throw new ErrorObject("date is already exists", 400);
  // //   }
  //   await Visit.create(visit);
  //   return await Visit.findOne({ where: { date } });
  // } catch (error) {
  //   throw new ErrorObject(error.message, error.statusCode || 500);
  // }

  try {
    const date = visit.date;
    const find = await Visit.findOne({ where: { date }});

    if (find) {
      const visitIsOpen = find.state;
      if (visitIsOpen === true) {
        throw new ErrorObject("date is already exists and it was closed", 400);
      }
      throw new ErrorObject("date is already exists you can edit it", 400);
    }

    function createVisit (visit){
    Visit.create({userId: visit.userId, date: visit.date, state: visit.state});
    // Category.findOrCreate({
    //   where: {name: visit.name}
    // })
    }
    const createvisit = createVisit(visit)

    return await Visit.findOne({ where: { date }, include: [{ model: Inspection }] });
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
