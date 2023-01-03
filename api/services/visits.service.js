const { ErrorObject } = require("../helpers/error");
const { Visit, Inspection, Category, Subcategory } = require("../database/models");

exports.findAll = async () => {
  try {
    const visits = await Visit.findAll({
      include: [{model: Inspection}]
  });

    return visits;
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};

exports.getVisit = async (id) => {
  try {
    const visit = await Visit.findByPk(id, {include: {model: Inspection}});
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
    // if(visit.userId !== props.userId) throw new ErrorObject("User can't edit this visit, just the author can do that", 403);
    if(visit.state === true) throw new ErrorObject(`The visit register in date: ${visit.date}, was closed`, 403);
    const result = await Visit.update(props, { where: { id } });
    constVisitUpdated =  await Visit.findByPk(id)
    console.log(constVisitUpdated.dataValues);
    return constVisitUpdated.dataValues;
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};

module.exports.getActualVisit = async () => {
  try {
   const date = new Date();
 
   const find = await Visit.findOne({ where: { date } },  {
    include: [{ model: Inspection }], 
  });
   if (find) {
     const visitOpen = Visit.findOne({ where: { date } },  {
      include: [{ model: Inspection }],
    });
   
    return visitOpen
   }
   throw new ErrorObject(error.message, error.statusCode || 404);
 } catch (error) {
   throw new ErrorObject(error.message, error.statusCode || 500);
 }
};

module.exports.getUserVisit = async (userId) => {
  //quiero ver la visita del mismo usuario a la fecha de hoy y. Abierta
  try {
   const date = new Date();
 
   const find = await Visit.findOne({ where: { date: date, userId: userId, state: false } }, {include: [{
    model: Category
  }], include: [{
    model: Subcategory
  }]});

   if (find) {
     //si existe
   
    return find
   }
   throw new ErrorObject(error.message, error.statusCode || 404);
 } catch (error) {
   throw new ErrorObject(error.message, error.statusCode || 500);
 }
};