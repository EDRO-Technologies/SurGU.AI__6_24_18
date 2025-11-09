import type { Customer } from './types';

export const mockCustomers2: Customer[] = [
  {
    'client_id': 101,
    'first_name': 'Радован',
    'last_name': 'Евдокимова',
    'phone_number': '8 976 621 8904',
    'email': 'ernstshilov@ao.com',
    'purchases': [
      {
        'date': '2023-05-06',
        'price': 4045,
        'category': 'electronics',
        'product_name': 'Наушники'
      },
      {
        'date': '2023-12-04',
        'price': 14345,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      },
      {
        'date': '2024-03-17',
        'price': 14419,
        'category': 'electronics',
        'product_name': 'Планшет'
      }
    ],
    'features': {
      'avg_check': 10936,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 2,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'accessories',
        'electronics'
      ]
    },
    'purchase_probability': 0.65,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Радован Евдокимова новые товары из категории electronics. Вероятность покупки высокая (0.65).'
  },
  {
    'client_id': 102,
    'first_name': 'Максимильян',
    'last_name': 'Никифорова',
    'phone_number': '8 (376) 147-79-49',
    'email': 'aggekrjukov@mail.ru',
    'purchases': [
      {
        'date': '2023-10-16',
        'price': 6544,
        'category': 'sports',
        'product_name': 'Гантели'
      },
      {
        'date': '2024-04-11',
        'price': 5757,
        'category': 'sports',
        'product_name': 'Гантели'
      },
      {
        'date': '2023-10-29',
        'price': 10354,
        'category': 'beauty',
        'product_name': 'Парфюм'
      }
    ],
    'features': {
      'avg_check': 7551,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 23,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'sports',
        'beauty'
      ]
    },
    'purchase_probability': 0.83,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Максимильян Никифорова новые товары из категории beauty. Вероятность покупки высокая (0.83).'
  },
  {
    'client_id': 103,
    'first_name': 'Евдокия',
    'last_name': 'Мартынов',
    'phone_number': '+7 (829) 032-05-31',
    'email': 'hlazareva@ooo.info',
    'purchases': [
      {
        'date': '2023-07-30',
        'price': 5424,
        'category': 'accessories',
        'product_name': 'Кабель'
      },
      {
        'date': '2024-02-10',
        'price': 1388,
        'category': 'beauty',
        'product_name': 'Помада'
      },
      {
        'date': '2024-03-14',
        'price': 1520,
        'category': 'beauty',
        'product_name': 'Парфюм'
      }
    ],
    'features': {
      'avg_check': 2777,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 16,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'accessories',
        'beauty'
      ]
    },
    'purchase_probability': 0.72,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Евдокия Мартынов новые товары из категории accessories. Вероятность покупки высокая (0.72).'
  },
  {
    'client_id': 104,
    'first_name': 'Максимильян',
    'last_name': 'Нестерова',
    'phone_number': '8 406 242 8598',
    'email': 'voronovradovan@ao.edu',
    'purchases': [
      {
        'date': '2023-06-19',
        'price': 7406,
        'category': 'sports',
        'product_name': 'Кроссовки'
      },
      {
        'date': '2023-06-25',
        'price': 2799,
        'category': 'sports',
        'product_name': 'Кроссовки'
      },
      {
        'date': '2024-04-21',
        'price': 11198,
        'category': 'sports',
        'product_name': 'Футболка'
      }
    ],
    'features': {
      'avg_check': 7134,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 112,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'books',
        'sports'
      ]
    },
    'purchase_probability': 0.89,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Максимильян Нестерова новые товары из категории sports. Вероятность покупки высокая (0.89).'
  },
  {
    'client_id': 105,
    'first_name': 'Симон',
    'last_name': 'Лапина',
    'phone_number': '8 (751) 181-23-66',
    'email': 'jefimova@hotmail.com',
    'purchases': [
      {
        'date': '2023-03-15',
        'price': 3101,
        'category': 'beauty',
        'product_name': 'Шампунь'
      },
      {
        'date': '2023-10-03',
        'price': 1379,
        'category': 'accessories',
        'product_name': 'Чехол'
      },
      {
        'date': '2023-11-10',
        'price': 9499,
        'category': 'beauty',
        'product_name': 'Парфюм'
      }
    ],
    'features': {
      'avg_check': 4659,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 9,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'accessories',
        'beauty'
      ]
    },
    'purchase_probability': 0.89,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Симон Лапина новые товары из категории beauty. Вероятность покупки высокая (0.89).'
  },
  {
    'client_id': 106,
    'first_name': 'Севастьян',
    'last_name': 'Поляков',
    'phone_number': '+7 431 166 25 21',
    'email': 'lavrenti2000@saveleva.com',
    'purchases': [
      {
        'date': '2023-12-17',
        'price': 9845,
        'category': 'accessories',
        'product_name': 'Кабель'
      },
      {
        'date': '2023-07-23',
        'price': 13956,
        'category': 'electronics',
        'product_name': 'Монитор'
      },
      {
        'date': '2024-08-19',
        'price': 7006,
        'category': 'accessories',
        'product_name': 'Зарядка'
      }
    ],
    'features': {
      'avg_check': 10269,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 69,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'electronics',
        'accessories'
      ]
    },
    'purchase_probability': 0.79,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Севастьян Поляков новые товары из категории accessories. Вероятность покупки высокая (0.79).'
  },
  {
    'client_id': 107,
    'first_name': 'Исидор',
    'last_name': 'Осипов',
    'phone_number': '8 (780) 382-30-89',
    'email': 'kostinaaleksandra@vorontsova.biz',
    'purchases': [
      {
        'date': '2023-03-24',
        'price': 14690,
        'category': 'beauty',
        'product_name': 'Маска'
      },
      {
        'date': '2023-12-11',
        'price': 1429,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      },
      {
        'date': '2023-10-16',
        'price': 13902,
        'category': 'electronics',
        'product_name': 'Монитор'
      }
    ],
    'features': {
      'avg_check': 10007,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 117,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'beauty',
        'electronics'
      ]
    },
    'purchase_probability': 0.61,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Исидор Осипов новые товары из категории beauty. Вероятность покупки высокая (0.61).'
  },
  {
    'client_id': 108,
    'first_name': 'Полина',
    'last_name': 'Капустина',
    'phone_number': '8 499 352 4754',
    'email': 'osipovsvjatopolk@ao.edu',
    'purchases': [
      {
        'date': '2023-11-10',
        'price': 9181,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      },
      {
        'date': '2023-12-18',
        'price': 3508,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      },
      {
        'date': '2024-02-02',
        'price': 582,
        'category': 'accessories',
        'product_name': 'Кабель'
      }
    ],
    'features': {
      'avg_check': 4423,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 33,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'beauty',
        'accessories'
      ]
    },
    'purchase_probability': 0.83,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Полина Капустина новые товары из категории beauty. Вероятность покупки высокая (0.83).'
  },
  {
    'client_id': 109,
    'first_name': 'Ратибор',
    'last_name': 'Рожкова',
    'phone_number': '8 276 442 50 05',
    'email': 'tretjakovrjurik@ooo.com',
    'purchases': [
      {
        'date': '2023-11-08',
        'price': 9714,
        'category': 'sports',
        'product_name': 'Шорты'
      },
      {
        'date': '2023-10-21',
        'price': 10924,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2024-01-18',
        'price': 7163,
        'category': 'books',
        'product_name': 'Роман'
      }
    ],
    'features': {
      'avg_check': 9267,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 53,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'books',
        'sports'
      ]
    },
    'purchase_probability': 0.52,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Ратибор Рожкова новые товары из категории books. Вероятность покупки высокая (0.52).'
  },
  {
    'client_id': 110,
    'first_name': 'Яков',
    'last_name': 'Лобанова',
    'phone_number': '8 (649) 606-2469',
    'email': 'sidorovermil@belousov.com',
    'purchases': [
      {
        'date': '2023-07-22',
        'price': 13079,
        'category': 'sports',
        'product_name': 'Кроссовки'
      },
      {
        'date': '2023-07-28',
        'price': 966,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2024-07-15',
        'price': 13677,
        'category': 'books',
        'product_name': 'Детектив'
      }
    ],
    'features': {
      'avg_check': 9240,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 42,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'sports',
        'books'
      ]
    },
    'purchase_probability': 0.61,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Яков Лобанова новые товары из категории sports. Вероятность покупки высокая (0.61).'
  },
  {
    'client_id': 111,
    'first_name': 'Ефрем',
    'last_name': 'Хохлова',
    'phone_number': '+7 314 813 79 91',
    'email': 'timofe_1975@rambler.ru',
    'purchases': [
      {
        'date': '2023-03-28',
        'price': 1644,
        'category': 'beauty',
        'product_name': 'Маска'
      },
      {
        'date': '2024-05-05',
        'price': 5083,
        'category': 'beauty',
        'product_name': 'Маска'
      },
      {
        'date': '2024-06-09',
        'price': 2837,
        'category': 'sports',
        'product_name': 'Кроссовки'
      }
    ],
    'features': {
      'avg_check': 3188,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 63,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'sports',
        'beauty'
      ]
    },
    'purchase_probability': 0.51,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Ефрем Хохлова новые товары из категории sports. Вероятность покупки высокая (0.51).'
  },
  {
    'client_id': 112,
    'first_name': 'Анжела',
    'last_name': 'Брагин',
    'phone_number': '8 871 812 9439',
    'email': 'yfilatova@otp.net',
    'purchases': [
      {
        'date': '2023-02-09',
        'price': 7293,
        'category': 'sports',
        'product_name': 'Кроссовки'
      },
      {
        'date': '2023-07-29',
        'price': 2222,
        'category': 'books',
        'product_name': 'Фантастика'
      },
      {
        'date': '2024-04-02',
        'price': 7828,
        'category': 'books',
        'product_name': 'Фантастика'
      }
    ],
    'features': {
      'avg_check': 5781,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 13,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'books',
        'sports'
      ]
    },
    'purchase_probability': 0.67,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Анжела Брагин новые товары из категории books. Вероятность покупки высокая (0.67).'
  },
  {
    'client_id': 113,
    'first_name': 'Климент',
    'last_name': 'Дьячков',
    'phone_number': '8 (072) 831-8287',
    'email': 'nikolaevfilimon@slavjansk.info',
    'purchases': [
      {
        'date': '2023-05-25',
        'price': 8832,
        'category': 'sports',
        'product_name': 'Кроссовки'
      },
      {
        'date': '2023-10-30',
        'price': 605,
        'category': 'sports',
        'product_name': 'Кроссовки'
      },
      {
        'date': '2023-11-15',
        'price': 11142,
        'category': 'accessories',
        'product_name': 'Чехол'
      }
    ],
    'features': {
      'avg_check': 6859,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 41,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'sports',
        'accessories'
      ]
    },
    'purchase_probability': 0.87,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Климент Дьячков новые товары из категории sports. Вероятность покупки высокая (0.87).'
  },
  {
    'client_id': 114,
    'first_name': 'Игнатий',
    'last_name': 'Куликова',
    'phone_number': '+76674473801',
    'email': 'mihalovvalerjan@yahoo.com',
    'purchases': [
      {
        'date': '2023-09-08',
        'price': 14490,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2024-05-15',
        'price': 2230,
        'category': 'books',
        'product_name': 'Детектив'
      },
      {
        'date': '2024-02-28',
        'price': 7156,
        'category': 'books',
        'product_name': 'Учебник'
      }
    ],
    'features': {
      'avg_check': 7958,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 115,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'sports',
        'books'
      ]
    },
    'purchase_probability': 0.66,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Игнатий Куликова новые товары из категории books. Вероятность покупки высокая (0.66).'
  },
  {
    'client_id': 115,
    'first_name': 'Виктор',
    'last_name': 'Тетерина',
    'phone_number': '8 (590) 265-3584',
    'email': 'filatovanatalja@hotmail.com',
    'purchases': [
      {
        'date': '2023-02-03',
        'price': 11100,
        'category': 'sports',
        'product_name': 'Кроссовки'
      },
      {
        'date': '2023-09-11',
        'price': 708,
        'category': 'beauty',
        'product_name': 'Парфюм'
      },
      {
        'date': '2024-04-04',
        'price': 10420,
        'category': 'sports',
        'product_name': 'Кроссовки'
      }
    ],
    'features': {
      'avg_check': 7409,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 54,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'sports',
        'beauty'
      ]
    },
    'purchase_probability': 0.85,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Виктор Тетерина новые товары из категории beauty. Вероятность покупки высокая (0.85).'
  },
  {
    'client_id': 116,
    'first_name': 'Гремислав',
    'last_name': 'Овчинников',
    'phone_number': '+76830529312',
    'email': 'panfilavdeev@vertoleti.edu',
    'purchases': [
      {
        'date': '2023-04-24',
        'price': 5811,
        'category': 'accessories',
        'product_name': 'Чехол'
      },
      {
        'date': '2023-12-03',
        'price': 13609,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2024-02-23',
        'price': 2331,
        'category': 'accessories',
        'product_name': 'Кабель'
      }
    ],
    'features': {
      'avg_check': 7250,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 33,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'books',
        'accessories'
      ]
    },
    'purchase_probability': 0.94,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Гремислав Овчинников новые товары из категории books. Вероятность покупки высокая (0.94).'
  },
  {
    'client_id': 117,
    'first_name': 'Валентин',
    'last_name': 'Калинин',
    'phone_number': '8 (610) 026-94-34',
    'email': 'vladilenodintsov@rusenergoresurs.org',
    'purchases': [
      {
        'date': '2023-04-05',
        'price': 7783,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2023-11-10',
        'price': 1326,
        'category': 'sports',
        'product_name': 'Гантели'
      },
      {
        'date': '2024-01-05',
        'price': 2141,
        'category': 'sports',
        'product_name': 'Гантели'
      }
    ],
    'features': {
      'avg_check': 3750,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 54,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'electronics',
        'sports'
      ]
    },
    'purchase_probability': 0.84,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Валентин Калинин новые товары из категории sports. Вероятность покупки высокая (0.84).'
  },
  {
    'client_id': 118,
    'first_name': 'Потап',
    'last_name': 'Кузнецова',
    'phone_number': '+7 675 974 79 71',
    'email': 'mihe92@mail.ru',
    'purchases': [
      {
        'date': '2023-06-23',
        'price': 10271,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      },
      {
        'date': '2023-07-20',
        'price': 8824,
        'category': 'beauty',
        'product_name': 'Парфюм'
      },
      {
        'date': '2023-10-07',
        'price': 9532,
        'category': 'beauty',
        'product_name': 'Шампунь'
      }
    ],
    'features': {
      'avg_check': 9542,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 78,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'accessories',
        'beauty'
      ]
    },
    'purchase_probability': 0.92,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Потап Кузнецова новые товары из категории accessories. Вероятность покупки высокая (0.92).'
  },
  {
    'client_id': 119,
    'first_name': 'Акулина',
    'last_name': 'Хохлова',
    'phone_number': '+70845367892',
    'email': 'sbeljakova@ovchinnikov.edu',
    'purchases': [
      {
        'date': '2023-09-29',
        'price': 1254,
        'category': 'sports',
        'product_name': 'Гантели'
      },
      {
        'date': '2023-11-11',
        'price': 8334,
        'category': 'sports',
        'product_name': 'Гантели'
      },
      {
        'date': '2024-07-08',
        'price': 6303,
        'category': 'sports',
        'product_name': 'Шорты'
      }
    ],
    'features': {
      'avg_check': 5297,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 93,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'sports',
        'electronics'
      ]
    },
    'purchase_probability': 0.73,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Акулина Хохлова новые товары из категории sports. Вероятность покупки высокая (0.73).'
  },
  {
    'client_id': 120,
    'first_name': 'Велимир',
    'last_name': 'Самсонова',
    'phone_number': '82793962348',
    'email': 'onufri_2013@yandex.ru',
    'purchases': [
      {
        'date': '2023-03-21',
        'price': 4347,
        'category': 'electronics',
        'product_name': 'Планшет'
      },
      {
        'date': '2024-02-10',
        'price': 1850,
        'category': 'electronics',
        'product_name': 'Планшет'
      },
      {
        'date': '2023-12-28',
        'price': 11452,
        'category': 'books',
        'product_name': 'Роман'
      }
    ],
    'features': {
      'avg_check': 5883,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 110,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'books',
        'electronics'
      ]
    },
    'purchase_probability': 0.58,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Велимир Самсонова новые товары из категории electronics. Вероятность покупки высокая (0.58).'
  },
  {
    'client_id': 121,
    'first_name': 'Дмитрий',
    'last_name': 'Киселева',
    'phone_number': '8 832 475 9972',
    'email': 'zinovi_1973@nefteprodukttred.biz',
    'purchases': [
      {
        'date': '2023-06-27',
        'price': 12655,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2024-02-24',
        'price': 8329,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2023-08-12',
        'price': 3834,
        'category': 'sports',
        'product_name': 'Мяч'
      }
    ],
    'features': {
      'avg_check': 8272,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 111,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'electronics',
        'sports'
      ]
    },
    'purchase_probability': 0.69,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Дмитрий Киселева новые товары из категории electronics. Вероятность покупки высокая (0.69).'
  },
  {
    'client_id': 122,
    'first_name': 'Вячеслав',
    'last_name': 'Комарова',
    'phone_number': '8 689 831 12 04',
    'email': 'selivan2002@grishina.ru',
    'purchases': [
      {
        'date': '2023-10-28',
        'price': 8989,
        'category': 'books',
        'product_name': 'Учебник'
      },
      {
        'date': '2024-02-09',
        'price': 6173,
        'category': 'books',
        'product_name': 'Детектив'
      },
      {
        'date': '2024-02-11',
        'price': 1080,
        'category': 'electronics',
        'product_name': 'Планшет'
      }
    ],
    'features': {
      'avg_check': 5414,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 15,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'books',
        'electronics'
      ]
    },
    'purchase_probability': 0.89,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Вячеслав Комарова новые товары из категории electronics. Вероятность покупки высокая (0.89).'
  },
  {
    'client_id': 123,
    'first_name': 'Вера',
    'last_name': 'Громова',
    'phone_number': '8 (838) 314-9803',
    'email': 'djachkovpanfil@rao.biz',
    'purchases': [
      {
        'date': '2023-12-08',
        'price': 14046,
        'category': 'beauty',
        'product_name': 'Маска'
      },
      {
        'date': '2023-10-29',
        'price': 11221,
        'category': 'beauty',
        'product_name': 'Помада'
      },
      {
        'date': '2023-12-15',
        'price': 10854,
        'category': 'beauty',
        'product_name': 'Шампунь'
      }
    ],
    'features': {
      'avg_check': 12040,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 114,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'beauty',
        'books'
      ]
    },
    'purchase_probability': 0.58,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Вера Громова новые товары из категории books. Вероятность покупки высокая (0.58).'
  },
  {
    'client_id': 124,
    'first_name': 'Макар',
    'last_name': 'Зыков',
    'phone_number': '+76873629591',
    'email': 'handreev@hotmail.com',
    'purchases': [
      {
        'date': '2023-10-20',
        'price': 1912,
        'category': 'beauty',
        'product_name': 'Крем'
      },
      {
        'date': '2024-01-18',
        'price': 9400,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2024-02-29',
        'price': 10110,
        'category': 'beauty',
        'product_name': 'Крем'
      }
    ],
    'features': {
      'avg_check': 7140,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 81,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'beauty',
        'books'
      ]
    },
    'purchase_probability': 0.72,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Макар Зыков новые товары из категории beauty. Вероятность покупки высокая (0.72).'
  },
  {
    'client_id': 125,
    'first_name': 'Ия',
    'last_name': 'Романов',
    'phone_number': '88984088630',
    'email': 'ruben_2004@ip.org',
    'purchases': [
      {
        'date': '2023-07-14',
        'price': 7503,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2023-06-29',
        'price': 6315,
        'category': 'books',
        'product_name': 'Учебник'
      },
      {
        'date': '2023-11-22',
        'price': 14023,
        'category': 'sports',
        'product_name': 'Мяч'
      }
    ],
    'features': {
      'avg_check': 9280,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 55,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'sports',
        'books'
      ]
    },
    'purchase_probability': 0.58,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Ия Романов новые товары из категории sports. Вероятность покупки высокая (0.58).'
  },
  {
    'client_id': 126,
    'first_name': 'Епифан',
    'last_name': 'Миронова',
    'phone_number': '+7 188 254 69 95',
    'email': 'erofekulakov@rambler.ru',
    'purchases': [
      {
        'date': '2023-02-17',
        'price': 7008,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2023-12-30',
        'price': 13959,
        'category': 'sports',
        'product_name': 'Шорты'
      },
      {
        'date': '2023-12-24',
        'price': 8694,
        'category': 'accessories',
        'product_name': 'Мышь'
      }
    ],
    'features': {
      'avg_check': 9887,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 2,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'accessories',
        'sports'
      ]
    },
    'purchase_probability': 0.55,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Епифан Миронова новые товары из категории accessories. Вероятность покупки высокая (0.55).'
  },
  {
    'client_id': 127,
    'first_name': 'Филарет',
    'last_name': 'Капустина',
    'phone_number': '+7 128 191 60 11',
    'email': 'budimir_1971@oao.ru',
    'purchases': [
      {
        'date': '2023-04-05',
        'price': 1893,
        'category': 'books',
        'product_name': 'Фантастика'
      },
      {
        'date': '2023-12-26',
        'price': 6593,
        'category': 'books',
        'product_name': 'Фантастика'
      },
      {
        'date': '2024-06-06',
        'price': 14952,
        'category': 'beauty',
        'product_name': 'Маска'
      }
    ],
    'features': {
      'avg_check': 7812,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 113,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'books',
        'beauty'
      ]
    },
    'purchase_probability': 0.89,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Филарет Капустина новые товары из категории beauty. Вероятность покупки высокая (0.89).'
  },
  {
    'client_id': 128,
    'first_name': 'Вероника',
    'last_name': 'Петров',
    'phone_number': '+74186211924',
    'email': 'averki_69@ooo.biz',
    'purchases': [
      {
        'date': '2023-12-11',
        'price': 4790,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2023-11-02',
        'price': 10938,
        'category': 'beauty',
        'product_name': 'Парфюм'
      },
      {
        'date': '2024-08-24',
        'price': 5739,
        'category': 'sports',
        'product_name': 'Шорты'
      }
    ],
    'features': {
      'avg_check': 7155,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 68,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'beauty',
        'sports'
      ]
    },
    'purchase_probability': 0.84,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Вероника Петров новые товары из категории sports. Вероятность покупки высокая (0.84).'
  },
  {
    'client_id': 129,
    'first_name': 'Милий',
    'last_name': 'Коновалов',
    'phone_number': '+7 (131) 032-5254',
    'email': 'petr_69@rambler.ru',
    'purchases': [
      {
        'date': '2023-07-23',
        'price': 5657,
        'category': 'accessories',
        'product_name': 'Мышь'
      },
      {
        'date': '2023-12-13',
        'price': 2559,
        'category': 'beauty',
        'product_name': 'Помада'
      },
      {
        'date': '2023-12-16',
        'price': 2315,
        'category': 'beauty',
        'product_name': 'Крем'
      }
    ],
    'features': {
      'avg_check': 3510,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 7,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'beauty',
        'accessories'
      ]
    },
    'purchase_probability': 0.79,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Милий Коновалов новые товары из категории beauty. Вероятность покупки высокая (0.79).'
  },
  {
    'client_id': 130,
    'first_name': 'Авксентий',
    'last_name': 'Громова',
    'phone_number': '+7 (780) 575-61-31',
    'email': 'pestovhristofor@ip.biz',
    'purchases': [
      {
        'date': '2023-11-02',
        'price': 12576,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2023-12-02',
        'price': 6541,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2023-11-15',
        'price': 12690,
        'category': 'books',
        'product_name': 'Роман'
      }
    ],
    'features': {
      'avg_check': 10602,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 82,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'books',
        'electronics'
      ]
    },
    'purchase_probability': 0.53,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Авксентий Громова новые товары из категории electronics. Вероятность покупки высокая (0.53).'
  },
  {
    'client_id': 131,
    'first_name': 'Варлаам',
    'last_name': 'Самсонов',
    'phone_number': '87643094038',
    'email': 'nikola_62@yahoo.com',
    'purchases': [
      {
        'date': '2023-04-16',
        'price': 12236,
        'category': 'beauty',
        'product_name': 'Шампунь'
      },
      {
        'date': '2024-01-30',
        'price': 1563,
        'category': 'beauty',
        'product_name': 'Помада'
      },
      {
        'date': '2024-10-24',
        'price': 5900,
        'category': 'beauty',
        'product_name': 'Шампунь'
      }
    ],
    'features': {
      'avg_check': 6566,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 49,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'beauty',
        'electronics'
      ]
    },
    'purchase_probability': 0.84,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Варлаам Самсонов новые товары из категории beauty. Вероятность покупки высокая (0.84).'
  },
  {
    'client_id': 132,
    'first_name': 'Елизавета',
    'last_name': 'Федосеева',
    'phone_number': '+7 (778) 818-98-16',
    'email': 'makarovizmail@hotmail.com',
    'purchases': [
      {
        'date': '2023-07-07',
        'price': 4847,
        'category': 'electronics',
        'product_name': 'Монитор'
      },
      {
        'date': '2024-01-24',
        'price': 13902,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2024-01-25',
        'price': 5447,
        'category': 'sports',
        'product_name': 'Шорты'
      }
    ],
    'features': {
      'avg_check': 8065,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 109,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'sports',
        'electronics'
      ]
    },
    'purchase_probability': 0.66,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Елизавета Федосеева новые товары из категории electronics. Вероятность покупки высокая (0.66).'
  },
  {
    'client_id': 133,
    'first_name': 'Ефим',
    'last_name': 'Овчинников',
    'phone_number': '8 073 778 1412',
    'email': 'mishinalukija@ooo.info',
    'purchases': [
      {
        'date': '2023-08-03',
        'price': 14440,
        'category': 'electronics',
        'product_name': 'Наушники'
      },
      {
        'date': '2024-01-02',
        'price': 6676,
        'category': 'accessories',
        'product_name': 'Чехол'
      },
      {
        'date': '2024-03-21',
        'price': 4573,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      }
    ],
    'features': {
      'avg_check': 8563,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 32,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'electronics',
        'accessories'
      ]
    },
    'purchase_probability': 0.5,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Ефим Овчинников новые товары из категории electronics. Вероятность покупки высокая (0.5).'
  },
  {
    'client_id': 134,
    'first_name': 'Денис',
    'last_name': 'Сафонов',
    'phone_number': '+7 017 017 4515',
    'email': 'aleksandrovaagafja@rao.info',
    'purchases': [
      {
        'date': '2023-10-09',
        'price': 4674,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2024-04-01',
        'price': 14125,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2024-01-22',
        'price': 3612,
        'category': 'sports',
        'product_name': 'Шорты'
      }
    ],
    'features': {
      'avg_check': 7470,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 24,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'sports',
        'books'
      ]
    },
    'purchase_probability': 0.82,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Денис Сафонов новые товары из категории books. Вероятность покупки высокая (0.82).'
  },
  {
    'client_id': 135,
    'first_name': 'Константин',
    'last_name': 'Костин',
    'phone_number': '+73121356451',
    'email': 'nikon_63@zao.net',
    'purchases': [
      {
        'date': '2023-08-31',
        'price': 1955,
        'category': 'electronics',
        'product_name': 'Наушники'
      },
      {
        'date': '2023-09-26',
        'price': 9299,
        'category': 'electronics',
        'product_name': 'Планшет'
      },
      {
        'date': '2024-09-10',
        'price': 1944,
        'category': 'books',
        'product_name': 'Роман'
      }
    ],
    'features': {
      'avg_check': 4399,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 62,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'electronics',
        'books'
      ]
    },
    'purchase_probability': 0.8,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Константин Костин новые товары из категории electronics. Вероятность покупки высокая (0.8).'
  },
  {
    'client_id': 136,
    'first_name': 'Максим',
    'last_name': 'Тарасова',
    'phone_number': '+7 259 493 9219',
    'email': 'gleb_1988@yahoo.com',
    'purchases': [
      {
        'date': '2023-05-28',
        'price': 5356,
        'category': 'sports',
        'product_name': 'Мяч'
      },
      {
        'date': '2024-06-14',
        'price': 4701,
        'category': 'sports',
        'product_name': 'Кроссовки'
      },
      {
        'date': '2024-04-24',
        'price': 513,
        'category': 'sports',
        'product_name': 'Кроссовки'
      }
    ],
    'features': {
      'avg_check': 3523,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 89,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'books',
        'sports'
      ]
    },
    'purchase_probability': 0.72,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Максим Тарасова новые товары из категории sports. Вероятность покупки высокая (0.72).'
  },
  {
    'client_id': 137,
    'first_name': 'Епифан',
    'last_name': 'Давыдова',
    'phone_number': '8 525 612 5514',
    'email': 'vinogradovamarija@hotmail.com',
    'purchases': [
      {
        'date': '2023-05-16',
        'price': 5952,
        'category': 'books',
        'product_name': 'Учебник'
      },
      {
        'date': '2023-09-26',
        'price': 9300,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2023-12-03',
        'price': 11813,
        'category': 'accessories',
        'product_name': 'Мышь'
      }
    ],
    'features': {
      'avg_check': 9021,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 61,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'books',
        'accessories'
      ]
    },
    'purchase_probability': 0.65,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Епифан Давыдова новые товары из категории books. Вероятность покупки высокая (0.65).'
  },
  {
    'client_id': 138,
    'first_name': 'Ювеналий',
    'last_name': 'Савин',
    'phone_number': '+79545257326',
    'email': 'isemenov@gmail.com',
    'purchases': [
      {
        'date': '2023-02-27',
        'price': 1717,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2023-07-27',
        'price': 14424,
        'category': 'books',
        'product_name': 'Фантастика'
      },
      {
        'date': '2024-04-21',
        'price': 6816,
        'category': 'books',
        'product_name': 'Учебник'
      }
    ],
    'features': {
      'avg_check': 7652,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 79,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'books',
        'sports'
      ]
    },
    'purchase_probability': 0.86,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Ювеналий Савин новые товары из категории sports. Вероятность покупки высокая (0.86).'
  },
  {
    'client_id': 139,
    'first_name': 'Панкрат',
    'last_name': 'Маркова',
    'phone_number': '+7 607 373 34 45',
    'email': 'savinkarl@mjasnikova.ru',
    'purchases': [
      {
        'date': '2023-05-08',
        'price': 9265,
        'category': 'accessories',
        'product_name': 'Чехол'
      },
      {
        'date': '2023-07-21',
        'price': 2798,
        'category': 'accessories',
        'product_name': 'Зарядка'
      },
      {
        'date': '2024-05-03',
        'price': 11235,
        'category': 'accessories',
        'product_name': 'Зарядка'
      }
    ],
    'features': {
      'avg_check': 7766,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 98,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'electronics',
        'accessories'
      ]
    },
    'purchase_probability': 0.93,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Панкрат Маркова новые товары из категории accessories. Вероятность покупки высокая (0.93).'
  },
  {
    'client_id': 140,
    'first_name': 'Савелий',
    'last_name': 'Назарова',
    'phone_number': '+7 466 202 47 66',
    'email': 'anna32@npo.edu',
    'purchases': [
      {
        'date': '2023-10-23',
        'price': 12621,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      },
      {
        'date': '2024-02-12',
        'price': 6678,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2023-12-06',
        'price': 14929,
        'category': 'books',
        'product_name': 'Роман'
      }
    ],
    'features': {
      'avg_check': 11409,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 65,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'books',
        'accessories'
      ]
    },
    'purchase_probability': 0.56,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Савелий Назарова новые товары из категории books. Вероятность покупки высокая (0.56).'
  },
  {
    'client_id': 141,
    'first_name': 'Иосиф',
    'last_name': 'Кондратьев',
    'phone_number': '86812238282',
    'email': 'dafanasev@ao.ru',
    'purchases': [
      {
        'date': '2023-04-24',
        'price': 590,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      },
      {
        'date': '2023-10-06',
        'price': 13167,
        'category': 'accessories',
        'product_name': 'Кабель'
      },
      {
        'date': '2024-11-26',
        'price': 6892,
        'category': 'sports',
        'product_name': 'Шорты'
      }
    ],
    'features': {
      'avg_check': 6883,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 41,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'sports',
        'accessories'
      ]
    },
    'purchase_probability': 0.61,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Иосиф Кондратьев новые товары из категории accessories. Вероятность покупки высокая (0.61).'
  },
  {
    'client_id': 142,
    'first_name': 'Олег',
    'last_name': 'Колобова',
    'phone_number': '81976810052',
    'email': 'asharova@gruppa.net',
    'purchases': [
      {
        'date': '2023-10-19',
        'price': 3709,
        'category': 'electronics',
        'product_name': 'Наушники'
      },
      {
        'date': '2023-11-10',
        'price': 14016,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      },
      {
        'date': '2024-07-06',
        'price': 855,
        'category': 'accessories',
        'product_name': 'Чехол'
      }
    ],
    'features': {
      'avg_check': 6193,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 52,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'accessories',
        'electronics'
      ]
    },
    'purchase_probability': 0.6,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Олег Колобова новые товары из категории electronics. Вероятность покупки высокая (0.6).'
  },
  {
    'client_id': 143,
    'first_name': 'Аполлинарий',
    'last_name': 'Соловьев',
    'phone_number': '+7 (602) 044-91-28',
    'email': 'ilja_68@rao.info',
    'purchases': [
      {
        'date': '2023-04-01',
        'price': 12112,
        'category': 'sports',
        'product_name': 'Шорты'
      },
      {
        'date': '2023-11-29',
        'price': 3826,
        'category': 'electronics',
        'product_name': 'Монитор'
      },
      {
        'date': '2024-05-31',
        'price': 12107,
        'category': 'sports',
        'product_name': 'Гантели'
      }
    ],
    'features': {
      'avg_check': 9348,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 55,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'sports',
        'electronics'
      ]
    },
    'purchase_probability': 0.92,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Аполлинарий Соловьев новые товары из категории sports. Вероятность покупки высокая (0.92).'
  },
  {
    'client_id': 144,
    'first_name': 'Андрей',
    'last_name': 'Крылов',
    'phone_number': '8 197 542 5072',
    'email': 'gromovaanzhela@hotmail.com',
    'purchases': [
      {
        'date': '2023-05-21',
        'price': 11527,
        'category': 'beauty',
        'product_name': 'Шампунь'
      },
      {
        'date': '2023-07-17',
        'price': 1784,
        'category': 'accessories',
        'product_name': 'Мышь'
      },
      {
        'date': '2024-02-29',
        'price': 11508,
        'category': 'beauty',
        'product_name': 'Помада'
      }
    ],
    'features': {
      'avg_check': 8273,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 37,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'accessories',
        'beauty'
      ]
    },
    'purchase_probability': 0.59,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Андрей Крылов новые товары из категории beauty. Вероятность покупки высокая (0.59).'
  },
  {
    'client_id': 145,
    'first_name': 'Адам',
    'last_name': 'Наумова',
    'phone_number': '+7 494 661 9400',
    'email': 'rnekrasov@yandex.ru',
    'purchases': [
      {
        'date': '2023-11-01',
        'price': 5825,
        'category': 'sports',
        'product_name': 'Мяч'
      },
      {
        'date': '2024-02-22',
        'price': 1978,
        'category': 'sports',
        'product_name': 'Мяч'
      },
      {
        'date': '2024-07-19',
        'price': 2117,
        'category': 'books',
        'product_name': 'Детектив'
      }
    ],
    'features': {
      'avg_check': 3306,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 92,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'sports',
        'books'
      ]
    },
    'purchase_probability': 0.72,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Адам Наумова новые товары из категории books. Вероятность покупки высокая (0.72).'
  },
  {
    'client_id': 146,
    'first_name': 'Елисей',
    'last_name': 'Русаков',
    'phone_number': '+7 (122) 088-22-50',
    'email': 'novikovigor@ooo.info',
    'purchases': [
      {
        'date': '2023-04-13',
        'price': 10134,
        'category': 'sports',
        'product_name': 'Мяч'
      },
      {
        'date': '2024-01-13',
        'price': 13292,
        'category': 'accessories',
        'product_name': 'Кабель'
      },
      {
        'date': '2024-01-06',
        'price': 13929,
        'category': 'sports',
        'product_name': 'Гантели'
      }
    ],
    'features': {
      'avg_check': 12451,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 18,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'sports',
        'accessories'
      ]
    },
    'purchase_probability': 0.59,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Елисей Русаков новые товары из категории sports. Вероятность покупки высокая (0.59).'
  },
  {
    'client_id': 147,
    'first_name': 'Зиновий',
    'last_name': 'Соболев',
    'phone_number': '8 708 327 7014',
    'email': 'fadeevlavr@orlov.net',
    'purchases': [
      {
        'date': '2023-11-04',
        'price': 3347,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2023-06-07',
        'price': 7366,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2024-04-04',
        'price': 1190,
        'category': 'books',
        'product_name': 'Детектив'
      }
    ],
    'features': {
      'avg_check': 3967,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 77,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'books',
        'beauty'
      ]
    },
    'purchase_probability': 0.91,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Зиновий Соболев новые товары из категории beauty. Вероятность покупки высокая (0.91).'
  },
  {
    'client_id': 148,
    'first_name': 'Чеслав',
    'last_name': 'Корнилова',
    'phone_number': '+70107667400',
    'email': 'petr00@hotmail.com',
    'purchases': [
      {
        'date': '2023-04-07',
        'price': 5121,
        'category': 'sports',
        'product_name': 'Гантели'
      },
      {
        'date': '2024-02-04',
        'price': 10641,
        'category': 'sports',
        'product_name': 'Шорты'
      },
      {
        'date': '2023-12-24',
        'price': 13522,
        'category': 'sports',
        'product_name': 'Мяч'
      }
    ],
    'features': {
      'avg_check': 9761,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 28,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'sports',
        'accessories'
      ]
    },
    'purchase_probability': 0.69,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Чеслав Корнилова новые товары из категории accessories. Вероятность покупки высокая (0.69).'
  },
  {
    'client_id': 149,
    'first_name': 'Евдокия',
    'last_name': 'Меркушев',
    'phone_number': '+74138126833',
    'email': 'platon_11@ashinski.org',
    'purchases': [
      {
        'date': '2023-02-17',
        'price': 2334,
        'category': 'books',
        'product_name': 'Фантастика'
      },
      {
        'date': '2024-02-23',
        'price': 8470,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2024-06-26',
        'price': 5477,
        'category': 'books',
        'product_name': 'Поэзия'
      }
    ],
    'features': {
      'avg_check': 5427,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 72,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'beauty',
        'books'
      ]
    },
    'purchase_probability': 0.73,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Евдокия Меркушев новые товары из категории beauty. Вероятность покупки высокая (0.73).'
  },
  {
    'client_id': 150,
    'first_name': 'Раиса',
    'last_name': 'Романов',
    'phone_number': '+74129764785',
    'email': 'bojan1995@hotmail.com',
    'purchases': [
      {
        'date': '2023-10-08',
        'price': 11050,
        'category': 'beauty',
        'product_name': 'Парфюм'
      },
      {
        'date': '2023-07-31',
        'price': 9332,
        'category': 'electronics',
        'product_name': 'Смартфон'
      },
      {
        'date': '2023-12-02',
        'price': 9517,
        'category': 'beauty',
        'product_name': 'Крем'
      }
    ],
    'features': {
      'avg_check': 9966,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 70,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'electronics',
        'beauty'
      ]
    },
    'purchase_probability': 0.62,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Раиса Романов новые товары из категории electronics. Вероятность покупки высокая (0.62).'
  },
  {
    'client_id': 151,
    'first_name': 'Данила',
    'last_name': 'Мухина',
    'phone_number': '8 264 460 3376',
    'email': 'titsubbotin@ao.net',
    'purchases': [
      {
        'date': '2023-02-05',
        'price': 14831,
        'category': 'beauty',
        'product_name': 'Маска'
      },
      {
        'date': '2023-10-20',
        'price': 10554,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2024-07-04',
        'price': 13783,
        'category': 'beauty',
        'product_name': 'Крем'
      }
    ],
    'features': {
      'avg_check': 13056,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 90,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'books',
        'beauty'
      ]
    },
    'purchase_probability': 0.51,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Данила Мухина новые товары из категории beauty. Вероятность покупки высокая (0.51).'
  },
  {
    'client_id': 152,
    'first_name': 'Сильвестр',
    'last_name': 'Романова',
    'phone_number': '80030997684',
    'email': 'akulina34@rao.info',
    'purchases': [
      {
        'date': '2023-09-12',
        'price': 9995,
        'category': 'accessories',
        'product_name': 'Кабель'
      },
      {
        'date': '2023-06-01',
        'price': 917,
        'category': 'electronics',
        'product_name': 'Планшет'
      },
      {
        'date': '2024-02-21',
        'price': 4447,
        'category': 'accessories',
        'product_name': 'Зарядка'
      }
    ],
    'features': {
      'avg_check': 5119,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 32,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'accessories',
        'electronics'
      ]
    },
    'purchase_probability': 0.5,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Сильвестр Романова новые товары из категории accessories. Вероятность покупки высокая (0.5).'
  },
  {
    'client_id': 153,
    'first_name': 'Аркадий',
    'last_name': 'Одинцов',
    'phone_number': '8 859 707 2794',
    'email': 'martinovavgust@yahoo.com',
    'purchases': [
      {
        'date': '2023-05-29',
        'price': 1544,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      },
      {
        'date': '2023-09-30',
        'price': 10357,
        'category': 'accessories',
        'product_name': 'Чехол'
      },
      {
        'date': '2023-11-08',
        'price': 10499,
        'category': 'electronics',
        'product_name': 'Смартфон'
      }
    ],
    'features': {
      'avg_check': 7466,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 89,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'accessories',
        'electronics'
      ]
    },
    'purchase_probability': 0.55,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Аркадий Одинцов новые товары из категории accessories. Вероятность покупки высокая (0.55).'
  },
  {
    'client_id': 154,
    'first_name': 'Денис',
    'last_name': 'Селиверстов',
    'phone_number': '+79470803765',
    'email': 'kguljaeva@rambler.ru',
    'purchases': [
      {
        'date': '2023-02-08',
        'price': 4467,
        'category': 'books',
        'product_name': 'Детектив'
      },
      {
        'date': '2023-09-19',
        'price': 11674,
        'category': 'books',
        'product_name': 'Учебник'
      },
      {
        'date': '2023-09-16',
        'price': 8407,
        'category': 'books',
        'product_name': 'Учебник'
      }
    ],
    'features': {
      'avg_check': 8182,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 51,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'books',
        'beauty'
      ]
    },
    'purchase_probability': 0.63,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Денис Селиверстов новые товары из категории beauty. Вероятность покупки высокая (0.63).'
  },
  {
    'client_id': 155,
    'first_name': 'Святополк',
    'last_name': 'Маслов',
    'phone_number': '+70572988536',
    'email': 'bogdan_1988@ao.info',
    'purchases': [
      {
        'date': '2023-09-18',
        'price': 816,
        'category': 'sports',
        'product_name': 'Мяч'
      },
      {
        'date': '2023-10-12',
        'price': 6652,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2023-12-04',
        'price': 4516,
        'category': 'books',
        'product_name': 'Детектив'
      }
    ],
    'features': {
      'avg_check': 3994,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 91,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'books',
        'sports'
      ]
    },
    'purchase_probability': 0.69,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Святополк Маслов новые товары из категории books. Вероятность покупки высокая (0.69).'
  },
  {
    'client_id': 156,
    'first_name': 'Пантелеймон',
    'last_name': 'Самсонова',
    'phone_number': '8 304 546 4330',
    'email': 'moiseevanani@mail.ru',
    'purchases': [
      {
        'date': '2023-06-28',
        'price': 10983,
        'category': 'electronics',
        'product_name': 'Монитор'
      },
      {
        'date': '2023-09-18',
        'price': 10062,
        'category': 'accessories',
        'product_name': 'Зарядка'
      },
      {
        'date': '2023-12-10',
        'price': 2478,
        'category': 'electronics',
        'product_name': 'Наушники'
      }
    ],
    'features': {
      'avg_check': 7841,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 57,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'electronics',
        'accessories'
      ]
    },
    'purchase_probability': 0.66,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Пантелеймон Самсонова новые товары из категории accessories. Вероятность покупки высокая (0.66).'
  },
  {
    'client_id': 157,
    'first_name': 'Виссарион',
    'last_name': 'Рожкова',
    'phone_number': '8 (723) 989-4309',
    'email': 'terentinikitin@yandex.ru',
    'purchases': [
      {
        'date': '2023-04-03',
        'price': 13120,
        'category': 'beauty',
        'product_name': 'Крем'
      },
      {
        'date': '2023-09-29',
        'price': 11346,
        'category': 'beauty',
        'product_name': 'Крем'
      },
      {
        'date': '2024-03-18',
        'price': 6367,
        'category': 'beauty',
        'product_name': 'Маска'
      }
    ],
    'features': {
      'avg_check': 10277,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 19,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'electronics',
        'beauty'
      ]
    },
    'purchase_probability': 0.57,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Виссарион Рожкова новые товары из категории beauty. Вероятность покупки высокая (0.57).'
  },
  {
    'client_id': 158,
    'first_name': 'Аскольд',
    'last_name': 'Веселова',
    'phone_number': '8 507 187 5328',
    'email': 'nosovbronislav@hotmail.com',
    'purchases': [
      {
        'date': '2023-10-06',
        'price': 12169,
        'category': 'sports',
        'product_name': 'Гантели'
      },
      {
        'date': '2023-09-14',
        'price': 14389,
        'category': 'sports',
        'product_name': 'Кроссовки'
      },
      {
        'date': '2024-06-14',
        'price': 3856,
        'category': 'sports',
        'product_name': 'Гантели'
      }
    ],
    'features': {
      'avg_check': 10138,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 9,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'sports',
        'beauty'
      ]
    },
    'purchase_probability': 0.66,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Аскольд Веселова новые товары из категории beauty. Вероятность покупки высокая (0.66).'
  },
  {
    'client_id': 159,
    'first_name': 'Святослав',
    'last_name': 'Павлова',
    'phone_number': '+7 (506) 455-5758',
    'email': 'radovan40@rambler.ru',
    'purchases': [
      {
        'date': '2023-12-02',
        'price': 7012,
        'category': 'beauty',
        'product_name': 'Шампунь'
      },
      {
        'date': '2023-10-05',
        'price': 3956,
        'category': 'beauty',
        'product_name': 'Крем'
      },
      {
        'date': '2024-03-15',
        'price': 3380,
        'category': 'beauty',
        'product_name': 'Крем'
      }
    ],
    'features': {
      'avg_check': 4782,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 106,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'sports',
        'beauty'
      ]
    },
    'purchase_probability': 0.65,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Святослав Павлова новые товары из категории sports. Вероятность покупки высокая (0.65).'
  },
  {
    'client_id': 160,
    'first_name': 'Аверьян',
    'last_name': 'Третьякова',
    'phone_number': '+7 578 228 26 07',
    'email': 'waleksandrov@ip.edu',
    'purchases': [
      {
        'date': '2023-09-19',
        'price': 3023,
        'category': 'electronics',
        'product_name': 'Планшет'
      },
      {
        'date': '2024-01-06',
        'price': 11881,
        'category': 'beauty',
        'product_name': 'Парфюм'
      },
      {
        'date': '2023-12-23',
        'price': 6975,
        'category': 'beauty',
        'product_name': 'Крем'
      }
    ],
    'features': {
      'avg_check': 7293,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 53,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'electronics',
        'beauty'
      ]
    },
    'purchase_probability': 0.64,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Аверьян Третьякова новые товары из категории electronics. Вероятность покупки высокая (0.64).'
  },
  {
    'client_id': 161,
    'first_name': 'Оксана',
    'last_name': 'Сысоева',
    'phone_number': '+73996714442',
    'email': 'kgureva@yahoo.com',
    'purchases': [
      {
        'date': '2023-11-19',
        'price': 4617,
        'category': 'books',
        'product_name': 'Фантастика'
      },
      {
        'date': '2023-12-06',
        'price': 8531,
        'category': 'sports',
        'product_name': 'Мяч'
      },
      {
        'date': '2023-08-20',
        'price': 4666,
        'category': 'books',
        'product_name': 'Поэзия'
      }
    ],
    'features': {
      'avg_check': 5938,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 13,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'books',
        'sports'
      ]
    },
    'purchase_probability': 0.85,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Оксана Сысоева новые товары из категории books. Вероятность покупки высокая (0.85).'
  },
  {
    'client_id': 162,
    'first_name': 'Галина',
    'last_name': 'Гаврилова',
    'phone_number': '8 526 094 7552',
    'email': 'amoskulagin@yandex.ru',
    'purchases': [
      {
        'date': '2023-12-01',
        'price': 639,
        'category': 'electronics',
        'product_name': 'Монитор'
      },
      {
        'date': '2023-11-13',
        'price': 5831,
        'category': 'electronics',
        'product_name': 'Монитор'
      },
      {
        'date': '2024-05-29',
        'price': 8416,
        'category': 'sports',
        'product_name': 'Мяч'
      }
    ],
    'features': {
      'avg_check': 4962,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 68,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'electronics',
        'sports'
      ]
    },
    'purchase_probability': 0.66,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Галина Гаврилова новые товары из категории sports. Вероятность покупки высокая (0.66).'
  },
  {
    'client_id': 163,
    'first_name': 'Измаил',
    'last_name': 'Давыдов',
    'phone_number': '8 (596) 691-51-86',
    'email': 'qsimonova@gmail.com',
    'purchases': [
      {
        'date': '2023-08-26',
        'price': 10012,
        'category': 'books',
        'product_name': 'Детектив'
      },
      {
        'date': '2024-02-21',
        'price': 10277,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      },
      {
        'date': '2023-10-30',
        'price': 8605,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      }
    ],
    'features': {
      'avg_check': 9631,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 59,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'books',
        'accessories'
      ]
    },
    'purchase_probability': 0.76,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Измаил Давыдов новые товары из категории accessories. Вероятность покупки высокая (0.76).'
  },
  {
    'client_id': 164,
    'first_name': 'Анжелика',
    'last_name': 'Чернова',
    'phone_number': '8 (766) 203-6693',
    'email': 'fomichevgremislav@ooo.info',
    'purchases': [
      {
        'date': '2023-03-08',
        'price': 8724,
        'category': 'beauty',
        'product_name': 'Парфюм'
      },
      {
        'date': '2023-08-29',
        'price': 10465,
        'category': 'beauty',
        'product_name': 'Крем'
      },
      {
        'date': '2024-08-03',
        'price': 14905,
        'category': 'beauty',
        'product_name': 'Шампунь'
      }
    ],
    'features': {
      'avg_check': 11364,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 9,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'beauty',
        'accessories'
      ]
    },
    'purchase_probability': 0.68,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Анжелика Чернова новые товары из категории accessories. Вероятность покупки высокая (0.68).'
  },
  {
    'client_id': 165,
    'first_name': 'Федосий',
    'last_name': 'Волков',
    'phone_number': '+7 (385) 012-03-41',
    'email': 'konstantinovradislav@rao.org',
    'purchases': [
      {
        'date': '2023-12-04',
        'price': 13095,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      },
      {
        'date': '2024-01-01',
        'price': 2624,
        'category': 'accessories',
        'product_name': 'Зарядка'
      },
      {
        'date': '2023-11-04',
        'price': 783,
        'category': 'electronics',
        'product_name': 'Планшет'
      }
    ],
    'features': {
      'avg_check': 5500,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 35,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'accessories',
        'electronics'
      ]
    },
    'purchase_probability': 0.56,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Федосий Волков новые товары из категории electronics. Вероятность покупки высокая (0.56).'
  },
  {
    'client_id': 166,
    'first_name': 'Руслан',
    'last_name': 'Рожкова',
    'phone_number': '+7 518 025 1595',
    'email': 'koshelevataisija@npo.ru',
    'purchases': [
      {
        'date': '2023-04-23',
        'price': 6341,
        'category': 'accessories',
        'product_name': 'Чехол'
      },
      {
        'date': '2024-01-13',
        'price': 5287,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2024-04-14',
        'price': 11917,
        'category': 'books',
        'product_name': 'Детектив'
      }
    ],
    'features': {
      'avg_check': 7848,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 80,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'accessories',
        'books'
      ]
    },
    'purchase_probability': 0.73,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Руслан Рожкова новые товары из категории accessories. Вероятность покупки высокая (0.73).'
  },
  {
    'client_id': 167,
    'first_name': 'Гедеон',
    'last_name': 'Соловьева',
    'phone_number': '+7 553 933 3944',
    'email': 'savelirozhkov@yahoo.com',
    'purchases': [
      {
        'date': '2023-10-31',
        'price': 13237,
        'category': 'books',
        'product_name': 'Фантастика'
      },
      {
        'date': '2024-01-01',
        'price': 13373,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2023-12-11',
        'price': 12954,
        'category': 'books',
        'product_name': 'Фантастика'
      }
    ],
    'features': {
      'avg_check': 13188,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 5,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'beauty',
        'books'
      ]
    },
    'purchase_probability': 0.76,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Гедеон Соловьева новые товары из категории beauty. Вероятность покупки высокая (0.76).'
  },
  {
    'client_id': 168,
    'first_name': 'Ираида',
    'last_name': 'Андреева',
    'phone_number': '+7 025 745 82 37',
    'email': 'xsolovev@yahoo.com',
    'purchases': [
      {
        'date': '2023-06-19',
        'price': 6626,
        'category': 'sports',
        'product_name': 'Гантели'
      },
      {
        'date': '2024-02-22',
        'price': 599,
        'category': 'electronics',
        'product_name': 'Наушники'
      },
      {
        'date': '2024-07-20',
        'price': 8215,
        'category': 'sports',
        'product_name': 'Футболка'
      }
    ],
    'features': {
      'avg_check': 5146,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 35,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'electronics',
        'sports'
      ]
    },
    'purchase_probability': 0.71,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Ираида Андреева новые товары из категории sports. Вероятность покупки высокая (0.71).'
  },
  {
    'client_id': 169,
    'first_name': 'Сила',
    'last_name': 'Гордеев',
    'phone_number': '+74114493229',
    'email': 'zaharodintsov@gk.com',
    'purchases': [
      {
        'date': '2023-08-24',
        'price': 12938,
        'category': 'beauty',
        'product_name': 'Шампунь'
      },
      {
        'date': '2023-09-29',
        'price': 6697,
        'category': 'accessories',
        'product_name': 'Зарядка'
      },
      {
        'date': '2024-10-27',
        'price': 11923,
        'category': 'beauty',
        'product_name': 'Крем'
      }
    ],
    'features': {
      'avg_check': 10519,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 112,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'accessories',
        'beauty'
      ]
    },
    'purchase_probability': 0.76,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Сила Гордеев новые товары из категории beauty. Вероятность покупки высокая (0.76).'
  },
  {
    'client_id': 170,
    'first_name': 'Сидор',
    'last_name': 'Лебедев',
    'phone_number': '+7 (044) 868-78-79',
    'email': 'pestovmstislav@mail.ru',
    'purchases': [
      {
        'date': '2023-05-26',
        'price': 1684,
        'category': 'electronics',
        'product_name': 'Планшет'
      },
      {
        'date': '2023-11-02',
        'price': 13904,
        'category': 'electronics',
        'product_name': 'Планшет'
      },
      {
        'date': '2024-05-15',
        'price': 7840,
        'category': 'accessories',
        'product_name': 'Чехол'
      }
    ],
    'features': {
      'avg_check': 7809,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 8,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'electronics',
        'accessories'
      ]
    },
    'purchase_probability': 0.75,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Сидор Лебедев новые товары из категории electronics. Вероятность покупки высокая (0.75).'
  },
  {
    'client_id': 171,
    'first_name': 'Юлия',
    'last_name': 'Ермакова',
    'phone_number': '8 458 112 3561',
    'email': 'ipat_10@oao.info',
    'purchases': [
      {
        'date': '2023-12-20',
        'price': 12800,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2023-05-07',
        'price': 10712,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2023-10-02',
        'price': 2014,
        'category': 'books',
        'product_name': 'Учебник'
      }
    ],
    'features': {
      'avg_check': 8508,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 7,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'sports',
        'books'
      ]
    },
    'purchase_probability': 0.57,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Юлия Ермакова новые товары из категории sports. Вероятность покупки высокая (0.57).'
  },
  {
    'client_id': 172,
    'first_name': 'Эрнст',
    'last_name': 'Гордеев',
    'phone_number': '8 (343) 586-0292',
    'email': 'emeljan_36@mail.ru',
    'purchases': [
      {
        'date': '2023-10-19',
        'price': 10033,
        'category': 'beauty',
        'product_name': 'Шампунь'
      },
      {
        'date': '2023-05-29',
        'price': 7988,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      },
      {
        'date': '2023-11-11',
        'price': 4935,
        'category': 'beauty',
        'product_name': 'Помада'
      }
    ],
    'features': {
      'avg_check': 7652,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 102,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'beauty',
        'electronics'
      ]
    },
    'purchase_probability': 0.91,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Эрнст Гордеев новые товары из категории beauty. Вероятность покупки высокая (0.91).'
  },
  {
    'client_id': 173,
    'first_name': 'Дмитрий',
    'last_name': 'Стрелков',
    'phone_number': '83482748101',
    'email': 'mihail_1996@yahoo.com',
    'purchases': [
      {
        'date': '2023-06-07',
        'price': 8719,
        'category': 'electronics',
        'product_name': 'Наушники'
      },
      {
        'date': '2024-01-24',
        'price': 11918,
        'category': 'electronics',
        'product_name': 'Смартфон'
      },
      {
        'date': '2024-04-16',
        'price': 13824,
        'category': 'accessories',
        'product_name': 'Зарядка'
      }
    ],
    'features': {
      'avg_check': 11487,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 1,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'electronics',
        'accessories'
      ]
    },
    'purchase_probability': 0.52,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Дмитрий Стрелков новые товары из категории accessories. Вероятность покупки высокая (0.52).'
  },
  {
    'client_id': 174,
    'first_name': 'Фома',
    'last_name': 'Сазонов',
    'phone_number': '8 391 496 08 48',
    'email': 'pankrat1982@beljakova.ru',
    'purchases': [
      {
        'date': '2023-02-06',
        'price': 784,
        'category': 'beauty',
        'product_name': 'Крем'
      },
      {
        'date': '2023-07-02',
        'price': 14626,
        'category': 'beauty',
        'product_name': 'Шампунь'
      },
      {
        'date': '2023-11-23',
        'price': 10197,
        'category': 'beauty',
        'product_name': 'Парфюм'
      }
    ],
    'features': {
      'avg_check': 8535,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 47,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'beauty',
        'books'
      ]
    },
    'purchase_probability': 0.78,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Фома Сазонов новые товары из категории beauty. Вероятность покупки высокая (0.78).'
  },
  {
    'client_id': 175,
    'first_name': 'Ладислав',
    'last_name': 'Кулагина',
    'phone_number': '8 098 863 1270',
    'email': 'innokentigrigorev@yahoo.com',
    'purchases': [
      {
        'date': '2023-10-26',
        'price': 8242,
        'category': 'electronics',
        'product_name': 'Наушники'
      },
      {
        'date': '2024-04-13',
        'price': 4946,
        'category': 'accessories',
        'product_name': 'Мышь'
      },
      {
        'date': '2024-04-08',
        'price': 633,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      }
    ],
    'features': {
      'avg_check': 4607,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 106,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'accessories',
        'electronics'
      ]
    },
    'purchase_probability': 0.83,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Ладислав Кулагина новые товары из категории accessories. Вероятность покупки высокая (0.83).'
  },
  {
    'client_id': 176,
    'first_name': 'Софрон',
    'last_name': 'Юдина',
    'phone_number': '88862407151',
    'email': 'gremislav_2003@gmail.com',
    'purchases': [
      {
        'date': '2023-12-17',
        'price': 8475,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      },
      {
        'date': '2023-12-12',
        'price': 8755,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2024-03-30',
        'price': 1132,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      }
    ],
    'features': {
      'avg_check': 6120,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 65,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'electronics',
        'books'
      ]
    },
    'purchase_probability': 0.81,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Софрон Юдина новые товары из категории electronics. Вероятность покупки высокая (0.81).'
  },
  {
    'client_id': 177,
    'first_name': 'Вацлав',
    'last_name': 'Бирюкова',
    'phone_number': '+7 591 596 3534',
    'email': 'mitofan73@ooo.org',
    'purchases': [
      {
        'date': '2023-08-31',
        'price': 7946,
        'category': 'electronics',
        'product_name': 'Монитор'
      },
      {
        'date': '2024-01-04',
        'price': 11296,
        'category': 'beauty',
        'product_name': 'Маска'
      },
      {
        'date': '2023-10-22',
        'price': 3671,
        'category': 'electronics',
        'product_name': 'Монитор'
      }
    ],
    'features': {
      'avg_check': 7637,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 38,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'beauty',
        'electronics'
      ]
    },
    'purchase_probability': 0.76,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Вацлав Бирюкова новые товары из категории electronics. Вероятность покупки высокая (0.76).'
  },
  {
    'client_id': 178,
    'first_name': 'Тихон',
    'last_name': 'Афанасьев',
    'phone_number': '+7 (370) 756-44-62',
    'email': 'juliansilin@kaspiski.edu',
    'purchases': [
      {
        'date': '2023-08-19',
        'price': 6844,
        'category': 'books',
        'product_name': 'Детектив'
      },
      {
        'date': '2023-10-20',
        'price': 9651,
        'category': 'books',
        'product_name': 'Учебник'
      },
      {
        'date': '2024-06-28',
        'price': 3010,
        'category': 'accessories',
        'product_name': 'Мышь'
      }
    ],
    'features': {
      'avg_check': 6501,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 50,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'accessories',
        'books'
      ]
    },
    'purchase_probability': 0.8,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Тихон Афанасьев новые товары из категории books. Вероятность покупки высокая (0.8).'
  },
  {
    'client_id': 179,
    'first_name': 'Харитон',
    'last_name': 'Герасимова',
    'phone_number': '8 (047) 448-64-94',
    'email': 'komissarovljubomir@ovchinnikov.ru',
    'purchases': [
      {
        'date': '2023-09-23',
        'price': 5890,
        'category': 'electronics',
        'product_name': 'Монитор'
      },
      {
        'date': '2023-09-09',
        'price': 6808,
        'category': 'electronics',
        'product_name': 'Смартфон'
      },
      {
        'date': '2023-11-24',
        'price': 14138,
        'category': 'accessories',
        'product_name': 'Мышь'
      }
    ],
    'features': {
      'avg_check': 8945,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 54,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'accessories',
        'electronics'
      ]
    },
    'purchase_probability': 0.85,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Харитон Герасимова новые товары из категории electronics. Вероятность покупки высокая (0.85).'
  },
  {
    'client_id': 180,
    'first_name': 'Олег',
    'last_name': 'Носкова',
    'phone_number': '+7 543 785 9536',
    'email': 'mihalovmstislav@mosgortrans.ru',
    'purchases': [
      {
        'date': '2023-07-27',
        'price': 12735,
        'category': 'sports',
        'product_name': 'Кроссовки'
      },
      {
        'date': '2023-12-04',
        'price': 11858,
        'category': 'sports',
        'product_name': 'Гантели'
      },
      {
        'date': '2024-03-21',
        'price': 1250,
        'category': 'beauty',
        'product_name': 'Маска'
      }
    ],
    'features': {
      'avg_check': 8614,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 97,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'sports',
        'beauty'
      ]
    },
    'purchase_probability': 0.69,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Олег Носкова новые товары из категории beauty. Вероятность покупки высокая (0.69).'
  },
  {
    'client_id': 181,
    'first_name': 'Егор',
    'last_name': 'Кириллова',
    'phone_number': '+7 479 612 9213',
    'email': 'timofe_10@ip.org',
    'purchases': [
      {
        'date': '2023-07-08',
        'price': 10382,
        'category': 'electronics',
        'product_name': 'Планшет'
      },
      {
        'date': '2023-09-20',
        'price': 1534,
        'category': 'books',
        'product_name': 'Фантастика'
      },
      {
        'date': '2024-05-23',
        'price': 14844,
        'category': 'electronics',
        'product_name': 'Смартфон'
      }
    ],
    'features': {
      'avg_check': 8920,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 84,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'books',
        'electronics'
      ]
    },
    'purchase_probability': 0.76,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Егор Кириллова новые товары из категории electronics. Вероятность покупки высокая (0.76).'
  },
  {
    'client_id': 182,
    'first_name': 'Измаил',
    'last_name': 'Молчанов',
    'phone_number': '+7 943 612 47 88',
    'email': 'jakub2011@hotmail.com',
    'purchases': [
      {
        'date': '2023-03-22',
        'price': 13821,
        'category': 'electronics',
        'product_name': 'Наушники'
      },
      {
        'date': '2023-06-12',
        'price': 9538,
        'category': 'electronics',
        'product_name': 'Планшет'
      },
      {
        'date': '2024-03-20',
        'price': 8107,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      }
    ],
    'features': {
      'avg_check': 10488,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 118,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'beauty',
        'electronics'
      ]
    },
    'purchase_probability': 0.83,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Измаил Молчанов новые товары из категории electronics. Вероятность покупки высокая (0.83).'
  },
  {
    'client_id': 183,
    'first_name': 'Казимир',
    'last_name': 'Потапов',
    'phone_number': '8 (815) 365-4425',
    'email': 'lharitonov@nikiforov.ru',
    'purchases': [
      {
        'date': '2023-09-11',
        'price': 5706,
        'category': 'accessories',
        'product_name': 'Мышь'
      },
      {
        'date': '2024-04-01',
        'price': 5595,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2023-12-23',
        'price': 11974,
        'category': 'books',
        'product_name': 'Учебник'
      }
    ],
    'features': {
      'avg_check': 7758,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 38,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'accessories',
        'books'
      ]
    },
    'purchase_probability': 0.91,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Казимир Потапов новые товары из категории books. Вероятность покупки высокая (0.91).'
  },
  {
    'client_id': 184,
    'first_name': 'Лукьян',
    'last_name': 'Мишина',
    'phone_number': '8 126 480 0170',
    'email': 'milen_1979@yandex.ru',
    'purchases': [
      {
        'date': '2023-05-26',
        'price': 5570,
        'category': 'beauty',
        'product_name': 'Шампунь'
      },
      {
        'date': '2024-04-13',
        'price': 10976,
        'category': 'beauty',
        'product_name': 'Парфюм'
      },
      {
        'date': '2024-06-11',
        'price': 1057,
        'category': 'beauty',
        'product_name': 'Маска'
      }
    ],
    'features': {
      'avg_check': 5867,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 17,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'beauty',
        'electronics'
      ]
    },
    'purchase_probability': 0.92,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Лукьян Мишина новые товары из категории electronics. Вероятность покупки высокая (0.92).'
  },
  {
    'client_id': 185,
    'first_name': 'Платон',
    'last_name': 'Логинова',
    'phone_number': '8 358 449 66 54',
    'email': 'ershovakim@oao.net',
    'purchases': [
      {
        'date': '2023-11-07',
        'price': 9406,
        'category': 'sports',
        'product_name': 'Мяч'
      },
      {
        'date': '2024-01-03',
        'price': 1267,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2023-12-04',
        'price': 8682,
        'category': 'sports',
        'product_name': 'Мяч'
      }
    ],
    'features': {
      'avg_check': 6451,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 34,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'electronics',
        'sports'
      ]
    },
    'purchase_probability': 0.77,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Платон Логинова новые товары из категории sports. Вероятность покупки высокая (0.77).'
  },
  {
    'client_id': 186,
    'first_name': 'Юлий',
    'last_name': 'Назарова',
    'phone_number': '+7 (818) 605-96-61',
    'email': 'ruslanterentev@yahoo.com',
    'purchases': [
      {
        'date': '2023-04-17',
        'price': 8063,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2024-01-05',
        'price': 1250,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2023-12-26',
        'price': 13656,
        'category': 'books',
        'product_name': 'Учебник'
      }
    ],
    'features': {
      'avg_check': 7656,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 117,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'accessories',
        'books'
      ]
    },
    'purchase_probability': 0.62,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Юлий Назарова новые товары из категории books. Вероятность покупки высокая (0.62).'
  },
  {
    'client_id': 187,
    'first_name': 'Иларион',
    'last_name': 'Кулаков',
    'phone_number': '8 986 266 36 56',
    'email': 'jan_1991@hotmail.com',
    'purchases': [
      {
        'date': '2023-11-09',
        'price': 10625,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2023-10-02',
        'price': 6991,
        'category': 'sports',
        'product_name': 'Гантели'
      },
      {
        'date': '2024-01-08',
        'price': 1639,
        'category': 'sports',
        'product_name': 'Гантели'
      }
    ],
    'features': {
      'avg_check': 6418,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 42,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'books',
        'sports'
      ]
    },
    'purchase_probability': 0.52,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Иларион Кулаков новые товары из категории sports. Вероятность покупки высокая (0.52).'
  },
  {
    'client_id': 188,
    'first_name': 'Олимпиада',
    'last_name': 'Сергеев',
    'phone_number': '8 644 305 1169',
    'email': 'isaevavgust@rambler.ru',
    'purchases': [
      {
        'date': '2023-03-06',
        'price': 13275,
        'category': 'beauty',
        'product_name': 'Парфюм'
      },
      {
        'date': '2023-09-04',
        'price': 9785,
        'category': 'accessories',
        'product_name': 'Мышь'
      },
      {
        'date': '2024-03-09',
        'price': 7332,
        'category': 'accessories',
        'product_name': 'Кабель'
      }
    ],
    'features': {
      'avg_check': 10130,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 59,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'accessories',
        'beauty'
      ]
    },
    'purchase_probability': 0.75,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Олимпиада Сергеев новые товары из категории beauty. Вероятность покупки высокая (0.75).'
  },
  {
    'client_id': 189,
    'first_name': 'Анатолий',
    'last_name': 'Пахомова',
    'phone_number': '+7 442 699 9363',
    'email': 'elise_72@ao.net',
    'purchases': [
      {
        'date': '2023-06-20',
        'price': 6914,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2024-01-11',
        'price': 1810,
        'category': 'sports',
        'product_name': 'Мяч'
      },
      {
        'date': '2024-05-24',
        'price': 8600,
        'category': 'sports',
        'product_name': 'Шорты'
      }
    ],
    'features': {
      'avg_check': 5774,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 59,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'sports',
        'accessories'
      ]
    },
    'purchase_probability': 0.74,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Анатолий Пахомова новые товары из категории sports. Вероятность покупки высокая (0.74).'
  },
  {
    'client_id': 190,
    'first_name': 'Пахом',
    'last_name': 'Колобов',
    'phone_number': '84677599381',
    'email': 'fekla_88@mail.ru',
    'purchases': [
      {
        'date': '2023-02-11',
        'price': 5165,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      },
      {
        'date': '2023-09-30',
        'price': 10369,
        'category': 'electronics',
        'product_name': 'Планшет'
      },
      {
        'date': '2023-10-22',
        'price': 10591,
        'category': 'books',
        'product_name': 'Детектив'
      }
    ],
    'features': {
      'avg_check': 8708,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 119,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'electronics',
        'books'
      ]
    },
    'purchase_probability': 0.58,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Пахом Колобов новые товары из категории electronics. Вероятность покупки высокая (0.58).'
  },
  {
    'client_id': 191,
    'first_name': 'Аким',
    'last_name': 'Костина',
    'phone_number': '+7 610 686 3586',
    'email': 'tverdislav_36@rao.org',
    'purchases': [
      {
        'date': '2023-08-03',
        'price': 7630,
        'category': 'books',
        'product_name': 'Детектив'
      },
      {
        'date': '2023-11-23',
        'price': 11962,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2024-03-27',
        'price': 5382,
        'category': 'books',
        'product_name': 'Роман'
      }
    ],
    'features': {
      'avg_check': 8324,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 78,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'electronics',
        'books'
      ]
    },
    'purchase_probability': 0.78,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Аким Костина новые товары из категории books. Вероятность покупки высокая (0.78).'
  },
  {
    'client_id': 192,
    'first_name': 'Иннокентий',
    'last_name': 'Нестерова',
    'phone_number': '8 630 192 99 22',
    'email': 'panfilovdobromisl@yandex.ru',
    'purchases': [
      {
        'date': '2023-09-17',
        'price': 2190,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2024-01-02',
        'price': 6402,
        'category': 'books',
        'product_name': 'Учебник'
      },
      {
        'date': '2023-08-30',
        'price': 13610,
        'category': 'books',
        'product_name': 'Фантастика'
      }
    ],
    'features': {
      'avg_check': 7400,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 33,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'books',
        'beauty'
      ]
    },
    'purchase_probability': 0.74,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Иннокентий Нестерова новые товары из категории books. Вероятность покупки высокая (0.74).'
  },
  {
    'client_id': 193,
    'first_name': 'Леонид',
    'last_name': 'Титов',
    'phone_number': '8 821 094 88 62',
    'email': 'jaroslav40@rambler.ru',
    'purchases': [
      {
        'date': '2023-05-25',
        'price': 13995,
        'category': 'accessories',
        'product_name': 'Чехол'
      },
      {
        'date': '2023-11-03',
        'price': 10093,
        'category': 'sports',
        'product_name': 'Шорты'
      },
      {
        'date': '2024-03-26',
        'price': 14199,
        'category': 'sports',
        'product_name': 'Мяч'
      }
    ],
    'features': {
      'avg_check': 12762,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 9,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'sports',
        'accessories'
      ]
    },
    'purchase_probability': 0.87,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Леонид Титов новые товары из категории sports. Вероятность покупки высокая (0.87).'
  },
  {
    'client_id': 194,
    'first_name': 'Варлаам',
    'last_name': 'Емельянова',
    'phone_number': '8 (909) 494-5182',
    'email': 'efimovaalla@ip.biz',
    'purchases': [
      {
        'date': '2023-06-08',
        'price': 5082,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      },
      {
        'date': '2024-01-20',
        'price': 2486,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2024-01-29',
        'price': 12299,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      }
    ],
    'features': {
      'avg_check': 6622,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 51,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'sports',
        'accessories'
      ]
    },
    'purchase_probability': 0.55,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Варлаам Емельянова новые товары из категории sports. Вероятность покупки высокая (0.55).'
  },
  {
    'client_id': 195,
    'first_name': 'Акулина',
    'last_name': 'Борисов',
    'phone_number': '8 366 281 29 71',
    'email': 'nikitinandronik@ao.ru',
    'purchases': [
      {
        'date': '2023-02-03',
        'price': 13343,
        'category': 'accessories',
        'product_name': 'Мышь'
      },
      {
        'date': '2024-02-01',
        'price': 14182,
        'category': 'beauty',
        'product_name': 'Шампунь'
      },
      {
        'date': '2024-08-28',
        'price': 1641,
        'category': 'beauty',
        'product_name': 'Шампунь'
      }
    ],
    'features': {
      'avg_check': 9722,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 39,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'accessories',
        'beauty'
      ]
    },
    'purchase_probability': 0.68,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Акулина Борисов новые товары из категории beauty. Вероятность покупки высокая (0.68).'
  },
  {
    'client_id': 196,
    'first_name': 'Владимир',
    'last_name': 'Овчинников',
    'phone_number': '+7 (566) 243-8797',
    'email': 'efim2017@kompanija.com',
    'purchases': [
      {
        'date': '2023-09-09',
        'price': 12516,
        'category': 'beauty',
        'product_name': 'Маска'
      },
      {
        'date': '2023-07-10',
        'price': 8645,
        'category': 'beauty',
        'product_name': 'Крем'
      },
      {
        'date': '2024-06-11',
        'price': 4305,
        'category': 'books',
        'product_name': 'Поэзия'
      }
    ],
    'features': {
      'avg_check': 8488,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 4,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'beauty',
        'books'
      ]
    },
    'purchase_probability': 0.92,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Владимир Овчинников новые товары из категории beauty. Вероятность покупки высокая (0.92).'
  },
  {
    'client_id': 197,
    'first_name': 'Василиса',
    'last_name': 'Федосеева',
    'phone_number': '+73298879392',
    'email': 'serge1971@yahoo.com',
    'purchases': [
      {
        'date': '2023-08-13',
        'price': 3746,
        'category': 'electronics',
        'product_name': 'Планшет'
      },
      {
        'date': '2023-10-12',
        'price': 4551,
        'category': 'beauty',
        'product_name': 'Маска'
      },
      {
        'date': '2024-06-06',
        'price': 12824,
        'category': 'electronics',
        'product_name': 'Планшет'
      }
    ],
    'features': {
      'avg_check': 7040,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 90,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'electronics',
        'beauty'
      ]
    },
    'purchase_probability': 0.68,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Василиса Федосеева новые товары из категории electronics. Вероятность покупки высокая (0.68).'
  },
  {
    'client_id': 198,
    'first_name': 'Никифор',
    'last_name': 'Ситникова',
    'phone_number': '8 (497) 699-3257',
    'email': 'maslovtimofe@oao.biz',
    'purchases': [
      {
        'date': '2023-07-01',
        'price': 1692,
        'category': 'electronics',
        'product_name': 'Смартфон'
      },
      {
        'date': '2023-09-10',
        'price': 12624,
        'category': 'books',
        'product_name': 'Учебник'
      },
      {
        'date': '2023-10-02',
        'price': 1411,
        'category': 'books',
        'product_name': 'Фантастика'
      }
    ],
    'features': {
      'avg_check': 5242,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 119,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'books',
        'electronics'
      ]
    },
    'purchase_probability': 0.67,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Никифор Ситникова новые товары из категории books. Вероятность покупки высокая (0.67).'
  },
  {
    'client_id': 199,
    'first_name': 'Ангелина',
    'last_name': 'Николаева',
    'phone_number': '+7 013 776 8062',
    'email': 'doronintaras@markova.biz',
    'purchases': [
      {
        'date': '2023-11-07',
        'price': 9359,
        'category': 'sports',
        'product_name': 'Шорты'
      },
      {
        'date': '2024-01-11',
        'price': 12941,
        'category': 'sports',
        'product_name': 'Гантели'
      },
      {
        'date': '2023-09-27',
        'price': 6069,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      }
    ],
    'features': {
      'avg_check': 9456,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 100,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'sports',
        'electronics'
      ]
    },
    'purchase_probability': 0.73,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Ангелина Николаева новые товары из категории electronics. Вероятность покупки высокая (0.73).'
  },
  {
    'client_id': 200,
    'first_name': 'Надежда',
    'last_name': 'Красильникова',
    'phone_number': '+7 339 211 9734',
    'email': 'prokofilukin@mail.ru',
    'purchases': [
      {
        'date': '2023-10-27',
        'price': 5382,
        'category': 'sports',
        'product_name': 'Кроссовки'
      },
      {
        'date': '2024-04-05',
        'price': 10667,
        'category': 'sports',
        'product_name': 'Гантели'
      },
      {
        'date': '2024-01-18',
        'price': 8303,
        'category': 'electronics',
        'product_name': 'Планшет'
      }
    ],
    'features': {
      'avg_check': 8117,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 45,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'electronics',
        'sports'
      ]
    },
    'purchase_probability': 0.95,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Надежда Красильникова новые товары из категории sports. Вероятность покупки высокая (0.95).'
  },
  {
    'client_id': 201,
    'first_name': 'Егор',
    'last_name': 'Юдина',
    'phone_number': '+7 639 419 6560',
    'email': 'silanti2005@gugl.biz',
    'purchases': [
      {
        'date': '2023-12-23',
        'price': 11658,
        'category': 'accessories',
        'product_name': 'Мышь'
      },
      {
        'date': '2023-09-14',
        'price': 14683,
        'category': 'electronics',
        'product_name': 'Монитор'
      },
      {
        'date': '2024-05-17',
        'price': 9007,
        'category': 'accessories',
        'product_name': 'Зарядка'
      }
    ],
    'features': {
      'avg_check': 11782,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 54,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'accessories',
        'electronics'
      ]
    },
    'purchase_probability': 0.79,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Егор Юдина новые товары из категории electronics. Вероятность покупки высокая (0.79).'
  },
  {
    'client_id': 202,
    'first_name': 'Никита',
    'last_name': 'Якушева',
    'phone_number': '+7 (937) 070-8965',
    'email': 'nikanor46@dochki-sinochki.net',
    'purchases': [
      {
        'date': '2023-03-12',
        'price': 10931,
        'category': 'books',
        'product_name': 'Учебник'
      },
      {
        'date': '2023-04-20',
        'price': 7013,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2023-09-30',
        'price': 3831,
        'category': 'accessories',
        'product_name': 'Чехол'
      }
    ],
    'features': {
      'avg_check': 7258,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 107,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'books',
        'accessories'
      ]
    },
    'purchase_probability': 0.78,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Никита Якушева новые товары из категории books. Вероятность покупки высокая (0.78).'
  },
  {
    'client_id': 203,
    'first_name': 'Майя',
    'last_name': 'Алексеева',
    'phone_number': '+77452222609',
    'email': 'gleb_46@ip.net',
    'purchases': [
      {
        'date': '2023-09-25',
        'price': 14158,
        'category': 'beauty',
        'product_name': 'Маска'
      },
      {
        'date': '2023-12-24',
        'price': 5237,
        'category': 'electronics',
        'product_name': 'Смартфон'
      },
      {
        'date': '2024-07-03',
        'price': 12692,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      }
    ],
    'features': {
      'avg_check': 10695,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 100,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'electronics',
        'beauty'
      ]
    },
    'purchase_probability': 0.53,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Майя Алексеева новые товары из категории beauty. Вероятность покупки высокая (0.53).'
  },
  {
    'client_id': 204,
    'first_name': 'Лаврентий',
    'last_name': 'Марков',
    'phone_number': '+7 671 572 9589',
    'email': 'tretjakovafevronija@yahoo.com',
    'purchases': [
      {
        'date': '2023-06-23',
        'price': 14510,
        'category': 'beauty',
        'product_name': 'Шампунь'
      },
      {
        'date': '2023-12-17',
        'price': 11441,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2024-04-02',
        'price': 9332,
        'category': 'beauty',
        'product_name': 'Помада'
      }
    ],
    'features': {
      'avg_check': 11761,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 34,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'sports',
        'beauty'
      ]
    },
    'purchase_probability': 0.66,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Лаврентий Марков новые товары из категории sports. Вероятность покупки высокая (0.66).'
  },
  {
    'client_id': 205,
    'first_name': 'Игорь',
    'last_name': 'Зуева',
    'phone_number': '+7 (200) 619-58-13',
    'email': 'sofon_1977@yandex.ru',
    'purchases': [
      {
        'date': '2023-11-20',
        'price': 1821,
        'category': 'beauty',
        'product_name': 'Шампунь'
      },
      {
        'date': '2024-04-21',
        'price': 10584,
        'category': 'accessories',
        'product_name': 'Чехол'
      },
      {
        'date': '2023-10-30',
        'price': 12619,
        'category': 'beauty',
        'product_name': 'Парфюм'
      }
    ],
    'features': {
      'avg_check': 8341,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 8,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'accessories',
        'beauty'
      ]
    },
    'purchase_probability': 0.65,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Игорь Зуева новые товары из категории beauty. Вероятность покупки высокая (0.65).'
  },
  {
    'client_id': 206,
    'first_name': 'Викентий',
    'last_name': 'Зимина',
    'phone_number': '8 (134) 270-20-97',
    'email': 'mechislavvorontsov@zao.ru',
    'purchases': [
      {
        'date': '2023-08-22',
        'price': 9901,
        'category': 'electronics',
        'product_name': 'Планшет'
      },
      {
        'date': '2023-08-06',
        'price': 7227,
        'category': 'accessories',
        'product_name': 'Зарядка'
      },
      {
        'date': '2024-06-05',
        'price': 9421,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      }
    ],
    'features': {
      'avg_check': 8849,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 78,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'accessories',
        'electronics'
      ]
    },
    'purchase_probability': 0.82,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Викентий Зимина новые товары из категории accessories. Вероятность покупки высокая (0.82).'
  },
  {
    'client_id': 207,
    'first_name': 'Евсей',
    'last_name': 'Емельянов',
    'phone_number': '+76365871844',
    'email': 'simon_1974@oao.biz',
    'purchases': [
      {
        'date': '2023-05-25',
        'price': 12339,
        'category': 'accessories',
        'product_name': 'Мышь'
      },
      {
        'date': '2024-04-13',
        'price': 1103,
        'category': 'accessories',
        'product_name': 'Мышь'
      },
      {
        'date': '2024-03-11',
        'price': 1334,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      }
    ],
    'features': {
      'avg_check': 4925,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 84,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'accessories',
        'electronics'
      ]
    },
    'purchase_probability': 0.65,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Евсей Емельянов новые товары из категории electronics. Вероятность покупки высокая (0.65).'
  },
  {
    'client_id': 208,
    'first_name': 'Флорентин',
    'last_name': 'Кузнецов',
    'phone_number': '+77059044490',
    'email': 'afanasevanisim@yahoo.com',
    'purchases': [
      {
        'date': '2023-10-27',
        'price': 13439,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2023-12-05',
        'price': 10455,
        'category': 'electronics',
        'product_name': 'Планшет'
      },
      {
        'date': '2023-09-22',
        'price': 7935,
        'category': 'books',
        'product_name': 'Роман'
      }
    ],
    'features': {
      'avg_check': 10609,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 4,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'electronics',
        'books'
      ]
    },
    'purchase_probability': 0.58,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Флорентин Кузнецов новые товары из категории electronics. Вероятность покупки высокая (0.58).'
  },
  {
    'client_id': 209,
    'first_name': 'Агап',
    'last_name': 'Кудряшов',
    'phone_number': '88899753884',
    'email': 'zhdanovfilimon@zao.ru',
    'purchases': [
      {
        'date': '2023-02-25',
        'price': 5524,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2023-07-29',
        'price': 10979,
        'category': 'electronics',
        'product_name': 'Монитор'
      },
      {
        'date': '2024-03-24',
        'price': 4170,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      }
    ],
    'features': {
      'avg_check': 6891,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 102,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'electronics',
        'books'
      ]
    },
    'purchase_probability': 0.51,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Агап Кудряшов новые товары из категории books. Вероятность покупки высокая (0.51).'
  },
  {
    'client_id': 210,
    'first_name': 'Онуфрий',
    'last_name': 'Петухов',
    'phone_number': '+7 (379) 221-47-30',
    'email': 'safonovviktor@ao.ru',
    'purchases': [
      {
        'date': '2023-04-15',
        'price': 13995,
        'category': 'books',
        'product_name': 'Фантастика'
      },
      {
        'date': '2023-09-04',
        'price': 1742,
        'category': 'accessories',
        'product_name': 'Кабель'
      },
      {
        'date': '2024-04-27',
        'price': 7019,
        'category': 'books',
        'product_name': 'Учебник'
      }
    ],
    'features': {
      'avg_check': 7585,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 59,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'accessories',
        'books'
      ]
    },
    'purchase_probability': 0.77,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Онуфрий Петухов новые товары из категории books. Вероятность покупки высокая (0.77).'
  },
  {
    'client_id': 211,
    'first_name': 'Серафим',
    'last_name': 'Соболев',
    'phone_number': '+7 (483) 137-04-61',
    'email': 'lnaumova@ignatova.org',
    'purchases': [
      {
        'date': '2023-09-15',
        'price': 7496,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      },
      {
        'date': '2023-12-25',
        'price': 10131,
        'category': 'electronics',
        'product_name': 'Смартфон'
      },
      {
        'date': '2023-11-11',
        'price': 4202,
        'category': 'sports',
        'product_name': 'Мяч'
      }
    ],
    'features': {
      'avg_check': 7276,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 53,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'electronics',
        'sports'
      ]
    },
    'purchase_probability': 0.87,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Серафим Соболев новые товары из категории electronics. Вероятность покупки высокая (0.87).'
  },
  {
    'client_id': 212,
    'first_name': 'Никандр',
    'last_name': 'Фадеева',
    'phone_number': '+7 (616) 277-16-03',
    'email': 'blohinaagafja@vkusvill.edu',
    'purchases': [
      {
        'date': '2023-02-09',
        'price': 10733,
        'category': 'accessories',
        'product_name': 'Зарядка'
      },
      {
        'date': '2023-09-08',
        'price': 1138,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2024-04-02',
        'price': 9914,
        'category': 'accessories',
        'product_name': 'Зарядка'
      }
    ],
    'features': {
      'avg_check': 7261,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 31,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'books',
        'accessories'
      ]
    },
    'purchase_probability': 0.88,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Никандр Фадеева новые товары из категории books. Вероятность покупки высокая (0.88).'
  },
  {
    'client_id': 213,
    'first_name': 'Лариса',
    'last_name': 'Новикова',
    'phone_number': '8 (754) 024-22-25',
    'email': 'veronika_2000@hotmail.com',
    'purchases': [
      {
        'date': '2023-03-29',
        'price': 10873,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2023-08-21',
        'price': 12243,
        'category': 'books',
        'product_name': 'Учебник'
      },
      {
        'date': '2024-04-23',
        'price': 8962,
        'category': 'books',
        'product_name': 'Детектив'
      }
    ],
    'features': {
      'avg_check': 10692,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 82,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'books',
        'electronics'
      ]
    },
    'purchase_probability': 0.76,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Лариса Новикова новые товары из категории electronics. Вероятность покупки высокая (0.76).'
  },
  {
    'client_id': 214,
    'first_name': 'Нина',
    'last_name': 'Белозерова',
    'phone_number': '8 (438) 184-4889',
    'email': 'shchukinevstigne@gmail.com',
    'purchases': [
      {
        'date': '2023-11-08',
        'price': 10300,
        'category': 'electronics',
        'product_name': 'Наушники'
      },
      {
        'date': '2024-03-27',
        'price': 12143,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      },
      {
        'date': '2023-11-25',
        'price': 10996,
        'category': 'electronics',
        'product_name': 'Смартфон'
      }
    ],
    'features': {
      'avg_check': 11146,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 52,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'electronics',
        'sports'
      ]
    },
    'purchase_probability': 0.78,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Нина Белозерова новые товары из категории sports. Вероятность покупки высокая (0.78).'
  },
  {
    'client_id': 215,
    'first_name': 'Владлен',
    'last_name': 'Карпов',
    'phone_number': '+7 972 661 2786',
    'email': 'melnikovzahar@npo.biz',
    'purchases': [
      {
        'date': '2023-02-12',
        'price': 3477,
        'category': 'accessories',
        'product_name': 'Чехол'
      },
      {
        'date': '2024-02-22',
        'price': 1853,
        'category': 'books',
        'product_name': 'Учебник'
      },
      {
        'date': '2024-03-19',
        'price': 13058,
        'category': 'books',
        'product_name': 'Роман'
      }
    ],
    'features': {
      'avg_check': 6129,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 112,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'accessories',
        'books'
      ]
    },
    'purchase_probability': 0.56,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Владлен Карпов новые товары из категории books. Вероятность покупки высокая (0.56).'
  },
  {
    'client_id': 216,
    'first_name': 'Никифор',
    'last_name': 'Калинин',
    'phone_number': '8 917 895 6991',
    'email': 'ustinkoshelev@yandex.ru',
    'purchases': [
      {
        'date': '2023-10-09',
        'price': 12309,
        'category': 'accessories',
        'product_name': 'Зарядка'
      },
      {
        'date': '2024-04-25',
        'price': 1310,
        'category': 'accessories',
        'product_name': 'Зарядка'
      },
      {
        'date': '2024-05-04',
        'price': 14834,
        'category': 'electronics',
        'product_name': 'Монитор'
      }
    ],
    'features': {
      'avg_check': 9484,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 26,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'accessories',
        'electronics'
      ]
    },
    'purchase_probability': 0.85,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Никифор Калинин новые товары из категории electronics. Вероятность покупки высокая (0.85).'
  },
  {
    'client_id': 217,
    'first_name': 'Матвей',
    'last_name': 'Белоусов',
    'phone_number': '8 388 853 52 83',
    'email': 'yvasilev@mail.ru',
    'purchases': [
      {
        'date': '2023-09-24',
        'price': 13629,
        'category': 'electronics',
        'product_name': 'Наушники'
      },
      {
        'date': '2024-01-26',
        'price': 1473,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      },
      {
        'date': '2023-08-18',
        'price': 7428,
        'category': 'books',
        'product_name': 'Детектив'
      }
    ],
    'features': {
      'avg_check': 7510,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 45,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'electronics',
        'books'
      ]
    },
    'purchase_probability': 0.94,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Матвей Белоусов новые товары из категории electronics. Вероятность покупки высокая (0.94).'
  },
  {
    'client_id': 218,
    'first_name': 'Ипполит',
    'last_name': 'Горшков',
    'phone_number': '8 (869) 830-1862',
    'email': 'mihalovavarvara@mail.ru',
    'purchases': [
      {
        'date': '2023-09-05',
        'price': 5629,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2023-11-03',
        'price': 9387,
        'category': 'beauty',
        'product_name': 'Парфюм'
      },
      {
        'date': '2024-02-05',
        'price': 8477,
        'category': 'beauty',
        'product_name': 'Маска'
      }
    ],
    'features': {
      'avg_check': 7831,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 100,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'beauty',
        'sports'
      ]
    },
    'purchase_probability': 0.62,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Ипполит Горшков новые товары из категории beauty. Вероятность покупки высокая (0.62).'
  },
  {
    'client_id': 219,
    'first_name': 'Богдан',
    'last_name': 'Сазонова',
    'phone_number': '8 (564) 581-4190',
    'email': 'fekla55@yandex.ru',
    'purchases': [
      {
        'date': '2023-09-09',
        'price': 6297,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      },
      {
        'date': '2023-08-10',
        'price': 4903,
        'category': 'accessories',
        'product_name': 'Чехол'
      },
      {
        'date': '2024-02-09',
        'price': 12650,
        'category': 'accessories',
        'product_name': 'Зарядка'
      }
    ],
    'features': {
      'avg_check': 7950,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 11,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'electronics',
        'accessories'
      ]
    },
    'purchase_probability': 0.9,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Богдан Сазонова новые товары из категории accessories. Вероятность покупки высокая (0.9).'
  },
  {
    'client_id': 220,
    'first_name': 'Илья',
    'last_name': 'Тимофеева',
    'phone_number': '+7 570 990 24 41',
    'email': 'martinovaalevtina@rao.info',
    'purchases': [
      {
        'date': '2023-06-30',
        'price': 14972,
        'category': 'beauty',
        'product_name': 'Парфюм'
      },
      {
        'date': '2024-04-02',
        'price': 8766,
        'category': 'beauty',
        'product_name': 'Маска'
      },
      {
        'date': '2024-04-19',
        'price': 8733,
        'category': 'beauty',
        'product_name': 'Помада'
      }
    ],
    'features': {
      'avg_check': 10823,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 33,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'beauty',
        'accessories'
      ]
    },
    'purchase_probability': 0.51,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Илья Тимофеева новые товары из категории accessories. Вероятность покупки высокая (0.51).'
  },
  {
    'client_id': 221,
    'first_name': 'Анжела',
    'last_name': 'Коновалов',
    'phone_number': '8 (645) 026-9502',
    'email': 'polikarp_2009@gmail.com',
    'purchases': [
      {
        'date': '2023-02-21',
        'price': 7319,
        'category': 'sports',
        'product_name': 'Кроссовки'
      },
      {
        'date': '2023-12-17',
        'price': 881,
        'category': 'beauty',
        'product_name': 'Парфюм'
      },
      {
        'date': '2024-06-21',
        'price': 7399,
        'category': 'sports',
        'product_name': 'Мяч'
      }
    ],
    'features': {
      'avg_check': 5199,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 32,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'beauty',
        'sports'
      ]
    },
    'purchase_probability': 0.72,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Анжела Коновалов новые товары из категории beauty. Вероятность покупки высокая (0.72).'
  },
  {
    'client_id': 222,
    'first_name': 'Прокл',
    'last_name': 'Фокина',
    'phone_number': '+7 (569) 705-1559',
    'email': 'seliverstovvaleri@mail.ru',
    'purchases': [
      {
        'date': '2023-06-12',
        'price': 4171,
        'category': 'beauty',
        'product_name': 'Шампунь'
      },
      {
        'date': '2023-12-31',
        'price': 9271,
        'category': 'beauty',
        'product_name': 'Парфюм'
      },
      {
        'date': '2024-04-10',
        'price': 13944,
        'category': 'sports',
        'product_name': 'Кроссовки'
      }
    ],
    'features': {
      'avg_check': 9128,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 37,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'sports',
        'beauty'
      ]
    },
    'purchase_probability': 0.83,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Прокл Фокина новые товары из категории beauty. Вероятность покупки высокая (0.83).'
  },
  {
    'client_id': 223,
    'first_name': 'Мариан',
    'last_name': 'Владимиров',
    'phone_number': '+7 040 279 9056',
    'email': 'bogdan_1992@npo.org',
    'purchases': [
      {
        'date': '2023-08-19',
        'price': 6531,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2024-01-31',
        'price': 5306,
        'category': 'books',
        'product_name': 'Учебник'
      },
      {
        'date': '2024-03-30',
        'price': 6049,
        'category': 'books',
        'product_name': 'Детектив'
      }
    ],
    'features': {
      'avg_check': 5962,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 85,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'books',
        'sports'
      ]
    },
    'purchase_probability': 0.58,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Мариан Владимиров новые товары из категории sports. Вероятность покупки высокая (0.58).'
  },
  {
    'client_id': 224,
    'first_name': 'Вацлав',
    'last_name': 'Захарова',
    'phone_number': '+7 (432) 361-70-38',
    'email': 'valeri61@zao.com',
    'purchases': [
      {
        'date': '2023-06-16',
        'price': 2471,
        'category': 'books',
        'product_name': 'Фантастика'
      },
      {
        'date': '2023-10-08',
        'price': 1157,
        'category': 'sports',
        'product_name': 'Мяч'
      },
      {
        'date': '2024-04-13',
        'price': 842,
        'category': 'books',
        'product_name': 'Фантастика'
      }
    ],
    'features': {
      'avg_check': 1490,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 15,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'books',
        'sports'
      ]
    },
    'purchase_probability': 0.74,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Вацлав Захарова новые товары из категории books. Вероятность покупки высокая (0.74).'
  },
  {
    'client_id': 225,
    'first_name': 'Федор',
    'last_name': 'Баранов',
    'phone_number': '8 630 825 67 11',
    'email': 'anisimsavelev@zao.edu',
    'purchases': [
      {
        'date': '2023-10-30',
        'price': 4999,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      },
      {
        'date': '2024-03-13',
        'price': 2064,
        'category': 'books',
        'product_name': 'Учебник'
      },
      {
        'date': '2023-10-01',
        'price': 13705,
        'category': 'books',
        'product_name': 'Роман'
      }
    ],
    'features': {
      'avg_check': 6922,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 68,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'books',
        'electronics'
      ]
    },
    'purchase_probability': 0.72,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Федор Баранов новые товары из категории books. Вероятность покупки высокая (0.72).'
  },
  {
    'client_id': 226,
    'first_name': 'Олег',
    'last_name': 'Колесников',
    'phone_number': '8 (521) 691-6596',
    'email': 'iosifdorofeev@yandex.ru',
    'purchases': [
      {
        'date': '2023-10-23',
        'price': 8661,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      },
      {
        'date': '2023-08-17',
        'price': 3981,
        'category': 'beauty',
        'product_name': 'Помада'
      },
      {
        'date': '2024-05-08',
        'price': 6432,
        'category': 'beauty',
        'product_name': 'Парфюм'
      }
    ],
    'features': {
      'avg_check': 6358,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 9,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'accessories',
        'beauty'
      ]
    },
    'purchase_probability': 0.52,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Олег Колесников новые товары из категории beauty. Вероятность покупки высокая (0.52).'
  },
  {
    'client_id': 227,
    'first_name': 'Куприян',
    'last_name': 'Кудряшова',
    'phone_number': '+7 135 198 2470',
    'email': 'evstafi_2008@zao.ru',
    'purchases': [
      {
        'date': '2023-07-21',
        'price': 10889,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2024-05-14',
        'price': 14777,
        'category': 'sports',
        'product_name': 'Шорты'
      },
      {
        'date': '2024-06-05',
        'price': 13136,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      }
    ],
    'features': {
      'avg_check': 12934,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 13,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'sports',
        'electronics'
      ]
    },
    'purchase_probability': 0.53,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Куприян Кудряшова новые товары из категории sports. Вероятность покупки высокая (0.53).'
  },
  {
    'client_id': 228,
    'first_name': 'Христофор',
    'last_name': 'Пономарева',
    'phone_number': '8 290 957 9116',
    'email': 'arseniguljaev@rambler.ru',
    'purchases': [
      {
        'date': '2023-09-15',
        'price': 2036,
        'category': 'electronics',
        'product_name': 'Монитор'
      },
      {
        'date': '2023-08-26',
        'price': 9584,
        'category': 'electronics',
        'product_name': 'Монитор'
      },
      {
        'date': '2024-03-17',
        'price': 10194,
        'category': 'beauty',
        'product_name': 'Парфюм'
      }
    ],
    'features': {
      'avg_check': 7271,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 43,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'beauty',
        'electronics'
      ]
    },
    'purchase_probability': 0.83,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Христофор Пономарева новые товары из категории beauty. Вероятность покупки высокая (0.83).'
  },
  {
    'client_id': 229,
    'first_name': 'Натан',
    'last_name': 'Матвеев',
    'phone_number': '+7 (894) 026-84-70',
    'email': 'vorontsovereme@npo.net',
    'purchases': [
      {
        'date': '2023-06-02',
        'price': 3377,
        'category': 'accessories',
        'product_name': 'Чехол'
      },
      {
        'date': '2023-08-05',
        'price': 13545,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2023-12-27',
        'price': 9053,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      }
    ],
    'features': {
      'avg_check': 8658,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 92,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'accessories',
        'books'
      ]
    },
    'purchase_probability': 0.84,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Натан Матвеев новые товары из категории books. Вероятность покупки высокая (0.84).'
  },
  {
    'client_id': 230,
    'first_name': 'Гаврила',
    'last_name': 'Лукина',
    'phone_number': '+7 (011) 564-32-99',
    'email': 'fedorovaantonina@nefteprodukttred.org',
    'purchases': [
      {
        'date': '2023-03-20',
        'price': 3968,
        'category': 'sports',
        'product_name': 'Гантели'
      },
      {
        'date': '2023-10-30',
        'price': 2593,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      },
      {
        'date': '2024-03-08',
        'price': 9283,
        'category': 'electronics',
        'product_name': 'Смартфон'
      }
    ],
    'features': {
      'avg_check': 5281,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 17,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'electronics',
        'sports'
      ]
    },
    'purchase_probability': 0.93,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Гаврила Лукина новые товары из категории electronics. Вероятность покупки высокая (0.93).'
  },
  {
    'client_id': 231,
    'first_name': 'Прокл',
    'last_name': 'Дроздова',
    'phone_number': '+7 (898) 770-6770',
    'email': 'gerasimovanadezhda@ip.org',
    'purchases': [
      {
        'date': '2023-04-03',
        'price': 7844,
        'category': 'beauty',
        'product_name': 'Помада'
      },
      {
        'date': '2023-11-18',
        'price': 3713,
        'category': 'beauty',
        'product_name': 'Парфюм'
      },
      {
        'date': '2024-07-21',
        'price': 13003,
        'category': 'books',
        'product_name': 'Учебник'
      }
    ],
    'features': {
      'avg_check': 8186,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 83,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'books',
        'beauty'
      ]
    },
    'purchase_probability': 0.79,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Прокл Дроздова новые товары из категории books. Вероятность покупки высокая (0.79).'
  },
  {
    'client_id': 232,
    'first_name': 'Милен',
    'last_name': 'Емельянова',
    'phone_number': '86837943372',
    'email': 'elizaveta1979@gavrilova.ru',
    'purchases': [
      {
        'date': '2023-11-28',
        'price': 10076,
        'category': 'accessories',
        'product_name': 'Чехол'
      },
      {
        'date': '2023-09-30',
        'price': 9459,
        'category': 'books',
        'product_name': 'Учебник'
      },
      {
        'date': '2024-10-21',
        'price': 11495,
        'category': 'accessories',
        'product_name': 'Мышь'
      }
    ],
    'features': {
      'avg_check': 10343,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 100,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'accessories',
        'books'
      ]
    },
    'purchase_probability': 0.63,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Милен Емельянова новые товары из категории books. Вероятность покупки высокая (0.63).'
  },
  {
    'client_id': 233,
    'first_name': 'Иван',
    'last_name': 'Крылова',
    'phone_number': '+7 329 522 56 57',
    'email': 'shirjaevafekla@rao.com',
    'purchases': [
      {
        'date': '2023-11-08',
        'price': 13176,
        'category': 'sports',
        'product_name': 'Мяч'
      },
      {
        'date': '2023-07-06',
        'price': 1299,
        'category': 'sports',
        'product_name': 'Шорты'
      },
      {
        'date': '2024-02-12',
        'price': 9336,
        'category': 'books',
        'product_name': 'Фантастика'
      }
    ],
    'features': {
      'avg_check': 7937,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 47,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'books',
        'sports'
      ]
    },
    'purchase_probability': 0.69,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Иван Крылова новые товары из категории sports. Вероятность покупки высокая (0.69).'
  },
  {
    'client_id': 234,
    'first_name': 'Владилен',
    'last_name': 'Носкова',
    'phone_number': '8 (575) 873-84-32',
    'email': 'andreevartemi@mjasnikova.info',
    'purchases': [
      {
        'date': '2023-11-14',
        'price': 3393,
        'category': 'electronics',
        'product_name': 'Монитор'
      },
      {
        'date': '2024-01-18',
        'price': 8143,
        'category': 'electronics',
        'product_name': 'Монитор'
      },
      {
        'date': '2023-12-15',
        'price': 11679,
        'category': 'beauty',
        'product_name': 'Крем'
      }
    ],
    'features': {
      'avg_check': 7738,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 11,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'electronics',
        'beauty'
      ]
    },
    'purchase_probability': 0.59,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Владилен Носкова новые товары из категории beauty. Вероятность покупки высокая (0.59).'
  },
  {
    'client_id': 235,
    'first_name': 'Галактион',
    'last_name': 'Мишина',
    'phone_number': '8 (513) 454-2831',
    'email': 'agata_2001@ooo.info',
    'purchases': [
      {
        'date': '2023-05-09',
        'price': 4127,
        'category': 'sports',
        'product_name': 'Шорты'
      },
      {
        'date': '2023-09-19',
        'price': 13179,
        'category': 'accessories',
        'product_name': 'Мышь'
      },
      {
        'date': '2024-01-21',
        'price': 11675,
        'category': 'accessories',
        'product_name': 'Зарядка'
      }
    ],
    'features': {
      'avg_check': 9660,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 2,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'accessories',
        'sports'
      ]
    },
    'purchase_probability': 0.56,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Галактион Мишина новые товары из категории accessories. Вероятность покупки высокая (0.56).'
  },
  {
    'client_id': 236,
    'first_name': 'Валерий',
    'last_name': 'Русаков',
    'phone_number': '+7 (414) 117-84-99',
    'email': 'vera_85@npo.edu',
    'purchases': [
      {
        'date': '2023-07-08',
        'price': 3155,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2023-09-14',
        'price': 10719,
        'category': 'beauty',
        'product_name': 'Шампунь'
      },
      {
        'date': '2024-07-21',
        'price': 13268,
        'category': 'books',
        'product_name': 'Детектив'
      }
    ],
    'features': {
      'avg_check': 9047,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 109,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'beauty',
        'books'
      ]
    },
    'purchase_probability': 0.66,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Валерий Русаков новые товары из категории books. Вероятность покупки высокая (0.66).'
  },
  {
    'client_id': 237,
    'first_name': 'Станимир',
    'last_name': 'Крюкова',
    'phone_number': '87870736573',
    'email': 'wbolshakov@rambler.ru',
    'purchases': [
      {
        'date': '2023-06-04',
        'price': 4096,
        'category': 'accessories',
        'product_name': 'Кабель'
      },
      {
        'date': '2023-07-23',
        'price': 10475,
        'category': 'accessories',
        'product_name': 'Чехол'
      },
      {
        'date': '2024-03-22',
        'price': 12062,
        'category': 'accessories',
        'product_name': 'Кабель'
      }
    ],
    'features': {
      'avg_check': 8877,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 39,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'accessories',
        'beauty'
      ]
    },
    'purchase_probability': 0.83,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Станимир Крюкова новые товары из категории accessories. Вероятность покупки высокая (0.83).'
  },
  {
    'client_id': 238,
    'first_name': 'Фома',
    'last_name': 'Федотов',
    'phone_number': '+7 662 970 66 63',
    'email': 'subbotintimofe@zao.info',
    'purchases': [
      {
        'date': '2023-06-17',
        'price': 5228,
        'category': 'beauty',
        'product_name': 'Помада'
      },
      {
        'date': '2023-08-29',
        'price': 6043,
        'category': 'books',
        'product_name': 'Фантастика'
      },
      {
        'date': '2024-10-16',
        'price': 532,
        'category': 'books',
        'product_name': 'Детектив'
      }
    ],
    'features': {
      'avg_check': 3934,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 89,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'beauty',
        'books'
      ]
    },
    'purchase_probability': 0.89,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Фома Федотов новые товары из категории books. Вероятность покупки высокая (0.89).'
  },
  {
    'client_id': 239,
    'first_name': 'Варвара',
    'last_name': 'Маркова',
    'phone_number': '8 355 750 7704',
    'email': 'provkonovalov@ooo.ru',
    'purchases': [
      {
        'date': '2023-05-24',
        'price': 1072,
        'category': 'electronics',
        'product_name': 'Монитор'
      },
      {
        'date': '2023-12-26',
        'price': 14303,
        'category': 'electronics',
        'product_name': 'Смартфон'
      },
      {
        'date': '2024-01-29',
        'price': 8833,
        'category': 'electronics',
        'product_name': 'Монитор'
      }
    ],
    'features': {
      'avg_check': 8069,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 80,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'electronics',
        'sports'
      ]
    },
    'purchase_probability': 0.61,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Варвара Маркова новые товары из категории electronics. Вероятность покупки высокая (0.61).'
  },
  {
    'client_id': 240,
    'first_name': 'Куприян',
    'last_name': 'Лебедева',
    'phone_number': '+7 (450) 754-8776',
    'email': 'porfiribelousov@zao.net',
    'purchases': [
      {
        'date': '2023-10-15',
        'price': 2098,
        'category': 'beauty',
        'product_name': 'Парфюм'
      },
      {
        'date': '2023-06-16',
        'price': 6817,
        'category': 'books',
        'product_name': 'Учебник'
      },
      {
        'date': '2023-10-17',
        'price': 2683,
        'category': 'books',
        'product_name': 'Детектив'
      }
    ],
    'features': {
      'avg_check': 3866,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 34,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'beauty',
        'books'
      ]
    },
    'purchase_probability': 0.95,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Куприян Лебедева новые товары из категории books. Вероятность покупки высокая (0.95).'
  },
  {
    'client_id': 241,
    'first_name': 'Максим',
    'last_name': 'Копылова',
    'phone_number': '8 554 511 41 15',
    'email': 'jakov_83@shashkova.ru',
    'purchases': [
      {
        'date': '2023-05-25',
        'price': 7051,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      },
      {
        'date': '2023-12-13',
        'price': 9869,
        'category': 'electronics',
        'product_name': 'Смартфон'
      },
      {
        'date': '2024-01-25',
        'price': 9851,
        'category': 'electronics',
        'product_name': 'Наушники'
      }
    ],
    'features': {
      'avg_check': 8923,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 37,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'accessories',
        'electronics'
      ]
    },
    'purchase_probability': 0.93,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Максим Копылова новые товары из категории accessories. Вероятность покупки высокая (0.93).'
  },
  {
    'client_id': 242,
    'first_name': 'Селиван',
    'last_name': 'Егоров',
    'phone_number': '86478453215',
    'email': 'avde_1975@yahoo.com',
    'purchases': [
      {
        'date': '2023-05-19',
        'price': 3194,
        'category': 'accessories',
        'product_name': 'Чехол'
      },
      {
        'date': '2023-10-20',
        'price': 14359,
        'category': 'sports',
        'product_name': 'Шорты'
      },
      {
        'date': '2024-04-30',
        'price': 8852,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      }
    ],
    'features': {
      'avg_check': 8801,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 21,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'accessories',
        'sports'
      ]
    },
    'purchase_probability': 0.77,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Селиван Егоров новые товары из категории sports. Вероятность покупки высокая (0.77).'
  },
  {
    'client_id': 243,
    'first_name': 'Дементий',
    'last_name': 'Рогов',
    'phone_number': '81696046433',
    'email': 'nikola_2005@yahoo.com',
    'purchases': [
      {
        'date': '2023-11-29',
        'price': 2991,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2023-07-26',
        'price': 10271,
        'category': 'books',
        'product_name': 'Детектив'
      },
      {
        'date': '2024-05-08',
        'price': 3876,
        'category': 'books',
        'product_name': 'Поэзия'
      }
    ],
    'features': {
      'avg_check': 5712,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 28,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'books',
        'electronics'
      ]
    },
    'purchase_probability': 0.6,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Дементий Рогов новые товары из категории electronics. Вероятность покупки высокая (0.6).'
  },
  {
    'client_id': 244,
    'first_name': 'Владимир',
    'last_name': 'Никитина',
    'phone_number': '+7 (329) 528-7231',
    'email': 'klavdisimonov@hotmail.com',
    'purchases': [
      {
        'date': '2023-08-12',
        'price': 1835,
        'category': 'beauty',
        'product_name': 'Помада'
      },
      {
        'date': '2023-10-21',
        'price': 1766,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2024-01-13',
        'price': 3490,
        'category': 'books',
        'product_name': 'Детектив'
      }
    ],
    'features': {
      'avg_check': 2363,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 100,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'beauty',
        'books'
      ]
    },
    'purchase_probability': 0.94,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Владимир Никитина новые товары из категории beauty. Вероятность покупки высокая (0.94).'
  },
  {
    'client_id': 245,
    'first_name': 'Любим',
    'last_name': 'Кондратьев',
    'phone_number': '8 798 581 28 10',
    'email': 'kostinafekla@rambler.ru',
    'purchases': [
      {
        'date': '2023-02-26',
        'price': 7095,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2024-02-29',
        'price': 4221,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2024-05-19',
        'price': 1955,
        'category': 'books',
        'product_name': 'Поэзия'
      }
    ],
    'features': {
      'avg_check': 4423,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 100,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'books',
        'sports'
      ]
    },
    'purchase_probability': 0.57,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Любим Кондратьев новые товары из категории sports. Вероятность покупки высокая (0.57).'
  },
  {
    'client_id': 246,
    'first_name': 'Михей',
    'last_name': 'Дмитриев',
    'phone_number': '8 (945) 454-32-37',
    'email': 'leonti1998@rambler.ru',
    'purchases': [
      {
        'date': '2023-10-21',
        'price': 1721,
        'category': 'sports',
        'product_name': 'Гантели'
      },
      {
        'date': '2023-05-07',
        'price': 3616,
        'category': 'books',
        'product_name': 'Учебник'
      },
      {
        'date': '2024-05-30',
        'price': 10284,
        'category': 'books',
        'product_name': 'Учебник'
      }
    ],
    'features': {
      'avg_check': 5207,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 34,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'books',
        'sports'
      ]
    },
    'purchase_probability': 0.65,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Михей Дмитриев новые товары из категории books. Вероятность покупки высокая (0.65).'
  },
  {
    'client_id': 247,
    'first_name': 'Геннадий',
    'last_name': 'Степанова',
    'phone_number': '+7 358 481 8228',
    'email': 'milimjasnikov@yahoo.com',
    'purchases': [
      {
        'date': '2023-08-31',
        'price': 11368,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2023-07-23',
        'price': 3931,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2023-10-27',
        'price': 13064,
        'category': 'sports',
        'product_name': 'Гантели'
      }
    ],
    'features': {
      'avg_check': 9454,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 37,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'sports',
        'books'
      ]
    },
    'purchase_probability': 0.89,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Геннадий Степанова новые товары из категории sports. Вероятность покупки высокая (0.89).'
  },
  {
    'client_id': 248,
    'first_name': 'Эдуард',
    'last_name': 'Семенова',
    'phone_number': '+7 439 816 66 50',
    'email': 'suhanovsavva@gmail.com',
    'purchases': [
      {
        'date': '2023-08-14',
        'price': 3217,
        'category': 'electronics',
        'product_name': 'Планшет'
      },
      {
        'date': '2023-09-15',
        'price': 14852,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      },
      {
        'date': '2024-03-06',
        'price': 5619,
        'category': 'electronics',
        'product_name': 'Наушники'
      }
    ],
    'features': {
      'avg_check': 7896,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 83,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'electronics',
        'sports'
      ]
    },
    'purchase_probability': 0.59,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Эдуард Семенова новые товары из категории electronics. Вероятность покупки высокая (0.59).'
  },
  {
    'client_id': 249,
    'first_name': 'Дмитрий',
    'last_name': 'Рябова',
    'phone_number': '88662929096',
    'email': 'lshirjaev@hotmail.com',
    'purchases': [
      {
        'date': '2023-03-12',
        'price': 1634,
        'category': 'books',
        'product_name': 'Учебник'
      },
      {
        'date': '2023-10-10',
        'price': 1463,
        'category': 'beauty',
        'product_name': 'Шампунь'
      },
      {
        'date': '2023-12-01',
        'price': 6525,
        'category': 'books',
        'product_name': 'Фантастика'
      }
    ],
    'features': {
      'avg_check': 3207,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 24,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'books',
        'beauty'
      ]
    },
    'purchase_probability': 0.58,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Дмитрий Рябова новые товары из категории books. Вероятность покупки высокая (0.58).'
  },
  {
    'client_id': 250,
    'first_name': 'Ольга',
    'last_name': 'Носков',
    'phone_number': '8 317 340 4180',
    'email': 'jaropolk_2012@ip.net',
    'purchases': [
      {
        'date': '2023-10-30',
        'price': 4374,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      },
      {
        'date': '2024-03-22',
        'price': 13235,
        'category': 'accessories',
        'product_name': 'Мышь'
      },
      {
        'date': '2024-05-07',
        'price': 3115,
        'category': 'beauty',
        'product_name': 'Крем'
      }
    ],
    'features': {
      'avg_check': 6908,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 27,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'accessories',
        'beauty'
      ]
    },
    'purchase_probability': 0.82,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Ольга Носков новые товары из категории beauty. Вероятность покупки высокая (0.82).'
  },
  {
    'client_id': 251,
    'first_name': 'Ферапонт',
    'last_name': 'Силин',
    'phone_number': '8 220 453 57 09',
    'email': 'vseslav_55@npo.edu',
    'purchases': [
      {
        'date': '2023-03-23',
        'price': 6615,
        'category': 'electronics',
        'product_name': 'Смартфон'
      },
      {
        'date': '2023-08-01',
        'price': 7634,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      },
      {
        'date': '2024-05-15',
        'price': 7884,
        'category': 'books',
        'product_name': 'Поэзия'
      }
    ],
    'features': {
      'avg_check': 7377,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 111,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'books',
        'electronics'
      ]
    },
    'purchase_probability': 0.54,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Ферапонт Силин новые товары из категории electronics. Вероятность покупки высокая (0.54).'
  },
  {
    'client_id': 252,
    'first_name': 'Денис',
    'last_name': 'Горшков',
    'phone_number': '8 (074) 825-7337',
    'email': 'ostromirshirjaev@hotmail.com',
    'purchases': [
      {
        'date': '2023-09-25',
        'price': 12411,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2023-08-28',
        'price': 1221,
        'category': 'electronics',
        'product_name': 'Монитор'
      },
      {
        'date': '2024-06-27',
        'price': 2576,
        'category': 'electronics',
        'product_name': 'Планшет'
      }
    ],
    'features': {
      'avg_check': 5402,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 52,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'electronics',
        'books'
      ]
    },
    'purchase_probability': 0.79,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Денис Горшков новые товары из категории books. Вероятность покупки высокая (0.79).'
  },
  {
    'client_id': 253,
    'first_name': 'Анисим',
    'last_name': 'Терентьева',
    'phone_number': '8 (456) 459-34-12',
    'email': 'gurevakim@mail.ru',
    'purchases': [
      {
        'date': '2023-10-30',
        'price': 3965,
        'category': 'sports',
        'product_name': 'Шорты'
      },
      {
        'date': '2024-02-09',
        'price': 2522,
        'category': 'electronics',
        'product_name': 'Монитор'
      },
      {
        'date': '2024-09-09',
        'price': 6577,
        'category': 'electronics',
        'product_name': 'Смартфон'
      }
    ],
    'features': {
      'avg_check': 4354,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 9,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'electronics',
        'sports'
      ]
    },
    'purchase_probability': 0.71,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Анисим Терентьева новые товары из категории electronics. Вероятность покупки высокая (0.71).'
  },
  {
    'client_id': 254,
    'first_name': 'Григорий',
    'last_name': 'Цветков',
    'phone_number': '+7 (717) 121-92-86',
    'email': 'emmanuil_06@ao.org',
    'purchases': [
      {
        'date': '2023-02-23',
        'price': 538,
        'category': 'accessories',
        'product_name': 'Мышь'
      },
      {
        'date': '2024-03-18',
        'price': 2406,
        'category': 'accessories',
        'product_name': 'Зарядка'
      },
      {
        'date': '2024-02-07',
        'price': 768,
        'category': 'sports',
        'product_name': 'Шорты'
      }
    ],
    'features': {
      'avg_check': 1237,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 64,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'accessories',
        'sports'
      ]
    },
    'purchase_probability': 0.85,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Григорий Цветков новые товары из категории accessories. Вероятность покупки высокая (0.85).'
  },
  {
    'client_id': 255,
    'first_name': 'Поликарп',
    'last_name': 'Носов',
    'phone_number': '+7 591 862 48 85',
    'email': 'isa1979@gmail.com',
    'purchases': [
      {
        'date': '2023-06-09',
        'price': 3196,
        'category': 'sports',
        'product_name': 'Гантели'
      },
      {
        'date': '2024-01-24',
        'price': 2556,
        'category': 'sports',
        'product_name': 'Шорты'
      },
      {
        'date': '2023-12-17',
        'price': 7827,
        'category': 'sports',
        'product_name': 'Гантели'
      }
    ],
    'features': {
      'avg_check': 4526,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 112,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'sports',
        'beauty'
      ]
    },
    'purchase_probability': 0.85,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Поликарп Носов новые товары из категории sports. Вероятность покупки высокая (0.85).'
  },
  {
    'client_id': 256,
    'first_name': 'Василий',
    'last_name': 'Овчинников',
    'phone_number': '8 802 025 07 56',
    'email': 'ualekseeva@ip.com',
    'purchases': [
      {
        'date': '2023-10-10',
        'price': 14112,
        'category': 'sports',
        'product_name': 'Шорты'
      },
      {
        'date': '2023-05-31',
        'price': 6646,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2024-02-15',
        'price': 7818,
        'category': 'electronics',
        'product_name': 'Смартфон'
      }
    ],
    'features': {
      'avg_check': 9525,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 22,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'electronics',
        'sports'
      ]
    },
    'purchase_probability': 0.55,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Василий Овчинников новые товары из категории electronics. Вероятность покупки высокая (0.55).'
  },
  {
    'client_id': 257,
    'first_name': 'Юлия',
    'last_name': 'Некрасова',
    'phone_number': '8 704 245 2727',
    'email': 'kostinmaksim@ip.edu',
    'purchases': [
      {
        'date': '2023-02-04',
        'price': 1676,
        'category': 'accessories',
        'product_name': 'Чехол'
      },
      {
        'date': '2024-06-14',
        'price': 11958,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2024-04-24',
        'price': 5045,
        'category': 'books',
        'product_name': 'Фантастика'
      }
    ],
    'features': {
      'avg_check': 6226,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 8,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'accessories',
        'books'
      ]
    },
    'purchase_probability': 0.88,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Юлия Некрасова новые товары из категории accessories. Вероятность покупки высокая (0.88).'
  },
  {
    'client_id': 258,
    'first_name': 'Дементий',
    'last_name': 'Лапин',
    'phone_number': '86158027512',
    'email': 'evdokimovspiridon@fedotov.info',
    'purchases': [
      {
        'date': '2023-04-11',
        'price': 3328,
        'category': 'sports',
        'product_name': 'Кроссовки'
      },
      {
        'date': '2023-12-28',
        'price': 1459,
        'category': 'sports',
        'product_name': 'Гантели'
      },
      {
        'date': '2024-04-30',
        'price': 14828,
        'category': 'beauty',
        'product_name': 'Крем'
      }
    ],
    'features': {
      'avg_check': 6538,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 31,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'sports',
        'beauty'
      ]
    },
    'purchase_probability': 0.76,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Дементий Лапин новые товары из категории beauty. Вероятность покупки высокая (0.76).'
  },
  {
    'client_id': 259,
    'first_name': 'Корнил',
    'last_name': 'Нестерова',
    'phone_number': '85441632199',
    'email': 'evfrosinija2001@rao.com',
    'purchases': [
      {
        'date': '2023-11-28',
        'price': 2108,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      },
      {
        'date': '2023-08-12',
        'price': 8011,
        'category': 'accessories',
        'product_name': 'Кабель'
      },
      {
        'date': '2024-03-08',
        'price': 10796,
        'category': 'electronics',
        'product_name': 'Планшет'
      }
    ],
    'features': {
      'avg_check': 6971,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 53,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'accessories',
        'electronics'
      ]
    },
    'purchase_probability': 0.83,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Корнил Нестерова новые товары из категории electronics. Вероятность покупки высокая (0.83).'
  },
  {
    'client_id': 260,
    'first_name': 'Константин',
    'last_name': 'Макаров',
    'phone_number': '+7 225 085 8567',
    'email': 'ssorokin@hotmail.com',
    'purchases': [
      {
        'date': '2023-04-06',
        'price': 11872,
        'category': 'beauty',
        'product_name': 'Крем'
      },
      {
        'date': '2023-09-22',
        'price': 10352,
        'category': 'books',
        'product_name': 'Фантастика'
      },
      {
        'date': '2024-07-04',
        'price': 7701,
        'category': 'books',
        'product_name': 'Учебник'
      }
    ],
    'features': {
      'avg_check': 9975,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 28,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'beauty',
        'books'
      ]
    },
    'purchase_probability': 0.92,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Константин Макаров новые товары из категории beauty. Вероятность покупки высокая (0.92).'
  },
  {
    'client_id': 261,
    'first_name': 'Милен',
    'last_name': 'Коновалов',
    'phone_number': '+74398460583',
    'email': 'zterentev@yahoo.com',
    'purchases': [
      {
        'date': '2023-03-31',
        'price': 6279,
        'category': 'accessories',
        'product_name': 'Чехол'
      },
      {
        'date': '2023-09-28',
        'price': 4126,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      },
      {
        'date': '2024-08-31',
        'price': 9912,
        'category': 'accessories',
        'product_name': 'Мышь'
      }
    ],
    'features': {
      'avg_check': 6772,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 37,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'electronics',
        'accessories'
      ]
    },
    'purchase_probability': 0.6,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Милен Коновалов новые товары из категории accessories. Вероятность покупки высокая (0.6).'
  },
  {
    'client_id': 262,
    'first_name': 'Януарий',
    'last_name': 'Зайцев',
    'phone_number': '+7 (400) 747-54-31',
    'email': 'bgusev@rao.com',
    'purchases': [
      {
        'date': '2023-11-21',
        'price': 7015,
        'category': 'accessories',
        'product_name': 'Мышь'
      },
      {
        'date': '2023-04-23',
        'price': 1597,
        'category': 'electronics',
        'product_name': 'Монитор'
      },
      {
        'date': '2024-06-27',
        'price': 12661,
        'category': 'accessories',
        'product_name': 'Кабель'
      }
    ],
    'features': {
      'avg_check': 7091,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 88,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'accessories',
        'electronics'
      ]
    },
    'purchase_probability': 0.51,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Януарий Зайцев новые товары из категории electronics. Вероятность покупки высокая (0.51).'
  },
  {
    'client_id': 263,
    'first_name': 'Василиса',
    'last_name': 'Романова',
    'phone_number': '8 420 375 80 98',
    'email': 'guri_61@oao.org',
    'purchases': [
      {
        'date': '2023-05-14',
        'price': 10195,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2024-04-09',
        'price': 14641,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2024-03-14',
        'price': 10464,
        'category': 'beauty',
        'product_name': 'Крем'
      }
    ],
    'features': {
      'avg_check': 11766,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 57,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'beauty',
        'sports'
      ]
    },
    'purchase_probability': 0.58,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Василиса Романова новые товары из категории sports. Вероятность покупки высокая (0.58).'
  },
  {
    'client_id': 264,
    'first_name': 'Юлий',
    'last_name': 'Логинов',
    'phone_number': '+7 (699) 869-89-11',
    'email': 'markeliseev@mail.ru',
    'purchases': [
      {
        'date': '2023-08-22',
        'price': 3774,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2023-08-09',
        'price': 9869,
        'category': 'sports',
        'product_name': 'Мяч'
      },
      {
        'date': '2024-05-31',
        'price': 12490,
        'category': 'books',
        'product_name': 'Учебник'
      }
    ],
    'features': {
      'avg_check': 8711,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 46,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'sports',
        'books'
      ]
    },
    'purchase_probability': 0.85,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Юлий Логинов новые товары из категории sports. Вероятность покупки высокая (0.85).'
  },
  {
    'client_id': 265,
    'first_name': 'Таисия',
    'last_name': 'Пестова',
    'phone_number': '+7 194 892 51 25',
    'email': 'uvarovmilen@ooo.org',
    'purchases': [
      {
        'date': '2023-08-12',
        'price': 7762,
        'category': 'books',
        'product_name': 'Детектив'
      },
      {
        'date': '2023-06-01',
        'price': 4307,
        'category': 'books',
        'product_name': 'Детектив'
      },
      {
        'date': '2024-05-19',
        'price': 9555,
        'category': 'books',
        'product_name': 'Поэзия'
      }
    ],
    'features': {
      'avg_check': 7208,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 104,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'accessories',
        'books'
      ]
    },
    'purchase_probability': 0.57,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Таисия Пестова новые товары из категории accessories. Вероятность покупки высокая (0.57).'
  },
  {
    'client_id': 266,
    'first_name': 'Елисей',
    'last_name': 'Кириллов',
    'phone_number': '8 855 439 0706',
    'email': 'ovchinnikovkondrat@hotmail.com',
    'purchases': [
      {
        'date': '2023-02-07',
        'price': 12868,
        'category': 'electronics',
        'product_name': 'Смартфон'
      },
      {
        'date': '2023-12-22',
        'price': 6525,
        'category': 'electronics',
        'product_name': 'Наушники'
      },
      {
        'date': '2024-03-19',
        'price': 9501,
        'category': 'electronics',
        'product_name': 'Планшет'
      }
    ],
    'features': {
      'avg_check': 9631,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 116,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'electronics',
        'beauty'
      ]
    },
    'purchase_probability': 0.87,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Елисей Кириллов новые товары из категории electronics. Вероятность покупки высокая (0.87).'
  },
  {
    'client_id': 267,
    'first_name': 'Ферапонт',
    'last_name': 'Гущин',
    'phone_number': '87866625836',
    'email': 'timofejudin@yandex.ru',
    'purchases': [
      {
        'date': '2023-12-20',
        'price': 7144,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2023-05-15',
        'price': 10309,
        'category': 'electronics',
        'product_name': 'Планшет'
      },
      {
        'date': '2024-02-28',
        'price': 2479,
        'category': 'electronics',
        'product_name': 'Смартфон'
      }
    ],
    'features': {
      'avg_check': 6644,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 45,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'books',
        'electronics'
      ]
    },
    'purchase_probability': 0.87,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Ферапонт Гущин новые товары из категории books. Вероятность покупки высокая (0.87).'
  },
  {
    'client_id': 268,
    'first_name': 'Александра',
    'last_name': 'Рогова',
    'phone_number': '+7 (835) 158-4400',
    'email': 'prokl98@efimova.biz',
    'purchases': [
      {
        'date': '2023-09-23',
        'price': 14374,
        'category': 'beauty',
        'product_name': 'Крем'
      },
      {
        'date': '2023-08-06',
        'price': 4681,
        'category': 'accessories',
        'product_name': 'Кабель'
      },
      {
        'date': '2023-12-25',
        'price': 12953,
        'category': 'beauty',
        'product_name': 'Крем'
      }
    ],
    'features': {
      'avg_check': 10669,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 20,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'accessories',
        'beauty'
      ]
    },
    'purchase_probability': 0.67,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Александра Рогова новые товары из категории accessories. Вероятность покупки высокая (0.67).'
  },
  {
    'client_id': 269,
    'first_name': 'Мариан',
    'last_name': 'Агафонова',
    'phone_number': '+78096159026',
    'email': 'potap_1985@rambler.ru',
    'purchases': [
      {
        'date': '2023-02-06',
        'price': 2525,
        'category': 'electronics',
        'product_name': 'Наушники'
      },
      {
        'date': '2024-05-08',
        'price': 6576,
        'category': 'beauty',
        'product_name': 'Помада'
      },
      {
        'date': '2024-08-05',
        'price': 6596,
        'category': 'beauty',
        'product_name': 'Помада'
      }
    ],
    'features': {
      'avg_check': 5232,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 114,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'electronics',
        'beauty'
      ]
    },
    'purchase_probability': 0.52,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Мариан Агафонова новые товары из категории beauty. Вероятность покупки высокая (0.52).'
  },
  {
    'client_id': 270,
    'first_name': 'Бажен',
    'last_name': 'Галкин',
    'phone_number': '8 (654) 170-4195',
    'email': 'dorofeevemil@yandex.ru',
    'purchases': [
      {
        'date': '2023-07-24',
        'price': 8719,
        'category': 'sports',
        'product_name': 'Кроссовки'
      },
      {
        'date': '2023-12-30',
        'price': 11548,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      },
      {
        'date': '2024-01-08',
        'price': 13235,
        'category': 'sports',
        'product_name': 'Мяч'
      }
    ],
    'features': {
      'avg_check': 11167,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 2,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'sports',
        'accessories'
      ]
    },
    'purchase_probability': 0.92,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Бажен Галкин новые товары из категории accessories. Вероятность покупки высокая (0.92).'
  },
  {
    'client_id': 271,
    'first_name': 'Антип',
    'last_name': 'Мартынова',
    'phone_number': '8 985 985 6651',
    'email': 'kuprijan55@rambler.ru',
    'purchases': [
      {
        'date': '2023-05-28',
        'price': 1801,
        'category': 'beauty',
        'product_name': 'Помада'
      },
      {
        'date': '2023-12-23',
        'price': 11892,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2023-10-16',
        'price': 4301,
        'category': 'sports',
        'product_name': 'Кроссовки'
      }
    ],
    'features': {
      'avg_check': 5998,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 2,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'beauty',
        'sports'
      ]
    },
    'purchase_probability': 0.94,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Антип Мартынова новые товары из категории sports. Вероятность покупки высокая (0.94).'
  },
  {
    'client_id': 272,
    'first_name': 'Фаина',
    'last_name': 'Кошелев',
    'phone_number': '88436775525',
    'email': 'matveustinov@kudrjavtsev.info',
    'purchases': [
      {
        'date': '2023-06-16',
        'price': 1568,
        'category': 'accessories',
        'product_name': 'Чехол'
      },
      {
        'date': '2024-01-24',
        'price': 6552,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      },
      {
        'date': '2024-04-09',
        'price': 14274,
        'category': 'electronics',
        'product_name': 'Монитор'
      }
    ],
    'features': {
      'avg_check': 7464,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 108,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'electronics',
        'accessories'
      ]
    },
    'purchase_probability': 0.58,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Фаина Кошелев новые товары из категории electronics. Вероятность покупки высокая (0.58).'
  },
  {
    'client_id': 273,
    'first_name': 'Григорий',
    'last_name': 'Бирюкова',
    'phone_number': '8 (306) 834-8785',
    'email': 'julija1986@novostal.edu',
    'purchases': [
      {
        'date': '2023-07-07',
        'price': 7854,
        'category': 'beauty',
        'product_name': 'Крем'
      },
      {
        'date': '2023-12-25',
        'price': 7772,
        'category': 'beauty',
        'product_name': 'Крем'
      },
      {
        'date': '2024-01-16',
        'price': 5482,
        'category': 'sports',
        'product_name': 'Кроссовки'
      }
    ],
    'features': {
      'avg_check': 7036,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 68,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'sports',
        'beauty'
      ]
    },
    'purchase_probability': 0.81,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Григорий Бирюкова новые товары из категории beauty. Вероятность покупки высокая (0.81).'
  },
  {
    'client_id': 274,
    'first_name': 'Виталий',
    'last_name': 'Николаев',
    'phone_number': '8 (348) 158-44-11',
    'email': 'svjatoslav_1995@gmail.com',
    'purchases': [
      {
        'date': '2023-04-09',
        'price': 13200,
        'category': 'sports',
        'product_name': 'Гантели'
      },
      {
        'date': '2023-06-17',
        'price': 1200,
        'category': 'sports',
        'product_name': 'Мяч'
      },
      {
        'date': '2024-06-27',
        'price': 6856,
        'category': 'sports',
        'product_name': 'Гантели'
      }
    ],
    'features': {
      'avg_check': 7085,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 88,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'electronics',
        'sports'
      ]
    },
    'purchase_probability': 0.77,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Виталий Николаев новые товары из категории electronics. Вероятность покупки высокая (0.77).'
  },
  {
    'client_id': 275,
    'first_name': 'Федор',
    'last_name': 'Семенов',
    'phone_number': '8 (393) 037-8131',
    'email': 'petr1992@yahoo.com',
    'purchases': [
      {
        'date': '2023-04-27',
        'price': 13834,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2023-09-07',
        'price': 3355,
        'category': 'accessories',
        'product_name': 'Зарядка'
      },
      {
        'date': '2024-06-30',
        'price': 3092,
        'category': 'books',
        'product_name': 'Учебник'
      }
    ],
    'features': {
      'avg_check': 6760,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 2,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'books',
        'accessories'
      ]
    },
    'purchase_probability': 0.92,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Федор Семенов новые товары из категории books. Вероятность покупки высокая (0.92).'
  },
  {
    'client_id': 276,
    'first_name': 'Парамон',
    'last_name': 'Юдин',
    'phone_number': '+7 053 586 13 69',
    'email': 'grigorevfeoktist@ip.edu',
    'purchases': [
      {
        'date': '2023-12-21',
        'price': 11961,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2023-09-11',
        'price': 5611,
        'category': 'sports',
        'product_name': 'Гантели'
      },
      {
        'date': '2023-12-14',
        'price': 12258,
        'category': 'sports',
        'product_name': 'Гантели'
      }
    ],
    'features': {
      'avg_check': 9943,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 88,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'sports',
        'beauty'
      ]
    },
    'purchase_probability': 0.62,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Парамон Юдин новые товары из категории sports. Вероятность покупки высокая (0.62).'
  },
  {
    'client_id': 277,
    'first_name': 'Карл',
    'last_name': 'Киселева',
    'phone_number': '8 (905) 951-9186',
    'email': 'nikandr2022@ip.net',
    'purchases': [
      {
        'date': '2023-11-16',
        'price': 4596,
        'category': 'electronics',
        'product_name': 'Наушники'
      },
      {
        'date': '2024-02-18',
        'price': 9714,
        'category': 'electronics',
        'product_name': 'Планшет'
      },
      {
        'date': '2024-01-22',
        'price': 3284,
        'category': 'beauty',
        'product_name': 'Шампунь'
      }
    ],
    'features': {
      'avg_check': 5864,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 99,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'beauty',
        'electronics'
      ]
    },
    'purchase_probability': 0.9,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Карл Киселева новые товары из категории electronics. Вероятность покупки высокая (0.9).'
  },
  {
    'client_id': 278,
    'first_name': 'Глеб',
    'last_name': 'Соколов',
    'phone_number': '+7 902 531 7979',
    'email': 'vsevolod2012@gruppa.org',
    'purchases': [
      {
        'date': '2023-09-23',
        'price': 14473,
        'category': 'electronics',
        'product_name': 'Смартфон'
      },
      {
        'date': '2023-12-17',
        'price': 5341,
        'category': 'accessories',
        'product_name': 'Зарядка'
      },
      {
        'date': '2024-03-14',
        'price': 1088,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      }
    ],
    'features': {
      'avg_check': 6967,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 46,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'electronics',
        'accessories'
      ]
    },
    'purchase_probability': 0.61,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Глеб Соколов новые товары из категории electronics. Вероятность покупки высокая (0.61).'
  },
  {
    'client_id': 279,
    'first_name': 'Пимен',
    'last_name': 'Абрамов',
    'phone_number': '8 407 406 0183',
    'email': 'sobolevantip@yandex.ru',
    'purchases': [
      {
        'date': '2023-04-11',
        'price': 9794,
        'category': 'electronics',
        'product_name': 'Наушники'
      },
      {
        'date': '2023-09-04',
        'price': 9200,
        'category': 'electronics',
        'product_name': 'Планшет'
      },
      {
        'date': '2024-04-26',
        'price': 14398,
        'category': 'electronics',
        'product_name': 'Наушники'
      }
    ],
    'features': {
      'avg_check': 11130,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 76,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'electronics',
        'books'
      ]
    },
    'purchase_probability': 0.72,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Пимен Абрамов новые товары из категории books. Вероятность покупки высокая (0.72).'
  },
  {
    'client_id': 280,
    'first_name': 'Лора',
    'last_name': 'Фомина',
    'phone_number': '+7 (114) 701-09-33',
    'email': 'bikovafaina@mail.ru',
    'purchases': [
      {
        'date': '2023-11-22',
        'price': 9705,
        'category': 'sports',
        'product_name': 'Гантели'
      },
      {
        'date': '2023-10-11',
        'price': 8055,
        'category': 'sports',
        'product_name': 'Мяч'
      },
      {
        'date': '2024-05-23',
        'price': 10787,
        'category': 'beauty',
        'product_name': 'Шампунь'
      }
    ],
    'features': {
      'avg_check': 9515,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 103,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'beauty',
        'sports'
      ]
    },
    'purchase_probability': 0.87,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Лора Фомина новые товары из категории beauty. Вероятность покупки высокая (0.87).'
  },
  {
    'client_id': 281,
    'first_name': 'Епифан',
    'last_name': 'Воробьева',
    'phone_number': '+7 185 337 03 52',
    'email': 'maja61@yandex.ru',
    'purchases': [
      {
        'date': '2023-11-25',
        'price': 11741,
        'category': 'electronics',
        'product_name': 'Монитор'
      },
      {
        'date': '2023-10-09',
        'price': 13321,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2024-07-13',
        'price': 13422,
        'category': 'sports',
        'product_name': 'Кроссовки'
      }
    ],
    'features': {
      'avg_check': 12828,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 3,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'sports',
        'electronics'
      ]
    },
    'purchase_probability': 0.79,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Епифан Воробьева новые товары из категории sports. Вероятность покупки высокая (0.79).'
  },
  {
    'client_id': 282,
    'first_name': 'Владилен',
    'last_name': 'Дмитриев',
    'phone_number': '8 (074) 560-9122',
    'email': 'filippfilippov@yandex.ru',
    'purchases': [
      {
        'date': '2023-09-30',
        'price': 9237,
        'category': 'beauty',
        'product_name': 'Шампунь'
      },
      {
        'date': '2023-09-17',
        'price': 9113,
        'category': 'beauty',
        'product_name': 'Шампунь'
      },
      {
        'date': '2024-02-13',
        'price': 6208,
        'category': 'beauty',
        'product_name': 'Шампунь'
      }
    ],
    'features': {
      'avg_check': 8186,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 59,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'electronics',
        'beauty'
      ]
    },
    'purchase_probability': 0.62,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Владилен Дмитриев новые товары из категории beauty. Вероятность покупки высокая (0.62).'
  },
  {
    'client_id': 283,
    'first_name': 'Каллистрат',
    'last_name': 'Евдокимов',
    'phone_number': '86956772197',
    'email': 'budimirtsvetkov@ip.org',
    'purchases': [
      {
        'date': '2023-09-16',
        'price': 3532,
        'category': 'accessories',
        'product_name': 'Кабель'
      },
      {
        'date': '2024-05-07',
        'price': 6320,
        'category': 'accessories',
        'product_name': 'Мышь'
      },
      {
        'date': '2024-03-03',
        'price': 14416,
        'category': 'accessories',
        'product_name': 'Чехол'
      }
    ],
    'features': {
      'avg_check': 8089,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 42,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'accessories',
        'electronics'
      ]
    },
    'purchase_probability': 0.78,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Каллистрат Евдокимов новые товары из категории electronics. Вероятность покупки высокая (0.78).'
  },
  {
    'client_id': 284,
    'first_name': 'Эрнест',
    'last_name': 'Беспалова',
    'phone_number': '8 746 499 6356',
    'email': 'bmiheev@ip.ru',
    'purchases': [
      {
        'date': '2023-08-14',
        'price': 8075,
        'category': 'electronics',
        'product_name': 'Смартфон'
      },
      {
        'date': '2023-12-15',
        'price': 1645,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      },
      {
        'date': '2024-06-26',
        'price': 6327,
        'category': 'electronics',
        'product_name': 'Планшет'
      }
    ],
    'features': {
      'avg_check': 5349,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 66,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'books',
        'electronics'
      ]
    },
    'purchase_probability': 0.66,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Эрнест Беспалова новые товары из категории electronics. Вероятность покупки высокая (0.66).'
  },
  {
    'client_id': 285,
    'first_name': 'Алевтина',
    'last_name': 'Фокин',
    'phone_number': '86050793082',
    'email': 'zaharovamargarita@rambler.ru',
    'purchases': [
      {
        'date': '2023-03-03',
        'price': 1694,
        'category': 'electronics',
        'product_name': 'Монитор'
      },
      {
        'date': '2023-12-23',
        'price': 5461,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2023-10-07',
        'price': 8490,
        'category': 'books',
        'product_name': 'Фантастика'
      }
    ],
    'features': {
      'avg_check': 5215,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 8,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'books',
        'electronics'
      ]
    },
    'purchase_probability': 0.67,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Алевтина Фокин новые товары из категории electronics. Вероятность покупки высокая (0.67).'
  },
  {
    'client_id': 286,
    'first_name': 'Исидор',
    'last_name': 'Ларионова',
    'phone_number': '+7 (731) 481-9593',
    'email': 'modestkornilov@rambler.ru',
    'purchases': [
      {
        'date': '2023-03-26',
        'price': 14460,
        'category': 'beauty',
        'product_name': 'Парфюм'
      },
      {
        'date': '2023-10-31',
        'price': 3475,
        'category': 'electronics',
        'product_name': 'Наушники'
      },
      {
        'date': '2024-03-08',
        'price': 7715,
        'category': 'beauty',
        'product_name': 'Крем'
      }
    ],
    'features': {
      'avg_check': 8550,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 4,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'beauty',
        'electronics'
      ]
    },
    'purchase_probability': 0.9,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Исидор Ларионова новые товары из категории beauty. Вероятность покупки высокая (0.9).'
  },
  {
    'client_id': 287,
    'first_name': 'Панкрат',
    'last_name': 'Уварова',
    'phone_number': '+77208298032',
    'email': 'lvorontsova@ao.biz',
    'purchases': [
      {
        'date': '2023-07-16',
        'price': 902,
        'category': 'accessories',
        'product_name': 'Кабель'
      },
      {
        'date': '2023-11-03',
        'price': 9847,
        'category': 'electronics',
        'product_name': 'Монитор'
      },
      {
        'date': '2024-02-07',
        'price': 1613,
        'category': 'electronics',
        'product_name': 'Планшет'
      }
    ],
    'features': {
      'avg_check': 4120,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 18,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'accessories',
        'electronics'
      ]
    },
    'purchase_probability': 0.75,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Панкрат Уварова новые товары из категории electronics. Вероятность покупки высокая (0.75).'
  },
  {
    'client_id': 288,
    'first_name': 'Тимофей',
    'last_name': 'Копылов',
    'phone_number': '+72988809805',
    'email': 'oleg_20@yuzhuralzoloto.net',
    'purchases': [
      {
        'date': '2023-03-01',
        'price': 10806,
        'category': 'beauty',
        'product_name': 'Помада'
      },
      {
        'date': '2024-02-10',
        'price': 6007,
        'category': 'beauty',
        'product_name': 'Маска'
      },
      {
        'date': '2023-12-29',
        'price': 5966,
        'category': 'books',
        'product_name': 'Детектив'
      }
    ],
    'features': {
      'avg_check': 7593,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 98,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'beauty',
        'books'
      ]
    },
    'purchase_probability': 0.83,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Тимофей Копылов новые товары из категории beauty. Вероятность покупки высокая (0.83).'
  },
  {
    'client_id': 289,
    'first_name': 'Станимир',
    'last_name': 'Бобылев',
    'phone_number': '8 (490) 580-4879',
    'email': 'beljakovjaropolk@yandex.ru',
    'purchases': [
      {
        'date': '2023-02-18',
        'price': 8930,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2024-01-17',
        'price': 9289,
        'category': 'beauty',
        'product_name': 'Помада'
      },
      {
        'date': '2024-05-13',
        'price': 14977,
        'category': 'beauty',
        'product_name': 'Шампунь'
      }
    ],
    'features': {
      'avg_check': 11065,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 95,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'sports',
        'beauty'
      ]
    },
    'purchase_probability': 0.86,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Станимир Бобылев новые товары из категории beauty. Вероятность покупки высокая (0.86).'
  },
  {
    'client_id': 290,
    'first_name': 'Ольга',
    'last_name': 'Трофимов',
    'phone_number': '8 (106) 345-1570',
    'email': 'ekrilova@yahoo.com',
    'purchases': [
      {
        'date': '2023-08-24',
        'price': 6142,
        'category': 'beauty',
        'product_name': 'Шампунь'
      },
      {
        'date': '2023-09-23',
        'price': 4439,
        'category': 'sports',
        'product_name': 'Шорты'
      },
      {
        'date': '2023-11-23',
        'price': 12595,
        'category': 'sports',
        'product_name': 'Футболка'
      }
    ],
    'features': {
      'avg_check': 7725,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 9,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'beauty',
        'sports'
      ]
    },
    'purchase_probability': 0.82,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Ольга Трофимов новые товары из категории sports. Вероятность покупки высокая (0.82).'
  },
  {
    'client_id': 291,
    'first_name': 'Климент',
    'last_name': 'Волкова',
    'phone_number': '8 119 303 89 10',
    'email': 'sobolevselivan@oao.info',
    'purchases': [
      {
        'date': '2023-07-14',
        'price': 4215,
        'category': 'sports',
        'product_name': 'Шорты'
      },
      {
        'date': '2023-08-16',
        'price': 13358,
        'category': 'electronics',
        'product_name': 'Планшет'
      },
      {
        'date': '2024-03-28',
        'price': 5196,
        'category': 'sports',
        'product_name': 'Кроссовки'
      }
    ],
    'features': {
      'avg_check': 7589,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 45,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'electronics',
        'sports'
      ]
    },
    'purchase_probability': 0.52,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Климент Волкова новые товары из категории sports. Вероятность покупки высокая (0.52).'
  },
  {
    'client_id': 292,
    'first_name': 'Святослав',
    'last_name': 'Щербакова',
    'phone_number': '+7 (368) 650-9486',
    'email': 'beljaevaljubov@npo.org',
    'purchases': [
      {
        'date': '2023-07-02',
        'price': 3602,
        'category': 'electronics',
        'product_name': 'Смартфон'
      },
      {
        'date': '2024-03-12',
        'price': 5479,
        'category': 'beauty',
        'product_name': 'Парфюм'
      },
      {
        'date': '2023-09-24',
        'price': 4061,
        'category': 'electronics',
        'product_name': 'Наушники'
      }
    ],
    'features': {
      'avg_check': 4380,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 80,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'beauty',
        'electronics'
      ]
    },
    'purchase_probability': 0.6,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Святослав Щербакова новые товары из категории electronics. Вероятность покупки высокая (0.6).'
  },
  {
    'client_id': 293,
    'first_name': 'Севастьян',
    'last_name': 'Стрелков',
    'phone_number': '8 (794) 458-1219',
    'email': 'seliverstkrjukov@gmail.com',
    'purchases': [
      {
        'date': '2023-03-13',
        'price': 2515,
        'category': 'beauty',
        'product_name': 'Помада'
      },
      {
        'date': '2023-08-13',
        'price': 12694,
        'category': 'sports',
        'product_name': 'Мяч'
      },
      {
        'date': '2023-08-27',
        'price': 9671,
        'category': 'sports',
        'product_name': 'Шорты'
      }
    ],
    'features': {
      'avg_check': 8293,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 92,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'sports',
        'beauty'
      ]
    },
    'purchase_probability': 0.8,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Севастьян Стрелков новые товары из категории beauty. Вероятность покупки высокая (0.8).'
  },
  {
    'client_id': 294,
    'first_name': 'Тамара',
    'last_name': 'Калашникова',
    'phone_number': '80630577594',
    'email': 'makar_44@mail.ru',
    'purchases': [
      {
        'date': '2023-03-29',
        'price': 6724,
        'category': 'books',
        'product_name': 'Детектив'
      },
      {
        'date': '2023-07-19',
        'price': 3636,
        'category': 'beauty',
        'product_name': 'Помада'
      },
      {
        'date': '2024-04-06',
        'price': 2734,
        'category': 'books',
        'product_name': 'Роман'
      }
    ],
    'features': {
      'avg_check': 4364,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 119,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'books',
        'beauty'
      ]
    },
    'purchase_probability': 0.5,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Тамара Калашникова новые товары из категории beauty. Вероятность покупки высокая (0.5).'
  },
  {
    'client_id': 295,
    'first_name': 'Чеслав',
    'last_name': 'Евсеева',
    'phone_number': '8 757 442 7338',
    'email': 'milovan2013@yahoo.com',
    'purchases': [
      {
        'date': '2023-05-08',
        'price': 8229,
        'category': 'accessories',
        'product_name': 'Зарядка'
      },
      {
        'date': '2024-01-11',
        'price': 10319,
        'category': 'beauty',
        'product_name': 'Шампунь'
      },
      {
        'date': '2023-11-17',
        'price': 5002,
        'category': 'beauty',
        'product_name': 'Маска'
      }
    ],
    'features': {
      'avg_check': 7850,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 71,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'accessories',
        'beauty'
      ]
    },
    'purchase_probability': 0.83,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Чеслав Евсеева новые товары из категории beauty. Вероятность покупки высокая (0.83).'
  },
  {
    'client_id': 296,
    'first_name': 'Зоя',
    'last_name': 'Вишняков',
    'phone_number': '8 124 995 6132',
    'email': 'abramovaevgenija@npo.biz',
    'purchases': [
      {
        'date': '2023-03-12',
        'price': 12012,
        'category': 'sports',
        'product_name': 'Гантели'
      },
      {
        'date': '2023-11-15',
        'price': 4495,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2024-02-18',
        'price': 10458,
        'category': 'books',
        'product_name': 'Детектив'
      }
    ],
    'features': {
      'avg_check': 8988,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 95,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'books',
        'sports'
      ]
    },
    'purchase_probability': 0.68,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Зоя Вишняков новые товары из категории books. Вероятность покупки высокая (0.68).'
  },
  {
    'client_id': 297,
    'first_name': 'Панкратий',
    'last_name': 'Стрелков',
    'phone_number': '8 (985) 775-84-46',
    'email': 'eleonora2024@rambler.ru',
    'purchases': [
      {
        'date': '2023-03-15',
        'price': 14165,
        'category': 'beauty',
        'product_name': 'Шампунь'
      },
      {
        'date': '2023-10-10',
        'price': 7183,
        'category': 'electronics',
        'product_name': 'Монитор'
      },
      {
        'date': '2024-08-30',
        'price': 14415,
        'category': 'electronics',
        'product_name': 'Монитор'
      }
    ],
    'features': {
      'avg_check': 11921,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 38,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'electronics',
        'beauty'
      ]
    },
    'purchase_probability': 0.62,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Панкратий Стрелков новые товары из категории beauty. Вероятность покупки высокая (0.62).'
  },
  {
    'client_id': 298,
    'first_name': 'Агафон',
    'last_name': 'Фокина',
    'phone_number': '8 082 434 77 91',
    'email': 'ninel1973@gmail.com',
    'purchases': [
      {
        'date': '2023-12-06',
        'price': 8665,
        'category': 'beauty',
        'product_name': 'Маска'
      },
      {
        'date': '2024-02-11',
        'price': 8182,
        'category': 'books',
        'product_name': 'Детектив'
      },
      {
        'date': '2024-04-06',
        'price': 14081,
        'category': 'beauty',
        'product_name': 'Шампунь'
      }
    ],
    'features': {
      'avg_check': 10309,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 89,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'beauty',
        'books'
      ]
    },
    'purchase_probability': 0.82,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Агафон Фокина новые товары из категории beauty. Вероятность покупки высокая (0.82).'
  },
  {
    'client_id': 299,
    'first_name': 'Милен',
    'last_name': 'Доронина',
    'phone_number': '+7 (029) 336-05-40',
    'email': 'timofe_1983@hotmail.com',
    'purchases': [
      {
        'date': '2023-09-08',
        'price': 14143,
        'category': 'electronics',
        'product_name': 'Монитор'
      },
      {
        'date': '2024-02-05',
        'price': 12647,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2024-02-17',
        'price': 7016,
        'category': 'electronics',
        'product_name': 'Наушники'
      }
    ],
    'features': {
      'avg_check': 11268,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 39,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'electronics',
        'books'
      ]
    },
    'purchase_probability': 0.71,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Милен Доронина новые товары из категории electronics. Вероятность покупки высокая (0.71).'
  },
  {
    'client_id': 300,
    'first_name': 'Леонтий',
    'last_name': 'Андреев',
    'phone_number': '8 (281) 076-3310',
    'email': 'noskovaagata@popov.org',
    'purchases': [
      {
        'date': '2023-05-07',
        'price': 13837,
        'category': 'accessories',
        'product_name': 'Чехол'
      },
      {
        'date': '2024-05-02',
        'price': 8894,
        'category': 'beauty',
        'product_name': 'Помада'
      },
      {
        'date': '2024-04-26',
        'price': 5036,
        'category': 'beauty',
        'product_name': 'Помада'
      }
    ],
    'features': {
      'avg_check': 9255,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 111,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'accessories',
        'beauty'
      ]
    },
    'purchase_probability': 0.51,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Леонтий Андреев новые товары из категории beauty. Вероятность покупки высокая (0.51).'
  },
  {
    'client_id': 301,
    'first_name': 'Мариан',
    'last_name': 'Мухина',
    'phone_number': '+7 (358) 914-08-85',
    'email': 'sofija87@yahoo.com',
    'purchases': [
      {
        'date': '2023-06-28',
        'price': 6573,
        'category': 'beauty',
        'product_name': 'Помада'
      },
      {
        'date': '2023-06-09',
        'price': 4067,
        'category': 'accessories',
        'product_name': 'Чехол'
      },
      {
        'date': '2023-12-27',
        'price': 8156,
        'category': 'beauty',
        'product_name': 'Крем'
      }
    ],
    'features': {
      'avg_check': 6265,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 15,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'beauty',
        'accessories'
      ]
    },
    'purchase_probability': 0.55,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Мариан Мухина новые товары из категории beauty. Вероятность покупки высокая (0.55).'
  },
  {
    'client_id': 302,
    'first_name': 'Самуил',
    'last_name': 'Афанасьева',
    'phone_number': '88681232282',
    'email': 'longin02@hotmail.com',
    'purchases': [
      {
        'date': '2023-10-22',
        'price': 672,
        'category': 'books',
        'product_name': 'Детектив'
      },
      {
        'date': '2023-12-02',
        'price': 14384,
        'category': 'books',
        'product_name': 'Учебник'
      },
      {
        'date': '2024-10-15',
        'price': 9739,
        'category': 'beauty',
        'product_name': 'Парфюм'
      }
    ],
    'features': {
      'avg_check': 8265,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 13,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'beauty',
        'books'
      ]
    },
    'purchase_probability': 0.68,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Самуил Афанасьева новые товары из категории books. Вероятность покупки высокая (0.68).'
  },
  {
    'client_id': 303,
    'first_name': 'Бронислав',
    'last_name': 'Громов',
    'phone_number': '8 (857) 190-36-72',
    'email': 'uljan2005@yahoo.com',
    'purchases': [
      {
        'date': '2023-10-02',
        'price': 9683,
        'category': 'beauty',
        'product_name': 'Шампунь'
      },
      {
        'date': '2024-02-13',
        'price': 4040,
        'category': 'electronics',
        'product_name': 'Смартфон'
      },
      {
        'date': '2023-11-28',
        'price': 9311,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      }
    ],
    'features': {
      'avg_check': 7678,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 19,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'beauty',
        'electronics'
      ]
    },
    'purchase_probability': 0.88,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Бронислав Громов новые товары из категории electronics. Вероятность покупки высокая (0.88).'
  },
  {
    'client_id': 304,
    'first_name': 'Евсей',
    'last_name': 'Анисимов',
    'phone_number': '8 (097) 434-2230',
    'email': 'novikovtit@gavrilova.ru',
    'purchases': [
      {
        'date': '2023-11-13',
        'price': 11833,
        'category': 'electronics',
        'product_name': 'Смартфон'
      },
      {
        'date': '2024-04-28',
        'price': 3006,
        'category': 'electronics',
        'product_name': 'Монитор'
      },
      {
        'date': '2023-12-23',
        'price': 2667,
        'category': 'accessories',
        'product_name': 'Чехол'
      }
    ],
    'features': {
      'avg_check': 5835,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 27,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'accessories',
        'electronics'
      ]
    },
    'purchase_probability': 0.78,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Евсей Анисимов новые товары из категории accessories. Вероятность покупки высокая (0.78).'
  },
  {
    'client_id': 305,
    'first_name': 'Сидор',
    'last_name': 'Сазонов',
    'phone_number': '+7 374 774 6169',
    'email': 'jodintsova@zao.info',
    'purchases': [
      {
        'date': '2023-06-21',
        'price': 4533,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2023-06-30',
        'price': 7648,
        'category': 'books',
        'product_name': 'Фантастика'
      },
      {
        'date': '2023-11-21',
        'price': 14043,
        'category': 'books',
        'product_name': 'Учебник'
      }
    ],
    'features': {
      'avg_check': 8741,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 117,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'sports',
        'books'
      ]
    },
    'purchase_probability': 0.84,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Сидор Сазонов новые товары из категории sports. Вероятность покупки высокая (0.84).'
  },
  {
    'client_id': 306,
    'first_name': 'Иванна',
    'last_name': 'Николаев',
    'phone_number': '+7 (377) 470-08-34',
    'email': 'timofeevvarlaam@zao.com',
    'purchases': [
      {
        'date': '2023-09-14',
        'price': 7173,
        'category': 'sports',
        'product_name': 'Шорты'
      },
      {
        'date': '2023-06-15',
        'price': 13467,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      },
      {
        'date': '2023-11-23',
        'price': 5575,
        'category': 'sports',
        'product_name': 'Мяч'
      }
    ],
    'features': {
      'avg_check': 8738,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 51,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'accessories',
        'sports'
      ]
    },
    'purchase_probability': 0.86,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Иванна Николаев новые товары из категории sports. Вероятность покупки высокая (0.86).'
  },
  {
    'client_id': 307,
    'first_name': 'Якуб',
    'last_name': 'Соловьев',
    'phone_number': '+7 760 224 62 74',
    'email': 'trofimovjuri@hotmail.com',
    'purchases': [
      {
        'date': '2023-05-05',
        'price': 1498,
        'category': 'accessories',
        'product_name': 'Мышь'
      },
      {
        'date': '2024-02-04',
        'price': 8829,
        'category': 'sports',
        'product_name': 'Кроссовки'
      },
      {
        'date': '2023-11-14',
        'price': 7821,
        'category': 'sports',
        'product_name': 'Шорты'
      }
    ],
    'features': {
      'avg_check': 6049,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 117,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'sports',
        'accessories'
      ]
    },
    'purchase_probability': 0.83,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Якуб Соловьев новые товары из категории accessories. Вероятность покупки высокая (0.83).'
  },
  {
    'client_id': 308,
    'first_name': 'Стоян',
    'last_name': 'Куликова',
    'phone_number': '8 (249) 951-4609',
    'email': 'kkozlova@rambler.ru',
    'purchases': [
      {
        'date': '2023-06-01',
        'price': 965,
        'category': 'electronics',
        'product_name': 'Монитор'
      },
      {
        'date': '2023-09-04',
        'price': 13245,
        'category': 'electronics',
        'product_name': 'Планшет'
      },
      {
        'date': '2024-02-27',
        'price': 5837,
        'category': 'books',
        'product_name': 'Учебник'
      }
    ],
    'features': {
      'avg_check': 6682,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 95,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'electronics',
        'books'
      ]
    },
    'purchase_probability': 0.71,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Стоян Куликова новые товары из категории books. Вероятность покупки высокая (0.71).'
  },
  {
    'client_id': 309,
    'first_name': 'Евдоким',
    'last_name': 'Максимов',
    'phone_number': '+7 223 631 30 64',
    'email': 'nekrasovefrem@ao.net',
    'purchases': [
      {
        'date': '2023-10-11',
        'price': 10887,
        'category': 'accessories',
        'product_name': 'Зарядка'
      },
      {
        'date': '2024-05-10',
        'price': 1694,
        'category': 'accessories',
        'product_name': 'Мышь'
      },
      {
        'date': '2024-04-24',
        'price': 10502,
        'category': 'books',
        'product_name': 'Роман'
      }
    ],
    'features': {
      'avg_check': 7694,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 67,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'books',
        'accessories'
      ]
    },
    'purchase_probability': 0.72,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Евдоким Максимов новые товары из категории books. Вероятность покупки высокая (0.72).'
  },
  {
    'client_id': 310,
    'first_name': 'Мартьян',
    'last_name': 'Волкова',
    'phone_number': '8 754 575 92 79',
    'email': 'kolobovilarion@171.net',
    'purchases': [
      {
        'date': '2023-08-28',
        'price': 12102,
        'category': 'accessories',
        'product_name': 'Чехол'
      },
      {
        'date': '2023-09-14',
        'price': 11073,
        'category': 'accessories',
        'product_name': 'Чехол'
      },
      {
        'date': '2024-07-29',
        'price': 3555,
        'category': 'electronics',
        'product_name': 'Монитор'
      }
    ],
    'features': {
      'avg_check': 8910,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 86,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'accessories',
        'electronics'
      ]
    },
    'purchase_probability': 0.52,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Мартьян Волкова новые товары из категории electronics. Вероятность покупки высокая (0.52).'
  },
  {
    'client_id': 311,
    'first_name': 'Фока',
    'last_name': 'Исаева',
    'phone_number': '86137218823',
    'email': 'zaharovmili@ip.com',
    'purchases': [
      {
        'date': '2023-07-22',
        'price': 9375,
        'category': 'accessories',
        'product_name': 'Кабель'
      },
      {
        'date': '2024-05-15',
        'price': 2329,
        'category': 'books',
        'product_name': 'Детектив'
      },
      {
        'date': '2024-05-23',
        'price': 2324,
        'category': 'books',
        'product_name': 'Фантастика'
      }
    ],
    'features': {
      'avg_check': 4676,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 106,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'books',
        'accessories'
      ]
    },
    'purchase_probability': 0.81,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Фока Исаева новые товары из категории books. Вероятность покупки высокая (0.81).'
  },
  {
    'client_id': 312,
    'first_name': 'Лавр',
    'last_name': 'Попова',
    'phone_number': '+7 742 656 3577',
    'email': 'dementi_1994@gruppa.net',
    'purchases': [
      {
        'date': '2023-10-14',
        'price': 4184,
        'category': 'books',
        'product_name': 'Детектив'
      },
      {
        'date': '2023-07-21',
        'price': 9533,
        'category': 'sports',
        'product_name': 'Гантели'
      },
      {
        'date': '2024-06-14',
        'price': 3849,
        'category': 'books',
        'product_name': 'Поэзия'
      }
    ],
    'features': {
      'avg_check': 5855,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 97,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'books',
        'sports'
      ]
    },
    'purchase_probability': 0.67,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Лавр Попова новые товары из категории books. Вероятность покупки высокая (0.67).'
  },
  {
    'client_id': 313,
    'first_name': 'Фотий',
    'last_name': 'Муравьев',
    'phone_number': '+7 877 319 88 94',
    'email': 'gavrilaterentev@yandex.ru',
    'purchases': [
      {
        'date': '2023-09-02',
        'price': 11267,
        'category': 'books',
        'product_name': 'Учебник'
      },
      {
        'date': '2023-09-25',
        'price': 7430,
        'category': 'electronics',
        'product_name': 'Монитор'
      },
      {
        'date': '2024-04-24',
        'price': 13900,
        'category': 'electronics',
        'product_name': 'Планшет'
      }
    ],
    'features': {
      'avg_check': 10865,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 102,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'electronics',
        'books'
      ]
    },
    'purchase_probability': 0.85,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Фотий Муравьев новые товары из категории electronics. Вероятность покупки высокая (0.85).'
  },
  {
    'client_id': 314,
    'first_name': 'Влас',
    'last_name': 'Селезнев',
    'phone_number': '83244069634',
    'email': 'evpraksija65@oao.edu',
    'purchases': [
      {
        'date': '2023-08-28',
        'price': 7282,
        'category': 'books',
        'product_name': 'Детектив'
      },
      {
        'date': '2023-11-27',
        'price': 7684,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2023-10-03',
        'price': 12210,
        'category': 'books',
        'product_name': 'Детектив'
      }
    ],
    'features': {
      'avg_check': 9058,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 101,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'electronics',
        'books'
      ]
    },
    'purchase_probability': 0.66,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Влас Селезнев новые товары из категории books. Вероятность покупки высокая (0.66).'
  },
  {
    'client_id': 315,
    'first_name': 'Наркис',
    'last_name': 'Комиссаров',
    'phone_number': '+7 (496) 283-11-02',
    'email': 'imamontova@ponomarev.edu',
    'purchases': [
      {
        'date': '2023-03-01',
        'price': 13336,
        'category': 'accessories',
        'product_name': 'Чехол'
      },
      {
        'date': '2023-08-14',
        'price': 9554,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2023-11-19',
        'price': 2004,
        'category': 'accessories',
        'product_name': 'Мышь'
      }
    ],
    'features': {
      'avg_check': 8298,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 85,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'books',
        'accessories'
      ]
    },
    'purchase_probability': 0.62,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Наркис Комиссаров новые товары из категории accessories. Вероятность покупки высокая (0.62).'
  },
  {
    'client_id': 316,
    'first_name': 'Тимур',
    'last_name': 'Воронов',
    'phone_number': '+7 404 300 8733',
    'email': 'kondrat_31@zao.info',
    'purchases': [
      {
        'date': '2023-03-23',
        'price': 615,
        'category': 'books',
        'product_name': 'Фантастика'
      },
      {
        'date': '2023-08-12',
        'price': 8497,
        'category': 'electronics',
        'product_name': 'Наушники'
      },
      {
        'date': '2024-04-01',
        'price': 10703,
        'category': 'books',
        'product_name': 'Поэзия'
      }
    ],
    'features': {
      'avg_check': 6605,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 27,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'books',
        'electronics'
      ]
    },
    'purchase_probability': 0.57,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Тимур Воронов новые товары из категории books. Вероятность покупки высокая (0.57).'
  },
  {
    'client_id': 317,
    'first_name': 'Валерьян',
    'last_name': 'Кудрявцев',
    'phone_number': '+7 064 875 69 07',
    'email': 'filipp1992@merkushev.net',
    'purchases': [
      {
        'date': '2023-03-21',
        'price': 9968,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2023-12-19',
        'price': 2658,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2024-05-11',
        'price': 4679,
        'category': 'books',
        'product_name': 'Поэзия'
      }
    ],
    'features': {
      'avg_check': 5768,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 91,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'sports',
        'books'
      ]
    },
    'purchase_probability': 0.74,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Валерьян Кудрявцев новые товары из категории books. Вероятность покупки высокая (0.74).'
  },
  {
    'client_id': 318,
    'first_name': 'Софрон',
    'last_name': 'Сорокин',
    'phone_number': '+7 (469) 123-9207',
    'email': 'sevastjanpoljakov@zao.net',
    'purchases': [
      {
        'date': '2023-08-17',
        'price': 2771,
        'category': 'accessories',
        'product_name': 'Зарядка'
      },
      {
        'date': '2023-12-08',
        'price': 8938,
        'category': 'books',
        'product_name': 'Учебник'
      },
      {
        'date': '2023-10-02',
        'price': 3958,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      }
    ],
    'features': {
      'avg_check': 5222,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 12,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'books',
        'accessories'
      ]
    },
    'purchase_probability': 0.87,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Софрон Сорокин новые товары из категории books. Вероятность покупки высокая (0.87).'
  },
  {
    'client_id': 319,
    'first_name': 'Сократ',
    'last_name': 'Стрелкова',
    'phone_number': '8 357 413 27 76',
    'email': 'ippolitfomin@verisel-treding.edu',
    'purchases': [
      {
        'date': '2023-04-18',
        'price': 5449,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2024-04-22',
        'price': 10667,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2024-06-26',
        'price': 10065,
        'category': 'books',
        'product_name': 'Поэзия'
      }
    ],
    'features': {
      'avg_check': 8727,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 48,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'accessories',
        'books'
      ]
    },
    'purchase_probability': 0.7,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Сократ Стрелкова новые товары из категории books. Вероятность покупки высокая (0.7).'
  },
  {
    'client_id': 320,
    'first_name': 'Творимир',
    'last_name': 'Кириллов',
    'phone_number': '8 (034) 488-63-34',
    'email': 'denisovspiridon@npo.com',
    'purchases': [
      {
        'date': '2023-12-03',
        'price': 14777,
        'category': 'sports',
        'product_name': 'Гантели'
      },
      {
        'date': '2024-05-21',
        'price': 7562,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2024-03-10',
        'price': 11529,
        'category': 'sports',
        'product_name': 'Шорты'
      }
    ],
    'features': {
      'avg_check': 11289,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 18,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'sports',
        'electronics'
      ]
    },
    'purchase_probability': 0.53,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Творимир Кириллов новые товары из категории electronics. Вероятность покупки высокая (0.53).'
  },
  {
    'client_id': 321,
    'first_name': 'Таисия',
    'last_name': 'Юдина',
    'phone_number': '8 (122) 042-1201',
    'email': 'bsorokin@rao.biz',
    'purchases': [
      {
        'date': '2023-11-08',
        'price': 4417,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      },
      {
        'date': '2023-10-15',
        'price': 11847,
        'category': 'accessories',
        'product_name': 'Кабель'
      },
      {
        'date': '2024-06-07',
        'price': 8196,
        'category': 'beauty',
        'product_name': 'Маска'
      }
    ],
    'features': {
      'avg_check': 8153,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 51,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'accessories',
        'beauty'
      ]
    },
    'purchase_probability': 0.65,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Таисия Юдина новые товары из категории beauty. Вероятность покупки высокая (0.65).'
  },
  {
    'client_id': 322,
    'first_name': 'Нифонт',
    'last_name': 'Тетерина',
    'phone_number': '+7 (531) 641-5770',
    'email': 'evgenija2021@zuev.info',
    'purchases': [
      {
        'date': '2023-09-22',
        'price': 4731,
        'category': 'books',
        'product_name': 'Детектив'
      },
      {
        'date': '2024-01-18',
        'price': 8842,
        'category': 'electronics',
        'product_name': 'Смартфон'
      },
      {
        'date': '2024-07-04',
        'price': 5041,
        'category': 'electronics',
        'product_name': 'Монитор'
      }
    ],
    'features': {
      'avg_check': 6204,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 114,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'electronics',
        'books'
      ]
    },
    'purchase_probability': 0.83,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Нифонт Тетерина новые товары из категории books. Вероятность покупки высокая (0.83).'
  },
  {
    'client_id': 323,
    'first_name': 'Вячеслав',
    'last_name': 'Кириллов',
    'phone_number': '8 (623) 486-50-75',
    'email': 'emeljanovprov@yahoo.com',
    'purchases': [
      {
        'date': '2023-09-06',
        'price': 13009,
        'category': 'beauty',
        'product_name': 'Шампунь'
      },
      {
        'date': '2023-11-09',
        'price': 11657,
        'category': 'electronics',
        'product_name': 'Монитор'
      },
      {
        'date': '2024-04-11',
        'price': 9912,
        'category': 'beauty',
        'product_name': 'Парфюм'
      }
    ],
    'features': {
      'avg_check': 11526,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 98,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'beauty',
        'electronics'
      ]
    },
    'purchase_probability': 0.75,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Вячеслав Кириллов новые товары из категории beauty. Вероятность покупки высокая (0.75).'
  },
  {
    'client_id': 324,
    'first_name': 'Тит',
    'last_name': 'Никитин',
    'phone_number': '8 (034) 920-9784',
    'email': 'visheslav_15@oao.edu',
    'purchases': [
      {
        'date': '2023-12-25',
        'price': 5961,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      },
      {
        'date': '2023-11-29',
        'price': 11160,
        'category': 'sports',
        'product_name': 'Кроссовки'
      },
      {
        'date': '2023-11-21',
        'price': 12593,
        'category': 'electronics',
        'product_name': 'Смартфон'
      }
    ],
    'features': {
      'avg_check': 9904,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 3,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'electronics',
        'sports'
      ]
    },
    'purchase_probability': 0.65,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Тит Никитин новые товары из категории electronics. Вероятность покупки высокая (0.65).'
  },
  {
    'client_id': 325,
    'first_name': 'Арефий',
    'last_name': 'Зимина',
    'phone_number': '8 852 566 99 54',
    'email': 'artemi2019@oao.com',
    'purchases': [
      {
        'date': '2023-11-11',
        'price': 720,
        'category': 'sports',
        'product_name': 'Кроссовки'
      },
      {
        'date': '2023-11-10',
        'price': 9179,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      },
      {
        'date': '2023-12-20',
        'price': 8199,
        'category': 'sports',
        'product_name': 'Мяч'
      }
    ],
    'features': {
      'avg_check': 6032,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 118,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'sports',
        'electronics'
      ]
    },
    'purchase_probability': 0.8,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Арефий Зимина новые товары из категории sports. Вероятность покупки высокая (0.8).'
  },
  {
    'client_id': 326,
    'first_name': 'Флорентин',
    'last_name': 'Воробьева',
    'phone_number': '8 (965) 992-8777',
    'email': 'lazarevvalentin@rambler.ru',
    'purchases': [
      {
        'date': '2023-06-02',
        'price': 769,
        'category': 'books',
        'product_name': 'Детектив'
      },
      {
        'date': '2023-12-25',
        'price': 543,
        'category': 'electronics',
        'product_name': 'Смартфон'
      },
      {
        'date': '2023-12-17',
        'price': 9565,
        'category': 'electronics',
        'product_name': 'Смартфон'
      }
    ],
    'features': {
      'avg_check': 3625,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 111,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'books',
        'electronics'
      ]
    },
    'purchase_probability': 0.72,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Флорентин Воробьева новые товары из категории books. Вероятность покупки высокая (0.72).'
  },
  {
    'client_id': 327,
    'first_name': 'Лазарь',
    'last_name': 'Капустин',
    'phone_number': '+7 168 153 7485',
    'email': 'markovmakar@oao.info',
    'purchases': [
      {
        'date': '2023-02-15',
        'price': 10612,
        'category': 'electronics',
        'product_name': 'Наушники'
      },
      {
        'date': '2023-06-02',
        'price': 11364,
        'category': 'electronics',
        'product_name': 'Наушники'
      },
      {
        'date': '2024-07-28',
        'price': 13737,
        'category': 'books',
        'product_name': 'Фантастика'
      }
    ],
    'features': {
      'avg_check': 11904,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 46,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'electronics',
        'books'
      ]
    },
    'purchase_probability': 0.77,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Лазарь Капустин новые товары из категории books. Вероятность покупки высокая (0.77).'
  },
  {
    'client_id': 328,
    'first_name': 'Адам',
    'last_name': 'Дроздова',
    'phone_number': '+7 776 250 3038',
    'email': 'kuprijan1999@filatov.edu',
    'purchases': [
      {
        'date': '2023-02-27',
        'price': 11247,
        'category': 'beauty',
        'product_name': 'Крем'
      },
      {
        'date': '2024-02-09',
        'price': 6752,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2024-06-28',
        'price': 9463,
        'category': 'beauty',
        'product_name': 'Шампунь'
      }
    ],
    'features': {
      'avg_check': 9154,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 72,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'books',
        'beauty'
      ]
    },
    'purchase_probability': 0.52,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Адам Дроздова новые товары из категории beauty. Вероятность покупки высокая (0.52).'
  },
  {
    'client_id': 329,
    'first_name': 'Эмилия',
    'last_name': 'Павлова',
    'phone_number': '+7 909 832 6185',
    'email': 'radim44@ao.org',
    'purchases': [
      {
        'date': '2023-05-15',
        'price': 4394,
        'category': 'beauty',
        'product_name': 'Помада'
      },
      {
        'date': '2024-01-25',
        'price': 6772,
        'category': 'sports',
        'product_name': 'Шорты'
      },
      {
        'date': '2024-04-17',
        'price': 2147,
        'category': 'sports',
        'product_name': 'Мяч'
      }
    ],
    'features': {
      'avg_check': 4437,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 79,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'sports',
        'beauty'
      ]
    },
    'purchase_probability': 0.77,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Эмилия Павлова новые товары из категории beauty. Вероятность покупки высокая (0.77).'
  },
  {
    'client_id': 330,
    'first_name': 'Валерия',
    'last_name': 'Шарапова',
    'phone_number': '+7 391 413 4105',
    'email': 'dobromisl2023@yahoo.com',
    'purchases': [
      {
        'date': '2023-04-20',
        'price': 7089,
        'category': 'sports',
        'product_name': 'Гантели'
      },
      {
        'date': '2023-06-06',
        'price': 3151,
        'category': 'books',
        'product_name': 'Детектив'
      },
      {
        'date': '2023-11-22',
        'price': 10292,
        'category': 'books',
        'product_name': 'Роман'
      }
    ],
    'features': {
      'avg_check': 6844,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 60,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'books',
        'sports'
      ]
    },
    'purchase_probability': 0.85,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Валерия Шарапова новые товары из категории sports. Вероятность покупки высокая (0.85).'
  },
  {
    'client_id': 331,
    'first_name': 'Захар',
    'last_name': 'Соловьев',
    'phone_number': '8 475 112 7858',
    'email': 'mironovapelageja@oao.edu',
    'purchases': [
      {
        'date': '2023-10-23',
        'price': 7082,
        'category': 'electronics',
        'product_name': 'Наушники'
      },
      {
        'date': '2024-02-21',
        'price': 3146,
        'category': 'beauty',
        'product_name': 'Помада'
      },
      {
        'date': '2024-05-29',
        'price': 11044,
        'category': 'electronics',
        'product_name': 'Наушники'
      }
    ],
    'features': {
      'avg_check': 7090,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 99,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'beauty',
        'electronics'
      ]
    },
    'purchase_probability': 0.71,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Захар Соловьев новые товары из категории beauty. Вероятность покупки высокая (0.71).'
  },
  {
    'client_id': 332,
    'first_name': 'Яков',
    'last_name': 'Пестов',
    'phone_number': '+7 083 316 3755',
    'email': 'porfiri_1987@yahoo.com',
    'purchases': [
      {
        'date': '2023-12-13',
        'price': 6953,
        'category': 'accessories',
        'product_name': 'Чехол'
      },
      {
        'date': '2023-12-27',
        'price': 1688,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      },
      {
        'date': '2023-12-04',
        'price': 11784,
        'category': 'sports',
        'product_name': 'Футболка'
      }
    ],
    'features': {
      'avg_check': 6808,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 43,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'accessories',
        'sports'
      ]
    },
    'purchase_probability': 0.54,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Яков Пестов новые товары из категории accessories. Вероятность покупки высокая (0.54).'
  },
  {
    'client_id': 333,
    'first_name': 'Никон',
    'last_name': 'Лаврентьева',
    'phone_number': '85587665772',
    'email': 'knjazevernst@mail.ru',
    'purchases': [
      {
        'date': '2023-07-04',
        'price': 7946,
        'category': 'electronics',
        'product_name': 'Планшет'
      },
      {
        'date': '2023-11-26',
        'price': 1882,
        'category': 'beauty',
        'product_name': 'Парфюм'
      },
      {
        'date': '2023-11-18',
        'price': 520,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      }
    ],
    'features': {
      'avg_check': 3449,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 59,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'beauty',
        'electronics'
      ]
    },
    'purchase_probability': 0.74,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Никон Лаврентьева новые товары из категории beauty. Вероятность покупки высокая (0.74).'
  },
  {
    'client_id': 334,
    'first_name': 'Макар',
    'last_name': 'Никитин',
    'phone_number': '+7 (159) 661-9220',
    'email': 'ladimir_16@rambler.ru',
    'purchases': [
      {
        'date': '2023-04-02',
        'price': 6558,
        'category': 'accessories',
        'product_name': 'Мышь'
      },
      {
        'date': '2024-03-06',
        'price': 2990,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      },
      {
        'date': '2023-11-09',
        'price': 9441,
        'category': 'accessories',
        'product_name': 'Кабель'
      }
    ],
    'features': {
      'avg_check': 6329,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 34,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'accessories',
        'books'
      ]
    },
    'purchase_probability': 0.51,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Макар Никитин новые товары из категории books. Вероятность покупки высокая (0.51).'
  },
  {
    'client_id': 335,
    'first_name': 'Владимир',
    'last_name': 'Трофимова',
    'phone_number': '+78456679023',
    'email': 'zknjazeva@rambler.ru',
    'purchases': [
      {
        'date': '2023-03-27',
        'price': 10307,
        'category': 'beauty',
        'product_name': 'Помада'
      },
      {
        'date': '2023-07-31',
        'price': 12889,
        'category': 'sports',
        'product_name': 'Шорты'
      },
      {
        'date': '2024-10-26',
        'price': 9450,
        'category': 'beauty',
        'product_name': 'Шампунь'
      }
    ],
    'features': {
      'avg_check': 10882,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 72,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'beauty',
        'sports'
      ]
    },
    'purchase_probability': 0.54,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Владимир Трофимова новые товары из категории sports. Вероятность покупки высокая (0.54).'
  },
  {
    'client_id': 336,
    'first_name': 'Ксения',
    'last_name': 'Куликов',
    'phone_number': '8 012 032 39 96',
    'email': 'kuzma2022@gmail.com',
    'purchases': [
      {
        'date': '2023-12-01',
        'price': 1430,
        'category': 'accessories',
        'product_name': 'Мышь'
      },
      {
        'date': '2023-09-29',
        'price': 11192,
        'category': 'electronics',
        'product_name': 'Наушники'
      },
      {
        'date': '2023-11-19',
        'price': 3199,
        'category': 'electronics',
        'product_name': 'Планшет'
      }
    ],
    'features': {
      'avg_check': 5273,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 33,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'electronics',
        'accessories'
      ]
    },
    'purchase_probability': 0.88,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Ксения Куликов новые товары из категории accessories. Вероятность покупки высокая (0.88).'
  },
  {
    'client_id': 337,
    'first_name': 'Аким',
    'last_name': 'Шубина',
    'phone_number': '+7 934 095 8312',
    'email': 'averkikapustin@borisov.ru',
    'purchases': [
      {
        'date': '2023-09-13',
        'price': 9516,
        'category': 'beauty',
        'product_name': 'Парфюм'
      },
      {
        'date': '2023-12-25',
        'price': 7088,
        'category': 'beauty',
        'product_name': 'Шампунь'
      },
      {
        'date': '2024-07-17',
        'price': 12672,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      }
    ],
    'features': {
      'avg_check': 9758,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 57,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'beauty',
        'electronics'
      ]
    },
    'purchase_probability': 0.83,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Аким Шубина новые товары из категории electronics. Вероятность покупки высокая (0.83).'
  },
  {
    'client_id': 338,
    'first_name': 'Ратмир',
    'last_name': 'Хохлов',
    'phone_number': '+75270637911',
    'email': 'romanjudin@letual.biz',
    'purchases': [
      {
        'date': '2023-11-10',
        'price': 8862,
        'category': 'accessories',
        'product_name': 'Зарядка'
      },
      {
        'date': '2023-10-08',
        'price': 6442,
        'category': 'accessories',
        'product_name': 'Кабель'
      },
      {
        'date': '2024-03-16',
        'price': 10101,
        'category': 'electronics',
        'product_name': 'Смартфон'
      }
    ],
    'features': {
      'avg_check': 8468,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 94,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'electronics',
        'accessories'
      ]
    },
    'purchase_probability': 0.63,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Ратмир Хохлов новые товары из категории electronics. Вероятность покупки высокая (0.63).'
  },
  {
    'client_id': 339,
    'first_name': 'Клавдия',
    'last_name': 'Наумов',
    'phone_number': '+7 (253) 256-85-82',
    'email': 'timofeevatatjana@loginova.biz',
    'purchases': [
      {
        'date': '2023-07-20',
        'price': 2968,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2023-11-04',
        'price': 4062,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      },
      {
        'date': '2024-01-22',
        'price': 14441,
        'category': 'books',
        'product_name': 'Фантастика'
      }
    ],
    'features': {
      'avg_check': 7157,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 82,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'accessories',
        'books'
      ]
    },
    'purchase_probability': 0.8,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Клавдия Наумов новые товары из категории books. Вероятность покупки высокая (0.8).'
  },
  {
    'client_id': 340,
    'first_name': 'Галина',
    'last_name': 'Кузнецова',
    'phone_number': '8 766 748 5524',
    'email': 'savvati1979@rambler.ru',
    'purchases': [
      {
        'date': '2023-02-28',
        'price': 11707,
        'category': 'beauty',
        'product_name': 'Помада'
      },
      {
        'date': '2023-06-09',
        'price': 9788,
        'category': 'sports',
        'product_name': 'Кроссовки'
      },
      {
        'date': '2024-02-01',
        'price': 7839,
        'category': 'beauty',
        'product_name': 'Крем'
      }
    ],
    'features': {
      'avg_check': 9778,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 90,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'sports',
        'beauty'
      ]
    },
    'purchase_probability': 0.69,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Галина Кузнецова новые товары из категории beauty. Вероятность покупки высокая (0.69).'
  },
  {
    'client_id': 341,
    'first_name': 'Герасим',
    'last_name': 'Медведева',
    'phone_number': '8 (732) 373-33-58',
    'email': 'tsvetkovviktorin@yahoo.com',
    'purchases': [
      {
        'date': '2023-09-27',
        'price': 8725,
        'category': 'beauty',
        'product_name': 'Парфюм'
      },
      {
        'date': '2023-05-28',
        'price': 9655,
        'category': 'beauty',
        'product_name': 'Шампунь'
      },
      {
        'date': '2023-12-21',
        'price': 6252,
        'category': 'beauty',
        'product_name': 'Крем'
      }
    ],
    'features': {
      'avg_check': 8210,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 24,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'beauty',
        'electronics'
      ]
    },
    'purchase_probability': 0.84,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Герасим Медведева новые товары из категории electronics. Вероятность покупки высокая (0.84).'
  },
  {
    'client_id': 342,
    'first_name': 'Спиридон',
    'last_name': 'Гришина',
    'phone_number': '+7 (124) 653-9672',
    'email': 'wkolobov@ooo.info',
    'purchases': [
      {
        'date': '2023-04-21',
        'price': 11263,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2024-05-25',
        'price': 10842,
        'category': 'accessories',
        'product_name': 'Мышь'
      },
      {
        'date': '2024-01-02',
        'price': 1558,
        'category': 'accessories',
        'product_name': 'Мышь'
      }
    ],
    'features': {
      'avg_check': 7887,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 108,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'accessories',
        'books'
      ]
    },
    'purchase_probability': 0.55,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Спиридон Гришина новые товары из категории accessories. Вероятность покупки высокая (0.55).'
  },
  {
    'client_id': 343,
    'first_name': 'Назар',
    'last_name': 'Трофимов',
    'phone_number': '83152199802',
    'email': 'evdokim1990@rambler.ru',
    'purchases': [
      {
        'date': '2023-05-11',
        'price': 8687,
        'category': 'accessories',
        'product_name': 'Чехол'
      },
      {
        'date': '2023-10-16',
        'price': 9180,
        'category': 'accessories',
        'product_name': 'Мышь'
      },
      {
        'date': '2023-11-11',
        'price': 3944,
        'category': 'sports',
        'product_name': 'Шорты'
      }
    ],
    'features': {
      'avg_check': 7270,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 21,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'sports',
        'accessories'
      ]
    },
    'purchase_probability': 0.78,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Назар Трофимов новые товары из категории accessories. Вероятность покупки высокая (0.78).'
  },
  {
    'client_id': 344,
    'first_name': 'Евсей',
    'last_name': 'Русаков',
    'phone_number': '+7 492 588 1782',
    'email': 'pavel_48@efimova.biz',
    'purchases': [
      {
        'date': '2023-04-01',
        'price': 7217,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      },
      {
        'date': '2023-08-25',
        'price': 8444,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      },
      {
        'date': '2024-09-03',
        'price': 13704,
        'category': 'sports',
        'product_name': 'Шорты'
      }
    ],
    'features': {
      'avg_check': 9788,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 98,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'electronics',
        'sports'
      ]
    },
    'purchase_probability': 0.82,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Евсей Русаков новые товары из категории electronics. Вероятность покупки высокая (0.82).'
  },
  {
    'client_id': 345,
    'first_name': 'Кондрат',
    'last_name': 'Зайцев',
    'phone_number': '+7 165 940 73 30',
    'email': 'sharapovaakulina@yandex.ru',
    'purchases': [
      {
        'date': '2023-08-05',
        'price': 13213,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      },
      {
        'date': '2023-11-21',
        'price': 14694,
        'category': 'accessories',
        'product_name': 'Зарядка'
      },
      {
        'date': '2024-01-06',
        'price': 12959,
        'category': 'accessories',
        'product_name': 'Зарядка'
      }
    ],
    'features': {
      'avg_check': 13622,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 57,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'books',
        'accessories'
      ]
    },
    'purchase_probability': 0.93,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Кондрат Зайцев новые товары из категории accessories. Вероятность покупки высокая (0.93).'
  },
  {
    'client_id': 346,
    'first_name': 'Зосима',
    'last_name': 'Романов',
    'phone_number': '+7 (204) 254-44-79',
    'email': 'kudrjashovmili@npo.net',
    'purchases': [
      {
        'date': '2023-09-19',
        'price': 9405,
        'category': 'books',
        'product_name': 'Детектив'
      },
      {
        'date': '2023-06-19',
        'price': 7956,
        'category': 'books',
        'product_name': 'Фантастика'
      },
      {
        'date': '2024-06-04',
        'price': 3248,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      }
    ],
    'features': {
      'avg_check': 6869,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 2,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'electronics',
        'books'
      ]
    },
    'purchase_probability': 0.85,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Зосима Романов новые товары из категории books. Вероятность покупки высокая (0.85).'
  },
  {
    'client_id': 347,
    'first_name': 'Лев',
    'last_name': 'Кузнецова',
    'phone_number': '8 892 189 72 23',
    'email': 'sokolovapelageja@kontsern.org',
    'purchases': [
      {
        'date': '2023-05-20',
        'price': 5690,
        'category': 'sports',
        'product_name': 'Мяч'
      },
      {
        'date': '2023-11-15',
        'price': 2206,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      },
      {
        'date': '2024-02-13',
        'price': 2057,
        'category': 'sports',
        'product_name': 'Футболка'
      }
    ],
    'features': {
      'avg_check': 3317,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 13,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'accessories',
        'sports'
      ]
    },
    'purchase_probability': 0.68,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Лев Кузнецова новые товары из категории sports. Вероятность покупки высокая (0.68).'
  },
  {
    'client_id': 348,
    'first_name': 'Леонтий',
    'last_name': 'Щукин',
    'phone_number': '85488305277',
    'email': 'modest94@fedotov.edu',
    'purchases': [
      {
        'date': '2023-07-24',
        'price': 3600,
        'category': 'electronics',
        'product_name': 'Планшет'
      },
      {
        'date': '2024-01-11',
        'price': 6488,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2024-06-30',
        'price': 7303,
        'category': 'electronics',
        'product_name': 'Наушники'
      }
    ],
    'features': {
      'avg_check': 5797,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 103,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'electronics',
        'books'
      ]
    },
    'purchase_probability': 0.63,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Леонтий Щукин новые товары из категории books. Вероятность покупки высокая (0.63).'
  },
  {
    'client_id': 349,
    'first_name': 'Януарий',
    'last_name': 'Тетерина',
    'phone_number': '+75695509223',
    'email': 'evdokimovauljana@yahoo.com',
    'purchases': [
      {
        'date': '2023-05-23',
        'price': 2552,
        'category': 'sports',
        'product_name': 'Кроссовки'
      },
      {
        'date': '2024-02-07',
        'price': 3772,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2023-08-31',
        'price': 1875,
        'category': 'sports',
        'product_name': 'Гантели'
      }
    ],
    'features': {
      'avg_check': 2733,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 65,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'books',
        'sports'
      ]
    },
    'purchase_probability': 0.64,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Януарий Тетерина новые товары из категории books. Вероятность покупки высокая (0.64).'
  },
  {
    'client_id': 350,
    'first_name': 'Милан',
    'last_name': 'Меркушев',
    'phone_number': '+73877814656',
    'email': 'vsemil_2009@ao.com',
    'purchases': [
      {
        'date': '2023-07-26',
        'price': 11293,
        'category': 'sports',
        'product_name': 'Шорты'
      },
      {
        'date': '2024-04-15',
        'price': 5129,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      },
      {
        'date': '2024-09-13',
        'price': 904,
        'category': 'sports',
        'product_name': 'Футболка'
      }
    ],
    'features': {
      'avg_check': 5775,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 30,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'sports',
        'accessories'
      ]
    },
    'purchase_probability': 0.68,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Милан Меркушев новые товары из категории sports. Вероятность покупки высокая (0.68).'
  },
  {
    'client_id': 351,
    'first_name': 'Порфирий',
    'last_name': 'Поляков',
    'phone_number': '8 (621) 693-97-10',
    'email': 'mstislav_75@oao.info',
    'purchases': [
      {
        'date': '2023-02-14',
        'price': 11737,
        'category': 'sports',
        'product_name': 'Гантели'
      },
      {
        'date': '2023-08-23',
        'price': 8991,
        'category': 'sports',
        'product_name': 'Мяч'
      },
      {
        'date': '2024-04-28',
        'price': 1750,
        'category': 'sports',
        'product_name': 'Гантели'
      }
    ],
    'features': {
      'avg_check': 7492,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 59,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'sports',
        'books'
      ]
    },
    'purchase_probability': 0.57,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Порфирий Поляков новые товары из категории sports. Вероятность покупки высокая (0.57).'
  },
  {
    'client_id': 352,
    'first_name': 'Александра',
    'last_name': 'Александрова',
    'phone_number': '+7 335 468 96 71',
    'email': 'zhdanovaksenija@gk.net',
    'purchases': [
      {
        'date': '2023-09-22',
        'price': 4362,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2023-05-14',
        'price': 14859,
        'category': 'beauty',
        'product_name': 'Крем'
      },
      {
        'date': '2023-09-13',
        'price': 10224,
        'category': 'books',
        'product_name': 'Фантастика'
      }
    ],
    'features': {
      'avg_check': 9815,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 31,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'books',
        'beauty'
      ]
    },
    'purchase_probability': 0.74,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Александра Александрова новые товары из категории beauty. Вероятность покупки высокая (0.74).'
  },
  {
    'client_id': 353,
    'first_name': 'Эраст',
    'last_name': 'Шубин',
    'phone_number': '8 (373) 191-61-50',
    'email': 'inaumova@mail.ru',
    'purchases': [
      {
        'date': '2023-08-23',
        'price': 11267,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2023-12-06',
        'price': 13986,
        'category': 'books',
        'product_name': 'Фантастика'
      },
      {
        'date': '2024-05-08',
        'price': 8173,
        'category': 'books',
        'product_name': 'Фантастика'
      }
    ],
    'features': {
      'avg_check': 11142,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 16,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'accessories',
        'books'
      ]
    },
    'purchase_probability': 0.93,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Эраст Шубин новые товары из категории books. Вероятность покупки высокая (0.93).'
  },
  {
    'client_id': 354,
    'first_name': 'Наум',
    'last_name': 'Назаров',
    'phone_number': '+7 (889) 067-16-00',
    'email': 'dkoshelev@ao.info',
    'purchases': [
      {
        'date': '2023-12-25',
        'price': 577,
        'category': 'electronics',
        'product_name': 'Наушники'
      },
      {
        'date': '2023-10-15',
        'price': 9660,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2024-07-22',
        'price': 7129,
        'category': 'sports',
        'product_name': 'Футболка'
      }
    ],
    'features': {
      'avg_check': 5788,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 37,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'electronics',
        'sports'
      ]
    },
    'purchase_probability': 0.56,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Наум Назаров новые товары из категории sports. Вероятность покупки высокая (0.56).'
  },
  {
    'client_id': 355,
    'first_name': 'Антонина',
    'last_name': 'Овчинникова',
    'phone_number': '+7 (326) 284-8287',
    'email': 'kim_1989@sharapov.ru',
    'purchases': [
      {
        'date': '2023-07-31',
        'price': 10118,
        'category': 'accessories',
        'product_name': 'Чехол'
      },
      {
        'date': '2023-06-22',
        'price': 7057,
        'category': 'books',
        'product_name': 'Учебник'
      },
      {
        'date': '2024-07-22',
        'price': 6628,
        'category': 'accessories',
        'product_name': 'Мышь'
      }
    ],
    'features': {
      'avg_check': 7934,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 113,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'accessories',
        'books'
      ]
    },
    'purchase_probability': 0.76,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Антонина Овчинникова новые товары из категории books. Вероятность покупки высокая (0.76).'
  },
  {
    'client_id': 356,
    'first_name': 'Ладимир',
    'last_name': 'Казаков',
    'phone_number': '+7 298 532 8736',
    'email': 'kir49@rao.info',
    'purchases': [
      {
        'date': '2023-04-08',
        'price': 574,
        'category': 'accessories',
        'product_name': 'Зарядка'
      },
      {
        'date': '2024-04-26',
        'price': 9988,
        'category': 'books',
        'product_name': 'Учебник'
      },
      {
        'date': '2023-12-10',
        'price': 1603,
        'category': 'accessories',
        'product_name': 'Мышь'
      }
    ],
    'features': {
      'avg_check': 4055,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 40,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'accessories',
        'books'
      ]
    },
    'purchase_probability': 0.91,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Ладимир Казаков новые товары из категории books. Вероятность покупки высокая (0.91).'
  },
  {
    'client_id': 357,
    'first_name': 'Аркадий',
    'last_name': 'Королева',
    'phone_number': '+7 (073) 863-23-78',
    'email': 'agafja_27@zikov.edu',
    'purchases': [
      {
        'date': '2023-08-14',
        'price': 2000,
        'category': 'electronics',
        'product_name': 'Планшет'
      },
      {
        'date': '2024-01-22',
        'price': 6460,
        'category': 'sports',
        'product_name': 'Шорты'
      },
      {
        'date': '2024-04-18',
        'price': 726,
        'category': 'electronics',
        'product_name': 'Смартфон'
      }
    ],
    'features': {
      'avg_check': 3062,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 40,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'sports',
        'electronics'
      ]
    },
    'purchase_probability': 0.81,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Аркадий Королева новые товары из категории sports. Вероятность покупки высокая (0.81).'
  },
  {
    'client_id': 358,
    'first_name': 'Тимофей',
    'last_name': 'Русакова',
    'phone_number': '8 502 773 5226',
    'email': 'danila_06@mail.ru',
    'purchases': [
      {
        'date': '2023-11-12',
        'price': 13675,
        'category': 'accessories',
        'product_name': 'Чехол'
      },
      {
        'date': '2023-10-25',
        'price': 5072,
        'category': 'accessories',
        'product_name': 'Чехол'
      },
      {
        'date': '2024-06-28',
        'price': 2652,
        'category': 'accessories',
        'product_name': 'Чехол'
      }
    ],
    'features': {
      'avg_check': 7133,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 51,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'accessories',
        'sports'
      ]
    },
    'purchase_probability': 0.87,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Тимофей Русакова новые товары из категории sports. Вероятность покупки высокая (0.87).'
  },
  {
    'client_id': 359,
    'first_name': 'Максимильян',
    'last_name': 'Брагин',
    'phone_number': '8 683 244 1259',
    'email': 'ivanovaekaterina@ooo.com',
    'purchases': [
      {
        'date': '2023-03-17',
        'price': 9260,
        'category': 'books',
        'product_name': 'Детектив'
      },
      {
        'date': '2024-01-01',
        'price': 1945,
        'category': 'beauty',
        'product_name': 'Парфюм'
      },
      {
        'date': '2024-05-03',
        'price': 1367,
        'category': 'beauty',
        'product_name': 'Маска'
      }
    ],
    'features': {
      'avg_check': 4190,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 95,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'beauty',
        'books'
      ]
    },
    'purchase_probability': 0.67,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Максимильян Брагин новые товары из категории books. Вероятность покупки высокая (0.67).'
  },
  {
    'client_id': 360,
    'first_name': 'Марк',
    'last_name': 'Щукин',
    'phone_number': '+7 078 636 1285',
    'email': 'gedeon_1999@gmail.com',
    'purchases': [
      {
        'date': '2023-08-01',
        'price': 1094,
        'category': 'sports',
        'product_name': 'Гантели'
      },
      {
        'date': '2023-04-29',
        'price': 14707,
        'category': 'sports',
        'product_name': 'Кроссовки'
      },
      {
        'date': '2024-06-01',
        'price': 9045,
        'category': 'accessories',
        'product_name': 'Кабель'
      }
    ],
    'features': {
      'avg_check': 8282,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 37,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'sports',
        'accessories'
      ]
    },
    'purchase_probability': 0.68,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Марк Щукин новые товары из категории accessories. Вероятность покупки высокая (0.68).'
  },
  {
    'client_id': 361,
    'first_name': 'Вадим',
    'last_name': 'Калинин',
    'phone_number': '8 863 105 9399',
    'email': 'anastasija_00@gk.ru',
    'purchases': [
      {
        'date': '2023-03-14',
        'price': 6668,
        'category': 'electronics',
        'product_name': 'Наушники'
      },
      {
        'date': '2024-04-19',
        'price': 14900,
        'category': 'electronics',
        'product_name': 'Планшет'
      },
      {
        'date': '2024-03-13',
        'price': 1318,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      }
    ],
    'features': {
      'avg_check': 7628,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 66,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'accessories',
        'electronics'
      ]
    },
    'purchase_probability': 0.9,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Вадим Калинин новые товары из категории accessories. Вероятность покупки высокая (0.9).'
  },
  {
    'client_id': 362,
    'first_name': 'Панкрат',
    'last_name': 'Королева',
    'phone_number': '84338004286',
    'email': 'silinaemilija@mail.ru',
    'purchases': [
      {
        'date': '2023-08-03',
        'price': 10913,
        'category': 'beauty',
        'product_name': 'Шампунь'
      },
      {
        'date': '2023-08-26',
        'price': 14844,
        'category': 'electronics',
        'product_name': 'Наушники'
      },
      {
        'date': '2024-06-16',
        'price': 12008,
        'category': 'electronics',
        'product_name': 'Смартфон'
      }
    ],
    'features': {
      'avg_check': 12588,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 59,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'electronics',
        'beauty'
      ]
    },
    'purchase_probability': 0.66,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Панкрат Королева новые товары из категории beauty. Вероятность покупки высокая (0.66).'
  },
  {
    'client_id': 363,
    'first_name': 'Прасковья',
    'last_name': 'Карпова',
    'phone_number': '8 211 611 7658',
    'email': 'ignati1994@rambler.ru',
    'purchases': [
      {
        'date': '2023-12-09',
        'price': 14443,
        'category': 'accessories',
        'product_name': 'Кабель'
      },
      {
        'date': '2024-03-06',
        'price': 596,
        'category': 'accessories',
        'product_name': 'Кабель'
      },
      {
        'date': '2024-04-22',
        'price': 13295,
        'category': 'books',
        'product_name': 'Учебник'
      }
    ],
    'features': {
      'avg_check': 9444,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 48,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'books',
        'accessories'
      ]
    },
    'purchase_probability': 0.71,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Прасковья Карпова новые товары из категории accessories. Вероятность покупки высокая (0.71).'
  },
  {
    'client_id': 364,
    'first_name': 'Исай',
    'last_name': 'Фомичев',
    'phone_number': '87867565040',
    'email': 'maksimovporfiri@ao.org',
    'purchases': [
      {
        'date': '2023-10-08',
        'price': 5668,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      },
      {
        'date': '2023-07-03',
        'price': 6735,
        'category': 'beauty',
        'product_name': 'Маска'
      },
      {
        'date': '2024-06-26',
        'price': 2337,
        'category': 'beauty',
        'product_name': 'Крем'
      }
    ],
    'features': {
      'avg_check': 4913,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 73,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'beauty',
        'electronics'
      ]
    },
    'purchase_probability': 0.85,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Исай Фомичев новые товары из категории beauty. Вероятность покупки высокая (0.85).'
  },
  {
    'client_id': 365,
    'first_name': 'Харлампий',
    'last_name': 'Молчанова',
    'phone_number': '80675562264',
    'email': 'konstantinovviktorin@mail.ru',
    'purchases': [
      {
        'date': '2023-08-24',
        'price': 8189,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      },
      {
        'date': '2023-12-17',
        'price': 13141,
        'category': 'accessories',
        'product_name': 'Кабель'
      },
      {
        'date': '2024-07-09',
        'price': 6296,
        'category': 'books',
        'product_name': 'Поэзия'
      }
    ],
    'features': {
      'avg_check': 9208,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 72,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'accessories',
        'books'
      ]
    },
    'purchase_probability': 0.81,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Харлампий Молчанова новые товары из категории accessories. Вероятность покупки высокая (0.81).'
  },
  {
    'client_id': 366,
    'first_name': 'Ефрем',
    'last_name': 'Щукина',
    'phone_number': '+7 499 447 66 34',
    'email': 'angelina_22@gmail.com',
    'purchases': [
      {
        'date': '2023-05-01',
        'price': 4156,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2024-04-23',
        'price': 3687,
        'category': 'accessories',
        'product_name': 'Мышь'
      },
      {
        'date': '2023-09-08',
        'price': 2360,
        'category': 'accessories',
        'product_name': 'Чехол'
      }
    ],
    'features': {
      'avg_check': 3401,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 1,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'accessories',
        'sports'
      ]
    },
    'purchase_probability': 0.68,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Ефрем Щукина новые товары из категории sports. Вероятность покупки высокая (0.68).'
  },
  {
    'client_id': 367,
    'first_name': 'Светлана',
    'last_name': 'Доронин',
    'phone_number': '8 471 364 10 17',
    'email': 'ershovpimen@yandex.ru',
    'purchases': [
      {
        'date': '2023-11-21',
        'price': 13143,
        'category': 'books',
        'product_name': 'Фантастика'
      },
      {
        'date': '2024-04-18',
        'price': 13714,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2024-03-01',
        'price': 12094,
        'category': 'books',
        'product_name': 'Учебник'
      }
    ],
    'features': {
      'avg_check': 12983,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 30,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'accessories',
        'books'
      ]
    },
    'purchase_probability': 0.75,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Светлана Доронин новые товары из категории books. Вероятность покупки высокая (0.75).'
  },
  {
    'client_id': 368,
    'first_name': 'Юлий',
    'last_name': 'Карпова',
    'phone_number': '+71995852830',
    'email': 'fomichevruslan@zao.edu',
    'purchases': [
      {
        'date': '2023-11-11',
        'price': 695,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      },
      {
        'date': '2023-11-14',
        'price': 2323,
        'category': 'accessories',
        'product_name': 'Чехол'
      },
      {
        'date': '2023-10-29',
        'price': 4756,
        'category': 'accessories',
        'product_name': 'Чехол'
      }
    ],
    'features': {
      'avg_check': 2591,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 107,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'books',
        'accessories'
      ]
    },
    'purchase_probability': 0.64,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Юлий Карпова новые товары из категории books. Вероятность покупки высокая (0.64).'
  },
  {
    'client_id': 369,
    'first_name': 'Савелий',
    'last_name': 'Бобылев',
    'phone_number': '+7 890 449 73 83',
    'email': 'stanislav14@rossiskaja.info',
    'purchases': [
      {
        'date': '2023-07-18',
        'price': 11675,
        'category': 'beauty',
        'product_name': 'Парфюм'
      },
      {
        'date': '2024-01-18',
        'price': 3828,
        'category': 'beauty',
        'product_name': 'Помада'
      },
      {
        'date': '2024-06-06',
        'price': 5249,
        'category': 'beauty',
        'product_name': 'Шампунь'
      }
    ],
    'features': {
      'avg_check': 6917,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 79,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'sports',
        'beauty'
      ]
    },
    'purchase_probability': 0.85,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Савелий Бобылев новые товары из категории beauty. Вероятность покупки высокая (0.85).'
  },
  {
    'client_id': 370,
    'first_name': 'Феврония',
    'last_name': 'Тимофеев',
    'phone_number': '8 (966) 468-86-90',
    'email': 'oalekseeva@ip.ru',
    'purchases': [
      {
        'date': '2023-09-14',
        'price': 1954,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2024-02-14',
        'price': 6374,
        'category': 'sports',
        'product_name': 'Мяч'
      },
      {
        'date': '2024-02-01',
        'price': 8152,
        'category': 'books',
        'product_name': 'Фантастика'
      }
    ],
    'features': {
      'avg_check': 5493,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 83,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'books',
        'sports'
      ]
    },
    'purchase_probability': 0.85,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Феврония Тимофеев новые товары из категории books. Вероятность покупки высокая (0.85).'
  },
  {
    'client_id': 371,
    'first_name': 'Август',
    'last_name': 'Елисеева',
    'phone_number': '8 341 072 58 57',
    'email': 'alina65@ip.com',
    'purchases': [
      {
        'date': '2023-02-16',
        'price': 14166,
        'category': 'beauty',
        'product_name': 'Помада'
      },
      {
        'date': '2024-03-05',
        'price': 1182,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      },
      {
        'date': '2024-07-06',
        'price': 3516,
        'category': 'beauty',
        'product_name': 'Шампунь'
      }
    ],
    'features': {
      'avg_check': 6288,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 68,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'beauty',
        'electronics'
      ]
    },
    'purchase_probability': 0.53,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Август Елисеева новые товары из категории beauty. Вероятность покупки высокая (0.53).'
  },
  {
    'client_id': 372,
    'first_name': 'Мечислав',
    'last_name': 'Дроздов',
    'phone_number': '8 629 223 2282',
    'email': 'jakovlevanina@yahoo.com',
    'purchases': [
      {
        'date': '2023-03-31',
        'price': 8400,
        'category': 'beauty',
        'product_name': 'Крем'
      },
      {
        'date': '2023-11-23',
        'price': 4921,
        'category': 'beauty',
        'product_name': 'Крем'
      },
      {
        'date': '2023-08-18',
        'price': 8881,
        'category': 'electronics',
        'product_name': 'Монитор'
      }
    ],
    'features': {
      'avg_check': 7400,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 60,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'electronics',
        'beauty'
      ]
    },
    'purchase_probability': 0.7,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Мечислав Дроздов новые товары из категории electronics. Вероятность покупки высокая (0.7).'
  },
  {
    'client_id': 373,
    'first_name': 'Порфирий',
    'last_name': 'Никонов',
    'phone_number': '+7 810 274 32 29',
    'email': 'miheevfedosi@yahoo.com',
    'purchases': [
      {
        'date': '2023-10-28',
        'price': 9733,
        'category': 'beauty',
        'product_name': 'Крем'
      },
      {
        'date': '2023-09-18',
        'price': 11387,
        'category': 'beauty',
        'product_name': 'Шампунь'
      },
      {
        'date': '2024-01-16',
        'price': 952,
        'category': 'accessories',
        'product_name': 'Мышь'
      }
    ],
    'features': {
      'avg_check': 7357,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 46,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'beauty',
        'accessories'
      ]
    },
    'purchase_probability': 0.61,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Порфирий Никонов новые товары из категории accessories. Вероятность покупки высокая (0.61).'
  },
  {
    'client_id': 374,
    'first_name': 'Оксана',
    'last_name': 'Селезнева',
    'phone_number': '8 (872) 657-80-21',
    'email': 'vasilevradim@ooo.biz',
    'purchases': [
      {
        'date': '2023-07-26',
        'price': 11159,
        'category': 'sports',
        'product_name': 'Кроссовки'
      },
      {
        'date': '2023-12-29',
        'price': 3465,
        'category': 'sports',
        'product_name': 'Кроссовки'
      },
      {
        'date': '2024-11-19',
        'price': 3622,
        'category': 'books',
        'product_name': 'Детектив'
      }
    ],
    'features': {
      'avg_check': 6082,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 66,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'sports',
        'books'
      ]
    },
    'purchase_probability': 0.92,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Оксана Селезнева новые товары из категории sports. Вероятность покупки высокая (0.92).'
  },
  {
    'client_id': 375,
    'first_name': 'Ермил',
    'last_name': 'Лаврентьева',
    'phone_number': '82508157982',
    'email': 'znekrasova@kulakova.net',
    'purchases': [
      {
        'date': '2023-11-21',
        'price': 12307,
        'category': 'electronics',
        'product_name': 'Смартфон'
      },
      {
        'date': '2024-02-01',
        'price': 14168,
        'category': 'electronics',
        'product_name': 'Наушники'
      },
      {
        'date': '2023-12-29',
        'price': 10444,
        'category': 'sports',
        'product_name': 'Мяч'
      }
    ],
    'features': {
      'avg_check': 12306,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 44,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'sports',
        'electronics'
      ]
    },
    'purchase_probability': 0.87,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Ермил Лаврентьева новые товары из категории electronics. Вероятность покупки высокая (0.87).'
  },
  {
    'client_id': 376,
    'first_name': 'Иннокентий',
    'last_name': 'Орехов',
    'phone_number': '8 (481) 633-80-15',
    'email': 'hariton_49@ao.org',
    'purchases': [
      {
        'date': '2023-07-30',
        'price': 2281,
        'category': 'beauty',
        'product_name': 'Помада'
      },
      {
        'date': '2023-11-04',
        'price': 9410,
        'category': 'beauty',
        'product_name': 'Парфюм'
      },
      {
        'date': '2023-12-08',
        'price': 6132,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      }
    ],
    'features': {
      'avg_check': 5941,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 51,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'beauty',
        'electronics'
      ]
    },
    'purchase_probability': 0.9,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Иннокентий Орехов новые товары из категории electronics. Вероятность покупки высокая (0.9).'
  },
  {
    'client_id': 377,
    'first_name': 'София',
    'last_name': 'Куликова',
    'phone_number': '8 (848) 451-99-90',
    'email': 'stanimir_1971@mail.ru',
    'purchases': [
      {
        'date': '2023-08-24',
        'price': 14131,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2023-06-07',
        'price': 14851,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      },
      {
        'date': '2023-08-06',
        'price': 1214,
        'category': 'accessories',
        'product_name': 'Кабель'
      }
    ],
    'features': {
      'avg_check': 10065,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 25,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'accessories',
        'sports'
      ]
    },
    'purchase_probability': 0.68,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить София Куликова новые товары из категории sports. Вероятность покупки высокая (0.68).'
  },
  {
    'client_id': 378,
    'first_name': 'Леонтий',
    'last_name': 'Панфилов',
    'phone_number': '+74709732006',
    'email': 'sokolovagalina@ooo.com',
    'purchases': [
      {
        'date': '2023-03-08',
        'price': 7215,
        'category': 'electronics',
        'product_name': 'Планшет'
      },
      {
        'date': '2024-02-27',
        'price': 12982,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      },
      {
        'date': '2024-05-06',
        'price': 12267,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      }
    ],
    'features': {
      'avg_check': 10821,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 57,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'electronics',
        'accessories'
      ]
    },
    'purchase_probability': 0.54,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Леонтий Панфилов новые товары из категории electronics. Вероятность покупки высокая (0.54).'
  },
  {
    'client_id': 379,
    'first_name': 'Панкратий',
    'last_name': 'Лебедев',
    'phone_number': '+7 (922) 379-7988',
    'email': 'viktor1995@hotmail.com',
    'purchases': [
      {
        'date': '2023-10-15',
        'price': 12430,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2023-06-06',
        'price': 5662,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2024-07-20',
        'price': 2385,
        'category': 'books',
        'product_name': 'Фантастика'
      }
    ],
    'features': {
      'avg_check': 6825,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 111,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'books',
        'beauty'
      ]
    },
    'purchase_probability': 0.87,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Панкратий Лебедев новые товары из категории beauty. Вероятность покупки высокая (0.87).'
  },
  {
    'client_id': 380,
    'first_name': 'Ростислав',
    'last_name': 'Рожков',
    'phone_number': '+7 477 026 5652',
    'email': 'qsuvorova@oao.org',
    'purchases': [
      {
        'date': '2023-04-25',
        'price': 10455,
        'category': 'beauty',
        'product_name': 'Помада'
      },
      {
        'date': '2023-04-18',
        'price': 11791,
        'category': 'beauty',
        'product_name': 'Крем'
      },
      {
        'date': '2024-07-17',
        'price': 10554,
        'category': 'beauty',
        'product_name': 'Шампунь'
      }
    ],
    'features': {
      'avg_check': 10933,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 45,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'electronics',
        'beauty'
      ]
    },
    'purchase_probability': 0.75,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Ростислав Рожков новые товары из категории beauty. Вероятность покупки высокая (0.75).'
  },
  {
    'client_id': 381,
    'first_name': 'Творимир',
    'last_name': 'Емельянов',
    'phone_number': '8 (027) 799-1304',
    'email': 'antonina21@hotmail.com',
    'purchases': [
      {
        'date': '2023-10-21',
        'price': 5925,
        'category': 'electronics',
        'product_name': 'Наушники'
      },
      {
        'date': '2024-01-27',
        'price': 7458,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2023-12-11',
        'price': 11426,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      }
    ],
    'features': {
      'avg_check': 8269,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 58,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'books',
        'electronics'
      ]
    },
    'purchase_probability': 0.73,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Творимир Емельянов новые товары из категории books. Вероятность покупки высокая (0.73).'
  },
  {
    'client_id': 382,
    'first_name': 'Никита',
    'last_name': 'Гаврилова',
    'phone_number': '85443530045',
    'email': 'kimkomarov@yandex.ru',
    'purchases': [
      {
        'date': '2023-11-13',
        'price': 7531,
        'category': 'beauty',
        'product_name': 'Крем'
      },
      {
        'date': '2024-01-18',
        'price': 2270,
        'category': 'books',
        'product_name': 'Фантастика'
      },
      {
        'date': '2023-10-03',
        'price': 8965,
        'category': 'books',
        'product_name': 'Поэзия'
      }
    ],
    'features': {
      'avg_check': 6255,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 107,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'books',
        'beauty'
      ]
    },
    'purchase_probability': 0.54,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Никита Гаврилова новые товары из категории beauty. Вероятность покупки высокая (0.54).'
  },
  {
    'client_id': 383,
    'first_name': 'Эдуард',
    'last_name': 'Ильин',
    'phone_number': '8 119 535 01 35',
    'email': 'vladlen_43@yandex.ru',
    'purchases': [
      {
        'date': '2023-05-23',
        'price': 7912,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      },
      {
        'date': '2024-02-16',
        'price': 11617,
        'category': 'accessories',
        'product_name': 'Клавиатура'
      },
      {
        'date': '2024-08-02',
        'price': 10690,
        'category': 'beauty',
        'product_name': 'Маска'
      }
    ],
    'features': {
      'avg_check': 10073,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 2,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'beauty',
        'accessories'
      ]
    },
    'purchase_probability': 0.8,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Эдуард Ильин новые товары из категории beauty. Вероятность покупки высокая (0.8).'
  },
  {
    'client_id': 384,
    'first_name': 'Ефим',
    'last_name': 'Доронин',
    'phone_number': '85043638303',
    'email': 'tihon_63@zao.com',
    'purchases': [
      {
        'date': '2023-07-31',
        'price': 10239,
        'category': 'books',
        'product_name': 'Учебник'
      },
      {
        'date': '2024-05-09',
        'price': 14168,
        'category': 'books',
        'product_name': 'Фантастика'
      },
      {
        'date': '2024-08-28',
        'price': 3231,
        'category': 'books',
        'product_name': 'Роман'
      }
    ],
    'features': {
      'avg_check': 9212,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 20,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'electronics',
        'books'
      ]
    },
    'purchase_probability': 0.81,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Ефим Доронин новые товары из категории books. Вероятность покупки высокая (0.81).'
  },
  {
    'client_id': 385,
    'first_name': 'Селиван',
    'last_name': 'Прохорова',
    'phone_number': '+7 132 506 4907',
    'email': 'sidorovanadezhda@mail.ru',
    'purchases': [
      {
        'date': '2023-09-24',
        'price': 13944,
        'category': 'beauty',
        'product_name': 'Парфюм'
      },
      {
        'date': '2023-07-25',
        'price': 1978,
        'category': 'beauty',
        'product_name': 'Парфюм'
      },
      {
        'date': '2023-11-25',
        'price': 7196,
        'category': 'beauty',
        'product_name': 'Крем'
      }
    ],
    'features': {
      'avg_check': 7706,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 17,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'beauty',
        'electronics'
      ]
    },
    'purchase_probability': 0.87,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Селиван Прохорова новые товары из категории beauty. Вероятность покупки высокая (0.87).'
  },
  {
    'client_id': 386,
    'first_name': 'Лев',
    'last_name': 'Гуляева',
    'phone_number': '87356610024',
    'email': 'nikandr_1996@zao.info',
    'purchases': [
      {
        'date': '2023-04-15',
        'price': 4675,
        'category': 'beauty',
        'product_name': 'Парфюм'
      },
      {
        'date': '2024-05-26',
        'price': 1948,
        'category': 'books',
        'product_name': 'Фантастика'
      },
      {
        'date': '2023-12-25',
        'price': 10459,
        'category': 'beauty',
        'product_name': 'Помада'
      }
    ],
    'features': {
      'avg_check': 5694,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 65,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'books',
        'beauty'
      ]
    },
    'purchase_probability': 0.5,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Лев Гуляева новые товары из категории books. Вероятность покупки высокая (0.5).'
  },
  {
    'client_id': 387,
    'first_name': 'Сильвестр',
    'last_name': 'Симонова',
    'phone_number': '84266011008',
    'email': 'sergepetuhov@hotmail.com',
    'purchases': [
      {
        'date': '2023-10-03',
        'price': 14304,
        'category': 'books',
        'product_name': 'Учебник'
      },
      {
        'date': '2023-09-30',
        'price': 2707,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2024-04-05',
        'price': 9640,
        'category': 'beauty',
        'product_name': 'Шампунь'
      }
    ],
    'features': {
      'avg_check': 8883,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 108,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'books',
        'beauty'
      ]
    },
    'purchase_probability': 0.86,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Сильвестр Симонова новые товары из категории beauty. Вероятность покупки высокая (0.86).'
  },
  {
    'client_id': 388,
    'first_name': 'Лукия',
    'last_name': 'Борисов',
    'phone_number': '83674818551',
    'email': 'demidvorobev@zao.com',
    'purchases': [
      {
        'date': '2023-06-27',
        'price': 14101,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      },
      {
        'date': '2024-02-13',
        'price': 12492,
        'category': 'electronics',
        'product_name': 'Монитор'
      },
      {
        'date': '2024-09-07',
        'price': 14379,
        'category': 'electronics',
        'product_name': 'Ноутбук'
      }
    ],
    'features': {
      'avg_check': 13657,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 46,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'electronics',
        'beauty'
      ]
    },
    'purchase_probability': 0.59,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Лукия Борисов новые товары из категории beauty. Вероятность покупки высокая (0.59).'
  },
  {
    'client_id': 389,
    'first_name': 'Валентин',
    'last_name': 'Ковалев',
    'phone_number': '8 152 774 5755',
    'email': 'mark_2007@yandex.ru',
    'purchases': [
      {
        'date': '2023-12-18',
        'price': 13658,
        'category': 'books',
        'product_name': 'Фантастика'
      },
      {
        'date': '2024-05-08',
        'price': 14783,
        'category': 'sports',
        'product_name': 'Шорты'
      },
      {
        'date': '2023-12-14',
        'price': 6920,
        'category': 'sports',
        'product_name': 'Футболка'
      }
    ],
    'features': {
      'avg_check': 11787,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 117,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'sports',
        'books'
      ]
    },
    'purchase_probability': 0.84,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Валентин Ковалев новые товары из категории books. Вероятность покупки высокая (0.84).'
  },
  {
    'client_id': 390,
    'first_name': 'Мина',
    'last_name': 'Дементьева',
    'phone_number': '+7 (146) 196-99-69',
    'email': 'dobroslav21@mail.ru',
    'purchases': [
      {
        'date': '2023-03-18',
        'price': 6588,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2023-08-31',
        'price': 3681,
        'category': 'electronics',
        'product_name': 'Наушники'
      },
      {
        'date': '2023-10-23',
        'price': 10634,
        'category': 'sports',
        'product_name': 'Гантели'
      }
    ],
    'features': {
      'avg_check': 6967,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 34,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'electronics',
        'sports'
      ]
    },
    'purchase_probability': 0.83,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Мина Дементьева новые товары из категории sports. Вероятность покупки высокая (0.83).'
  },
  {
    'client_id': 391,
    'first_name': 'Мирон',
    'last_name': 'Артемьев',
    'phone_number': '8 (518) 374-84-71',
    'email': 'frol2021@ao.biz',
    'purchases': [
      {
        'date': '2023-08-22',
        'price': 1463,
        'category': 'sports',
        'product_name': 'Кроссовки'
      },
      {
        'date': '2024-02-17',
        'price': 4454,
        'category': 'beauty',
        'product_name': 'Помада'
      },
      {
        'date': '2023-12-12',
        'price': 4111,
        'category': 'sports',
        'product_name': 'Кроссовки'
      }
    ],
    'features': {
      'avg_check': 3342,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 21,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'sports',
        'beauty'
      ]
    },
    'purchase_probability': 0.57,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Мирон Артемьев новые товары из категории beauty. Вероятность покупки высокая (0.57).'
  },
  {
    'client_id': 392,
    'first_name': 'Ипполит',
    'last_name': 'Дьячков',
    'phone_number': '8 (036) 770-4764',
    'email': 'zkazakova@ooo.ru',
    'purchases': [
      {
        'date': '2023-05-18',
        'price': 12612,
        'category': 'books',
        'product_name': 'Поэзия'
      },
      {
        'date': '2023-12-02',
        'price': 14217,
        'category': 'books',
        'product_name': 'Фантастика'
      },
      {
        'date': '2024-04-30',
        'price': 9703,
        'category': 'books',
        'product_name': 'Поэзия'
      }
    ],
    'features': {
      'avg_check': 12177,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 42,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'books',
        'beauty'
      ]
    },
    'purchase_probability': 0.93,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Ипполит Дьячков новые товары из категории books. Вероятность покупки высокая (0.93).'
  },
  {
    'client_id': 393,
    'first_name': 'Лучезар',
    'last_name': 'Суворов',
    'phone_number': '+7 317 883 69 59',
    'email': 'mitofan71@rambler.ru',
    'purchases': [
      {
        'date': '2023-05-05',
        'price': 8750,
        'category': 'beauty',
        'product_name': 'Маска'
      },
      {
        'date': '2023-12-03',
        'price': 4501,
        'category': 'sports',
        'product_name': 'Шорты'
      },
      {
        'date': '2024-08-20',
        'price': 12859,
        'category': 'beauty',
        'product_name': 'Помада'
      }
    ],
    'features': {
      'avg_check': 8703,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 33,
      'seasonality_pattern': 'summer',
      'preferred_categories': [
        'beauty',
        'sports'
      ]
    },
    'purchase_probability': 0.55,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон summer'
    ],
    'recommendation_text': 'Рекомендуем предложить Лучезар Суворов новые товары из категории sports. Вероятность покупки высокая (0.55).'
  },
  {
    'client_id': 394,
    'first_name': 'Авксентий',
    'last_name': 'Калашникова',
    'phone_number': '8 (762) 812-08-51',
    'email': 'haritonovbudimir@oao.edu',
    'purchases': [
      {
        'date': '2023-10-20',
        'price': 8097,
        'category': 'electronics',
        'product_name': 'Смартфон'
      },
      {
        'date': '2023-11-11',
        'price': 3435,
        'category': 'sports',
        'product_name': 'Кроссовки'
      },
      {
        'date': '2023-07-27',
        'price': 11926,
        'category': 'electronics',
        'product_name': 'Наушники'
      }
    ],
    'features': {
      'avg_check': 7819,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 67,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'electronics',
        'sports'
      ]
    },
    'purchase_probability': 0.93,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Авксентий Калашникова новые товары из категории electronics. Вероятность покупки высокая (0.93).'
  },
  {
    'client_id': 395,
    'first_name': 'Олимпий',
    'last_name': 'Тихонов',
    'phone_number': '83323964782',
    'email': 'obobrov@rambler.ru',
    'purchases': [
      {
        'date': '2023-08-28',
        'price': 12758,
        'category': 'sports',
        'product_name': 'Кроссовки'
      },
      {
        'date': '2023-09-12',
        'price': 617,
        'category': 'sports',
        'product_name': 'Футболка'
      },
      {
        'date': '2024-06-06',
        'price': 10385,
        'category': 'accessories',
        'product_name': 'Мышь'
      }
    ],
    'features': {
      'avg_check': 7920,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 115,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'sports',
        'accessories'
      ]
    },
    'purchase_probability': 0.81,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Олимпий Тихонов новые товары из категории sports. Вероятность покупки высокая (0.81).'
  },
  {
    'client_id': 396,
    'first_name': 'Марк',
    'last_name': 'Фролова',
    'phone_number': '8 242 139 67 91',
    'email': 'nestor_76@ip.edu',
    'purchases': [
      {
        'date': '2023-03-12',
        'price': 8621,
        'category': 'accessories',
        'product_name': 'Кабель'
      },
      {
        'date': '2023-10-23',
        'price': 13390,
        'category': 'accessories',
        'product_name': 'Зарядка'
      },
      {
        'date': '2024-03-03',
        'price': 4835,
        'category': 'electronics',
        'product_name': 'Монитор'
      }
    ],
    'features': {
      'avg_check': 8948,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 118,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'electronics',
        'accessories'
      ]
    },
    'purchase_probability': 0.88,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Марк Фролова новые товары из категории electronics. Вероятность покупки высокая (0.88).'
  },
  {
    'client_id': 397,
    'first_name': 'Юлия',
    'last_name': 'Евсеев',
    'phone_number': '+7 (126) 385-41-50',
    'email': 'platon2004@rambler.ru',
    'purchases': [
      {
        'date': '2023-09-23',
        'price': 10243,
        'category': 'books',
        'product_name': 'Роман'
      },
      {
        'date': '2023-11-04',
        'price': 8256,
        'category': 'sports',
        'product_name': 'Мяч'
      },
      {
        'date': '2024-04-06',
        'price': 7913,
        'category': 'sports',
        'product_name': 'Шорты'
      }
    ],
    'features': {
      'avg_check': 8804,
      'purchase_frequency_days': 60,
      'days_since_last_purchase': 74,
      'seasonality_pattern': 'winter',
      'preferred_categories': [
        'sports',
        'books'
      ]
    },
    'purchase_probability': 0.72,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон winter'
    ],
    'recommendation_text': 'Рекомендуем предложить Юлия Евсеев новые товары из категории sports. Вероятность покупки высокая (0.72).'
  },
  {
    'client_id': 398,
    'first_name': 'Синклитикия',
    'last_name': 'Кононов',
    'phone_number': '+7 (727) 888-38-09',
    'email': 'rshilov@robert.ru',
    'purchases': [
      {
        'date': '2023-05-27',
        'price': 5655,
        'category': 'books',
        'product_name': 'Детектив'
      },
      {
        'date': '2023-10-08',
        'price': 12393,
        'category': 'accessories',
        'product_name': 'Мышь'
      },
      {
        'date': '2024-03-16',
        'price': 10514,
        'category': 'accessories',
        'product_name': 'Кабель'
      }
    ],
    'features': {
      'avg_check': 9520,
      'purchase_frequency_days': 180,
      'days_since_last_purchase': 78,
      'seasonality_pattern': 'autumn',
      'preferred_categories': [
        'accessories',
        'books'
      ]
    },
    'purchase_probability': 0.84,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон autumn'
    ],
    'recommendation_text': 'Рекомендуем предложить Синклитикия Кононов новые товары из категории accessories. Вероятность покупки высокая (0.84).'
  },
  {
    'client_id': 399,
    'first_name': 'Агата',
    'last_name': 'Павлов',
    'phone_number': '82194816690',
    'email': 'vsazonov@ip.info',
    'purchases': [
      {
        'date': '2023-03-26',
        'price': 6557,
        'category': 'books',
        'product_name': 'Учебник'
      },
      {
        'date': '2023-08-28',
        'price': 2911,
        'category': 'sports',
        'product_name': 'Кроссовки'
      },
      {
        'date': '2023-08-22',
        'price': 11982,
        'category': 'books',
        'product_name': 'Поэзия'
      }
    ],
    'features': {
      'avg_check': 7150,
      'purchase_frequency_days': 120,
      'days_since_last_purchase': 24,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'sports',
        'books'
      ]
    },
    'purchase_probability': 0.88,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Агата Павлов новые товары из категории books. Вероятность покупки высокая (0.88).'
  },
  {
    'client_id': 400,
    'first_name': 'Никифор',
    'last_name': 'Комиссаров',
    'phone_number': '+7 299 503 25 13',
    'email': 'ipatisokolov@yahoo.com',
    'purchases': [
      {
        'date': '2023-09-06',
        'price': 11556,
        'category': 'accessories',
        'product_name': 'Зарядка'
      },
      {
        'date': '2023-11-12',
        'price': 7386,
        'category': 'accessories',
        'product_name': 'Чехол'
      },
      {
        'date': '2024-05-02',
        'price': 12013,
        'category': 'accessories',
        'product_name': 'Чехол'
      }
    ],
    'features': {
      'avg_check': 10318,
      'purchase_frequency_days': 90,
      'days_since_last_purchase': 34,
      'seasonality_pattern': 'spring',
      'preferred_categories': [
        'accessories',
        'electronics'
      ]
    },
    'purchase_probability': 0.51,
    'key_factors': [
      'регулярные покупки',
      'устойчивый средний чек',
      'высокая активность в сезон spring'
    ],
    'recommendation_text': 'Рекомендуем предложить Никифор Комиссаров новые товары из категории accessories. Вероятность покупки высокая (0.51).'
  }
];
