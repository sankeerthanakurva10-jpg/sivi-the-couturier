export interface NavigationLink {
  label: string;
  href: string;
}

export interface AnnouncementBarData {
  leftText: string;
  centerText: string;
  currencyOptions: string[];
}

export interface CampaignMediaBlock {
  id: string;
  type: 'image' | 'video';
  mediaUrl: string;
  collectionName: string;
  buttonText: string;
  buttonLink: string;
}

export interface FooterSettings {
  whatsappNumber: string;
  instagramUrl: string;
  pinterestUrl: string;
}

export const announcementData: AnnouncementBarData = {
  leftText: "WORLDWIDE SHIPPING",
  centerText: "SUMMER SALE 2026",
  currencyOptions: ["INR", "USD", "EUR", "GBP"]
};

export const navLinks: NavigationLink[] = [
  { label: "SHOP", href: "/shop" },
  { label: "COLLECTION", href: "/collections" },
  { label: "HANDLOOM EDIT", href: "/handloom-edit" },
  { label: "CUSTOM TAILORING", href: "/custom-tailoring" },
  { label: "ABOUT US", href: "/about" },
  { label: "CONTACT", href: "/contact" },
  { label: "SALE", href: "/sale" }
];

// All button labels updated strictly to "EXPLORE"
export const homeCampaignStream: CampaignMediaBlock[] = [
  {
    id: "camp-1",
    type: "video",
    mediaUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0ee273d26ebf9db06d06ecab16556f8&profile_id=165&oauth2_token_id=57447761",
    collectionName: "THE COUTURIER ATELIER 2026",
    buttonText: "EXPLORE",
    buttonLink: "/shop"
  },
  {
    id: "camp-2",
    type: "image",
    mediaUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2000&auto=format&fit=crop",
    collectionName: "HANDLOOM HERITAGE CAPSULE",
    buttonText: "EXPLORE",
    buttonLink: "/shop"
  },
  {
    id: "camp-3",
    type: "video",
    mediaUrl: "https://player.vimeo.com/external/435674703.sd.mp4?s=6f48abfe8f7c11f6c4f3469ba1e25e9ff094ab47&profile_id=165&oauth2_token_id=57447761",
    collectionName: "MODERN SILHOUETTES EDIT",
    buttonText: "EXPLORE",
    buttonLink: "/shop"
  },
  {
    id: "camp-4",
    type: "image",
    mediaUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2000&auto=format&fit=crop",
    collectionName: "FESTIVE ROYAL EDIT",
    buttonText: "EXPLORE",
    buttonLink: "/shop"
  },
  {
    id: "camp-5",
    type: "video",
    mediaUrl: "https://player.vimeo.com/external/510850877.sd.mp4?s=c8060d4e929c4249a0d1e34c958af61b7fcf7c7c&profile_id=165&oauth2_token_id=57447761",
    collectionName: "THE BRIDAL UNIVERSE",
    buttonText: "EXPLORE",
    buttonLink: "/shop"
  }
];

export const footerConfig: FooterSettings = {
  whatsappNumber: "919999999999",
  instagramUrl: "https://instagram.com",
  pinterestUrl: "https://pinterest.com"
};