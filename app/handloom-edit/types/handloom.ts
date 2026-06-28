export interface DynamicMedia {
    type: 'video' | 'image';
    url: string;
  }
  
  export interface HandloomHeroData {
    media: DynamicMedia;
    title: string;
    subtitle: string;
    buttonText: string;
  }
  
  export interface ArtisanSpotlightData {
    title: string;
    artisanName: string;
    location: string;
    storyText: string;
    craftDetails: string;
    media: DynamicMedia; // Upgraded to support image or video uploads
  }
  
  export interface HandloomCollectionCard {
    id: string;
    title: string;
    description: string;
    media: DynamicMedia; // Upgraded to hybrid layout
  }
  
  export interface HandloomProduct {
    id: string;
    name: string;
    price: string;
    media: DynamicMedia; // Upgraded to support video previews for garments
    isSoldOut: boolean;
  }
  
  // Rest of your text contracts remain stable
  export interface BrandStoryData { quote: string; paragraphOne: string; paragraphTwo: string; }
  export interface ProcessStep { id: string; stepNumber: string; title: string; description: string; }
  export interface FabricCard { id: string; name: string; feel: string; texture: string; benefits: string; craftsmanship: string; }
  export interface Testimonial { id: string; quote: string; author: string; location: string; }
  export interface SustainabilityPillar { id: string; title: string; description: string; }