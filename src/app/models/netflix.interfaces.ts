
export interface NavInterface{
    logo: ImageInterface;
    optionsMenu: LinksInterface[];
    menuIcon: IconInterface;
    optionsClient: ImageInterface[];
    loginClient: ImageInterface[];
}

export interface FilmsInterface{
    title: string;
    gallery: ImageInterface[];
}


export interface LinksInterface{
    title: string;
    link: string;
}

export interface ImageInterface{
    src: string;
    alt: string;
}

export interface IconInterface{
    text: string;
    image: ImageInterface;
}