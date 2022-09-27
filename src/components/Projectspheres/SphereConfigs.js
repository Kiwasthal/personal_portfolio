import blogGIF from '../assets/blogGIF.gif';
import fantasyGIF from '../assets/fantasyGIF.gif';
import battleshipGIF from '../assets/battleGIF.gif';

export const topspheresConfig = [
  {
    originName: 'Blog',
    name: 'text-5xl text-white ',
    mainColor: 'before:bg-gray-900',
    innerTitle: 'Blog',
    header: 'text-white',
    tools: 'text-rose-500 ',
    src: blogGIF,
    livelink: 'https://kiwasthal.github.io/battleship/',
    desc: 'Blog webb aplication gif',
    paraStyles: 'text-white text-xs md:text-lg',
    para: 'A site for blogging, consisting of three parts. A node Api deployed on heroku. A cms for updating content utalizing admin login and a client built with nextjs.',
    button: 'text-white  bg-rose-500 ',
  },
  {
    originName: 'Fantasy Inventory',
    name: 'text-4xl text-white ',
    mainColor: 'before:bg-stone-900',
    innerTitle: 'Fantasy Inventory',
    header: 'text-white',
    tools: 'text-rose-500 ',
    toolContent: 'Express Taiwlind MongoDB',
    src: fantasyGIF,
    livelink: 'https://kiwasthal.github.io/battleship/',
    desc: 'Blog webb aplication gif',
    paraStyles: 'text-white text-xs md:text-lg ',
    para: 'A site for blogging, consiting of three parts. A node Api deployed on heroku. A cms for updating content utalizing admin login and a client built with nextjs.',
    button: 'text-white  bg-rose-500 ',
  },
  {
    name: 'text-5xl text-white ',
    mainColor: 'before:bg-gray-900',
    header: 'text-white',
    tools: 'text-rose-500 ',
    src: blogGIF,
    livelink: 'https://infinite-mesa-17935.herokuapp.com/archieve',
    desc: "Fantasy-app gif, browsing website's features",
    paraStyles: 'text-white ',
    para: 'A fantasy Library for cataloguing various mythological creatures based on different categories. An express app rendered with ejs view engine.',
    button: 'text-white  bg-rose-500 ',
  },
];
