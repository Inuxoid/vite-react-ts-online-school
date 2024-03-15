export type Tab = 'main' | 'feedback' | 'effect';
export type FeedbackReasons = 'help' | 'suggest' | 'error';
export interface UserGeo {
    lat: string;
    lng: string;
}

export interface UserAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: UserGeo;
}

export interface UserCompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: UserAddress;
    phone: string;
    website: string;
    company: UserCompany;
}