export type MenuItem = {
    name: string;
    icon: string;
    path: string;
}

export type AppInfo = {
    name: string;
    icon: string;
    stars: number;
    downloadsNumber: number;
    url: string;
}

export interface IAppPage {
    name: string;
    description: string;
    images: string[],
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

export type FormStatus = "ready" | "sending" | "sent" | "error";
