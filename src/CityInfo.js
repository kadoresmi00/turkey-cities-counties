const data = require('../utils/data.json').data;

module.exports = class CityInfo {
  constructor (options = {}) {
     this.findCityInfo = function (city) {
      if (!city) return 'Please enter a city name.';
      if (typeof city !== 'string') throw new TypeError('INVALID_COMMAND_TYPE: city option must be a string.');
      let x = data.find(x => x.il_adi.toLowerCase() === city.toLowerCase())
      if (!x) return null
      return { name: x.il_adi, info: x.kisa_bilgi }
    }
  }
}