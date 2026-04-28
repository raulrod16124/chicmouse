export type SectionId = 'hero' | 'games' | 'studio' | 'team' | 'contact';

export interface IAppPage {
  name: string;
  description: string;
  images: string[];
  icon: string;
  stars: number;
  downloadsNumber: number;
  url: string;
}

export interface IContactForm {
  name: string;
  email: string;
  message: string;
}

export type FormStatus = 'ready' | 'sending' | 'sent' | 'error';
