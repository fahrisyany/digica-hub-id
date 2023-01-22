import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  {
    name: 'Wargreymon/Blackwargreymon',
    colors: ['red', 'black'],
    image: `${process.env.PUBLIC_URL}/assets/images/digimon/wg.jpg`,
    wins: 6,
  },
  {
    name: 'Beelzemon',
    colors: ['purple'],
    image: 'https://digimon-cg-guide.com/wp-content/uploads/cropped-ST14-08.jpg',
    wins: 6,
  },
  {
    name: 'Blue Flare X Twillight',
    colors: ['blue', 'black'],
    image: 'https://digimon-cg-guide.com/wp-content/uploads/cropped-BT10-024-P1.jpg',
    wins: 4,
  },
  {
    name: 'Hunter',
    colors: ['purple'],
    image: 'https://digimon-cg-guide.com/wp-content/uploads/cropped-BT12-083.jpg',
    wins: 4,
  },
  {
    name: 'Shinegreymon',
    colors: ['yellow', 'red'],
    image: 'https://digimon-cg-guide.com/wp-content/uploads/cropped-BT12-043.jpg',
    wins: 4,
  },
  {
    name: 'Bloomlordmon',
    colors: ['green'],
    image: 'https://digimon-cg-guide.com/wp-content/uploads/cropped-BT10-057-P1.jpg',
    wins: 3,
  },
  {
    name: 'Ulforceveedramon',
    colors: ['blue'],
    image: 'https://digimon-cg-guide.com/wp-content/uploads/cropped-BT12-029.jpg',
    wins: 2,
  },
  {
    name: 'Jesmon',
    colors: ['red', 'black'],
    image: 'https://digimon-cg-guide.com/wp-content/uploads/cropped-BT10-112.jpg',
    wins: 1,
  },
  {
    name: 'Omegamon Alter-S',
    colors: ['black', 'red', 'blue'],
    image: 'https://digimon-cg-guide.com/wp-content/uploads/cropped-EX4-060.jpg',
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
