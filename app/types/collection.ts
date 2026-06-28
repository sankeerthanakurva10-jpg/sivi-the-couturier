export interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    primaryImage: string;
    hoverImage: string;
    category: string;
    fabric: string;
    color: string;
    sizes: string[];
    inStock: boolean;
    isNew: boolean;
    isSale: boolean;
    description: string;
  }
  
  export interface CollectionMeta {
    id: string;
    title: string;
    tagline: string;
    description: string;
    heroImage: string;
    heroVideo?: string;
    storyTitle: string;
    storyDescription: string;
    storyImage: string;
  }
  
  export interface FeaturedCollectionCard {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    slug: string;
  }