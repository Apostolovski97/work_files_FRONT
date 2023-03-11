const all = {
  _id: '1',
  category: 'All',
  leagues: [],
  selected: true,
}

export function getAll() {
  return all;
}

const footballSideBar = [
  {
    _id: "1",
    category: 'LEAGUES',
    leagues: [
      { _id: '1', league: 'Premier League', logo: '/logos/league/f-pl.webp', selected: false, },
      { _id: '2', league: 'Ligue 1', logo: '/logos/league/f-l1.webp', selected: false, },
      { _id: '3', league: 'Bundesliga', logo: '/logos/league/f-b.webp', selected: false, },
      { _id: '4', league: 'Serie A', logo: '/logos/league/f-sa.webp', selected: false, },
      { _id: '5', league: 'LaLiga', logo: '/logos/league/f-l.webp', selected: false, },
      { _id: '6', league: 'Eredivisie', logo: '/logos/league/f-e.webp', selected: false, },
      { _id: '7', league: 'Liga Portugal', logo: '/logos/league/f-lp.webp', selected: false, },
      { _id: '8', league: 'Super League', logo: '/logos/league/f-sl.webp', selected: false, },
      { _id: '9', league: 'Jupiler Pro League', logo: '/logos/league/f-jpl.webp', selected: false, },
    ],
    selected: true,
  },
  {
    _id: "2",
    category: 'UEFA',
    leagues: [
      { _id: '1', league: 'Euro', logo: '/logos/league/f-eu.webp', selected: false, },
      { _id: '2', league: 'Nations League', logo: '/logos/league/f-nl.webp', selected: false, },
      { _id: '3', league: 'Champions League', logo: '/logos/league/f-cl.webp', selected: false, },
      { _id: '4', league: 'Europa League', logo: '/logos/league/f-el.webp', selected: false, },
      { _id: '5', league: 'Europa Conference League', logo: '/logos/league/f-ecl.webp', selected: false, },
    ],
    selected: false,
  },
  {
    _id: "3",
    category: 'FIFA',
    leagues: [
      { _id: '1', league: 'World Cup', logo: '/logos/league/f-wc.webp', selected: false, },
      { _id: '2', league: 'Olympic Games', logo: '/logos/league/w-og.webp', selected: false, },
      { _id: '3', league: 'Club World Cup', logo: '/logos/league/f-cwc.webp', selected: false, },
      { _id: '4', league: 'Friendly International', logo: '/logos/league/w-f.webp', selected: false, },
      { _id: '5', league: 'Club Friendly', logo: '/logos/league/w-f.webp', selected: false, },
    ],
    selected: false,
  },

]
export function getFootballSideBar() {
  return footballSideBar;
}

const basketballSideBar = [
  {
    _id: "1",
    category: 'LEAGUES',
    leagues: [
      { _id: '10', league: 'NBA', logo: '/logos/league/b-nba.webp', selected: false, },
      { _id: '1', league: 'BBL UK', logo: '/logos/league/b-bbluk.webp', selected: false, },
      { _id: '2', league: 'LNB', logo: '/logos/league/b-lnb.webp', selected: false, },
      { _id: '3', league: 'BBL GERMANY', logo: '/logos/league/b-bblg.webp', selected: false, },
      { _id: '4', league: 'Lega A', logo: '/logos/league/b-la.webp', selected: false, },
      { _id: '5', league: 'ACB', logo: '/logos/league/b-acb.webp', selected: false, },
      { _id: '7', league: 'LPB', logo: '/logos/league/b-lpb.webp', selected: false, },
      { _id: '6', league: 'DBL', logo: '/logos/league/b-dbl.webp', selected: false, },
      { _id: '8', league: 'SB League', logo: '/logos/league/b-sbl.webp', selected: false, },
      { _id: '9', league: 'Super Lig', logo: '/logos/league/b-sl.webp', selected: false, },
    ],
    selected: true,

  },
  {
    _id: "2",
    category: 'FIBA-EUROPE',
    leagues: [
      { _id: '1', league: 'Euro Basket', logo: '/logos/league/b-eb.webp', selected: false, },
      { _id: '2', league: 'Euro League', logo: '/logos/league/b-el.webp', selected: false, },
      { _id: '3', league: 'Euro Cup', logo: '/logos/league/b-ec.webp', selected: false, },
      { _id: '4', league: 'Champions League', logo: '/logos/league/b-cl.webp', selected: false, },
      { _id: '5', league: 'ABA League', logo: '/logos/league/b-abal.webp', selected: false, },
    ],
    selected: false,

  },
  {
    _id: "3",
    category: 'FIBA-WORLD',
    leagues: [
      { _id: '1', league: 'World Cup', logo: '/logos/league/b-wc.webp', selected: false, },
      { _id: '2', league: 'Olympic Games', logo: '/logos/league/w-og.webp', selected: false, },
      { _id: '4', league: 'Friendly International', logo: '/logos/league/w-f.webp', selected: false, },
      { _id: '5', league: 'Club Friendly', logo: '/logos/league/w-f.webp', selected: false, },
    ],
    selected: false,

  },

]
export function getBasketballSideBar() {
  return basketballSideBar;
}
const tennisSideBar = [
  {
    _id: "1",
    category: 'TOURNAMENTS',
    leagues: [
      { _id: '1', league: 'Australian Open', logo: '/logos/league/t-ao.webp', selected: false, },
      { _id: '2', league: 'French Open', logo: '/logos/league/t-fo.webp', selected: false, },
      { _id: '3', league: 'Us Open', logo: '/logos/league/t-uo.webp', selected: false, },
      { _id: '4', league: 'Wimbledon', logo: '/logos/league/t-w.webp', selected: false, },
    ],
    selected: true,
  },
  {
    _id: "2",
    category: 'ITF',
    leagues: [
      { _id: '1', league: 'Internacional Tennis Federation', logo: '/logos/league/t-itf.webp', selected: false, },
    ],
    selected: false,
  },
]
export function getTennisSideBar() {
  return tennisSideBar;
}
const hockeySideBar = [
  {
    _id: "1",
    category: 'LEAGUES',
    leagues: [
      { _id: '1', league: 'NHL', logo: '/logos/league/h-nhl.webp', selected: false, },
      { _id: '2', league: 'KHL', logo: '/logos/league/h-khl.webp', selected: false, },
      { _id: '3', league: 'SHL', logo: '/logos/league/h-shl.webp', selected: false, },
      { _id: '4', league: 'Liiga', logo: '/logos/league/h-l.webp', selected: false, },
      { _id: '5', league: 'Extraliga', logo: '/logos/league/h-e.webp', selected: false, },
      { _id: '6', league: 'DEL', logo: '/logos/league/h-del.webp', selected: false, },
      { _id: '7', league: 'National League', logo: '/logos/league/h-nl.webp', selected: false, },
      { _id: '8', league: 'Metal Ligaen', logo: '/logos/league/h-ml.webp', selected: false, },
    ],
    selected: true,
  },
  {
    _id: "2",
    category: 'IIHF, EUROPE',
    leagues: [
      { _id: '1', league: 'Champions League', logo: '/logos/league/h-cl.webp', selected: false, },
      { _id: '2', league: 'Continental Cup', logo: '/logos/league/h-cc.webp', selected: false, },
    ],
    selected: false,
  },
  {
    _id: "3",
    category: 'IIHF, WORLD',
    leagues: [
      { _id: '1', league: 'World Championship', logo: '/logos/league/h-wca.webp', selected: false, },
      { _id: '2', league: 'Olympic Games', logo: '/logos/league/w-og.webp', selected: false, },
      { _id: '3', league: 'World Cup', logo: '/logos/league/h-wc.webp', selected: false, },
      { _id: '4', league: 'Friendly International', logo: '/logos/league/w-f.webp', selected: false, },
      { _id: '5', league: 'Club Friendly', logo: '/logos/league/w-f.webp', selected: false, },
    ],
    selected: false,
  },

]
export function getHockeySideBar() {
  return hockeySideBar;
}

