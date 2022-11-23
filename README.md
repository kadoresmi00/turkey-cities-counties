  <h1>
    <img align="left" height=40 src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Settings-512.png" />
    &nbsp;
    <span align="left">Turkey Cities Counties</span>
  </h1>

An easy module that gives detailed information about the province, district and in Turkey.

```bash
npm i @kadoresmi00/turkey-cities-counties
```

<a href="https://www.npmjs.com/package/@kadoresmi00/general-filter">![GitHub package.json version](https://img.shields.io/github/package-json/v/kadoresmi00/turkey-cities-counties?style=for-the-badge)</a>
<a href="https://www.npmjs.com/package/@kadoresmi00/general-filter">![npm](https://img.shields.io/npm/dw/@kadoresmi00/turkey-cities-counties?style=for-the-badge)</a>

**Features:**

- Shows the provinces in detail. ✅
- Shows the districts of the provinces.! ✅
- Shows license plate code. ✅
-It gives brief information about the province. ✅

# Usage

It's pretty self-explanatory… check out the examples below 😉

**City detail: true**
```js
const { City } = require("@kadoresmi00/turkey-cities-counties")

const kado = new City({ detail: true });
let x = kado.allData()
console.log(x)
// all cities
/*
[{
    name: 'İstanbul',
    state: [
      'Esenyurt',      'Küçükçekmece', 'Bağcılar',
      'Pendik',        'Ümraniye',     'Bahçelievler',
      'Üsküdar',       'Sultangazi',   'Maltepe',
      'Gaziosmanpaşa', 'Kartal',       'Kadıköy',
      'Esenler',       'Kağıthane',    'Fatih',
      'Avcılar',       'Başakşehir',   'Ataşehir',
      'Sancaktepe',    'Eyüp',         'Sarıyer',
      'Beylikdüzü',    'Sultanbeyli',  'Güngören',
      'Zeytinburnu',   'Şişli',        'Bayrampaşa',
      'Arnavutköy',    'Tuzla',        'Çekmeköy',
      'Büyükçekmece',  'Beykoz',       'Beyoğlu',
      'Bakırköy',      'Silivri',      'Beşiktaş',
      'Çatalca',       'Şile',         'Adalar'
    ],
    numberPlate: '34',
    areaCode: '212-216',
    population: '15.067.724',
    area: 'Marmara',
    acreage: '5.461',
    malePopulationPercentage: '50,06%',
    femalePopulationPercentage: '49,94%'
  },
  ....
  ]

*/

```

**City detail: false**

```js
const { City } = require("@kadoresmi00/turkey-cities-counties")

const kado = new City({ detail: false }); // 
let x = kado.allData()
console.log(x)
// all cities
/*
  [{
    name: 'Osmaniye',
    state: [
      'Merkez',
      'Kadirli',
      'Düziçi',
      'Bahçe',
      'Toprakkale',
      'Sumbas',
      'Hasanbeyli'
    ]
  },
  {
    name: 'Düzce',
    state: [
      'Merkez',   'Akçakoca',
      'Kaynaşlı', 'Gölyaka',
      'Çilimli',  'Yığılca',
      'Gümüşova', 'Cumayeri'
    ]
  },
  ......
]
*/

```
**City Search detail: false**

```js
const { City } = require("@kadoresmi00/turkey-cities-counties")

const kado = new City({ detail: false }); 
let x = kado.findCity('Ankara')
console.log(x)
/*
{
  name: 'Ankara',
  state: [
    'Çankaya',         'Keçiören',
    'Yenimahalle',     'Mamak',
    'Etimesgut',       'Sincan',
    'Altındağ',        'Pursaklar',
    'Gölbaşı',         'Polatlı',
    'Çubuk',           'Kahramankazan',
    'Beypazarı',       'Haymana',
    'Elmadağ',         'Akyurt',
    'Şereflikoçhisar', 'Bala',
    'Kızılcahamam',    'Nallıhan',
    'Ayaş',            'Çamlıdere',
    'Kalecik',         'Güdül',
    'Evren'
  ]
}
*/

```
**City Search detail: true**

```js
const { City } = require("@kadoresmi00/turkey-cities-counties")

const kado = new City({ detail: true }); 
let x = kado.findCity('Ankara')
console.log(x)
/*
{
  name: 'Ankara',
  state: [
    'Çankaya',         'Keçiören',
    'Yenimahalle',     'Mamak',
    'Etimesgut',       'Sincan',
    'Altındağ',        'Pursaklar',
    'Gölbaşı',         'Polatlı',
    'Çubuk',           'Kahramankazan',
    'Beypazarı',       'Haymana',
    'Elmadağ',         'Akyurt',
    'Şereflikoçhisar', 'Bala',
    'Kızılcahamam',    'Nallıhan',
    'Ayaş',            'Çamlıdere',
    'Kalecik',         'Güdül',
    'Evren'
  ],
  numberPlate: '06',
  areaCode: '312',
  population: '5.503.985',
  area: 'İç Anadolu',
  acreage: '25.632',
  malePopulationPercentage: '49,58%',
  femalePopulationPercentage: '50,42%'
}
*/

```

**City Number Plate**

```js
const { NumberPlate } = require("@kadoresmi00/turkey-cities-counties")

const kado = new NumberPlate(); 
let x = kado.allData()
console.log(x)
/*
[
  { name: 'Adana', numberPlate: ' 01' },
  { name: 'Adıyaman', numberPlate: '02' },
  { name: 'Afyonkarahisar', numberPlate: '03' },
  { name: 'Ağrı', numberPlate: '04' },
  { name: 'Amasya', numberPlate: '05' },
  { name: 'Ankara', numberPlate: '06' },
  ....
  ]
*/

```
**City Number Plate Search**

```js
const { NumberPlate } = require("@kadoresmi00/turkey-cities-counties")

const kado = new NumberPlate(); 
let x = kado.findNumber(34) // number
console.log(x)
/*
 { name: 'İstanbul', numberPlate: '34' }
*/

```

**Region Info**

```js
const { Region } = require("@kadoresmi00/turkey-cities-counties")

const kado = new Region(); 
let x = kado.allData() 
console.log(x)
/*
 [{
  marmara: [
    'Balıkesir', 'Bilecik',
    'Bursa',     'Edirne',
    'İstanbul',  'Kırklareli',
    'Kocaeli',   'Sakarya',
    'Tekirdağ',  'Yalova'
  ],
  ege: [
    'Afyonkarahisar',
    'Aydın',
    'Çanakkale',
    'Denizli',
    'İzmir',
    'Manisa',
    'Muğla',
    'Uşak'
  ],
  .....
  }]
*/

```

**Region Info Search**

```js
const { Region } = require("@kadoresmi00/turkey-cities-counties")

const kado = new Region(); 
let x = kado.find("Akdeniz")
console.log(x)
/*
[
  'Adana',
  'Antalya',
  'Burdur',
  'Isparta',
  'Mersin',
  'Kahramanmaraş',
  'Osmaniye'
]
*/

```
**City - Region Info Search**

```js
const { Region } = require("@kadoresmi00/turkey-cities-counties")

const kado = new Region(); 
let x = kado.findCity("İstanbul")
console.log(x)
/*
 { name: 'İstanbul', region: 'Marmara' }
*/

```

**City İnfo**

```js
const { CityInfo } = require("@kadoresmi00/turkey-cities-counties")

const kado = new CityInfo(); 
let x = kado.findCityInfo("Ankara")
console.log(x)
/*
 {
  name: 'Ankara',
  info: "Bolu, Çankırı, Kırıkkale, Kırşehir, Aksaray, Konya ve Eskişehir illeri ile çevrili ve Türkiye'nin başkenti Ankara, Cumhuriyetin kuruluşundan bu yana hızla gelişme göstermiştir. Şehrin amblemi, Hitit uygarlığının da simgesi olan Hitit Güneş Kursu'dur."
}
*/

```


## NPM
**Link**
- [Click](https://www.npmjs.com/package/@kadoresmi00/turkey-cities-counties)
