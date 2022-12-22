module.exports = {
    userId: {
      isNumeric: true,
      exists: true,
      notEmpty: true,
      trim: true,
      escape: true,
    },
    date:{
        exists: true,
        notEmpty: true,
        trim: true,
        escape: true,
    },
    
  };
  