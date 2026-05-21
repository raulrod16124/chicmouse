import {IAppPage} from 'types';
import stellarFusionIcon from 'assets/stellar_fusion_logo.webp';
import stellarFusionImg1 from 'assets/stellar_fusion_1.webp';
import stellarFusionImg2 from 'assets/stellar_fusion_2.webp';
import stellarFusionImg3 from 'assets/stellar_fusion_3.webp';
import stellarFusionImg4 from 'assets/stellar_fusion_4.webp';
import stellarFusionImg5 from 'assets/stellar_fusion_5.webp';
import imageNotFound from 'assets/image_not_found.webp';

// const { VITE_MATCHUP_APP_URL } = import.meta.env;

// Styles utils

export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopM: '1240px',
  laptopL: '1440px',
  desktop: '2560px',
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
  desktopL: `(max-width: ${size.desktop})`,
};

// Apps information
export const AppPages: IAppPage[] = [
  {
    name: 'stellar fusion',
    description: 'stellarFusionDescription',
    images: [
      stellarFusionImg1,
      stellarFusionImg2,
      stellarFusionImg3,
      stellarFusionImg4,
      stellarFusionImg5,
    ],
    icon: stellarFusionIcon,
    stars: 0.0,
    downloadsNumber: 0,
    url: 'https://play.google.com/store/apps/details?id=com.matchupcardgame2023',
    // url: VITE_MATCHUP_APP_URL,
  },
  {
    name: 'notReady',
    description: 'noDescription',
    images: [],
    icon: 'notReady',
    stars: 0.0,
    downloadsNumber: 0,
    url: '/',
  },
];
