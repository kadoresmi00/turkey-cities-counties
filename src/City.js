const data = require('../utils/data.json').data;

module.exports = class City {
  constructor (options = { detail }) {
    if (!options) throw new TypeError('Edit your object in detail and without detail. Example: { detail: true }');
    if (typeof options.detail !== 'boolean') throw new TypeError('INVALID_COMMAND_TYPE: detail option must be a boolean.');
    this.detail = options.detail;

    this.allData = function () {
      let x = data.map(city => {
        if (this.detail) {
          return { name: city.il_adi, state: city.ilceler.map(state => state.ilce_adi), numberPlate: city.plaka_kodu, areaCode: city.alan_kodu, population: city.nufus, area: city.bolge, acreage: city.yuzolcumu, malePopulationPercentage: city.erkek_nufus_yuzde, femalePopulationPercentage: city.kadin_nufus_yuzde }
        } else {
          return { name: city.il_adi, state: city.ilceler.map(state => state.ilce_adi) }
        }
      })
      return x
    }

    this.findCity = function (city) {
      if (!city) return 'Please enter a city name.';
      if (typeof city !== 'string') throw new TypeError('INVALID_COMMAND_TYPE: city option must be a string.');
      let x = data.find(x => x.il_adi.toLowerCase() === city.toLowerCase())
      if (!x) return null
      if (this.detail) {
        return { name: x.il_adi, state: x.ilceler.map(state => state.ilce_adi), numberPlate: x.plaka_kodu, areaCode: x.alan_kodu, population: x.nufus, area: x.bolge, acreage: x.yuzolcumu, malePopulationPercentage: x.erkek_nufus_yuzde, femalePopulationPercentage: x.kadin_nufus_yuzde }
      } else {
        return { name: x.il_adi, state: x.ilceler.map(state => state.ilce_adi) }
      }
    }

  }
}