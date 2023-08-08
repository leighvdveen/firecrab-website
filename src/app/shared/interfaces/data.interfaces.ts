export interface ComponentsLinksData {
    name: string;
    path: string;
}

export interface FooterContactsData {
    title: string;
    description: string;
    imgSrc: string;
    width: number,
    height: number
}

export interface ItemData {
    title: string;
    description: string;
    imgSrc: string;
}

export interface ContactUsData {
    name: string;
    companyName: string;
    email: string;
    address: string;
    country: string;
    phoneNumber: string;
    additionalInfo: string;
    dateOfConsultation: string;
}

export interface ErrorsMessageData {
    required: string;
    email: string;
}