const data = require('../utils/data.json').data;

module.exports = class Region {
  constructor (options = {}) {

    this.allData = function () {
      return {
        marmara: data.filter(item => item.bolge.toLowerCase() === 'marmara').map(item => item.il_adi),
        ege: data.filter(item => item.bolge.toLowerCase() === 'ege').map(item => item.il_adi),
        akdeniz: data.filter(item => item.bolge.toLowerCase() === 'akdeniz').map(item => item.il_adi),
        icanadolu: data.filter(item => item.bolge.toLowerCase() === 'i̇ç anadolu').map(item => item.il_adi),
        doguanadolu: data.filter(item => item.bolge.toLowerCase() === 'doğu anadolu').map(item => item.il_adi),
        guneydoguanadolu: data.filter(item => item.bolge.toLowerCase() === 'güneydoğu anadolu').map(item => item.il_adi),
        karadeniz: data.filter(item => item.bolge.toLowerCase() === 'karadeniz').map(item => item.il_adi),
      }
    }

    this.find = function (region) {
      let _data = data.filter(item => item.bolge.toLowerCase() === region.toLowerCase()).map(item => item.il_adi);
      if (_data.length === 0) {
        return null;
      } else {
        return _data;
      }
    }
    this.findCity = function (city) {
      let _data = data.find(x => x.il_adi.toLowerCase() === city.toLowerCase())
      if (_data.length === 0) {
        return null;
      } else {
        return { name: _data.il_adi, region: _data.bolge };
      }
    }
  }
}