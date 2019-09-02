/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function(app) {
  var convertHandler = new ConvertHandler();

  app.route('/api/convert').get(function(req, res) {
    var input = req.query.input;
    var initNum = convertHandler.getNum(input);
    var initUnit = convertHandler.getUnit(input);

    let invalidNum = false;
    let invalidUnit = false;

    if (initNum === 'invalid number') invalidNum = true;
    if (initUnit === 'invalid unit') invalidUnit = true;

    if (invalidNum && invalidUnit) {
      return res.json({ string: 'invalid number and unit' });
    } else if (invalidNum) {
      return res.json({ string: 'invalid number' });
    } else if (invalidUnit) {
      return res.json({ string: 'invalid unit' });
    }

    var returnNum = convertHandler.convert(initNum, initUnit);
    var returnUnit = convertHandler.getReturnUnit(initUnit);
    var toString = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit
    );

    return res.json({
      initNum,
      initUnit,
      returnNum,
      returnUnit,
      string: toString
    });
  });
};
