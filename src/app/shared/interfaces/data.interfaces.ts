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

export interface ServiceData {
    title: string;
    description: string;
    list: string[];
    imgSrc: string;
    imgSize: number;
    groupClass: string;
}

export interface ServicePlan {
    title: string;
    list: string[];
    list2?: string[];
    activeClass: boolean;
}