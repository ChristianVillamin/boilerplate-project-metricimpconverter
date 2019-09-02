/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function(input) {
    var result;

    result = input
      .split('')
      .splice(0, input.search(/[a-zA-Z]/))
      .join('');

    if (result.match(/\//) && result.split('/').length > 2)
      return 'invalid number';
    if (result === '') result = '1';

    return result;
  };

  this.getUnit = function(input) {
    var result;

    result = input.slice(input.search(/[a-zA-Z]/));

    const accepted = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];

    if (accepted.filter(x => x === result.toLowerCase()).length === 0)
      return 'invalid unit';

    return result;
  };

  this.getReturnUnit = function(initUnit) {
    var result = initUnit;

    switch (result.toLowerCase()) {
      case 'l':
        result = 'gal';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'km':
        result = 'mi';
        break;
      case 'gal':
        result = 'l';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'mi':
        result = 'km';
        break;
    }

    return result;
  };

  this.spellOutUnit = function(unit) {
    var result = unit;

    switch (result.toLowerCase()) {
      case 'l':
        result = 'liter';
        break;
      case 'kg':
        result = 'kilogram';
        break;
      case 'km':
        result = 'kilometer';
        break;
      case 'gal':
        result = 'gallon';
        break;
      case 'lbs':
        result = 'pound';
        break;
      case 'mi':
        result = 'mile';
        break;
    }

    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    if (initNum.toString().match(/\//)) {
      initNum = initNum.split('/');
      initNum = parseFloat(initNum[0]) / parseFloat(initNum[1]);
    }

    switch (initUnit.toLowerCase()) {
      case 'l':
        result = initNum / galToL;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      case 'gal':
        result = initNum * galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
    }

    result = parseFloat(result.toFixed(5));

    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;

    switch (initUnit.toLowerCase()) {
      case 'l':
        initUnit = 'liter';
        returnUnit = 'gallon';
        break;
      case 'kg':
        initUnit = 'kilogram';
        returnUnit = 'pound';
        break;
      case 'km':
        initUnit = 'kilometer';
        returnUnit = 'mile';
        break;
      case 'gal':
        initUnit = 'gallon';
        returnUnit = 'liter';
        break;
      case 'lbs':
        initUnit = 'pound';
        returnUnit = 'kilogram';
        break;
      case 'mi':
        initUnit = 'mile';
        returnUnit = 'kilometer';
        break;
    }

    initUnit = initUnit + (initNum != 1 ? 's' : '');
    returnUnit = returnUnit + (returnNum != 1 ? 's' : '');

    result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;

    return result;
  };
}

module.exports = ConvertHandler;
