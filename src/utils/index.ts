import {IAppPage} from 'types';
import stellarMergeIcon from 'assets/stellar_merge_logo.webp';
import stellarMergeImg1 from 'assets/stellar_merge_1.webp';
import stellarMergeImg2 from 'assets/stellar_merge_2.webp';
import stellarMergeImg3 from 'assets/stellar_merge_3.webp';
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
    name: 'stellar merge',
    description: 'stellarMergeDescription',
    images: [stellarMergeImg1, stellarMergeImg2, stellarMergeImg3],
    icon: stellarMergeIcon,
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
