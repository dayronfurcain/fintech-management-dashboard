import {
  RiHome4Line,
  RiDashboardLine,
  RiRefreshLine,
  RiMessage2Line,
  RiSettings5Line,
  RiShoppingCart2Line,
} from 'react-icons/ri';

import { GiElectric } from 'react-icons/gi';
import { MdOutlineWaterDrop } from 'react-icons/md';

import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';
import person4 from '../assets/person4.jpg';
import person5 from '../assets/person5.jpg';
import person6 from '../assets/person6.jpg';
import person7 from '../assets/person7.jpg';
import person8 from '../assets/person8.jpg';

export const navbarLinks = [
  { id: 1, icon: <RiHome4Line />, description: 'Home' },
  { id: 2, icon: <RiDashboardLine />, description: 'Dashboard' },
  { id: 3, icon: <RiRefreshLine />, description: 'Update Data' },
  { id: 4, icon: <RiMessage2Line />, description: 'Messages' },
  { id: 5, icon: <RiSettings5Line />, description: 'Setting' },
];

export const finances = [
  { id: 1, description: 'Balance', price: '$3601' },
  { id: 2, description: 'Income', price: '$1602' },
  { id: 3, description: 'Expenses', price: '$901' },
];

export const transactions = [
  {
    id: 1,
    icon: <GiElectric />,
    description: 'Electricty',
    date: '28 August',
    time: '08:00',
    amount: '$124.03',
  },
  {
    id: 2,
    icon: <RiShoppingCart2Line />,
    description: '7 Eleven',
    date: '28 August',
    time: '08:00',
    amount: '$124.03',
  },
  {
    id: 3,
    icon: <MdOutlineWaterDrop />,
    description: 'Water',
    date: '28 August',
    time: '08:00',
    amount: '$124.03',
  },
];

export const persons = [
  { id: 1, description: 'person1', image: person1 },
  { id: 2, description: 'person2', image: person2 },
  { id: 3, description: 'person3', image: person3 },
  { id: 4, description: 'person4', image: person4 },
  { id: 5, description: 'person5', image: person5 },
  { id: 6, description: 'person6', image: person6 },
  { id: 7, description: 'person7', image: person7 },
  { id: 8, description: 'person8', image: person8 },
];