const handballSideBar = [
  {
    _id: "1",
    category: 'LEAGUES',
    leagues: [
      { _id: '1', league: 'StarLigue', logo: '/logos/league/ha-s.webp', selected: false, },
      { _id: '2', league: 'BundesLiga', logo: '/logos/league/ha-b.webp', selected: false, },
      { _id: '3', league: 'Liga Asobal', logo: '/logos/league/ha-la.webp', selected: false, },
      { _id: '4', league: 'Herre Handbold Ligaen', logo: '/logos/league/ha-hhl.webp', selected: false, },
      { _id: '5', league: 'SM-sarja', logo: '/logos/league/ha-ss.webp', selected: false, },
      { _id: '6', league: 'Handbollsligan', logo: '/logos/league/ha-h.webp', selected: false, },
      { _id: '7', league: 'REMA 1000-ligaen', logo: '/logos/league/ha-r1000l.webp', selected: false, },
    ],
    selected: true,
  },
  {
    _id: "2",
    category: 'EHF',
    leagues: [
      { _id: '1', league: 'Euro', logo: '/logos/league/ha-e.webp', selected: false, },
      { _id: '2', league: 'Champions League', logo: '/logos/league/ha-cl.webp', selected: false, },
      { _id: '3', league: 'European League', logo: '/logos/league/ha-el.webp', selected: false, },
      { _id: '4', league: 'European Cup', logo: '/logos/league/ha-ec.webp', selected: false, },
    ],
    selected: false,
  },
  {
    _id: "3",
    category: 'IHF',
    leagues: [
      { _id: '1', league: 'World Championship', logo: '/logos/league/ha-wc.webp', selected: false, },
      { _id: '2', league: 'Olympic Games', logo: '/logos/league/w-og.webp', selected: false, },
      { _id: '3', league: 'Super Globe', logo: '/logos/league/ha-sg.webp', selected: false, },
      { _id: '4', league: 'Friendly International', logo: '/logos/league/w-f.webp', selected: false, },
      { _id: '5', league: 'Club Friendly', logo: '/logos/league/w-f.webp', selected: false, },
    ],
    selected: false,
  },

]
export function getHandballSideBar() {
  return handballSideBar;
}

