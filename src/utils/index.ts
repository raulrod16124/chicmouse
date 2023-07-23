import { IAppPage, MenuItem } from "types";
import matchupIcon from "../assets/matchupIcon.png"
import matchupImage1 from "../assets/matchupImage_1.png"
import matchupImage2 from "../assets/matchupImage_2.png"
import matchupImage3 from "../assets/matchupImage_3.png"
import matchupImage4 from "../assets/matchupImage_4.png"
import imageNotFound from "../assets/image_not_found.png"

const { 
    VITE_MATCHUP_APP_URL
 } = import.meta.env;

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
    laptopM: '1240px',
    laptopL: '1440px',
    desktop: '2560px'
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopM: `(max-width: ${size.laptopM})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
};

// Apps information
export const AppPages: IAppPage[] = [
    {   
        name: "matchup",
        description: "matchupDescription",
        images: [
            matchupImage1,
            matchupImage2,
            matchupImage3,
            matchupImage4,
        ],
        icon: matchupIcon,
        stars: 0.0,
        downloadsNumber: 0,
        url: VITE_MATCHUP_APP_URL,
    },
    {
        name: "notReady",
        description: "noDescription",
        images: [],
        icon: imageNotFound,
        stars: 0.0,
        downloadsNumber: 0,
        url: "/",
    },
];