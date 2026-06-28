// types/customTailoring.ts

export interface HeroData {
    videoUrl: string;
    fallbackImage: string;
    title: string;
    subtitle: string;
    ctaTextPrimary: string;
    ctaTextSecondary: string;
    whatsappLink: string;
  }
  
  export interface IntroData {
    heading: string;
    subheading: string;
    paragraphs: string[];
    imageUrl: string;
  }
  
  export interface JourneyStep {
    number: string;
    title: string;
    description: string;
  }
  
  export interface FabricCollection {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
  }
  
  export interface GalleryItem {
    id: string;
    imageUrl: string;
    caption: string;
    aspectClass: string; // For masonry layouts
  }
  
  export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    city: string;
  }
  
  export interface FAQItem {
    id: string;
    question: string;
    answer: string;
  }
  
  export interface StartJourneyData {
    title: string;
    description: string;
    ctaText: string;
  }