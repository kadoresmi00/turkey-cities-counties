const data = require('../utils/data.json').data;

module.exports = class NumberPlate {
  constructor (options = {}) {

    this.allData = function () {
      let x = data.map(city => {
        return { name: city.il_adi, numberPlate: city.plaka_kodu }
      })
      return x
    }

    this.findNumber = function (code) {
      if (!code) return 'Please enter a city name.';
      if (typeof code !== 'number') throw new TypeError('INVALID_COMMAND_TYPE: city option must be a number.');
      if (code < 1 || code > 81) return 'Please enter a valid city code.';
      let x = data.find(x => x.plaka_kodu === code.toString())
      if (!x) return null
      return { name: x.il_adi, numberPlate: x.plaka_kodu }
    }

  }
}