const americanFootballSideBar = [
  {
    _id: "1",
    category: 'LEAGUES',
    leagues: [
      { _id: '1', league: 'NFL', logo: '/logos/league/am-nfl.webp', selected: false, },
      { _id: '2', league: 'CFL', logo: '/logos/league/am-cfl.webp', selected: false, },
      { _id: '3', league: 'GFL', logo: '/logos/league/am-gfl.webp', selected: false, },
      { _id: '4', league: 'Championnat Elite', logo: '/logos/league/am-ce.webp', selected: false, },
      { _id: '5', league: 'LNFA Serie A', logo: '/logos/league/am-lsa.webp', selected: false, },
      { _id: '6', league: 'X League', logo: '/logos/league/am-xl.webp', selected: false, },
    ],
    selected: true,
  },
  {
    _id: "2",
    category: 'IFAF, EUROPE',
    leagues: [
      { _id: '1', league: 'European Championship', logo: '/logos/league/am-ec.webp', selected: false, },
      { _id: '2', league: 'Champions League', logo: '/logos/league/am-cl.webp', selected: false, },
      { _id: '3', league: 'European League of Football', logo: '/logos/league/am-elof.webp', selected: false, },
    ],
    selected: false,
  },
  {
    _id: "3",
    category: 'IFAF, WORLD',
    leagues: [
      { _id: '1', league: 'World Championship', logo: '/logos/league/am-wc.webp', selected: false, },
      { _id: '2', league: 'Olympic Games', logo: '/logos/league/w-og.webp', selected: false, },
      { _id: '3', league: 'World Games', logo: '/logos/league/am-wg.webp', selected: false, },
    ],
    selected: false,
  },

]
export function getAmericanFootballSideBar() {
  return americanFootballSideBar;
}
const headerIcons = {
  _id: '1',
  logo: "/icons/sprite.svg#logo",
  search: "/icons/sprite.svg#search",
  account: "/icons/sprite.svg#account",
  settings: "/icons/sprite.svg#settings"
}
  ;
export function getHeader() {
  return headerIcons;
}
const heading = {
  _id: 1,
  h1: 'Get your information before betting',
  p: 'Vote for the tip based on your expretise and intuition',

}

export function getHeading() {
  return heading;
}
const navBar = [
  {
    _id: '1',
    title: 'FOOTBALL',
    logo: '/icons/sprite.svg#nav-football',
    path: '/football',
  },
  {
    _id: '2',
    title: 'BASKETBALL',
    logo: '/icons/sprite.svg#nav-basketball',
    path: '/basketball',
  },
  {
    _id: '3',
    title: 'TENNIS',
    logo: '/icons/sprite.svg#nav-tennis',
    path: '/tennis',
  },
  {
    _id: '4',
    title: 'HOCKEY',
    logo: '/icons/sprite.svg#nav-hockey',
    path: '/hockey',
  },
  {
    _id: '5',
    title: 'HANDBALL',
    logo: '/icons/sprite.svg#nav-handball',
    path: '/handball',
  },
  {
    _id: '6',
    title: 'AMERICAN FOOTBALL',
    logo: '/icons/sprite.svg#nav-american-football',
    path: '/american-football',
  },
]

export function getNavBar() {
  return navBar;
}
const sortTips = {
  a: [
    { _id: '1', tip: '1 X 2', selected: true },
    { _id: '2', tip: 'FT Under/Over ', selected: false },
    { _id: '3', tip: 'HT Under/Over ', selected: false },
  ],
  b: [
    { _id: '1', tip: '1 2', selected: true },
    { _id: '2', tip: 'FT Gems Under/Over ', selected: false },
    { _id: '3', tip: 'FT Sets Under/Over ', selected: false },
  ],
  c: [
    { _id: '1', tip: '1 2', selected: true },
    { _id: '2', tip: 'FT Under/Over ', selected: false },
    { _id: '3', tip: 'HT Under/Over ', selected: false },
  ]
}



export function getSortTips() {
  return sortTips;
}
const footerData = {
  _id: '1',
  titleA: 'Apps',
  titleT: 'About Tipsterpoll',
  logoA: "/icons/sprite.svg#apple-store",
  logoG: "/icons/google-play.svg",
  textA: `Tipsterpoll is a website made for passionate bettors and for those who want to earn money from betting sports. The purpose of this website is to collect the knowledge and intuition from all bettors and express it through voting for the tips. The more votes a certain tip has for a certain match, the more likely the outcome of that match will be. Together we can do more!`,
  textB: `The matches that are displayed on the website are the most popular matches, the tips are the most played tips and the sports are the most watched sports in the world, however with development of this site there will be more choices of sports, tips, leagues and matches that will be covered by this website.`,
  textC: `The voting system is based on democracy and freedom. Everyone can vote and see the result from that voting at any time. Voting starts when the match is shown on the page, and closes when the match starts. Everyone can vote only once per one match and the vote is irreversible. The result from the voting is displayed immediately after clicking on the tip.`,
  textD: `I want to wish you luck and success in betting and as much earnings as possible in the period that follows.
  -Aleksandar, founder of Tipsterpoll`,
  links: [
    { _id: '1', title: 'Terms of Service' },
    { _id: '2', title: 'Privacy Policy' },
    { _id: '3', title: 'Cookie Policy' },
    { _id: '4', title: 'Contact' },
  ],
  aware: '18+ Be GambleAware',
  copyright: '© 2023 Tipsterpoll.'
}

export function getFooter() {
  return footerData;
}

