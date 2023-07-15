import { AppInfo, MenuItem } from "types";
import matchupIcon from "../assets/matchupIcon.png"
import imageNotFound from "../assets/image_not_found.png"

export const menu: MenuItem[] =[
    {
        name:"home",
        icon:"home",
        path: "/home"
    },
    {
        name:"applications",
        icon:"app",
        path: "/applications"
    },
    {
        name:"aboutUs",
        icon:"people",
        path: "/about-us"
    },
    {
        name:"contact",
        icon:"contact",
        path: "/contact"
    }
];

// Styles utils

export const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
};

// Apps information

export const Apps: AppInfo[] = [
    {
        name: "Matchup",
        icon: matchupIcon,
        stars: 0.0,
        downloadsNumber: 0,
        url: "/",
    },
    {
        name: "notReady",
        icon: imageNotFound,
        stars: 0.0,
        downloadsNumber: 0,
        url: "/",
    },
]