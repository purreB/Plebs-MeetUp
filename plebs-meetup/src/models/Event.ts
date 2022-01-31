import { Category } from './Category';
import { Comments } from './Comments';
import { nanoid } from 'nanoid';

export interface Event {
  id: number;
  name: string;
  category: Category;
  date: string;
  time: string;
  plats: string;
  comments: Comments[];
}

export const eventData: Event[] = [
  {
    id: 1,
    name: 'Music Festival Stockholm',
    category: { id: 1, name: 'music', img: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/Vito-Valentinetti-Way-Out-West-2018-24.jpg' },
    date: '2022-03-10',
    time: '15:00',
    plats: "Stockholm",
    comments: [],
  },
  {
    id: 2,
    name: 'Music Festival Gothenburg',
    category: { id: 1, name: 'music', img: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Wayoutwestentrance.jpg' },
    date: '2022-04-10',
    time: '10:00',
    plats: "Göteborg, Slottskogen",
    comments: [],
  },
  {
    id: 3,
    name: 'The Walking Dead Season 50 Release Date',
    category: { id: 2, name: 'Movies', img: 'https://phantom-marca.unidadeditorial.es/8a06a3abe5fcaebda6c9462c899d8ae9/resize/1320/f/jpg/assets/multimedia/imagenes/2021/08/10/16286161657414.jpg' },
    date: '2022-11-10',
    time: '19:00',
    plats: "Beverly Hills, THX Cinema",
    comments: [],
  },
  {
    id: 4,
    name: 'Fast & Furious 15 premiere',
    category: { id: 2, name: 'Movies', img: 'https://external-preview.redd.it/lhe3DwrMN6uLgg4M1eoETdQM0g2tZiz2jVDY73v2rwM.jpg?auto=webp&s=54420b06f6fb9583da192ce7c734763a02a956fa' },
    date: '2022-12-05',
    time: '20:00',
    plats: "Houston Cinema Center",
    comments: [],
  },
  {
    id: 5,
    name: 'LAN Event Stockholm',
    category: { id: 3, name: 'Gaming', img: 'https://www.eslgaming.com/sites/default/files/styles/blog_big/public/LAN-Events-and-eSports-Header_0.jpg?itok=KYOzKqeI' },
    date: '2022-10-10',
    time: '15:00',
    plats: "Stockholm, Friends Arena",
    comments: [],
  },
  {
    id: 6,
    name: 'LAN Event Gothenburg',
    category: { id: 3, name: 'Gaming', img: 'https://mb.cision.com/Public/18576/2880492/b9e71e1efaafd46e_800x800ar.jpg' },
    date: '2022-11-11',
    time: '15:00',
    plats: "Göteborg, Gothia Towers",
    comments: [],
  },
  {
    id: 7,
    name: 'Art Museum Stockholm',
    category: { id: 4, name: 'Art', img: 'https://static01.nyt.com/images/2021/09/02/arts/02museums-tour-1/merlin_193884324_93c3f30f-a61b-41b3-baaa-9260d21c5fc6-mobileMasterAt3x.jpg' },
    date: '2022-03-03',
    time: '11:00',
    plats: "Stockholm, Historiska Museet",
    comments: [],
  },
  {
    id: 8,
    name: 'Art Museum Gothenburg',
    category: { id: 4, name: 'Art', img: 'https://camstl.org/wp-content/uploads/2020/10/Shara-Hughes_Dusty-Kessler_038-scaled-1200x0-c-default.jpg' },
    date: '2022-04-04',
    time: '13:00',
    plats: "Göteborg, Universeum",
    comments: [],
  },
  {
    id: 9,
    name: 'Car Festival Stockholm',
    category: { id: 5, name: 'Cars', img: 'https://driveracademy.se/wp-content/uploads/2019/02/Sthlm2-1030x656.jpg' },
    date: '2022-05-22',
    time: '13:00',
    plats: "Stockholm, Rinkebyparkeringen",
    comments: [],
  },
  {
    id: 10,
    name: 'Car Festival Gothenburg',
    category: { id: 5, name: 'Cars', img: 'https://www.elbilsverige.se/wp-content/uploads/2017/06/fdel061-1170x877.jpg' },
    date: '2022-08-21',
    time: '13:00',
    plats: "Göteborg, Sisjön 421",
    comments: [],
  },
  
];