const calendar2023 = [
  //January
  { _id: '1', date: `01.01`, title: `01.01`, selected: false },
  { _id: '2', date: `02.01`, title: `02.01`, selected: false },
  { _id: '3', date: `03.01`, title: `03.01`, selected: false },
  { _id: '4', date: `04.01`, title: `04.01`, selected: false },
  { _id: '5', date: `05.01`, title: `05.01`, selected: false },
  { _id: '6', date: `06.01`, title: `06.01`, selected: false },
  { _id: '7', date: `07.01`, title: `07.01`, selected: false },
  { _id: '8', date: `08.01`, title: `08.01`, selected: false },
  { _id: '9', date: `09.01`, title: `09.01`, selected: false },
  { _id: '10', date: `10.01`, title: `10.01`, selected: false },
  { _id: '11', date: `11.01`, title: `11.01`, selected: false },
  { _id: '12', date: `12.01`, title: `12.01`, selected: false },
  { _id: '13', date: `13.01`, title: `13.01`, selected: false },
  { _id: '14', date: `14.01`, title: `14.01`, selected: false },
  { _id: '15', date: `15.01`, title: `15.01`, selected: false },
  { _id: '16', date: `16.01`, title: `16.01`, selected: false },
  { _id: '17', date: `17.01`, title: `17.01`, selected: false },
  { _id: '18', date: `18.01`, title: `18.01`, selected: false },
  { _id: '19', date: `19.01`, title: `19.01`, selected: false },
  { _id: '20', date: `20.01`, title: `20.01`, selected: false },
  { _id: '21', date: `21.01`, title: `21.01`, selected: false },
  { _id: '22', date: `22.01`, title: `22.01`, selected: false },
  { _id: '23', date: `23.01`, title: `23.01`, selected: false },
  { _id: '24', date: `24.01`, title: `24.01`, selected: false },
  { _id: '25', date: `25.01`, title: `25.01`, selected: false },
  { _id: '26', date: `26.01`, title: `26.01`, selected: false },
  { _id: '27', date: `27.01`, title: `27.01`, selected: false },
  { _id: '28', date: `28.01`, title: `28.01`, selected: false },
  { _id: '29', date: `29.01`, title: `29.01`, selected: false },
  { _id: '30', date: `30.01`, title: `30.01`, selected: false },
  { _id: '31', date: `31.01`, title: `31.01`, selected: false },
  //February
  { _id: '32', date: `01.02`, title: `01.02`, selected: false },
  { _id: '33', date: `02.02`, title: `02.02`, selected: false },
  { _id: '34', date: `03.02`, title: `03.02`, selected: false },
  { _id: '35', date: `04.02`, title: `04.02`, selected: false },
  { _id: '36', date: `05.02`, title: `05.02`, selected: false },
  { _id: '37', date: `06.02`, title: `06.02`, selected: false },
  { _id: '38', date: `07.02`, title: `07.02`, selected: false },
  { _id: '39', date: `08.02`, title: `08.02`, selected: false },
  { _id: '40', date: `09.02`, title: `09.02`, selected: false },
  { _id: '41', date: `10.02`, title: `10.02`, selected: false },
  { _id: '42', date: `11.02`, title: `11.02`, selected: false },
  { _id: '43', date: `12.02`, title: `12.02`, selected: false },
  { _id: '44', date: `13.02`, title: `13.02`, selected: false },
  { _id: '45', date: `14.02`, title: `14.02`, selected: false },
  { _id: '46', date: `15.02`, title: `15.02`, selected: false },
  { _id: '47', date: `16.02`, title: `16.02`, selected: false },
  { _id: '48', date: `17.02`, title: `17.02`, selected: false },
  { _id: '49', date: `18.02`, title: `18.02`, selected: false },
  { _id: '50', date: `19.02`, title: `19.02`, selected: false },
  { _id: '51', date: `20.02`, title: `20.02`, selected: false },
  { _id: '52', date: `21.02`, title: `21.02`, selected: false },
  { _id: '53', date: `22.02`, title: `22.02`, selected: false },
  { _id: '54', date: `23.02`, title: `23.02`, selected: false },
  { _id: '55', date: `24.02`, title: `24.02`, selected: false },
  { _id: '56', date: `25.02`, title: `25.02`, selected: false },
  { _id: '57', date: `26.02`, title: `26.02`, selected: false },
  { _id: '58', date: `27.02`, title: `27.02`, selected: false },
  { _id: '59', date: `28.02`, title: `28.02`, selected: false },
  //March
  { _id: '60', date: `01.03`, title: `01.03`, selected: false },
  { _id: '61', date: `02.03`, title: `02.03`, selected: false },
  { _id: '62', date: `03.03`, title: `03.03`, selected: false },
  { _id: '63', date: `04.03`, title: `04.03`, selected: false },
  { _id: '64', date: `05.03`, title: `05.03`, selected: false },
  { _id: '65', date: `06.03`, title: `06.03`, selected: false },
  { _id: '66', date: `07.03`, title: `07.03`, selected: false },
  { _id: '67', date: `08.03`, title: `08.03`, selected: false },
  { _id: '68', date: `09.03`, title: `09.03`, selected: false },
  { _id: '69', date: `10.03`, title: `10.03`, selected: false },
  { _id: '70', date: `11.03`, title: `11.03`, selected: false },
  { _id: '71', date: `12.03`, title: `12.03`, selected: false },
  { _id: '72', date: `13.03`, title: `13.03`, selected: false },
  { _id: '73', date: `14.03`, title: `14.03`, selected: false },
  { _id: '74', date: `15.03`, title: `15.03`, selected: false },
  { _id: '75', date: `16.03`, title: `16.03`, selected: false },
  { _id: '76', date: `17.03`, title: `17.03`, selected: false },
  { _id: '77', date: `18.03`, title: `18.03`, selected: false },
  { _id: '78', date: `19.03`, title: `19.03`, selected: false },
  { _id: '79', date: `20.03`, title: `20.03`, selected: false },
  { _id: '80', date: `21.03`, title: `21.03`, selected: false },
  { _id: '81', date: `22.03`, title: `22.03`, selected: false },
  { _id: '82', date: `23.03`, title: `23.03`, selected: false },
  { _id: '83', date: `24.03`, title: `24.03`, selected: false },
  { _id: '84', date: `25.03`, title: `25.03`, selected: false },
  { _id: '85', date: `26.03`, title: `26.03`, selected: false },
  { _id: '86', date: `27.03`, title: `27.03`, selected: false },
  { _id: '87', date: `28.03`, title: `28.03`, selected: false },
  { _id: '88', date: `29.03`, title: `29.03`, selected: false },
  { _id: '89', date: `30.03`, title: `30.03`, selected: false },
  { _id: '90', date: `31.03`, title: `31.03`, selected: false },
  //April
  { _id: '91', date: `01.04`, title: `01.04`, selected: false },
  { _id: '92', date: `02.04`, title: `02.04`, selected: false },
  { _id: '93', date: `03.04`, title: `03.04`, selected: false },
  { _id: '94', date: `04.04`, title: `04.04`, selected: false },
  { _id: '95', date: `05.04`, title: `05.04`, selected: false },
  { _id: '96', date: `06.04`, title: `06.04`, selected: false },
  { _id: '97', date: `07.04`, title: `07.04`, selected: false },
  { _id: '98', date: `08.04`, title: `08.04`, selected: false },
  { _id: '99', date: `09.04`, title: `09.04`, selected: false },
  { _id: '100', date: `10.04`, title: `10.04`, selected: false },
  { _id: '101', date: `11.04`, title: `11.04`, selected: false },
  { _id: '102', date: `12.04`, title: `12.04`, selected: false },
  { _id: '103', date: `13.04`, title: `13.04`, selected: false },
  { _id: '104', date: `14.04`, title: `14.04`, selected: false },
  { _id: '105', date: `15.04`, title: `15.04`, selected: false },
  { _id: '106', date: `16.04`, title: `16.04`, selected: false },
  { _id: '107', date: `17.04`, title: `17.04`, selected: false },
  { _id: '108', date: `18.04`, title: `18.04`, selected: false },
  { _id: '109', date: `19.04`, title: `19.04`, selected: false },
  { _id: '110', date: `20.04`, title: `20.04`, selected: false },
  { _id: '111', date: `21.04`, title: `21.04`, selected: false },
  { _id: '112', date: `22.04`, title: `22.04`, selected: false },
  { _id: '113', date: `23.04`, title: `23.04`, selected: false },
  { _id: '114', date: `24.04`, title: `24.04`, selected: false },
  { _id: '115', date: `25.04`, title: `25.04`, selected: false },
  { _id: '116', date: `26.04`, title: `26.04`, selected: false },
  { _id: '117', date: `27.04`, title: `27.04`, selected: false },
  { _id: '118', date: `28.04`, title: `28.04`, selected: false },
  { _id: '119', date: `29.04`, title: `29.04`, selected: false },
  { _id: '120', date: `30.04`, title: `30.04`, selected: false },
  //May
  { _id: '121', date: `01.05`, title: `01.05`, selected: false },
  { _id: '122', date: `02.05`, title: `02.05`, selected: false },
  { _id: '123', date: `03.05`, title: `03.05`, selected: false },
  { _id: '124', date: `04.05`, title: `04.05`, selected: false },
  { _id: '125', date: `05.05`, title: `05.05`, selected: false },
  { _id: '126', date: `06.05`, title: `06.05`, selected: false },
  { _id: '127', date: `07.05`, title: `07.05`, selected: false },
  { _id: '128', date: `08.05`, title: `08.05`, selected: false },
  { _id: '129', date: `09.05`, title: `09.05`, selected: false },
  { _id: '130', date: `10.05`, title: `10.05`, selected: false },
  { _id: '131', date: `11.05`, title: `11.05`, selected: false },
  { _id: '132', date: `12.05`, title: `12.05`, selected: false },
  { _id: '133', date: `13.05`, title: `13.05`, selected: false },
  { _id: '134', date: `14.05`, title: `14.05`, selected: false },
  { _id: '135', date: `15.05`, title: `15.05`, selected: false },
  { _id: '136', date: `16.05`, title: `16.05`, selected: false },
  { _id: '137', date: `17.05`, title: `17.05`, selected: false },
  { _id: '138', date: `18.05`, title: `18.05`, selected: false },
  { _id: '139', date: `19.05`, title: `19.05`, selected: false },
  { _id: '140', date: `20.05`, title: `20.05`, selected: false },
  { _id: '141', date: `21.05`, title: `21.05`, selected: false },
  { _id: '142', date: `22.05`, title: `22.05`, selected: false },
  { _id: '143', date: `23.05`, title: `23.05`, selected: false },
  { _id: '144', date: `24.05`, title: `24.05`, selected: false },
  { _id: '145', date: `25.05`, title: `25.05`, selected: false },
  { _id: '146', date: `26.05`, title: `26.05`, selected: false },
  { _id: '147', date: `27.05`, title: `27.05`, selected: false },
  { _id: '148', date: `28.05`, title: `28.05`, selected: false },
  { _id: '149', date: `29.05`, title: `29.05`, selected: false },
  { _id: '150', date: `30.05`, title: `30.05`, selected: false },
  { _id: '151', date: `31.05`, title: `31.05`, selected: false },
  //June
  { _id: '152', date: `01.06`, title: `01.06`, selected: false },
  { _id: '153', date: `02.06`, title: `02.06`, selected: false },
  { _id: '154', date: `03.06`, title: `03.06`, selected: false },
  { _id: '155', date: `04.06`, title: `04.06`, selected: false },
  { _id: '156', date: `05.06`, title: `05.06`, selected: false },
  { _id: '157', date: `06.06`, title: `06.06`, selected: false },
  { _id: '158', date: `07.06`, title: `07.06`, selected: false },
  { _id: '159', date: `08.06`, title: `08.06`, selected: false },
  { _id: '160', date: `09.06`, title: `09.06`, selected: false },
  { _id: '161', date: `10.06`, title: `10.06`, selected: false },
  { _id: '162', date: `11.06`, title: `11.06`, selected: false },
  { _id: '163', date: `12.06`, title: `12.06`, selected: false },
  { _id: '164', date: `13.06`, title: `13.06`, selected: false },
  { _id: '165', date: `14.06`, title: `14.06`, selected: false },
  { _id: '166', date: `15.06`, title: `15.06`, selected: false },
  { _id: '167', date: `16.06`, title: `16.06`, selected: false },
  { _id: '168', date: `17.06`, title: `17.06`, selected: false },
  { _id: '169', date: `18.06`, title: `18.06`, selected: false },
  { _id: '170', date: `19.06`, title: `19.06`, selected: false },
  { _id: '171', date: `20.06`, title: `20.06`, selected: false },
  { _id: '172', date: `21.06`, title: `21.06`, selected: false },
  { _id: '173', date: `22.06`, title: `22.06`, selected: false },
  { _id: '174', date: `23.06`, title: `23.06`, selected: false },
  { _id: '175', date: `24.06`, title: `24.06`, selected: false },
  { _id: '176', date: `25.06`, title: `25.06`, selected: false },
  { _id: '177', date: `26.06`, title: `26.06`, selected: false },
  { _id: '178', date: `27.06`, title: `27.06`, selected: false },
  { _id: '179', date: `28.06`, title: `28.06`, selected: false },
  { _id: '180', date: `29.06`, title: `29.06`, selected: false },
  { _id: '181', date: `30.06`, title: `30.06`, selected: false },
  //July
  { _id: '182', date: `01.07`, title: `01.07`, selected: false },
  { _id: '183', date: `02.07`, title: `02.07`, selected: false },
  { _id: '184', date: `03.07`, title: `03.07`, selected: false },
  { _id: '185', date: `04.07`, title: `04.07`, selected: false },
  { _id: '186', date: `05.07`, title: `05.07`, selected: false },
  { _id: '187', date: `06.07`, title: `06.07`, selected: false },
  { _id: '188', date: `07.07`, title: `07.07`, selected: false },
  { _id: '189', date: `08.07`, title: `08.07`, selected: false },
  { _id: '190', date: `09.07`, title: `09.07`, selected: false },
  { _id: '191', date: `10.07`, title: `10.07`, selected: false },
  { _id: '192', date: `11.07`, title: `11.07`, selected: false },
  { _id: '193', date: `12.07`, title: `12.07`, selected: false },
  { _id: '194', date: `13.07`, title: `13.07`, selected: false },
  { _id: '195', date: `14.07`, title: `14.07`, selected: false },
  { _id: '196', date: `15.07`, title: `15.07`, selected: false },
  { _id: '197', date: `16.07`, title: `16.07`, selected: false },
  { _id: '198', date: `17.07`, title: `17.07`, selected: false },
  { _id: '199', date: `18.07`, title: `18.07`, selected: false },
  { _id: '200', date: `19.07`, title: `19.07`, selected: false },
  { _id: '201', date: `20.07`, title: `20.07`, selected: false },
  { _id: '202', date: `21.07`, title: `21.07`, selected: false },
  { _id: '203', date: `22.07`, title: `22.07`, selected: false },
  { _id: '204', date: `23.07`, title: `23.07`, selected: false },
  { _id: '205', date: `24.07`, title: `24.07`, selected: false },
  { _id: '206', date: `25.07`, title: `25.07`, selected: false },
  { _id: '207', date: `26.07`, title: `26.07`, selected: false },
  { _id: '208', date: `27.07`, title: `27.07`, selected: false },
  { _id: '209', date: `28.07`, title: `28.07`, selected: false },
  { _id: '210', date: `29.07`, title: `29.07`, selected: false },
  { _id: '211', date: `30.07`, title: `30.07`, selected: false },
  { _id: '212', date: `31.07`, title: `31.07`, selected: false },
  //August
  { _id: '213', date: `01.08`, title: `01.08`, selected: false },
  { _id: '214', date: `02.08`, title: `02.08`, selected: false },
  { _id: '215', date: `03.08`, title: `03.08`, selected: false },
  { _id: '216', date: `04.08`, title: `04.08`, selected: false },
  { _id: '217', date: `05.08`, title: `05.08`, selected: false },
  { _id: '218', date: `06.08`, title: `06.08`, selected: false },
  { _id: '219', date: `07.08`, title: `07.08`, selected: false },
  { _id: '220', date: `08.08`, title: `08.08`, selected: false },
  { _id: '221', date: `09.08`, title: `09.08`, selected: false },
  { _id: '222', date: `10.08`, title: `10.08`, selected: false },
  { _id: '223', date: `11.08`, title: `11.08`, selected: false },
  { _id: '224', date: `12.08`, title: `12.08`, selected: false },
  { _id: '225', date: `13.08`, title: `13.08`, selected: false },
  { _id: '226', date: `14.08`, title: `14.08`, selected: false },
  { _id: '227', date: `15.08`, title: `15.08`, selected: false },
  { _id: '228', date: `16.08`, title: `16.08`, selected: false },
  { _id: '229', date: `17.08`, title: `17.08`, selected: false },
  { _id: '230', date: `18.08`, title: `18.08`, selected: false },
  { _id: '231', date: `19.08`, title: `19.08`, selected: false },
  { _id: '232', date: `20.08`, title: `20.08`, selected: false },
  { _id: '233', date: `21.08`, title: `21.08`, selected: false },
  { _id: '234', date: `22.08`, title: `22.08`, selected: false },
  { _id: '235', date: `23.08`, title: `23.08`, selected: false },
  { _id: '236', date: `24.08`, title: `24.08`, selected: false },
  { _id: '237', date: `25.08`, title: `25.08`, selected: false },
  { _id: '238', date: `26.08`, title: `26.08`, selected: false },
  { _id: '239', date: `27.08`, title: `27.08`, selected: false },
  { _id: '240', date: `28.08`, title: `28.08`, selected: false },
  { _id: '241', date: `29.08`, title: `29.08`, selected: false },
  { _id: '242', date: `30.08`, title: `30.08`, selected: false },
  { _id: '243', date: `31.08`, title: `31.08`, selected: false },
  //September
  { _id: '244', date: `01.09`, title: `01.09`, selected: false },
  { _id: '245', date: `02.09`, title: `02.09`, selected: false },
  { _id: '246', date: `03.09`, title: `03.09`, selected: false },
  { _id: '247', date: `04.09`, title: `04.09`, selected: false },
  { _id: '248', date: `05.09`, title: `05.09`, selected: false },
  { _id: '249', date: `06.09`, title: `06.09`, selected: false },
  { _id: '250', date: `07.09`, title: `07.09`, selected: false },
  { _id: '251', date: `08.09`, title: `08.09`, selected: false },
  { _id: '252', date: `09.09`, title: `09.09`, selected: false },
  { _id: '253', date: `10.09`, title: `10.09`, selected: false },
  { _id: '254', date: `11.09`, title: `11.09`, selected: false },
  { _id: '255', date: `12.09`, title: `12.09`, selected: false },
  { _id: '256', date: `13.09`, title: `13.09`, selected: false },
  { _id: '257', date: `14.09`, title: `14.09`, selected: false },
  { _id: '258', date: `15.09`, title: `15.09`, selected: false },
  { _id: '259', date: `16.09`, title: `16.09`, selected: false },
  { _id: '260', date: `17.09`, title: `17.09`, selected: false },
  { _id: '261', date: `18.09`, title: `18.09`, selected: false },
  { _id: '262', date: `19.09`, title: `19.09`, selected: false },
  { _id: '263', date: `20.09`, title: `20.09`, selected: false },
  { _id: '264', date: `21.09`, title: `21.09`, selected: false },
  { _id: '265', date: `22.09`, title: `22.09`, selected: false },
  { _id: '266', date: `23.09`, title: `23.09`, selected: false },
  { _id: '267', date: `24.09`, title: `24.09`, selected: false },
  { _id: '268', date: `25.09`, title: `25.09`, selected: false },
  { _id: '269', date: `26.09`, title: `26.09`, selected: false },
  { _id: '270', date: `27.09`, title: `27.09`, selected: false },
  { _id: '271', date: `28.09`, title: `28.09`, selected: false },
  { _id: '272', date: `29.09`, title: `29.09`, selected: false },
  { _id: '273', date: `30.09`, title: `30.09`, selected: false },
  //Octomber
  { _id: '274', date: `01.10`, title: `01.10`, selected: false },
  { _id: '275', date: `02.10`, title: `02.10`, selected: false },
  { _id: '276', date: `03.10`, title: `03.10`, selected: false },
  { _id: '277', date: `04.10`, title: `04.10`, selected: false },
  { _id: '278', date: `05.10`, title: `05.10`, selected: false },
  { _id: '279', date: `06.10`, title: `06.10`, selected: false },
  { _id: '280', date: `07.10`, title: `07.10`, selected: false },
  { _id: '281', date: `08.10`, title: `08.10`, selected: false },
  { _id: '282', date: `09.10`, title: `09.10`, selected: false },
  { _id: '283', date: `10.10`, title: `10.10`, selected: false },
  { _id: '284', date: `11.10`, title: `11.10`, selected: false },
  { _id: '285', date: `12.10`, title: `12.10`, selected: false },
  { _id: '286', date: `13.10`, title: `13.10`, selected: false },
  { _id: '287', date: `14.10`, title: `14.10`, selected: false },
  { _id: '288', date: `15.10`, title: `15.10`, selected: false },
  { _id: '289', date: `16.10`, title: `16.10`, selected: false },
  { _id: '290', date: `17.10`, title: `17.10`, selected: false },
  { _id: '291', date: `18.10`, title: `18.10`, selected: false },
  { _id: '292', date: `19.10`, title: `19.10`, selected: false },
  { _id: '293', date: `20.10`, title: `20.10`, selected: false },
  { _id: '294', date: `21.10`, title: `21.10`, selected: false },
  { _id: '295', date: `22.10`, title: `22.10`, selected: false },
  { _id: '296', date: `23.10`, title: `23.10`, selected: false },
  { _id: '297', date: `24.10`, title: `24.10`, selected: false },
  { _id: '298', date: `25.10`, title: `25.10`, selected: false },
  { _id: '299', date: `26.10`, title: `26.10`, selected: false },
  { _id: '300', date: `27.10`, title: `27.10`, selected: false },
  { _id: '301', date: `28.10`, title: `28.10`, selected: false },
  { _id: '302', date: `29.10`, title: `29.10`, selected: false },
  { _id: '303', date: `30.10`, title: `30.10`, selected: false },
  { _id: '304', date: `31.10`, title: `31.10`, selected: false },
  //November
  { _id: '305', date: `01.11`, title: `01.11`, selected: false },
  { _id: '306', date: `02.11`, title: `02.11`, selected: false },
  { _id: '307', date: `03.11`, title: `03.11`, selected: false },
  { _id: '308', date: `04.11`, title: `04.11`, selected: false },
  { _id: '309', date: `05.11`, title: `05.11`, selected: false },
  { _id: '310', date: `06.11`, title: `06.11`, selected: false },
  { _id: '311', date: `07.11`, title: `07.11`, selected: false },
  { _id: '312', date: `08.11`, title: `08.11`, selected: false },
  { _id: '313', date: `09.11`, title: `09.11`, selected: false },
  { _id: '314', date: `10.11`, title: `10.11`, selected: false },
  { _id: '315', date: `11.11`, title: `11.11`, selected: false },
  { _id: '316', date: `12.11`, title: `12.11`, selected: false },
  { _id: '317', date: `13.11`, title: `13.11`, selected: false },
  { _id: '318', date: `14.11`, title: `14.11`, selected: false },
  { _id: '319', date: `15.11`, title: `15.11`, selected: false },
  { _id: '320', date: `16.11`, title: `16.11`, selected: false },
  { _id: '321', date: `17.11`, title: `17.11`, selected: false },
  { _id: '322', date: `18.11`, title: `18.11`, selected: false },
  { _id: '323', date: `19.11`, title: `19.11`, selected: false },
  { _id: '324', date: `20.11`, title: `20.11`, selected: false },
  { _id: '325', date: `21.11`, title: `21.11`, selected: false },
  { _id: '326', date: `22.11`, title: `22.11`, selected: false },
  { _id: '327', date: `23.11`, title: `23.11`, selected: false },
  { _id: '328', date: `24.11`, title: `24.11`, selected: false },
  { _id: '329', date: `25.11`, title: `25.11`, selected: false },
  { _id: '330', date: `26.11`, title: `26.11`, selected: false },
  { _id: '331', date: `27.11`, title: `27.11`, selected: false },
  { _id: '332', date: `28.11`, title: `28.11`, selected: false },
  { _id: '333', date: `29.11`, title: `29.11`, selected: false },
  { _id: '334', date: `30.11`, title: `30.11`, selected: false },
  //December
  { _id: '335', date: `01.12`, title: `01.12`, selected: false },
  { _id: '336', date: `02.12`, title: `02.12`, selected: false },
  { _id: '337', date: `03.12`, title: `03.12`, selected: false },
  { _id: '338', date: `04.12`, title: `04.12`, selected: false },
  { _id: '339', date: `05.12`, title: `05.12`, selected: false },
  { _id: '340', date: `06.12`, title: `06.12`, selected: false },
  { _id: '341', date: `07.12`, title: `07.12`, selected: false },
  { _id: '342', date: `08.12`, title: `08.12`, selected: false },
  { _id: '343', date: `09.12`, title: `09.12`, selected: false },
  { _id: '344', date: `10.12`, title: `10.12`, selected: false },
  { _id: '345', date: `11.12`, title: `11.12`, selected: false },
  { _id: '346', date: `12.12`, title: `12.12`, selected: false },
  { _id: '347', date: `13.12`, title: `13.12`, selected: false },
  { _id: '348', date: `14.12`, title: `14.12`, selected: false },
  { _id: '349', date: `15.12`, title: `15.12`, selected: false },
  { _id: '350', date: `16.12`, title: `16.12`, selected: false },
  { _id: '351', date: `17.12`, title: `17.12`, selected: false },
  { _id: '352', date: `18.12`, title: `18.12`, selected: false },
  { _id: '353', date: `19.12`, title: `19.12`, selected: false },
  { _id: '354', date: `20.12`, title: `20.12`, selected: false },
  { _id: '355', date: `21.12`, title: `21.12`, selected: false },
  { _id: '356', date: `22.12`, title: `22.12`, selected: false },
  { _id: '357', date: `23.12`, title: `23.12`, selected: false },
  { _id: '358', date: `24.12`, title: `24.12`, selected: false },
  { _id: '359', date: `25.12`, title: `25.12`, selected: false },
  { _id: '360', date: `26.12`, title: `26.12`, selected: false },
  { _id: '361', date: `27.12`, title: `27.12`, selected: false },
  { _id: '362', date: `28.12`, title: `28.12`, selected: false },
  { _id: '363', date: `29.12`, title: `29.12`, selected: false },
  { _id: '364', date: `30.12`, title: `30.12`, selected: false },
  { _id: '365', date: `31.12`, title: `31.12`, selected: false },
]

let day = new Date().getDate();
let month = (new Date().getMonth() + 1);
if (day < 10) {
  day = `0${day}`
}
if (month < 10) {
  month = `0${month}`
}
const today = `${day}.${month}`;


const firstDay = calendar2023.filter(day => day.date === today);
const index = calendar2023.indexOf(firstDay[0]);
const filtered = [calendar2023[index], calendar2023[index + 1], calendar2023[index + 2], calendar2023[index + 3], calendar2023[index + 4], calendar2023[index + 5], calendar2023[index + 6]]

const calendar = {
  _id: '1',
  chevron: '/icons/sprite.svg#chevron',
  calendar: { _id: '1', date: '', title: '', logo: '/icons/sprite.svg#calendar', selected: false },
  days: filtered,
}
export function getCalendar() {
  return calendar;
}
export function getCalendar2023() {
  return calendar2023;
}