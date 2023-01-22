import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  {
    name: 'Wargreymon/Blackwargreymon',
    colors: ['red', 'black'],
    image: `${process.env.PUBLIC_URL}/assets/images/digimon/wargreymon.png`,
    wins: 10,
  },
  {
    name: 'Beelzemon',
    colors: ['purple'],
    image: `${process.env.PUBLIC_URL}/assets/images/digimon/beelzemon_x.png`,
    wins: 6,
  },
  {
    name: 'Blue Flare X Twillight',
    colors: ['blue', 'black'],
    image: `${process.env.PUBLIC_URL}/assets/images/digimon/blue_flare.jpg`,
    wins: 4,
  },
  {
    name: 'Hunter',
    colors: ['purple'],
    image: `${process.env.PUBLIC_URL}/assets/images/digimon/arresterdramon.png`,
    wins: 4,
  },
  {
    name: 'Shinegreymon',
    colors: ['yellow', 'red'],
    image: `${process.env.PUBLIC_URL}/assets/images/digimon/shinegreymon.png`,
    wins: 4,
  },
  {
    name: 'Bloomlordmon',
    colors: ['green'],
    image: `${process.env.PUBLIC_URL}/assets/images/digimon/bloomlordmon.jpg`,
    wins: 3,
  },
  {
    name: 'Ulforceveedramon',
    colors: ['blue'],
    image: `${process.env.PUBLIC_URL}/assets/images/digimon/ulforceveedramon_x.jpg`,
    wins: 2,
  },
  {
    name: 'Aegisdramon',
    colors: ['blue'],
    image: `${process.env.PUBLIC_URL}/assets/images/digimon/aegisdramon.png`,
    wins: 1,
  },
  {
    name: 'Beelstarmon',
    colors: ['purple'],
    image: `${process.env.PUBLIC_URL}/assets/images/digimon/beelstarmon.png`,
    wins: 1,
  },
  {
    name: 'Jesmon',
    colors: ['red', 'black', 'white'],
    image: `${process.env.PUBLIC_URL}/assets/images/digimon/jesmon_gx.jpg`,
    wins: 1,
  },
  {
    name: 'Omegamon Alter-S',
    colors: ['black', 'red', 'blue'],
    image: `${process.env.PUBLIC_URL}/assets/images/digimon/omegamon_alter_s.png`,
    wins: 1,
  },
];

// ----------------------------------------------------------------------

const products = PRODUCT_NAME.map((_, index) => {

  return {
    id: faker.datatype.uuid(),
    cover: PRODUCT_NAME[index].image,
    name: PRODUCT_NAME[index].name,
    price: PRODUCT_NAME[index].wins,
    colors: PRODUCT_NAME[index].colors,
    status: sample(['']),
  };
});

export default products;
