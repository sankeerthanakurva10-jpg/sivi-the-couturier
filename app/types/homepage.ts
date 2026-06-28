export interface AnnouncementBarData {
    leftText: string;
    centerText: string;
    currencyOptions: string[];
  }
  
  export interface NavigationLink {
    label: string;
    href: string;
  }
  
  export interface MediaSection {
    id: string;
    type: 'image' | 'video';
    mediaUrl: string;
    collectionName: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  }
  
  export interface GridCollection {
    id: string;
    title: string;
    imageUrl: string;
    link: string;
  }
  
  export interface FooterSettings {
    whatsappNumber: string;
    instagramUrl: string;
    pinterestUrl: string;
    facebookUrl: string;
    youtubeUrl: string;
  }