// Создадим объект
var catalog = [{
    'id': '1',
    'name': 'ROLEX SKY-DWELLER',
    'gender': 'женский',
    'price': '30000',
    'brand': 'Rolex',
    'country': 'Швейцария',
    'mechanism': 'автоматический подзавод',
    'Colour': 'белый',
    'url': './assets/product/SCY-DEWELLER.jpg'
  },
  {
    'id': '2',
    'name': 'Orient AA02005D',
    'gender': 'мужские',
    'price': '20000',
    'brand': 'Orient',
    'country': 'Китай',
    'mechanism': 'ручной подзавод',
    'Colour': 'синий',
    'url': './assets/product/Orient - AA02005D.jpg'
  },
  {
    'id': '3',
    'name': 'G-SHOCK GMW-B5000D-1E',
    'gender': 'женский',
    'price': '3000',
    'brand': 'Casio',
    'country': 'Япония',
    'mechanism': 'кварцевый',
    'Colour': 'розовый',
    'url': './assets/product/G-SHOCK GMW-B5000D-1E.jpg'
  },
  {
    'id': '4',
    'name': 'Fossil ES3712',
    'gender': 'мужские',
    'price': '43000',
    'brand': 'Fossil',
    'country': 'Германия',
    'mechanism': 'аналоговый',
    'Colour': 'синий',
    'url': './assets/product/Fossil - ES3712.jpg'
  }
]

if (localStorage.getItem('catalog')) catalog = JSON.parse(localStorage.getItem('catalog'));
else localStorage.setItem('catalog', JSON.stringify(catalog));


